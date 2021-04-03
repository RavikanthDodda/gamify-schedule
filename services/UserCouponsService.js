import coupons from "../data/Coupons";
import AsyncStorage from "@react-native-async-storage/async-storage";

class UserCouponsService {
  constructor() {
    this.coupons = this.coupons;
  }
  getCoupons() {
    try {
      return coupons;
    } catch (e) {}
  }

  async getCoupon(key) {
    try {
      const value = await AsyncStorage.getItem(key);
      return value != null ? JSON.parse(value) : null;
    } catch (e) {}
  }

  async loadCouponsData() {
    try {
      const couponsData = JSON.stringify(Coupons);
      await AsyncStorage.setItem(this.coupons, couponsData);
    } catch (e) {}
  }
}

export default new UserCouponsService();
