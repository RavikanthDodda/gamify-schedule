import React, {useEffect,useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { StyleSheet, Text, View, Alert } from "react-native";
import CustomerService from "../services/CustomerService";

function OfferDetailsPage(props) {
    const { route} = props;
    const itemType = route.params.item;
    const text =  route.params.paramKey;
    const expiry = route.params.expirydate;
    const details = route.params.details;
    const cost = route.params.cost;
    
    const [walletPoints, setPoints] = useState();

    const loadPoints = async () => {
      let data =  await CustomerService.getPoints();
      setPoints(data);
    };

    const remainingBalance = walletPoints - cost;

    useEffect(() => {
      loadPoints();
   }, []);

   
   const buyCoupon = async () => {
    if(remainingBalance < 0){
      Alert.alert("Low balance in your wallet!!");
    }
    else{
    await CustomerService.setPoints({
      points: remainingBalance
    });
    if(itemType === "coupon"){
    props.navigation.navigate("Coupons List", {
      action: "Purchased "+ text +" coupon",
    });
    } else if(itemType === "offer"){
      props.navigation.navigate("Offers List", {
        action: "Purchased "+ text +" offer",
      });
    } else if(itemType === "featured Coupon"){
      props.navigation.navigate("Store", {
        action: "Purchased "+ text +" coupon",
      });
    }
  }
  };

  return (
    
    <View>
        <Text style={styles.header}>{text}</Text>
        <View style={styles.itemDetails}>
            <Text >Item: {text}</Text>
            <Text >Expiry: {expiry}</Text>
            <Text >Details: {details}</Text>
        </View>
        <View style={styles.cost}> 
            <Text >Cost: {cost} points</Text>
            <Text >Points in your wallet: {walletPoints} points</Text>
        </View >
        <View style={styles.cost}>
            <Text >Remaining balance after purchase: {remainingBalance} points</Text>
        </View>
        <View style={styles.btn}>
            <Button  mode="contained" onPress = {buyCoupon}>Get {itemType}</Button>
        </View>
    </View>
  );
}

export default OfferDetailsPage;

const styles = StyleSheet.create({
    header: {
      justifyContent: "center", 
      marginTop: 40,
      fontWeight: 'bold',
      fontSize: 20,
      padding:10
      },
      itemDetails:{
        justifyContent: "center",
        padding:10,
        fontSize:15
      },
      cost:{
        justifyContent: "center",
        padding:10,
        fontSize:15
      },
      btn: {
        width: "100%",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection:"row"
      },
  });
  