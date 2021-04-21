import React from 'react'
import { Text, View, StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const TodoItemContent = (props) => {
	const { item } = props;
	return (
		<View>
			<Text style={{ fontWeight: "700", color: props.color }}> {item.title}</Text>
			{/* TODO - add repeat info */}
			<View style={styles.repeat}>
				<MaterialCommunityIcons name="repeat" color={"#858585"} size={12} />
				<Text style={{ color: "#858585" }}> {item.repeatOn}</Text>

				{/* <Text style={{ color: "#858585" }}> {item.}</Text> */}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	repeat: {
		flexDirection: "row",
		alignItems: "center"
	}
});

export default TodoItemContent;
