import React from "react";
import { Button, TextInput } from "react-native-paper";

import { StyleSheet, Text, View } from "react-native";
import validation from "../utils/validation";
import validate from "../utils/validation_wrapper";

export default function RegistrationPage() {
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [rePassword, setRePassword] = React.useState("");

  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [rePasswordError, setRePasswordError] = React.useState("");

  return (
    <View style={styles.container}>
      <TextInput
        label="Email"
        value={email}
        style={styles.field}
        keyboardType="email-address"
        textContentType="emailAddress"
        onChangeText={(email) => setEmail(email)}
        onBlur={() => {
          setEmailError(validate("email", email));
        }}
        error={emailError !== ""}
      />
      <TextInput
        label="Username"
        value={username}
        style={styles.field}
        textContentType="username"
        onChangeText={(username) => setUsername(username)}
      />
      <TextInput
        label="Password"
        value={password}
        style={styles.field}
        textContentType="password"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
        onBlur={() => {
          setPasswordError(validate("password", password));
        }}
        error={passwordError !== ""}
      />
      <TextInput
        label="Re-type password"
        value={rePassword}
        style={styles.field}
        textContentType="password"
        secureTextEntry={true}
        onChangeText={(text) => {
          setRePassword(text);
        }}
        error={rePasswordError !== ""}
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
