import * as React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  Linking,
  ScrollView,
  Button,
  TouchableOpacity
} from "react-native";
import { observer } from "mobx-react";
import { Navigation } from "react-native-navigation";
import CodePush from "react-native-code-push";

import { UIStore } from "../../stores/UIStore";
import { codePushConfig } from "../../utils/code-push";
import { COUNTER, IScreen } from "../../screens";
import Comment from "../../components/comment";
import { Card } from "../../components/card/Card";
import firebase from "react-native-firebase";

import { getVar } from "react-native-ueno-css-modules";
import { normalize } from "../../helpers/normalize.js";

const s = require("./Home.scss");

import { comments, cards } from "../../mock";
import List from "../../components/list";

@CodePush(codePushConfig())
@observer
export class Home extends React.Component<IScreen> {
  static get options() {
    return {
      drawBehind: true,

      bottomTab: {
        text: "Home",

        badgeColor: "red",
        testID: "bottomTabTestID",
        icon: require("../../assets/Home.png"),
        iconColor: "#979191",
        textColor: "#979191",
        selectedTextColor: "#F54B64",
        selectedIconColor: "#F54B64",
        fontSize: normalize(10)
      },
      bottomTabs: {
        elevation: 8, // BottomTabs elevation in dp
        titleDisplayMode: "alwaysShow" // Sets the title state for each tab.
      }
    };
  }

  public componentDidAppear() {
    UIStore.setComponentId(this.props.componentId);
  }

  public onCounterScreenPress = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: COUNTER
      }
    });
  };

  public drawer = () => {
    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        left: {
          visible: true
        }
      }
    });
  };

  public _goToURL = () => {
    Linking.openURL("https://github.com/hmdevelop/rigel-app");
  };

  public push = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: "ueno-rns.Comments",
        options: {}
      }
    });
  };

  public render() {
    const comment = comments[0];

    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          style={s.host}
          contentContainerStyle={{ alignItems: "center" }}
          testID="HOME_SCREEN"
        >
          <List
            data={cards}
            RenderItem={Card}
            componentId={this.props.componentId}
          />
        </ScrollView>
        <TouchableOpacity
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            position: "absolute",
            bottom: 30,
            right: 15
          }}
          onPress={this.push}
        >
          <Image source={require("../../assets/quill.png")} />
        </TouchableOpacity>
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
