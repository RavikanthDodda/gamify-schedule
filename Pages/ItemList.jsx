import React, { useContext, useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { Snackbar } from "react-native-paper";
import AddFAB from "../components/AddFAB";

import Item from "../customer/components/ScheduleItem";
import SponsorItem from "../admin/SponsorItem";
import CustomerService from "../services/CustomerService";
import AdminService from "../services/AdminService";
import UserCouponsService from "../services/UserCouponsService";
import { PointsContext } from "../customer/components/PointsContext";


function ItemList(props) {
  const { route, navigation } = props;
  const [tasks, setTasks] = useState([]);
  const [showBar, setShowBar] = useState(false);
  const [message, setMessage] = useState("");
  const { points, setPoints } = useContext(PointsContext);

  const notify = (mesg, pts) => {
    setMessage(mesg);
    setShowBar(true);
    if (pts !== null) setPoints(points + pts);
  };

  const loadTasks = async () => {
    let data;
    switch (route.params?.item) {
      case "schedule":
        data = await CustomerService.getScheduleTasks();
        break;
      case "todo":
        data = await CustomerService.getTodoTasks();
        break;
      case "sponsor":
        data = await AdminService.getSponsors();
      case "coupon":
        data = await UserCouponsService.getCoupons();
      default:
        break;
    }
    setTasks(data);
  };

  if (route.params.action !== undefined) {
    let mesg = route.params.action;
    route.params.action = undefined;
    notify(mesg, null);
  }
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      loadTasks();
    });

    return unsubscribe;
  }, [navigation]);

  const getItem = (item) => {
    return route.params?.item !== "sponsor" ? (
      <Item
        item={item}
        navigation={navigation}
        type={route.params.item}
        page={route.params.formPage}
        onComplete={notify}
      />
    ) : (
      <SponsorItem
        item={item}
        navigation={navigation}
        page={route.params.formPage}
        onComplete={notify}
      />
    );
  };

  return (
    <React.Fragment>
      <FlatList
        data={tasks}
        renderItem={(item) => getItem(item)}
        keyExtractor={(task) => task.id}
      />
      <AddFAB
        navigation={navigation}
        page={route.params.formPage}
        name={"Add new task"}
      />
      <Snackbar
        visible={showBar}
        onDismiss={() => setShowBar(false)}
        action={{
          label: "Ok",
          onPress: () => {
            console.log("pressed");
          },
        }}
      >
        {message}
      </Snackbar>
    </React.Fragment>
  );
}

export default ItemList;
