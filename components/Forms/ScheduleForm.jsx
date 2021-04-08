import React, { useEffect, useState } from "react";
import { Button, TextInput, Title, Chip } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-community/picker";
import { DatePickerModal } from "react-native-paper-dates";
import Moment from "moment";
import "intl";
import "intl/locale-data/jsonp/en";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import CustomerService from "../../services/CustomerService";

export default function ScheduleForm(props) {
  const [id, setId] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [difficulty, setDifficulty] = useState("easy");
  const [repeatOn, setRepeatOn] = useState("days");
  const [repeatEvery, setRepeatEvery] = useState("1");
  const [sun, setSun] = useState(false);
  const [mon, setMon] = useState(false);
  const [tue, setTue] = useState(false);
  const [wed, setWed] = useState(false);
  const [thu, setThu] = useState(false);
  const [fri, setFri] = useState(false);
  const [sat, setSat] = useState(false);

  const loadTask = async () => {
    const data = await CustomerService.getScheduleTask(
      props.route.params?.taskId
    );
    if (data) {
      setId(data.id);
      setTitle(data.title);
      setDescription(data.description);
      setDifficulty(data.difficulty);
      setRepeatOn(data.repeatOn);
      setRepeatEvery(data.repeatEvery);
      if (data.date) setDate(new Date(data.date));
      if (data.weekData) {
        setSun(data.weekData[0]);
        setMon(data.weekData[1]);
        setTue(data.weekData[2]);
        setWed(data.weekData[3]);
        setThu(data.weekData[4]);
        setFri(data.weekData[5]);
        setSat(data.weekData[6]);
      }
    }
  };

  useEffect(() => {
    loadTask();
  }, []);

  const saveTask = async () => {
    await CustomerService.saveScheduleTask({
      id: id,
      title: title,
      description: description,
      difficulty: difficulty,
      date: date.toString(),
      repeatOn: repeatOn,
      repeatEvery: repeatEvery,
      weekData: [sun, mon, tue, wed, thu, fri, sat],
    });
    props.navigation.navigate("Home", {
      screen: "Schedule",
      params: { action: "task added" },
    });
  };

  const deleteTask = async () => {
    if (id) {
      const res = await CustomerService.deleteScheduleTask(
        props.route.params?.taskId
      );
    }
    props.navigation.navigate("Home", {
      screen: "Schedule",
      params: { action: "task added" },
    });
  };

  const onDismissSingle = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = React.useCallback(
    (params) => {
      setOpen(false);
      setDate(params.date);
    },
    [setOpen, setDate]
  );

  const weekPicker = () => {
    if (repeatOn === "weeks") {
      return (
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 10,
          }}
        >
          <Chip
            selected={sun}
            selectedColor="#6200EE"
            onPress={() => setSun(!sun)}
          >
            S
          </Chip>
          <Chip
            selected={mon}
            selectedColor="#6200EE"
            onPress={() => setMon(!mon)}
          >
            M
          </Chip>
          <Chip
            selected={tue}
            selectedColor="#6200EE"
            onPress={() => setTue(!tue)}
          >
            T
          </Chip>
          <Chip
            selected={wed}
            selectedColor="#6200EE"
            onPress={() => setWed(!wed)}
          >
            W
          </Chip>
          <Chip
            selected={thu}
            selectedColor="#6200EE"
            onPress={() => setThu(!thu)}
          >
            T
          </Chip>
          <Chip
            selected={fri}
            selectedColor="#6200EE"
            onPress={() => setFri(!fri)}
          >
            F
          </Chip>
          <Chip
            selected={sat}
            selectedColor="#6200EE"
            onPress={() => setSat(!sat)}
          >
            S
          </Chip>
        </View>
      );
    }
  };

  return (
    <ScrollView keyboardShouldPersistTaps={"never"}>
      <View style={styles.container}>
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
            style={{ width: 120, marginLeft: 20 }}
            mode="dropdown"
          >
            <Picker.Item label="Easy" value="easy" />
            <Picker.Item label="Medium" value="med" />
            <Picker.Item label="Hard" value="hard" />
          </Picker>
        </View>

        <Title style={{ fontSize: 17, marginTop: 10 }}>Schedule</Title>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text>Start date </Text>
          <View style={{ marginLeft: 20 }}>
            <Button
              mode="contained"
              color="#E7E7E7"
              onPress={() => setOpen(true)}
              style={styles.dateButton}
            >
              {Moment(date).format("MM-DD-YYYY")}
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
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Text>Repeat </Text>
          <Picker
            selectedValue={repeatOn}
            onValueChange={(repeatOn) => setRepeatOn(repeatOn)}
            style={{ width: 115, marginLeft: 10 }}
            mode="dropdown"
          >
            <Picker.Item label="Daily" value="days" />
            <Picker.Item label="Weekly" value="weeks" />
            <Picker.Item label="Monthly" value="months" />
            <Picker.Item label="Yearly" value="years" />
          </Picker>
          <Text>on every </Text>
          <TextInput
            value={repeatEvery}
            textContentType="none"
            keyboardType="number-pad"
            onChangeText={(repeatEvery) => setRepeatEvery(repeatEvery)}
            style={{ height: 40, marginHorizontal: 8 }}
          />
          <Text>{repeatOn}</Text>
        </View>

        {weekPicker()}
        <View style={styles.buttonParent}>
          <View>
            <Button mode="contained" onPress={deleteTask}>
              {id ? "Delete" : "Cancel"}
            </Button>
          </View>
          <View>
            <Button mode="contained" onPress={saveTask}>
              Save
            </Button>
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
  field: {
    marginBottom: 10,
  },

  buttonParent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
  },
});
