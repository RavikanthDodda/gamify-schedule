import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
import SponsorNavBar from "./SponsorNavBar";
import CouponForm from "./CouponForm"
import AdminService from "../services/AdminService";
import SponsorService from "../services/SponsorService";

export default function SponsorNav() {
  useEffect(() => {
    SponsorService.loadData();
  }, []);

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#6200EE",
          },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen name="Home" component={SponsorNavBar} />

        <Stack.Screen
          options={({ route }) => ({ title: route.params.name })}
          name="Coupons-Form"
          component={CouponForm}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
