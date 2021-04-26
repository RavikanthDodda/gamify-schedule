import Sponsors from "../data/Sponsors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 as uuidv4 } from "uuid";

class AdminService {
  constructor() {
    this.key = "sponsors";
  }

  async getSponsor(sponsorId) {
    try {
      let data = JSON.parse(await AsyncStorage.getItem(this.key));
      data = data.filter((item) => item.id === sponsorId);
      return data[0];
    } catch (e) {}
  }

  async getSponsors() {
    try {
      const value = await AsyncStorage.getItem(this.key);
      return value != null ? JSON.parse(value) : null;
    } catch (e) {}
  }

  async saveSponsor(sponsor) {
    try {
      const oldValue = JSON.parse(await AsyncStorage.getItem(this.key));
      let jsonValue;
      if (sponsor.id !== null) {
        oldValue.forEach((element) => {
          if (element.id === sponsor.id) {
            element.email = sponsor.email;
            element.name = sponsor.name;
            element.details = sponsor.details;
            element.offers = sponsor.offers;
          }
        });
        jsonValue = oldValue;
      } else {
        sponsor.id = uuidv4();
        jsonValue = [...oldValue, sponsor];
        console.log(jsonValue);
      }
      await AsyncStorage.setItem(this.key, JSON.stringify(jsonValue));
    } catch (e) {}
  }

  async deleteSponsor(sponsorId) {
    try {
      let data = JSON.parse(await AsyncStorage.getItem(this.key));
      data = data.filter((item) => item.id !== sponsorId);
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem(this.key, jsonValue);
    } catch (e) {}
  }

  async loadData() {
    try {
      const scheduleValue = JSON.stringify(Sponsors);
      await AsyncStorage.setItem(this.key, scheduleValue);
    } catch (e) {}
  }
}

export default new AdminService();
