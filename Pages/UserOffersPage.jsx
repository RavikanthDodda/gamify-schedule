import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View , Alert} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import UserOffer from '../components/UserOffer'
import UserOffersService from "../services/UserOffersService";

function UserOffersPage({navigation}) {
  const [offers, setOffers] = useState([]);

  const loadOffers = () => {
    let data = UserOffersService.getOffers();
    console.log("-------");
    console.log(data);
    setOffers(UserOffersService.getOffers());
    console.log(offers);
  };

  useEffect(() => {
     loadOffers();
  }, []);
    return (
    <View>
      <Text style={styles.header}>Offers</Text>
      <FlatList
        data={offers}
        renderItem={item => 
          <UserOffer item={item.item} title={item.item.title} description={item.item.description} cost={item.item.cost} expiry={item.item.expiry} extraDetails={item.item.extraDetails} navigation={navigation}/>
        }
      />
    </View>
  );
} 

const styles = StyleSheet.create({
  header: {
    justifyContent: "center", 
    marginTop: 40,
    fontWeight: 'bold',
    fontSize: 20,
    padding:10
    },
});

export default UserOffersPage;