import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import AddFAB from "../components/AddFAB";

import ScheduleItem from "../components/ScheduleItem";
import CustomerService from "../services/CustomerService";

function Schedule({ navigation }) {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const data = await CustomerService.getScheduleTasks("ravi");
    setTasks(data);
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      loadTasks();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <React.Fragment>
      <View style={styles.list}>
        {tasks.map((item) => (
          <ScheduleItem key={item.id} item={item} />
        ))}
      </View>
      <AddFAB navigation={navigation} page={"Schedule-Task-Page"} />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  list: {
    marginVertical: 40,
  },
});

export default Schedule;
