import React from "react";
import { Button, TextInput } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../components/AuthContext";

export default function LoginPage({ navigation }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [passwordError, setPasswordError] = React.useState("");
  const [usernameError, setUsernameError] = React.useState("");

  const { setUser } = useContext(AuthContext);
  const validateLogin = () => {
    if (username === "Ravi" && password === "password")
      setUser({
        type: "CUSTOMER",
        name: "Ravi",
        username: "rdodda",
        phone: "+14809258752",
        location: "Tempe, AZ",
      });
    else if (username === "Admin" && password === "password")
      setUser({
        type: "ADMIN",
        name: "Suyog",
        username: "shalikar",
        phone: "+14809258752",
        location: "Tempe, AZ",
      });
    else if (username === "P" && password === "P")
    setUser({
      type: "SPONSOR",
      name: "Amazon",
      username: "amazon",
      phone: "+14809258752",
      location: "Tempe, AZ",
    });
    else if (username !== "" && password !== "") {
      setUsernameError("Username or Password is wrong. Please re-enter");
    }
    if (username === "") setUsernameError("Username can't be empty!");
    if (password === "") setPasswordError("Password can't be empty!");
  };

  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <TextInput
          label="Username"
          value={username}
          textContentType="username"
          onChangeText={(username) => setUsername(username)}
          onBlur={() => {
            setUsernameError(username !== "" ? "" : "Username can't be empty!");
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
            setPasswordError(password !== "" ? "" : "Password can't be empty!");
          }}
          error={passwordError !== ""}
        />
        <Text style={styles.errorText}>{passwordError}</Text>
      </View>
      <View style={styles.btn}>
        <Button mode="contained" onPress={validateLogin}>
          Login
        </Button>
      </View>
      <Text
        style={styles.newUserText}
        onPress={() => navigation.navigate("Sign up")}
      >
        New user? Sign up now
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
