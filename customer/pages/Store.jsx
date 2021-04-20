import React, { useEffect, useState } from "react";
import { List } from "react-native-paper";
import { TouchableOpacity, ScrollView, Image } from "react-native";
import { Snackbar } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";

function Store(props) {
  const { route, navigation} = props;
  const [showBar, setShowBar] = useState(false);
	const [message, setMessage] = useState();

  const notify = (mesg) => {
		setMessage(mesg);
		setShowBar(true);
	}

  if (props.route.params!== undefined) {
		let mesg = props.route.params.action;
    console.log(mesg);
		props.route.params = undefined;
		notify(mesg);
	}

  return (
    <React.Fragment>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.featuredText}>Featured Coupons</Text>
          <View style={styles.row1}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Details-Page", {
                  item:"featured Coupon",
                  paramKey: "Amazon Fashion",
                  expirydate: "30/5/2021",
                  details: "Deals on clothing",
                  cost: 70,
                })
              }
            >
              <Image
                source={require("../../assets/amazon1.png")}
                style={styles.card}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Details-Page", {
                  item:"featured Coupon",
                  paramKey: "Walmart",
                  expirydate: "30/4/2021",
                  details: "Early access to video games at store",
                  cost: 30,
                })
              }
            >
              <Image
                source={require("../../assets/walmart.png")}
                style={styles.card}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Details-Page", {
                  item:"featured Coupon",
                  paramKey: "Amazon Fresh",
                  expirydate: "30/4/2021",
                  details: "Early access to video games at store",
                  cost: 40,
                })
              }
            >
              <Image
                source={require("../../assets/amazonFresh.png")}
                style={styles.card}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.row1}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Details-Page", {
                  item:"featured Coupon",
                  paramKey: "Costco",
                  expirydate: "30/6/2021",
                  details: "Offers on costco travel package",
                  cost: 30,
                })
              }
            >
              <Image
                source={require("../../assets/costco.png")}
                style={styles.card}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Details-Page", {
                  item:"featured Coupon",
                  paramKey: "Amazon Prime",
                  expirydate: "10/5/2021",
                  details: "Only for prime members.",
                  cost: 50,
                })
              }
            >
              <Image
                source={require("../../assets/prime.png")}
                style={styles.card}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Details-Page", {
                  item:"featured Coupon",
                  paramKey: "Target",
                  expirydate: "30/4/2021",
                  details: "Early access to video games at store",
                  cost: 20,
                })
              }
            >
              <Image
                source={require("../../assets/target.png")}
                style={styles.card}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.featuredText}>Categories</Text>
          <View style={styles.categories}>
            <List.Item
              title="Coupons"
              description="Click to view all coupons"
              style={styles.containerListItem}
              onPress={() =>
                navigation.navigate("Coupons List", {
                  screen: "Coupons List",
                  params: { action: "view coupons" },
                })
              }
            />
            <List.Item
              title="Offers"
              description="Click to view all offers"
              style={styles.containerListItem}
              onPress={() =>
                navigation.navigate("Offers List", {
                  screen: "Offers List",
                  params: { action: "view offers" },
                })
              }
            />
          </View>
      </ScrollView>
      <Snackbar
				visible={showBar}
				onDismiss={() => setShowBar(false)}
				action={{
					label: "Ok",
					onPress: () => {
						console.log("pressed");
					},
				}}
			>
				{message}
			</Snackbar>
      </React.Fragment>
  );
}

export default Store;

const styles = StyleSheet.create({
  row1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 5,
  },
  container: {
    marginStart: 10,
    marginTop: 10,
  },
  card: {
    marginHorizontal: 5,
    width: 120,
    height: 120,
    borderRadius: 120 / 4,
  },
  featuredText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
    padding: 10,
    color: "blue",
  },
  containerListItem: {
    marginHorizontal: 10,
    borderRadius: 8,
    marginTop: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 10,
  },
  categories: {
    paddingBottom: 20,
  },
});
