import coupons from "../data/Coupons";
import AsyncStorage from "@react-native-async-storage/async-storage";

class UserCouponsService {
  constructor() {
    // this.key = "coupons";
    this.coupons = coupons;
  }
  getCoupons() {
    try {
      return coupons;
    } catch (e) {}
  }

  // async getCoupon(key) {
  //   try {
  //     const value = await AsyncStorage.getItem(key);
  //     return value != null ? JSON.parse(value) : null;
  //   } catch (e) {}
  // }

  async getCoupon(couponId) {
    try {
      let data = JSON.parse(getCoupons());
      data = data.filter((item) => item.id === couponId);
      return data[0];
    } catch (e) {}
  }

  async loadCouponsData() {
    try {
      const couponsData = JSON.stringify(Coupons);
      await AsyncStorage.setItem(this.coupons, couponsData);
    } catch (e) {}
  }

  async deleteCoupon(CouponId) {
    try {
      let data = JSON.parse(await AsyncStorage.getItem(this.key));
      data = data.filter((item) => item.id !== CouponId);
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem(this.key, jsonValue);
    } catch (e) {}
  }

  async saveCoupon(coupon) {
    try {
      const oldValue = JSON.parse(await AsyncStorage.getItem(this.coupons));
      let jsonValue;
      if (coupon.id !== null) {
        oldValue.forEach((element) => {
          if (element.id === coupon.id) {
            element.title = coupon.title;
            element.description = coupon.description;
            element.extraDetails = coupon.extraDetails;
            element.expiry = coupon.expiry;
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


}

export default new UserCouponsService();
