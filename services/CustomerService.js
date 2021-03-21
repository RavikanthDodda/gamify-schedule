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
  async saveScheduleTask(userId, task) {
    const key = userId + ".schedule.tasks";
    console.log(key);
    try {
      const oldValue = JSON.parse(await AsyncStorage.getItem(key));
      const jsonValue = JSON.stringify([...oldValue, task]);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {}
  }

  async deleteScheduleTask(userId, taskId) {
    const key = userId + ".schedule.tasks";
    try {
      let data = JSON.parse(await AsyncStorage.getItem(key));
      data = data.filter((item) => item.id != taskId);
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {}
  }

  async getTodoTasks() {}

  async loadData() {
    try {
      const jsonValue = JSON.stringify(tasks);
      await AsyncStorage.setItem("ravi.schedule.tasks", jsonValue);
    } catch (e) {}
  }
}

export default new CustomerService();
