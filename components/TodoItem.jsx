import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { List } from 'react-native-paper';

export default function TodoItem(props) {
    return(
        <View style={styles.container}>
            <List.Item 
                title={props.title}
                description={props.description}
                left={props => <List.Icon {...props} icon="select" />}
                right={props => <List.Icon {...props} icon="delete" />}
                style={styles.listItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      marginTop: 10,
      backgroundColor: "#fff",
      justifyContent: "center",
    },
    listItem:{
        backgroundColor: "lightblue",
    },
})