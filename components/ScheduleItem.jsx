import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors, List } from "react-native-paper";

export default function ScheduleItem(props) {
  return (
    <View style={styles.container}>
      <List.Item
        title={"hello"}
        description={"hello"}
        left={() => <List.Icon icon="checkbox-blank-outline" />}
        right={() => <List.Icon icon="delete" color={Colors.red400} />}
        style={styles.listItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    borderRadius: 8,
    marginTop: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  listItem: {
    // backgroundColor: "lightblue",
  },
});
