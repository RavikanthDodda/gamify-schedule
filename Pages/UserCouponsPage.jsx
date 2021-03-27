import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View , Alert} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import UserCoupon from '../components/UserCoupon'
import UserCouponsService from "../services/UserCouponsService";

function UserCouponsPage({navigation}) {
  const [coupons, setCoupons] = useState([]);

  const loadCoupons = () => {
    let data = UserCouponsService.getCoupons();
    console.log("-------");
    console.log(data);
    setCoupons(UserCouponsService.getCoupons());
    console.log(coupons);
  };

  useEffect(() => {
     loadCoupons();
  }, []);
    return (
    <View>
      <Text style={styles.header}>Coupons</Text>
      <FlatList
        data={coupons}
        renderItem={item => 
          <UserCoupon item={item.item} title={item.item.title} description={item.item.description} cost={item.item.cost} expiry={item.item.expiry}/>
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

export default UserCouponsPage;