import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./Pages/LoginScreen";
import CustomerNav from "./customer/layouts/CustomerNav";
import { AuthContext } from "./components/AuthContext";
import AdminNav from "./admin/AdminNav";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.Stack = createStackNavigator();
    this.setUser = (user) => {
      this.setState({
        user: user,
      });
    };
    this.state = {
      user: null,
      setUser: this.setUser,
    };
  }

  getComponent() {
    switch (this.state.user?.type) {
      case "ADMIN":
        return <AdminNav />;
      case "CUSTOMER":
        return <CustomerNav />;

      // case 'CUSTOMER':

      //       break;
      default:
        return <LoginScreen />;
    }
  }

  render() {
    return (
      <AuthContext.Provider value={this.state}>
        {this.getComponent()}
      </AuthContext.Provider>
    );
  }
}
