import React, { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { Snackbar } from "react-native-paper";
import AddFAB from "../components/AddFAB";

import ScheduleItem from "../components/ScheduleItem";
import CustomerService from "../services/CustomerService";

function ItemList(props) {
  const { route, navigation } = props;
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
    let data;
    switch (route.params?.item) {
      case "schedule":
        data = await CustomerService.getScheduleTasks();
        break;

      case "todo":
        data = await CustomerService.getTodoTasks();
        break;
      default:
        break;
    }
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
        renderItem={(item) => (
          <ScheduleItem
            item={item}
            navigation={navigation}
            type={route.params?.item}
          />
        )}
        keyExtractor={(task) => task.id}
        extraData={props.navigation}
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

export default ItemList;
