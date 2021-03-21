import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Profile from "../Pages/Profile";
import Schedule from "../Pages/Schedule";
import Store from "../Pages/Store";
import Todo from "../Pages/Todo";

import React from "react";

const Tab = createMaterialBottomTabNavigator();
export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Todo"
        component={Todo}
        options={{
          title: "Todo",
          tabBarLabel: "Todo",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="format-list-checks"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={Schedule}
        options={{
          title: "Schedule",
          tabBarLabel: "Schedule",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Store"
        component={Store}
        options={{
          title: "Store",
          tabBarLabel: "Store",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Account",
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
// export default createMaterialBottomTabNavigator(
//   {
//     Todo: { screen: Todo },
//     Schedule: { screen: Schedule },
//     Store: { screen: Store },
//     Profile: { screen: Profile },
//   },
//   {
//     initialRouteName: "Album",
//     activeColor: "#F44336",
//   }
// );
