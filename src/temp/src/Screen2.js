import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Navigation } from "react-native-navigation";
import App from "../../chatApp/App";

export default class Screen2 extends React.Component {
  static get options() {
    return {
      topBar: {
        title: {
          text: "Screen 2"
        }
      }
    };
  }
  render() {
    return <App />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
