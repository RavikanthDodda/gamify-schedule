import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import CustomerService from "./services/CustomerService";
import { createStackNavigator } from "@react-navigation/stack";
import ScheduleTaskPage from "./Pages/ScheduleTaskPage";

export default function App() {
  useEffect(() => {
    CustomerService.loadData();
  });

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={NavBar} />
        <Stack.Screen name="Schedule-Task-Page" component={ScheduleTaskPage} />
      </Stack.Navigator>
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
