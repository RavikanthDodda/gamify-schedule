import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TodoItem from '../TodoItem'

function Todo() {
  return (
    <View>
      <Text style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop:100 }}>Todo page</Text>
      <TodoItem title='First to do item' description='Due: 03/17/2021'/>
      <TodoItem title='Second to do item' description='Due: 03/17/2021'/>
    </View>
  );
}


export default Todo;

