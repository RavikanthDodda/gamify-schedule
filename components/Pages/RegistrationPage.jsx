import React from "react";
import { Button, TextInput } from "react-native-paper";

import { StyleSheet, Text, View } from "react-native";
import validate from "../../utils/validation_wrapper";

// TODO - on submit handler and check re typed password
export default function RegistrationPage() {
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [rePassword, setRePassword] = React.useState("");

  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [usernameError, setUsernameError] = React.useState("");
  const [rePasswordError, setRePasswordError] = React.useState("");

  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <TextInput
          label="Email"
          value={email}
          keyboardType="email-address"
          textContentType="emailAddress"
          onChangeText={(email) => setEmail(email)}
          onBlur={() => {
            setEmailError(validate("email", email));
          }}
          error={emailError !== ""}
        />
        <Text style={styles.errorText}>{emailError}</Text>
      </View>
      <View style={styles.field}>
        <TextInput
          label="Username"
          value={username}
          textContentType="username"
          onChangeText={(username) => setUsername(username)}
          onBlur={() => {
            setUsernameError(username !== "" ? "" : "Please enter a username");
          }}
          error={usernameError !== ""}
        />
        <Text style={styles.errorText}>{usernameError}</Text>
      </View>
      <View style={styles.field}>
        <TextInput
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          onBlur={() => {
            setPasswordError(validate("password", password));
          }}
          error={passwordError !== ""}
        />
        <Text style={styles.errorText}>{passwordError}</Text>
      </View>
      <View style={styles.field}>
        <TextInput
          label="Re-type password"
          value={rePassword}
          textContentType="password"
          secureTextEntry={true}
          onChangeText={(text) => {
            setRePassword(text);
          }}
          error={rePasswordError !== ""}
        />
        <Text style={styles.errorText}>{rePasswordError}</Text>
      </View>
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
    // backgroundColor: "#fff",
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
  errorText: {
    color: "red",
  },
});
