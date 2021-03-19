import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import CustomerService from "./services/CustomerService";

export default function App() {
  useEffect(() => {
    CustomerService.loadData();
  });
  return (
    <NavigationContainer>
      <NavBar />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
