import React from "react";
import { Button, TextInput } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import { DatePickerModal } from 'react-native-paper-dates';
import { TimePickerModal } from 'react-native-paper-dates';
import Moment from 'moment';

export default function TodoForm(){
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [date, setDate] = React.useState(undefined);
  const [open, setOpen] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [hours, setHours] = React.useState("-");
  const [minutes, setMinutes] = React.useState("-");
  const [showDate, setShowDate] = React.useState(false);
  const [showTime, setShowTime] = React.useState(false);

  const onDismissSingle = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = React.useCallback(
    (params) => {
      setOpen(false);
      setDate(params.date);
      setShowDate(true);
      console.log(params.date);
    },
    [setOpen, setDate]
  );
  const onDismiss = React.useCallback(() => {
    setVisible(false)
  }, [setVisible])

  const onConfirm = React.useCallback(
    ({ hours, minutes }) => {
      setVisible(false);
      setHours(hours);
      setMinutes(minutes);
      setShowTime(true);
      console.log({ hours, minutes });
    },
    [setVisible]
  );
  return (
    <View style={styles.container}>
      <Text style={styles.header}>New Task</Text>
      <View style={styles.field}>
        <TextInput
          label="Title"
          value={title}
          textContentType="jobTitle"
          onChangeText={(title) => setTitle(title)}
        />
      </View>
      <View style={styles.field}>
        <TextInput
          label="Description"
          value={description}
          multiline={true}
          textContentType="fullStreetAddress"
          onChangeText={(description) => setDescription(description)}
        />
      </View>
        <Button onPress={() => setOpen(true)} uppercase={false} mode="outlined" style={styles.dateButton}>
          Pick Date
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
        {showDate ? <Text style={styles.dateText}>Date: {Moment(date).format('MM-DD-YYYY')}</Text> : null}
        <Button onPress={()=> setVisible(true)} uppercase={false} mode="outlined" style={styles.timeButton}>
          Pick Time
        </Button>
        <TimePickerModal
          visible={visible}
          onDismiss={onDismiss}
          onConfirm={onConfirm}
          // hours={12} // default: current hours
          // minutes={14} // default: current minutes
          animationType="fade"
          locale={'en'}
        />
        {showTime ? <Text hide={false} style={styles.timeText}>Time: {hours}:{minutes}</Text> : null}
      <View style={styles.buttonParent}>
        <View style={styles.btn1}>
          <Button mode="contained">Delete</Button>
        </View>
        <View style={styles.btn2}>
          <Button mode="contained">Save</Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 30,
    marginTop: 50,
    justifyContent: "center",
  },
  header: {
    textAlign: "center",
    justifyContent: "center", 
    marginBottom: 40,
    fontWeight: 'bold',
    fontSize: 20,
  },
  dateText:{
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 5,
    textAlign: "center",
  },
  timeText:{
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 5,
    textAlign: "center",
  },
  field: {
    marginBottom: 10,
  },
  buttonParent:{
    flexDirection: 'row',
    justifyContent: "center",
    marginTop: 80
  },
  btn1: {
    display: "flex",
    alignItems: "center",
    marginRight: 100
  },
  btn2: {
    display: "flex",
    alignItems: "center",
  },
  dateButton:{
    marginTop: 20,
  },
  timeButton:{
    marginTop: 30,
  }
});