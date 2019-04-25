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
import listitem from "../../components/listitem";
import ListItem from "../../components/listitem";
import { joinJsonPath } from "mobx-state-tree";

@CodePush(codePushConfig())
@observer
export class Home extends React.Component<IScreen> {
  public componentDidAppear() {
    UIStore.setComponentId(this.props.componentId);
  }

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
          <Text onPress={this.props.myFunction}> {this.props.text}</Text>

          <List
            funcs={[this.push]}
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
