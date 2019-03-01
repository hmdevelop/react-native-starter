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

const s = require("./Screen6.scss");

@CodePush(codePushConfig())
@observer
export class Screen6 extends React.Component<IScreen> {
  static get options() {
    return {
      topBar: {
        visible: true,
        background: {
          color: getVar(`primary`)
        },
        title: {
          text: "Screen6",
          fontSize: normalize(20),
          color: getVar(`white`),
          fontFamily: getVar(`font`)
        },
        backButton: {
          icon: require("../../assets/back.png"),
          visible: true,
          color: getVar(`white`)
        }
      },
      bottomTab: {
        text: "Screen6",

        testID: "bottomTabTestID",
        icon: require("../../assets/dog.png"),

        textColor: "#979191",
        selectedTextColor: getVar("white"),

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
          <Text style={s.text}>Screen6</Text>
          <Button
            title="Go back"
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
