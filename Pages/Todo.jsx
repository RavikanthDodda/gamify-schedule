import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SchduleItem from "../components/ScheduleItem";

function Todo() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Todo page</Text>
      <SchduleItem item={{ title: "hello", description: "desc" }} />
    </View>
  );
}

export default Todo;
