import * as React from "react";
import { View, Text, Image, StyleSheet, Platform } from "react-native";
import { observer } from "mobx-react";
import { Navigation } from "react-native-navigation";
import CodePush from "react-native-code-push";

import { UIStore } from "stores/UIStore";
import { codePushConfig } from "utils/code-push";
import { COUNTER, IScreen, HOME } from "screens";

import { Button } from "components/button/Button";
import firebase from "react-native-firebase";

const s = require("./Drawer.scss");

@CodePush(codePushConfig())
@observer
export class Drawer extends React.Component<IScreen> {
  static get options() {
    return {
      topBar: {
        title: {
          text: "Home"
        }
      }
    };
  }

  componentDidAppear() {
    UIStore.setComponentId(this.props.componentId);
  }

  onCounterScreenPress = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: HOME
      }
    });
  };

  push = () => {
    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        left: {
          visible: false
        }
      }
    });
  };

  render() {
    return (
      <View style={s.host} testID="HOME_SCREEN">
        <View style={s.content}>
          <Text style={s.text}>Drawer Menu</Text>
          <Button title="go" onPress={this.push} />
          <Button title="go" onPress={this.onCounterScreenPress} />
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
