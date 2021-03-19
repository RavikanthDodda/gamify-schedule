import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { FAB } from "react-native-paper";

import ScheduleItem from "../components/ScheduleItem";
import CustomerService from "../services/CustomerService";

function Schedule() {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const data = await CustomerService.getScheduleTasks("ravi");
    setTasks(data);
  };

  const addTask = (item) => {
    const newItems = [...tasks, item];
    setTasks(newItems);
  };

  const updateTask = (item) => {
    const newItems = [];
    setTasks(newItems);
  };

  const deleteTask = (item) => {
    const newItems = [];
    setTasks(newItems);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <React.Fragment>
      <View style={styles.list}>
        {tasks.map((item) => (
          <ScheduleItem
            key={item.id}
            item={item}
            saveTask={updateTask}
            deleteTask={deleteTask}
          />
        ))}
      </View>
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => console.log("Pressed")}
      />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  list: {
    marginVertical: 40,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default Schedule;
