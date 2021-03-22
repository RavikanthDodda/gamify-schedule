import React from "react";
import { StyleSheet } from "react-native";
import { List, Card } from "react-native-paper";

export default function ListItem(props) {
  const { item } = props.item;

  return (
    <Card style={styles.container}>
      <List.Item
        title={item.title}
        description={item.description}
        left={() => <List.Icon icon="checkbox-blank-outline" />}
        // right={() => <List.Icon icon="delete" color={Colors.red400} />}
        onPress={() => {
          props.navigation.navigate("Schedule-Task-Page", {
            name: "Edit task",
            taskId: item.id,
          });
        }}
        style={styles.listItem}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  listItem: {
    // backgroundColor: "lightblue",
  },
});
