import tasks from "../data/ScheduleTasks";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 as uuidv4 } from "uuid";

class CustomerService {
  constructor() {
    this.userId = "ravi";
    this.scheduleKey = this.userId + ".schedule.tasks";
  }
  async getScheduleTasks() {
    try {
      const value = await AsyncStorage.getItem(this.scheduleKey);
      return value != null ? JSON.parse(value) : null;
    } catch (e) {}
  }
  async saveScheduleTask(task) {
    try {
      const oldValue = JSON.parse(await AsyncStorage.getItem(this.scheduleKey));
      let jsonValue;
      if (task.id) {
        oldValue.forEach((element) => {
          if (element.id === task.id) {
            element = task;
          }
        });
        jsonValue = oldValue;
      } else {
        task.id = uuidv4();
        jsonValue = [...oldValue, task];
      }
      await AsyncStorage.setItem(this.scheduleKey, JSON.stringify(jsonValue));
    } catch (e) {}
  }

  async deleteScheduleTask(taskId) {
    try {
      let data = JSON.parse(await AsyncStorage.getItem(this.scheduleKey));
      data = data.filter((item) => item.id != taskId);
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem(this.scheduleKey, jsonValue);
    } catch (e) {}
  }

  async getTodoTasks() {}

  async loadData() {
    try {
      const jsonValue = JSON.stringify(tasks);
      await AsyncStorage.setItem(this.scheduleKey, jsonValue);
    } catch (e) {}
  }
}

export default new CustomerService();
