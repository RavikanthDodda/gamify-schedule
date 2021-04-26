import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
import AdminNavBar from "./AdminNavBar";
import SponsorForm from "./SponsorForm";
import AdminService from "../services/AdminService";

export default function AdminNav() {
  useEffect(() => {
    AdminService.loadData();
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
        <Stack.Screen name="Home" component={AdminNavBar} />

        <Stack.Screen
          options={({ route }) => ({ title: route.params.name })}
          name="Sponsor-Form"
          component={SponsorForm}
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