import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { IconButton } from "react-native-paper";

export default function ListItem(props) {
	const { item } = props.item;
	const [ticked, setTicked] = useState(false);

	const getIcon = () => {
		return ticked ? "checkbox-marked-circle" : "checkbox-blank-circle-outline";
	}

	const getStyle = () => {
		const container = styles.container
		container.backgroundColor = ticked ? "" : "#fff"
		return container
	}

	return (
		<View style={styles.container}>
			<IconButton icon={getIcon()} color={ticked ? "#858585" : "#000"} onPress={
				() => {
					setTicked(!ticked);
					if (!ticked)
						props.onComplete("Task finished");
				}
			} />
			<View style={styles.listItem}>
				<TouchableOpacity style={{ height: "100%", width: "100%", justifyContent: "center" }}
					onPress={() => {
						props.navigation.navigate(props.page, {
							name: "Edit task",
							taskId: item.id,
						});
					}}>
					<Text style={{ fontWeight: "700", color: ticked ? "#858585" : "#000" }}> {item.title}</Text>
					{/* TODO - add repeat info */}
					<View>
						<Text style={{ color: "#858585" }}> {item.description}</Text>

						{/* <Text style={{ color: "#858585" }}> {item.}</Text> */}
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: 70,
		marginHorizontal: 20,
		borderRadius: 8,
		marginTop: 10,
		backgroundColor: "#fff",
		flexDirection: "row",
		alignItems: "center",
	},
	icon: {
	},
	listItem: {
		flex: 2,
		height: "100%",
	},
});
