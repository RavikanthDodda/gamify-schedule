import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View , Alert} from "react-native";
import UserCoupon from '../UserCoupon'
import UserCouponsService from "../../services/UserCouponsService";

function UserCouponsPage({navigation}) {
  const [coupons, setCoupons] = useState([]);

  const loadTasks =  () => {
    const data = UserCouponsService.getCoupons();
    console.log("-------");
    console.log(data);
    setCoupons(data);
    console.log(coupons);
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      loadTasks();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View>
      <Text style={styles.header}>Coupons</Text>
      {/* {coupons.forEach(element => {
         <UserCoupon title={element.id} description='Get 50% off on fashion'/>
      })}   */}
      <UserCoupon title='Amazon' description='Get 50% off on fashion'/>
      <UserCoupon title='New Egg' description='Get 30% off on laptops'/>
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