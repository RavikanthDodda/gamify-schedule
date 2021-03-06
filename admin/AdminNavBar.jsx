import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import ItemList from "../Pages/ItemList";
import Profile from "../Pages/Profile";

import React from "react";

const Tab = createMaterialBottomTabNavigator();
export default function AdminNavBar() {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: "#6200EE" }} shifting={false}>
      <Tab.Screen
        name="Sponsors"
        component={ItemList}
        initialParams={{ item: "sponsor", formPage: "Sponsor-Form" }}
        options={{
          title: "Sponsors",
          tabBarLabel: "Sponsors",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="office-building"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
