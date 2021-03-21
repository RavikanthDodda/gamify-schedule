import React from "react";
import { Avatar, Button, Card, Title, Paragraph, Colors, List  } from 'react-native-paper';
import {FlatList,TouchableOpacity,ScrollView} from "react-native";

import { StyleSheet, Text, View } from "react-native";

const RecipieData = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

function Store({ navigation }) {
  return (
    <View >
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.featuredText}>Featured</Text>
        <View style={styles.row1}>
        <TouchableOpacity
                     onPress = {() => this.alertItemName(item)}>
                     <Card style={styles.card}>
                        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                      </Card>
        </TouchableOpacity>
        <TouchableOpacity
                     onPress = {() => this.alertItemName(item)}>
                     <Card style={styles.card}>
                        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                      </Card>
        </TouchableOpacity>
        </View>
        <View style={styles.row2}>
        <TouchableOpacity
                     onPress = {() => this.alertItemName(item)}>
                     <Card style={styles.card}>
                        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                      </Card>
        </TouchableOpacity>
        <TouchableOpacity
                     onPress = {() => this.alertItemName(item)}>
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
        onPress={() => navigation.navigate("Register")}
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
  row2:{
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
