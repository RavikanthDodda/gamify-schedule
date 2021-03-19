import tasks from "../data/ScheduleTasks";
import AsyncStorage from "@react-native-async-storage/async-storage";

class CustomerService {
  async getScheduleTasks(userId) {
    const key = userId + ".schedule.tasks";
    try {
      const value = await AsyncStorage.getItem(key);
      return value != null ? JSON.parse(value) : null;
    } catch (e) {}
  }

  async saveScheduleTasks(userId, tasks) {
    const key = userId + "schedule.tasks";
    try {
      const jsonValue = JSON.stringify(tasks);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {}
  }

  async getTodoTasks() {}

  saveTodoTasks() {}

  getUserName() {}

  async loadData() {
    try {
      const jsonValue = JSON.stringify(tasks);
      await AsyncStorage.setItem("ravi.schedule.tasks", jsonValue);
    } catch (e) {}
  }
}

export default new CustomerService();
