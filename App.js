import React from "react";
import { StyleSheet, Text, View, Alert, Button } from "react-native";
import Counter from "./Counter";

function App() {
  return (
    <View style={style.container}>
      <Counter></Counter>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
  },
});

export default App;
