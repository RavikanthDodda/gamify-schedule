import React from "react";
import { Avatar, Button, Card, Title, Paragraph, Colors, List  } from 'react-native-paper';
import {FlatList,TouchableOpacity,ScrollView,Alert, Image} from "react-native";
import { IMAGENAME } from '../assets/amazon.png';

import { StyleSheet, Text, View } from "react-native";

function Store({ navigation }) {
  return (
    <View >
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.featuredText}>Featured Coupons</Text>
        <View style={styles.row1}>
        <TouchableOpacity
                     onPress={() => navigation.navigate("Purchase-Coupon", {
                      paramKey: "Amazon Fashion",
                      expirydate:"30/5/2021",
                      details:"Deals on clothing",
                      cost : 100,
                    })}>
                    <Image
                      source={require('../assets/amazon1.png')}
                      style={styles.card}
                    />
        </TouchableOpacity>
        <TouchableOpacity
                     onPress={() => navigation.navigate("Purchase-Coupon", {
                      paramKey: "Walmart",
                      expirydate:"30/4/2021",
                      details:"Early access to video games at store",
                      cost : 200,
                    })}>
                      <Image
                      source={require('../assets/walmart.png')}
                      style={styles.card}
                    />
        </TouchableOpacity>
        <TouchableOpacity
                     onPress={() => navigation.navigate("Purchase-Coupon", {
                      paramKey: "Amazon Fresh",
                      expirydate:"30/4/2021",
                      details:"Offers available on grocery items and fresh vegetables/fruits",
                      cost : 40,
                    })}>
                      <Image
                      source={require('../assets/amazonFresh.png')}
                      style={styles.card}
                    />
        </TouchableOpacity>
        </View>
        <View style={styles.row1}>
        <TouchableOpacity
                     onPress={() => navigation.navigate("Purchase-Coupon", {
                      paramKey: "Costco",
                      expirydate:"30/6/2021",
                      details:"Offers on costco travel package",
                      cost : 100,
                    })}>
                      <Image
                      source={require('../assets/costco.png')}
                      style={styles.card}
                    />
        </TouchableOpacity>
        <TouchableOpacity
                     onPress={() => navigation.navigate("Purchase-Coupon", {
                      paramKey: "Amazon Prime Video",
                      expirydate:"10/5/2021",
                      details:"Only for prime members.",
                      cost : 50,
                    })}>
                      <Image
                      source={require('../assets/prime.png')}
                      style={styles.card}
                    />
        </TouchableOpacity>
        <TouchableOpacity
                     onPress={() => navigation.navigate("Purchase-Coupon", {
                      paramKey: "Target",
                      expirydate:"30/4/2021",
                      details:"Early access to video games at store",
                      cost : 90,
                    })}>
                      <Image
                      source={require('../assets/target.png')}
                      style={styles.card}
                    />
        </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.featuredText}>Categories</Text>
      <ScrollView>
        <View style={styles.categories}>
        <List.Item
        title="Coupons"
        description="Click to view all coupons"
        style={styles.containerListItem}
        onPress={() => navigation.navigate("Coupons List", {
          screen: "Coupons List",
          params: { action: "view coupons" },
        })}
        />
        <List.Item
        title="Offers"
        description="Click to view all offers"
        style={styles.containerListItem}
        onPress={() => navigation.navigate("Offers List", {
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
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    flexDirection:'row',
    padding:5,
  },
  container: {
    marginStart:10,
    marginTop:10,
  },
  card:{
    marginHorizontal:5,
    width: 120,
    height: 120,
    borderRadius:120 / 4
  },
  featuredText:{
    fontSize:20,
    fontWeight:"bold",
    marginTop:5,
    padding:10,
    color: "blue",
  },
  containerListItem: {
    marginHorizontal: 10,
    borderRadius: 8,
    marginTop: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding:10,
  },
  categories: {
   paddingBottom: 20,
   
  },
});


