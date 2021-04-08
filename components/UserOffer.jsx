import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { List } from "react-native-paper";

export default function UserOffer(props) {
  let cost = props.cost
  let expiry = props.expiry
  let offertitle = props.title
  let description = props.description
  let extraDetails = props.extraDetails
  return (
    <View style={styles.container}>
      <List.Item
        title={props.title}
        description={props.description}

        right={() => (
        <View>
          <Text>Points: {cost}</Text>
          <Text>Valid till: {expiry}</Text>
        </View>
        )}
        onPress={() => props.navigation.navigate("Details-Page", {
            paramKey: offertitle,
            expirydate:expiry,
            details:extraDetails,
            cost : cost,
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
  }
});