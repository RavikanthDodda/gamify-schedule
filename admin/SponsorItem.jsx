import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ListItem(props) {
  const { item } = props.item;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          height: "100%",
          width: "100%",
          justifyContent: "center",
        }}
        onPress={() => {
          props.navigation.navigate(props.page, {
            name: "Edit sponsor details",
            taskId: item.id,
          });
        }}
      >
        <Text>{item.name}</Text>
        <Text style={{ color: "#858585" }}>{item.status}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    marginHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
    paddingLeft: 30,
    backgroundColor: "#fff",
  },
});
