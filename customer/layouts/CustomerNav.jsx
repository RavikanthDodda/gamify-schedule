import React from "react";
import NavBar from "../components/NavBar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import CustomerService from "../../services/CustomerService";
import UserCouponsService from "../../services/UserCouponsService";
import { createStackNavigator } from "@react-navigation/stack";
import StorePage from "../pages/Store";
import UserCouponsPage from "../../Pages/UserCouponsPage";
import UserOffersPage from "../../Pages/UserOffersPage";
import ScheduleForm from "../Forms/ScheduleForm";
import TodoForm from "../Forms/TodoForm";
import UserOffersService from "../../services/UserOffersService";
import OfferDetailsPage from "../../Pages/OfferDetailsPage";

import { PointsContext } from "../components/PointsContext";

export default class CustomerNav extends React.Component {
  constructor(props) {
    super(props);
    this.setPoints = (points) => {
      this.setState({
        points: points,
      });
      CustomerService.setPoints(this.state.points);
    };
    this.state = {
      points: 0,
      setPoints: this.setPoints,
    };
  }

  componentDidMount() {
    CustomerService.loadData();
    UserCouponsService.loadCouponsData();
    UserOffersService.loadOffersData();
    CustomerService.getPoints().then((res) => {
      this.setState({
        points: res,
      });
    });
  }

  render() {
    const Stack = createStackNavigator();
    return (
      <PointsContext.Provider value={this.state}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "#6200EE",
              },
              headerTintColor: "#fff",

              headerTitleStyle: {
                // fontWeight: "bold",
              },
            }}
          >
            <Stack.Screen
              name="Home"
              // options={({ route }) => ({ title: route.params.name })}
              component={NavBar}
            />

            <Stack.Screen
              options={({ route }) => ({ title: route.params.name })}
              name="Schedule-Form"
              component={ScheduleForm}
            />
            <Stack.Screen
              options={({ route }) => ({ title: route.params.name })}
              name="Todo-Task-Page"
              component={TodoForm}
            />
            <Stack.Screen
              options={({ route }) => ({ title: route.params.name })}
              name="Store-Page"
              component={StorePage}
            />
            <Stack.Screen
              options={({ route }) => ({ title: route.params.name })}
              name="Coupons List"
              component={UserCouponsPage}
            />
            <Stack.Screen
              options={({ route }) => ({ title: route.params.name })}
              name="Offers List"
              component={UserOffersPage}
            />
           
            <Stack.Screen
              options={({ route }) => ({ title: route.params.name })}
              name="Details-Page"
              component={OfferDetailsPage}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PointsContext.Provider>
    );
  }

  styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
}
