import React from "react";
import { Button, TextInput } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";

export default function LoginPage(){
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  return (
    <View style={styles.container}>
    <View style={styles.field}>
      <TextInput
        label="Title"
        value={title}
        textContentType="jobTitle"
        onChangeText={(title) => setTitle(title)}
      />
    </View>
    <View style={styles.field}>
      <TextInput
        label="Description"
        value={description}
        textContentType="fullStreetAddress"
        onChangeText={(description) => setDescription(description)}
      />
    </View>
    <View style={styles.buttonParent}>
    <View style={styles.btn1}>
      <Button mode="contained">Delete</Button>
    </View>
    <View style={styles.btn2}>
      <Button mode="contained">Save</Button>
    </View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 30,
    marginTop: 100,
    justifyContent: "center",
  },
  field: {
    marginBottom: 10,
  },
  buttonParent:{
    flexDirection: 'row',
    justifyContent: "center",
    marginTop: 20
  },
  btn1: {
    display: "flex",
    alignItems: "center",
    marginRight: 100
  },
  btn2: {
    display: "flex",
    alignItems: "center",
  },
});