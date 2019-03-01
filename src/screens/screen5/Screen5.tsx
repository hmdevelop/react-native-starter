import * as React from "react";
import { View, Text, Image, StyleSheet, Platform } from "react-native";
import { observer } from "mobx-react";
import { Navigation } from "react-native-navigation";
import CodePush from "react-native-code-push";

import { UIStore } from "stores/UIStore";
import { codePushConfig } from "utils/code-push";
import { COUNTER, IScreen } from "screens";
import { Button } from "components/button/Button";
import firebase from "react-native-firebase";

import { getVar } from "react-native-ueno-css-modules";

import { normalize } from "../../helpers/normalize.js";
const s = require("./Screen5.scss");

@CodePush(codePushConfig())
@observer
export class Screen5 extends React.Component<IScreen> {
  static get options() {
    return {
      topBar: {
        title: {
          text: "Screen5"
        }
      },
      bottomTab: {
        text: "Screen5",

        testID: "bottomTabTestID",
        icon: require("../../assets/dog.png"),

        textColor: "#979191",
        selectedTextColor: getVar("white_"),

        fontSize: normalize(10)
      }
    };
  }

  componentDidAppear() {
    UIStore.setComponentId(this.props.componentId);
  }
  push = () => {
    Navigation.pop(this.props.componentId);
  };

  render() {
    return (
      <View style={s.host} testID="HOME_SCREEN">
        <View style={s.content}>
          <Text style={s.text}>Screen5</Text>
          <Button
            title="Go to screen4"
            onPress={this.push}
            style={s.counter__button}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  absolute: {
    width: 300,
    height: 100
  }
});
