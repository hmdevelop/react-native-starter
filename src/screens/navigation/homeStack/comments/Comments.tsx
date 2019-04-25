import * as React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  Linking,
  ScrollView,
  TouchableOpacity,
  Button
} from "react-native";
import { observer } from "mobx-react";
import { Navigation } from "react-native-navigation";
import CodePush from "react-native-code-push";

import { UIStore } from "../../../../stores/UIStore";
import { codePushConfig } from "../../../../utils/code-push";

import Comment from "../../../../components/comment";
import { Card } from "../../../../components/card/Card";
import firebase from "react-native-firebase";

import { getVar } from "react-native-ueno-css-modules";
import { normalize } from "../../../../helpers/normalize.js";

const s = require("./Comments.scss");

import { comments, cards } from "../../../../mock";
import List from "../../../../components/list";

import { withProvider } from "../../../../helpers/homeProvider";

@CodePush(codePushConfig())
@observer
export class Comments2 extends React.Component<IScreen> {
  public componentDidAppear() {
    UIStore.setComponentId(this.props.componentId);
  }

  public onCounterScreenPress = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: "ueno-rns.Counter"
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
        name: "ueno-rns.Screen5",
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
          <Button onPress={this.onCounterScreenPress} title="counter" />
          <List data={comments} RenderItem={Comment} />
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
          <Image source={require("../../../../assets/quill.png")} />
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

// export const Comments = withOptions(Comments2, navOptions);
export const Comments = withProvider(Comments2);
