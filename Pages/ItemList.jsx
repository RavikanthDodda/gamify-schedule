import React, { useContext, useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { Snackbar } from "react-native-paper";
import AddFAB from "../components/AddFAB";

import Item from "../components/Item";
import CustomerService from "../services/CustomerService";
import { PointsContext } from "../components/PointsContext";

function ItemList(props) {
	const { route, navigation } = props;
	const [tasks, setTasks] = useState([]);
	const [showBar, setShowBar] = useState(false);
	const [message, setMessage] = useState("");
	const { points, setPoints } = useContext(PointsContext);

	const notify = (mesg, pts) => {
		setMessage(mesg);
		setShowBar(true);
		setPoints(points + pts);
	}


	const loadTasks = async () => {
		let data;
		switch (route.params?.item) {
			case "schedule":
				data = await CustomerService.getScheduleTasks();
				break;

			case "todo":
				data = await CustomerService.getTodoTasks();
				break;
			default:
				break;
		}
		setTasks(data);
	};

	useEffect(() => {
		const unsubscribe = navigation.addListener("focus", () => {
			loadTasks();
			// notify();
		});

		return unsubscribe;
	}, [navigation]);

	return (
		<React.Fragment>
			<FlatList
				data={tasks}
				renderItem={(item) => (
					<Item
						item={item}
						navigation={navigation}
						type={route.params.item}
						page={route.params.formPage}
						onComplete={notify}
					/>
				)}
				keyExtractor={(task) => task.id}
			/>
			<AddFAB
				navigation={navigation}
				page={route.params.formPage}
				name={"Add new task"}
			/>
			<Snackbar
				visible={showBar}
				onDismiss={() => setShowBar(false)}
				action={{
					label: "Ok",
					onPress: () => {
						console.log("pressed");
					},
				}}
			>
				{message}
			</Snackbar>
		</React.Fragment>
	);
}

export default ItemList;
