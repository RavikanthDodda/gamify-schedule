import React from "react";
import { Avatar, Button, Card, Title, Paragraph, Colors, List  } from 'react-native-paper';
import {FlatList,TouchableOpacity,ScrollView,Alert} from "react-native";
import { IMAGENAME } from '../assets/amazon.png';

import { StyleSheet, Text, View } from "react-native";

function Store({ navigation }) {
  return (
    <View >
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.featuredText}>Featured</Text>
        <View style={styles.row1}>
        <TouchableOpacity
                     onPress={() => navigation.navigate("Purchase-Coupon", {
                      paramKey: "Amazon Fashion",
                      expirydate:"30/5/2021",
                      details:"Deals on clothing",
                      cost : "100",
                    })}>
                     <Card style={styles.card}>
                        <Card.Cover source={require('../assets/amazon1.png')} />
                      </Card>
        </TouchableOpacity>
        <TouchableOpacity
                     onPress={() => navigation.navigate("Purchase-Coupon", {
                      paramKey: "Walmart",
                      expirydate:"30/4/2021",
                      details:"Early access to video games at store",
                      cost : "200",
                    })}>
                     <Card style={styles.card}>
                        <Card.Cover source={require('../assets/walmart.png')} />
                      </Card>
        </TouchableOpacity>
        </View>
        <View style={styles.row1}>
        <TouchableOpacity
                     onPress={() => navigation.navigate("Purchase-Coupon", {
                      paramKey: "Costco",
                      expirydate:"30/6/2021",
                      details:"Offers on costco travel package",
                      cost : "100",
                    })}>
                     <Card style={styles.card}>
                        <Card.Cover source={require('../assets/costco.png')} />
                      </Card>
        </TouchableOpacity>
        <TouchableOpacity
                     onPress={() => navigation.navigate("Purchase-Coupon", {
                      paramKey: "Amazon Prime",
                      expirydate:"10/5/2021",
                      details:"Only for prime members.",
                      cost : "50",
                    })}>
                     <Card style={styles.card}>
                        <Card.Cover source={require('../assets/prime.png')} />
                      </Card>
        </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.featuredText}>Categories</Text>
      <ScrollView>
        <View >
        <List.Item
        title="Coupons"
        description="Browse all coupons"
        style={styles.containerListItem}
        onPress={() => navigation.navigate("User-Coupons-Page", {
          screen: "Coupons List",
          params: { action: "view coupons" },
        })}
        />
        <List.Item
        title="Offers"
        description="Browse all offers"
        style={styles.containerListItem}
        onPress={() => navigation.navigate("User-Offers-Page", {
          screen: "Offers List",
          params: { action: "view offers" },
        })}
        />
        </View>
      </ScrollView>
      </ScrollView>
    </View>
  );
}

export default Store;

const styles = StyleSheet.create({
  row1:{
    flexDirection:"row",
    padding:20,
  },
  container: {
    marginStart:10,
    marginTop:10,
  },
  card:{
    marginHorizontal:5,
    width:170,
  },
  featuredText:{
    fontSize:20,
    fontWeight:"bold",
    marginTop:50,
    padding:10
  },
  containerListItem: {
    marginHorizontal: 10,
    borderRadius: 8,
    marginTop: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding:10,
  },
  listItem: {
   
  },
});
