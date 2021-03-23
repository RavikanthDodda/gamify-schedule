import React, { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { Snackbar } from "react-native-paper";
import AddFAB from "../components/AddFAB";

import Item from "../components/Item";
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
          <Item
            item={item}
            navigation={navigation}
            type={route.params.item}
            page={route.params.formPage}
          />
        )}
        keyExtractor={(task) => task.id}
      />
      <AddFAB
        navigation={navigation}
        page={route.params.formPage}
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
