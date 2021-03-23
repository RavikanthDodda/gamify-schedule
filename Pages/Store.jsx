import React from "react";
import { Avatar, Button, Card, Title, Paragraph, Colors, List  } from 'react-native-paper';
import {FlatList,TouchableOpacity,ScrollView,Alert} from "react-native";

import { StyleSheet, Text, View } from "react-native";

function Store({ navigation }) {
  return (
    <View >
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.featuredText}>Featured</Text>
        <View style={styles.row1}>
        <TouchableOpacity
                     onPress = {() => Alert.alert("GET pressed")}>
                     <Card style={styles.card}>
                        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                      </Card>
        </TouchableOpacity>
        <TouchableOpacity
                     onPress = {() => Alert.alert("GET pressed")}>
                     <Card style={styles.card}>
                        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                      </Card>
        </TouchableOpacity>
        </View>
        <View style={styles.row1}>
        <TouchableOpacity
                     onPress = {() => Alert.alert("GET pressed")}>
                     <Card style={styles.card}>
                        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                      </Card>
        </TouchableOpacity>
        <TouchableOpacity
                     onPress = {() => Alert.alert("GET pressed")}>
                     <Card style={styles.card}>
                        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
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
        onPress={() => navigation.navigate("userCouponsPage")}
        />
        <List.Item
        title="Offers"
        description="Browse all offers"
        style={styles.containerListItem}
        onPress={() => navigation.navigate("Register")}
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
