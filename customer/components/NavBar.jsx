import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Profile from "../../Pages/Profile";
import ItemList from "../../Pages/ItemList";
import Store from "../pages/Store";

import React from "react";

const Tab = createMaterialBottomTabNavigator();
export default function MyTabs() {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: "#6200EE" }} shifting={false}>
      <Tab.Screen
        name="Todo"
        component={ItemList}
        initialParams={{ item: "todo", formPage: "Todo-Task-Page" }}
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
        component={ItemList}
        initialParams={{ item: "schedule", formPage: "Schedule-Form" }}
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
