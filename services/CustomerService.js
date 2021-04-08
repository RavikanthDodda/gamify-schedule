import ScheduleTasks from "../data/ScheduleTasks";
import TodoTasks from "../data/TodoTasks";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 as uuidv4 } from "uuid";

class CustomerService {
  constructor() {
    this.userId = "ravi";
    this.scheduleKey = this.userId + ".schedule.tasks.";
    this.todoKey = this.userId + ".todo.tasks";
  }

  async getScheduleTask(taskId) {
    try {
      let data = JSON.parse(await AsyncStorage.getItem(this.scheduleKey));
      data = data.filter((item) => item.id === taskId);
      return data[0];
    } catch (e) {}
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
            element.title = task.title;
            element.description = task.description;
            element.difficulty = task.difficulty;
            element.repeatOn = task.repeatOn;
            element.repeatEvery = task.repeatEvery;
            element.weekData = task.weekData;
            element.date = task.date;
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
      data = data.filter((item) => item.id !== taskId);
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem(this.scheduleKey, jsonValue);
    } catch (e) {}
  }

  async getTodoTasks() {
    try {
      const value = await AsyncStorage.getItem(this.todoKey);
      return value != null ? JSON.parse(value) : null;
    } catch (e) {}
  }

  async getTodoTask(taskId) {
    try {
      let data = JSON.parse(await AsyncStorage.getItem(this.todoKey));
      data = data.filter((item) => item.id === taskId);
      return data[0];
    } catch (e) {}
  }
  async saveTodoTask(task) {
    try {
      const oldValue = JSON.parse(await AsyncStorage.getItem(this.todoKey));
      let jsonValue;
      if (task.id) {
        oldValue.forEach((element) => {
          if (element.id === task.id) {
            element.title = task.title;
            element.description = task.description;
            element.date = task.date;
            element.difficulty = task.difficulty;
            element.hours = task.hours;
            element.minutes = task.hours;
          }
        });
        jsonValue = oldValue;
      } else {
        task.id = uuidv4();
        jsonValue = [...oldValue, task];
      }
      await AsyncStorage.setItem(this.todoKey, JSON.stringify(jsonValue));
    } catch (e) {}
  }

  async deleteTodoTask(taskId) {
    try {
      let data = JSON.parse(await AsyncStorage.getItem(this.todoKey));
      data = data.filter((item) => item.id !== taskId);
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem(this.todoKey, jsonValue);
    } catch (e) {}
  }

  async loadData() {
    try {
      const scheduleValue = JSON.stringify(ScheduleTasks);
      const todoValue = JSON.stringify(TodoTasks);
      await AsyncStorage.setItem(this.scheduleKey, scheduleValue);
      await AsyncStorage.setItem(this.todoKey, todoValue);
    } catch (e) {}
  }
}

export default new CustomerService();
