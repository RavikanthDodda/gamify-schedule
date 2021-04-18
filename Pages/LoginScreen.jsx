import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";

function LoginScreen() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#6200EE",
          },
          headerTintColor: "#fff",

          headerTitleStyle: {
            // fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="Log in" component={LoginPage} />
        <Stack.Screen name="Sign up" component={RegistrationPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default LoginScreen;
