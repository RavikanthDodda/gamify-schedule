import React, { useEffect, useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { StyleSheet, View , Text} from "react-native";
import { DatePickerModal } from "react-native-paper-dates";
import { ScrollView } from "react-native-gesture-handler";
import Moment from "moment";
import AdminService from "../services/AdminService";
import SponsorService from "../services/SponsorService";

export default function CouponForm(props) {
  const [id, setId] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [expiry, setExpiry] = useState("");
  const [extraDetails, setExtraDetails] = useState("");
  const [cost, setCost] = useState("");
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

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
  
  const loadCoupon = async () => {
    const data = await SponsorService.getCoupon(props.route.params.id);
    if (data) {
      setId(data.id);
      setTitle(data.title);
      setExtraDetails(data.extraDetails);
      setExpiry(data.expiry);
      setDescription(data.description);
      setCost(data.cost);
      //setDate(data.expiry);
    }
  };

  useEffect(() => {
    loadCoupon();
  }, []);
  const saveTask = async () => {
    await SponsorService.saveCoupon({
      id: id,
      title: title,
      description: description,
      expiry: expiry,
      extraDetails: extraDetails,
      cost: cost,
    });
    props.navigation.navigate("Home", {
      screen: "Coupons",
      params: { action: "Coupons details saved" },
    });
  };

  const deleteTask = async () => {
    if (id) {
      await SponsorService.deleteCoupon(props.route.params.id);
    }
    props.navigation.navigate("Home", {
      screen: "Coupons",
      params: { action: id ? "Coupon removed" : undefined },
    });
  };

  return (
    <ScrollView keyboardShouldPersistTaps={"never"}>
      <View style={styles.container}>
        <View style={styles.field}>
          <TextInput
            label="Name"
            value={title}
            textContentType="jobTitle"
            onChangeText={(name) => setTitle(name)}
          />
        </View>
        <View style={styles.field}>
          <TextInput
            label="Description"
            value={description}
            onChangeText={(text) => setDescription(text)}
          />
        </View>
        <View style={styles.field}>
          <TextInput
            label="Expiry"
            value={expiry}
            onChangeText={(text) => setExpiry(text)}
          />
    
        </View>
        <View style={styles.field}>
          <TextInput
            label="Details"
            value={extraDetails}
            multiline={true}
            textContentType="fullStreetAddress"
            onChangeText={(description) => setExtraDetails(description)}
          />
        </View>
        <View style={styles.field}>
          <TextInput
            label="Cost"
            value={cost}
            multiline={true}
            textContentType="fullStreetAddress"
            onChangeText={(description) => setCost(description)}
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
