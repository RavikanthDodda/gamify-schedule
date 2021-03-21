import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import CustomerService from "../services/CustomerService";

export default function ScheduleTaskPage(props) {
  const [title, setTitle] = useState(props.title || "");
  const [description, setDescription] = useState(props.description || "");

  const saveTask = async () => {
    await CustomerService.saveScheduleTask({
      id: props.id,
      title: title,
      description: description,
    });
    props.navigation.navigate("Home", {
      screen: "Schedule",
      params: { action: "task added" },
    });
  };

  const deleteTask = () => {};

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
          <Button mode="contained" onPress={deleteTask}>
            Delete
          </Button>
        </View>
        <View style={styles.btn2}>
          <Button mode="contained" onPress={saveTask}>
            Save
          </Button>
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
  buttonParent: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  btn1: {
    display: "flex",
    alignItems: "center",
    marginRight: 100,
  },
  btn2: {
    display: "flex",
    alignItems: "center",
  },
});
