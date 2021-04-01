import React from "react";
import { Button, TextInput, Title } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-community/picker";
import { DatePickerModal } from "react-native-paper-dates";
import { TimePickerModal } from "react-native-paper-dates";
import Moment from "moment";
import "intl";
import "intl/locale-data/jsonp/en";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import DropDown from "react-native-paper-dropdown";

export default function TodoForm() {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [date, setDate] = React.useState(undefined);
  const [open, setOpen] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [hours, setHours] = React.useState("");
  const [minutes, setMinutes] = React.useState("");
  const [showDate, setShowDate] = React.useState(false);
  const [showTime, setShowTime] = React.useState(false);
  const [difficulty, setDifficulty] = React.useState("");

  const onDismissSingle = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = React.useCallback(
    (params) => {
      setOpen(false);
      setDate(params.date);
      setShowDate(true);
    },
    [setOpen, setDate]
  );
  const onDismiss = React.useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  const onConfirm = React.useCallback(
    ({ hours, minutes }) => {
      setVisible(false);
      setHours(hours);
      setMinutes(minutes);
      setShowTime(true);
    },
    [setVisible]
  );

  return (
    <ScrollView keyboardShouldPersistTaps={"never"}>
      <View style={styles.container}>
        <Text style={styles.header}>New to do</Text>
        <View style={styles.field}>
          <TextInput
            label="Title"
            value={title}
            textContentType="jobTitle"
            onChangeText={(title) => setTitle(title)}
          />
        </View>
        <View style={(styles.field, { marginTop: 20 })}>
          <TextInput
            label="Description"
            value={description}
            multiline={true}
            textContentType="fullStreetAddress"
            onChangeText={(description) => setDescription(description)}
          />
        </View>

        <Title style={{ fontSize: 17, marginTop: 20 }}>Due date and time</Title>
        <View style={styles.picker}>
          <View>
              <Button mode="outlined" style={{ width: 140 }} onPress={() => setOpen(true)} style={styles.dateButton}>
                  {
                    date
                      ? Moment(date).format("MM-DD-YYYY")
                      : Moment().format("MM-DD-YYYY")
                  }
              </Button>
            <DatePickerModal
              mode="single"
              visible={open}
              onDismiss={onDismissSingle}
              date={date}
              onConfirm={onConfirmSingle}
              validRange={{
                startDate: new Date(),
              }}
            />
          </View>
          <View>
              <Button mode="outlined" style={{ width: 140 }} on onPress={() => setVisible(true)}>
                  {
                    hours && minutes
                      ? hours + ":" + minutes
                      : Moment().format("HH:mm")
                  }
              </Button>
            <TimePickerModal
              visible={visible}
              onDismiss={onDismiss}
              onConfirm={onConfirm}
              // hours={12} // default: current hours
              // minutes={14} // default: current minutes
              animationType="fade"
              locale={"en"}
            />
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            marginTop: 10,
            alignItems: "center",
          }}
        >
          <Title style={{ fontSize: 17 }}>Difficulty</Title>
          <Picker
            selectedValue={difficulty}
            onValueChange={(difficulty) => setDifficulty(difficulty)}
            style={{ width: 100, marginLeft: 20 }}
            mode="dropdown"
          >
            <Picker.Item label="Easy" value="Easy" />
            <Picker.Item label="Medium" value="Medium" />
            <Picker.Item label="Hard" value="Hard" />
          </Picker>
        </View>
        <View style={styles.buttonParent}>
          <View style={styles.btn1}>
            <Button mode="contained">Cancel</Button>
          </View>
          <View style={styles.btn2}>
            <Button mode="contained">Save</Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginVertical: 20,
    marginHorizontal: 20,
  },
  header: {
    textAlign: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 40,
    fontWeight: "bold",
    fontSize: 20,
  },
  dateText: {
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 50,
    textAlign: "center",
  },
  timeText: {
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 50,
    textAlign: "center",
  },
  field: {
    marginBottom: 10,
  },
  buttonParent: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 80,
  },
  btn1: {
    display: "flex",
    alignItems: "center",
    marginRight: 100,
  },
  btn2: {
    display: "flex",
    alignItems: "center",
  },
  dateButton: {
    width: 150,
  },
  timeButton: {
    width: 150,
    alignItems: "center",
  },
  menuItem: {
    height: 25,
  },
  picker: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
});
