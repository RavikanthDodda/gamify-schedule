import { StatusBar } from "expo-status-bar";
import React from "react";
import NavBar from "./components/NavBar";
import { StyleSheet } from "react-native";
import RegistrationPage from "./components/Pages/RegistrationPage";
import { NavigationContainer } from "@react-navigation/native";
import TodoForm from "./components/Forms/TodoForm";

export default function App() {
  const [text, setText] = React.useState("");

  return (
    // <NavigationContainer>
    //   <NavBar />
    // </NavigationContainer>
    <TodoForm/>
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
