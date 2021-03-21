import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Colors, List, Card } from "react-native-paper";

export default function ScheduleItem(props) {
  const { item } = props;
  return (
    <Card style={styles.container}>
      <List.Item
        title={item.title}
        description={item.description}
        left={() => <List.Icon icon="checkbox-blank-outline" />}
        right={() => <List.Icon icon="delete" color={Colors.red400} />}
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
