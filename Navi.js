import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./styles";

export class Home extends React.Component {
  render() {
    return (
      <View style={styles.eachView}>
        <Text> 홈 화면 입니다.</Text>
        <Button
          title="챗 화면으로 가기"
          onPress={() => this.props.navigation.navigate("Chat")}
        ></Button>
        <Button
          title="카운팅 화면으로 가기"
          onPress={() => this.props.navigation.navigate("Counter")}
        ></Button>
      </View>
    );
  }
}

export class Chat extends React.Component {
  render() {
    return (
      <View style={styles.eachView}>
        <Text> 챗 화면 입니다.</Text>
        <Button
          title="셋팅 화면으로 가기"
          onPress={() => this.props.navigation.navigate("Settings")}
        ></Button>
      </View>
    );
  }
}

export class Settings extends React.Component {
  render() {
    return (
      <View style={styles.eachView}>
        <Text> 세팅 화면 입니다.</Text>
      </View>
    );
  }
}
