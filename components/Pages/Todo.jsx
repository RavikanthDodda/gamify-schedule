import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TodoItem from '../TodoItem'

function Todo() {
  return (
    <View>
      <Text style={styles.header}>Todo List</Text>
      <TodoItem title='First to do item' description='Due: 03/17/2021'/>
      <TodoItem title='Second to do item' description='Due: 03/17/2021'/>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    justifyContent: "center", 
    marginTop: 40,
    fontWeight: 'bold',
    fontSize: 20,
    },
});

export default Todo;