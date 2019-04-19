import * as React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  FlatList
} from "react-native";
import { observer } from "mobx-react";
import { Navigation } from "react-native-navigation";
import CodePush from "react-native-code-push";

import { UIStore } from "../../stores/UIStore";
import { codePushConfig } from "../../utils/code-push";
import { COUNTER, IScreen } from "../../screens";
import { Button } from "../../components/button/Button";
import firebase from "react-native-firebase";
import { ListItem } from "react-native-elements";
import { getVar } from "react-native-ueno-css-modules";

import { normalize } from "../../helpers/normalize.js";

import Chat from "../../chatApp/App";

const list = [
  {
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Vice President"
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman"
  }
];

const s = require("./Screen3.scss");

@CodePush(codePushConfig())
@observer
export class Screen3 extends React.Component<IScreen> {
  static get options() {
    return {
      bottomTab: {
        text: "Messages",
        badge: "2",
        badgeColor: "#F54B64",
        testID: "bottomTabTestID",
        icon: require("../../assets/Messages.png"),

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

  public keyExtractor = (item, index) => index;

  public renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      subtitle={item.subtitle}
      leftAvatar={{ source: { uri: item.avatar_url } }}
    />
  );

  public componentDidAppear() {
    UIStore.setComponentId(this.props.componentId);
  }

  public render() {
    return (
      <View style={s.host} testID="HOME_SCREEN">
        <Chat />
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
