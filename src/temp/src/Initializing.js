// Initializing.js
import React from "react";
import { View, Text, StyleSheet, AsyncStorage } from "react-native";

import { goToAuth, goHome, goWalk } from "./navigation";

import { USER_KEY, FIRST_RUN } from "./config";

export default class Initialising extends React.Component {
  async componentDidMount() {
    try {
      const user = await AsyncStorage.getItem(USER_KEY);
      const firstrun = await AsyncStorage.getItem(FIRST_RUN);

      if (firstrun === "done") {
        goWalk();
      } else if (user) {
        goHome();
      } else {
        goToAuth();
      }
    } catch (err) {
      console.log("error: ", err);
      goToAuth();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Loading</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 28
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
