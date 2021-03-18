import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FAB } from "react-native-paper";

import ScheduleItem from "../components/ScheduleItem";

function Schedule() {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const newItems;
  };
  useEffect(() => {
    const data = ScheduleService.getTasks();
    setItems(data);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {tasks.map((item) => (
        <ScheduleItem item={item} />
      ))}
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => console.log("Pressed")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default Schedule;
