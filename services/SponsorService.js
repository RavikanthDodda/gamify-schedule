import Sponsors from "../data/Sponsors";
import SponsorsCoupons from "../data/SponsorsCoupons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 as uuidv4 } from "uuid";


class SponsorService {
  constructor() {
    this.key = "coupons";
  }

  async getCoupon(couponId) {
    try {
      let data = JSON.parse(await AsyncStorage.getItem(this.key));
      data = data.filter((item) => item.id === couponId);
      return data[0];
    } catch (e) {}
  }

  async getCoupons() {
    try {
      const value = await AsyncStorage.getItem(this.key);
      return value != null ? JSON.parse(value) : null;
    } catch (e) {}
  }

  async saveCoupon(coupon) {
    try {
      const oldValue = JSON.parse(await AsyncStorage.getItem(this.key));
      let jsonValue;
      if (coupon.id !== null) {
        oldValue.forEach((element) => {
          if (element.id === coupon.id) {
            element.title = coupon.title;
            element.description = coupon.description;
            element.expiry = coupon.expiry;
            element.extraDetails = coupon.extraDetails;
            element.cost = coupon.cost;
          }
        });
        jsonValue = oldValue;
      } else {
        coupon.id = uuidv4();
        jsonValue = [...oldValue, coupon];
        console.log(jsonValue);
      }
      await AsyncStorage.setItem(this.key, JSON.stringify(jsonValue));
    } catch (e) {}
  }

  async deleteCoupon(couponId) {
    try {
      let data = JSON.parse(await AsyncStorage.getItem(this.key));
      data = data.filter((item) => item.id !== couponId);
      console.log(data);
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem(this.key, jsonValue);
    } catch (e) {}
  }

  async loadData() {
    try {
      const scheduleValue = JSON.stringify(SponsorsCoupons);
      await AsyncStorage.setItem(this.key, scheduleValue);
    } catch (e) {}
  }
}

export default new SponsorService();
