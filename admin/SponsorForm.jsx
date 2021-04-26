import React, { useEffect, useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { StyleSheet, View } from "react-native";

import { ScrollView } from "react-native-gesture-handler";

import AdminService from "../services/AdminService";

export default function SponsorForm(props) {
  const [id, setId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [offers, setOffers] = useState("");
  const [details, setDetails] = useState("");

  const loadSponsor = async () => {
    const data = await AdminService.getSponsor(props.route.params?.taskId);
    if (data) {
      setId(data.id);
      setName(data.name);
      setDetails(data.details);
      setOffers(data.offers);
      setEmail(data.email);
    }
  };

  useEffect(() => {
    const unsubscribe = props.navigation.addListener("focus", () => {
      loadSponsor();
    });

    return unsubscribe;
  }, [props.navigation]);
  const saveTask = async () => {
    await AdminService.saveSponsor({
      id: id,
      name: name,
      email: email,
      offers: offers,
      details: details,
      status: "NOT VERIFIED",
    });
    props.navigation.navigate("Home", {
      screen: "Sponsors",
      params: { action: "Sponsor details saved" },
    });
  };

  const deleteTask = async () => {
    if (id) {
      await AdminService.deleteSponsor(props.route.params?.taskId);
    }
    props.navigation.navigate("Home", {
      screen: "Sponsors",
      params: { action: id ? "Sponsor removed" : undefined },
    });
  };

  return (
    <ScrollView keyboardShouldPersistTaps={"never"}>
      <View style={styles.container}>
        <View style={styles.field}>
          <TextInput
            label="Name"
            value={name}
            textContentType="jobTitle"
            onChangeText={(name) => setName(name)}
          />
        </View>
        <View style={styles.field}>
          <TextInput
            label="Email"
            value={email}
            textContentType="email"
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.field}>
          <TextInput
            label="Offer Types"
            value={offers}
            onChangeText={(text) => setOffers(text)}
          />
        </View>
        <View style={styles.field}>
          <TextInput
            label="Details"
            value={details}
            multiline={true}
            textContentType="fullStreetAddress"
            onChangeText={(description) => setDetails(description)}
          />
        </View>

        <View style={styles.buttonParent}>
          <Button mode="contained" onPress={deleteTask}>
            {id ? "Delete" : "Cancel"}
          </Button>
          <Button mode="contained" onPress={saveTask}>
            Save
          </Button>
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
