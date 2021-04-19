import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { IconButton } from "react-native-paper";
import ScheduleItemContent from "../../components/ScheduleItemContent";

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

	const getPoints = () => {
		switch (item.difficulty) {
			case "easy":
				return 5;
			case "med":
				return 20;
			case "hard":
				return 50;
			default:
				break;
		}
	}

	const getButtonColor = () => {
		switch (item.difficulty) {
			case "easy":
				return "#8DE78D";
			case "med":
				return "#F0B34A";
			case "hard":
				return "#F74B4A";
			default:
				break;
		}
	}

	return (
		<View style={styles.container}>
			<View style={{ flexDirection: "row", marginRight: 5, borderBottomLeftRadius: 8, borderTopLeftRadius: 8, height: "100%", backgroundColor: getButtonColor() }} >
				<IconButton style={{ alignSelf: "center" }} icon={getIcon()} color={ticked ? "#858585" : "#000"} onPress={
					() => {
						setTicked(!ticked);
						if (!ticked)
							props.onComplete(`Task completed: Earned ${getPoints()} points`, getPoints());
					}
				} />
			</View>
			<View style={styles.listItem}>
				<TouchableOpacity style={{ height: "100%", width: "100%", justifyContent: "center" }}
					onPress={() => {
						props.navigation.navigate(props.page, {
							name: "Edit task",
							taskId: item.id,
							onDelete: props.onDelete
						});
					}}>
					<ScheduleItemContent color={ticked ? "#858585" : "#000"} item={item} />
				</TouchableOpacity>
			</View>
		</View >
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
	listItem: {
		flex: 2,
		height: "100%",
	},
});
