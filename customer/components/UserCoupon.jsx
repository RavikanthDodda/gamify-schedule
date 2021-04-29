import React, { useEffect, useState } from "react";
import { Alert, Snackbar,StyleSheet, Text, View,ToastAndroid,
  Platform,
  AlertIOS, } from "react-native";
import { List } from "react-native-paper";

export default function UserCoupon(props) {
  let cost = props.cost
  let expiry = props.expiry
  let offertitle = props.title
  let description = props.description
  let extraDetails = props.extraDetails
  let routeDetails = props.routeDetails
  let itemId = props.item.id;

//   useEffect(() => {
//     loadRoteDetails();
//  }, []);

//  const loadRoteDetails = () => {
//   if (routeDetails != null) {
//     if(routeDetails === "coupon"){
//       nextPage = "Coupon-Form";
//     } else{
//       nextPage = "Details-Page";
//     }
//   }
// };

  return (
    <View style={styles.container}>
      <List.Item
        title={props.title}
        description={props.description}

        right={() => (
        <View>
          <Text>Cost: {cost}</Text>
          <Text>Expires on: {expiry}</Text>
          <Text style={styles.moreDetails}>more details..</Text>
        </View>
        )}
        onPress={() => props.navigation.navigate(routeDetails, {
          item:"coupon",
          paramKey: offertitle,
          expirydate:expiry,
          details:extraDetails,
          cost : cost,
          id:itemId,
        })}
        style={styles.listItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    borderRadius: 8,
    marginTop: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  listItem: {
    // backgroundColor: "lightblue",
  },
  text:{
    fontWeight:"bold",
    color:"blue",
    padding:10
  },
  moreDetails:{
    color:"blue"
  }
});