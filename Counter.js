import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar, Button } from "react-native";
import { styles } from "./styles";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.HomeView}>
      <Text>you click {count} times</Text>
      <Button title="CLICK" onPress={() => setCount(count + 1)}></Button>
    </View>
  );
}

export default Counter;
