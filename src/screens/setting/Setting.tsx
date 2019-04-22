import * as React from "react";
import { View, Text, Image, StyleSheet, Platform, Switch } from "react-native";
import { observer } from "mobx-react";
import { Navigation } from "react-native-navigation";
import CodePush from "react-native-code-push";

import { UIStore } from "../../stores/UIStore";
import { codePushConfig } from "../../utils/code-push";
import { COUNTER, IScreen } from "../../screens";
import { Button } from "../../components/button/Button";
import firebase from "react-native-firebase";

import { getVar } from "react-native-ueno-css-modules";
import { normalize } from "../../helpers/normalize.js";

const s = require("./Setting.scss");
import ListItem from "../../components/listitem";

@CodePush(codePushConfig())
@observer
export class Setting extends React.Component<IScreen> {
  static get options() {
    return {
      topBar: {
        visible: true,
        background: {
          color: getVar(`pdark`)
        },
        title: {
          text: "Settings",
          fontSize: normalize(20),
          color: getVar("white_"),
          fontFamily: getVar(`font`)
        },
        backButton: {
          icon: require("../../assets/back.png"),
          visible: true,
          color: getVar("white_")
        }
      },
      bottomTab: {
        text: "Screen6",

        testID: "bottomTabTestID",
        icon: require("../../assets/dog.png"),
        iconColor: "#979191",
        textColor: "#979191",
        selectedTextColor: "#F54B64",
        selectedIconColor: "#F54B64",

        fontSize: normalize(10)
      }
    };
  }

  public list = [
    {
      id: 1,
      title: "User Profile",
      push: "ueno-rns.Profile"
    },
    {
      id: 2,
      title: "Settings",
      push: "ueno-rns.Settings"
    },
    {
      id: 3,
      title: "Send Us",
      push: "ueno-rns.SendUs"
    }
  ];

  public componentDidAppear() {
    UIStore.setComponentId(this.props.componentId);
  }
  public push = () => {
    Navigation.pop(this.props.componentId);
  };

  public render() {
    return (
      <View style={s.host} testID="HOME_SCREEN">
        <View style={s.content}>
          {this.list.map((item, index) => (
            <ListItem key={index} title={item.title} val />
          ))}
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
