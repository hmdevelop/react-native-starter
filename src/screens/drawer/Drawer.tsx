import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { observer } from "mobx-react";
import { Navigation } from "react-native-navigation";
import CodePush from "react-native-code-push";

import { UIStore } from "../../stores/UIStore";
import { codePushConfig } from "../../utils/code-push";
import { COUNTER, IScreen } from "../../screens";
import { Button } from "../../components/button/Button";

import { ListItem, Image } from "react-native-elements";

import { cards } from "../../mock/card";

const s = require("./Drawer.scss");

@CodePush(codePushConfig())
@observer
export class Drawer extends React.Component {
  static get options() {
    return {
      topBar: {
        title: {
          text: "Home"
        }
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
    // @ts-ignore
    UIStore.setComponentId(this.props.componentId);
  }

  public push = () => {
    // @ts-ignore
    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        left: {
          visible: false
        }
      }
    });
  };

  public push2 = screen => {
    // @ts-ignore
    Navigation.push(this.props.componentId, {
      component: {
        name: screen,
        options: {}
      }
    });
  };
  public render() {
    return (
      <View style={s.host} testID="HOME_SCREEN">
        <View style={s.content}>
          <Image style={s.profilpic} source={{ uri: cards[0].profilpic }} />
          <Text style={s.profilText}> {cards[0].username} </Text>
          {this.list.map((item, index) => (
            <View key={index} style={s.ListItem}>
              <Text style={s.Drawertext} onPress={() => this.push2(item.push)}>
                {item.title}
              </Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}
