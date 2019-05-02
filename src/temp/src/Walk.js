// Home.js
import React from "react";
import { View, Text, Button, StyleSheet, AsyncStorage } from "react-native";
import { goToAuth, goHome } from "./navigation";
import { Navigation } from "react-native-navigation";

import { USER_KEY } from "./config";

export default class Home extends React.Component {
  static get options() {
    return {
      topBar: {
        title: {
          text: "Walkthrough"
        }
      }
    };
  }

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>walkthrough.</Text>

        <Button
          onPress={async () => {
            try {
              const user = await AsyncStorage.getItem(USER_KEY);
              if (user) {
                await AsyncStorage.setItem("FIRST_RUN", "done");
                goHome();
              } else {
                await AsyncStorage.setItem("FIRST_RUN", "done");
                goToAuth();
              }
            } catch (err) {
              console.log("error: ", err);
              goToAuth();
            }

            Navigation.push(this.props.componentId, {
              component: {
                name: "Home"
              }
            });
          }}
          title="Pass demo "
        />

        <Text>merhaba</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
