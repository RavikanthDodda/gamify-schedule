import React from "react";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";

function AddFAB(props) {
  const { navigation } = props;
  return (
    <FAB
      style={styles.fab}
      icon="plus"
      onPress={() =>
        navigation.navigate(props.page, {
          name: props.name,
			onDelete: props.onDelete
        })
      }
    />
  );
}
const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
export default AddFAB;
