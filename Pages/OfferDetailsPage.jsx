import React from "react";
import { Button, TextInput } from "react-native-paper";
import { StyleSheet, Text, View, Alert } from "react-native";
function OfferDetailsPage({route}) {
    const text =  route.params.paramKey;
    const expiry = route.params.expirydate;
    const details = route.params.details;
    const cost = route.params.cost;
    const wallet = 500;
    const remainingBalence = wallet - cost;

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
            <Text >Points in your wallet: {wallet} points</Text>
        </View >
        <View style={styles.cost}>
            <Text >Reminaing balance after purchase: {remainingBalence} points</Text>
        </View>
        <View style={styles.btn}>
            <Button  mode="contained" onPress = {() => Alert.alert("Buying coupon not implemented yet")}>Get Coupon</Button>
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
  