import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, TextInput } from "react-native-paper";

import { StyleSheet, Text, View } from "react-native";

export default function RegistrationPage() {
  const [text, setText] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [phone, setPhone] = React.useState("");

  return (
    <View style={styles.container}>
      <TextInput
        label="Email"
        value={text}
        style={styles.input}
        onChangeText={(text) => setText(text)}
      />
      <TextInput
        label="username"
        value={username}
        onChangeText={(username) => setUsername(username)}
      />
      <TextInput
        label="password"
        value={password}
        onChangeText={(password) => setPassword(password)}
      />
      <TextInput
        label="phone"
        value={phone}
        onChangeText={(phone) => setPhone(phone)}
      />
      <Button mode="outlined">Register</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    marginBottom: 2,
  },
});
