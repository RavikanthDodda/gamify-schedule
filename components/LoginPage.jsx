import React from "react";
import { Button, TextInput } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";

export default function LoginPage({ navigation }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [passwordError, setPasswordError] = React.useState("");
  const [usernameError, setUsernameError] = React.useState("");

  return (
    <View style={styles.container}>
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
            setPasswordError(password !== "" ? "" : "Please enter a password");
          }}
          error={passwordError !== ""}
        />
        <Text style={styles.errorText}>{passwordError}</Text>
      </View>
      <View style={styles.btn}>
        <Button mode="contained">Login</Button>
      </View>
      <Text
        style={styles.newUserText}
        onPress={() => navigation.navigate("Register")}
      >
        New user? Sing up now
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 30,
    marginTop: 100,
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
  newUserText: {
    marginTop: 20,
    padding: 10,
    textAlign: "center",
    color: "purple",
    fontSize: 15,
  },
});
