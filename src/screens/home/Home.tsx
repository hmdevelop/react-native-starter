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

const s = require("./Home.scss");

@CodePush(codePushConfig())
@observer
export class Home extends React.Component<IScreen> {
  static get options() {
    return {
      topBar: {
        title: {
          text: "Home"
        }
      }
    };
  }

  state = { isAuthenticated: false };

  componentDidAppear() {
    UIStore.setComponentId(this.props.componentId);
  }

  onCounterScreenPress = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: COUNTER
      }
    });
  };

  pop = () => {
    Navigation.pop(this.props.componentId);
  };

  pushtocounter = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: "ueno-rns.Counter",
        passProps: {
          text: "Pushed screen"
        },
        options: {
          topBar: {
            title: {
              text: "Pushed screen title"
            }
          }
        }
      }
    });
  };

  fire = () => {
    window.alert("fire");
    firebase
      .auth()
      .signInAnonymously()
      .then(() => {
        this.setState({
          isAuthenticated: true
        });
      });
  };

  drawer = () => {
    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        left: {
          visible: true
        }
      }
    });
  };

  render() {
    const Banner = firebase.admob.Banner;
    const AdRequest = firebase.admob.AdRequest;
    const request = new AdRequest();
    const unitId =
      Platform.OS === "ios"
        ? "ca-app-pub-3940256099942544/2934735716"
        : "ca-app-pub-3940256099942544/6300978111";
    return (
      <View style={s.host} testID="HOME_SCREEN">
        <View style={s.content}>
          <Text style={s.text}>Welcome Home Rigel-Native-Eta</Text>
          <Button title="fire" onPress={this.fire} />
          <Text>{JSON.stringify(this.state.isAuthenticated)}</Text>
          <Banner
            unitId={unitId}
            size={"SMART_BANNER"}
            request={request.build()}
            onAdLoaded={() => {
              console.log("Advert loaded");
            }}
          />
        </View>
        <Button title="pop" onPress={this.pop} />
        <Button title="drawer" onPress={this.drawer} />
        <Button title="pushtocounter" onPress={this.onCounterScreenPress} />
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
