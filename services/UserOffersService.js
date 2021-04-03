import offers from "../data/Offers";
import AsyncStorage from "@react-native-async-storage/async-storage";

class UserOffersService {
  constructor() {
    this.offers = this.offers;
  }
  getOffers() {
    try {
      return offers;
    } catch (e) {}
  }

  async getOffer(key) {
    try {
      const value = await AsyncStorage.getItem(key);
      return value != null ? JSON.parse(value) : null;
    } catch (e) {}
  }

  async loadOffersData() {
    try {
      const offersData = JSON.stringify(Offers);
      await AsyncStorage.setItem(this.offers, offersData);
    } catch (e) {}
  }
}

export default new UserOffersService();
