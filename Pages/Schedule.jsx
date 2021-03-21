import React, { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { Snackbar } from "react-native-paper";
import AddFAB from "../components/AddFAB";

import ScheduleItem from "../components/ScheduleItem";
import CustomerService from "../services/CustomerService";

function Schedule({ route, navigation }) {
  const [tasks, setTasks] = useState([]);
  // const [showBar, setShowBar] = useState(false);
  // let message = "";
  // const notify = () => {
  //   console.log(route.params);
  //   if (route.params?.action) {
  //     message = route.params.action;
  //     setShowBar(true);
  //   }
  // };

  const loadTasks = async () => {
    const data = await CustomerService.getScheduleTasks();
    setTasks(data);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      loadTasks();
      // notify();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <React.Fragment>
      <FlatList
        data={tasks}
        renderItem={ScheduleItem}
        keyExtractor={(task) => String(task.id)}
      />
      <AddFAB
        navigation={navigation}
        page={"Schedule-Task-Page"}
        name={"Add new task"}
      />
      {/* <Snackbar
        visible={showBar}
        onDismiss={() => setShowBar(false)}
        action={{
          label: "Undo",
          onPress: () => {
            console.log("pressed");
          },
        }}
      >
        hi
      </Snackbar> */}
    </React.Fragment>
  );
}

export default Schedule;
