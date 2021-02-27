import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, TextInput, TextInputMask } from "react-native-paper";

import { StyleSheet, Text, View } from "react-native";

export default function RegistrationPage() {
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [phone, setPhone] = React.useState("");

  return (
    <View style={styles.container}>
      <TextInput
        label="Email"
        value={email}
        style={styles.field}
        keyboardType="email-address"
        textContentType="emailAddress"
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        label="username"
        value={username}
        style={styles.field}
        textContentType="username"
        onChangeText={(username) => setUsername(username)}
      />
      <TextInput
        label="password"
        value={password}
        style={styles.field}
        textContentType="password"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
      <TextInput
        label="phone"
        value={phone}
        style={styles.field}
        keyboardType="phone-pad"
        textContentType="telephoneNumber"
        onChangeText={(phone) => setPhone(phone)}
      />
      <View style={styles.btn}>
        <Button mode="contained">Register</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 30,
    marginTop: 100,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  field: {
    marginBottom: 10,
  },
  btn: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
