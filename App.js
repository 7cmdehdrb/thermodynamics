import React from "react";
import { Text, View, Alert, Button } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Chat, Home, Settings } from "./Navi";
import Counter from "./Counter";

const App = createStackNavigator(
  {
    Chat: {
      screen: Chat,
    },
    Home: {
      screen: Home,
    },
    Settings: {
      screen: Settings,
    },
    Counter: {
      screen: Counter,
    },
  },
  {
    initialRouteName: "Home",
  }
);

const AppContainer = createAppContainer(App);

export default () => <AppContainer></AppContainer>;
