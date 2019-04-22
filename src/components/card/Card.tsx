import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  GestureResponderEvent,
  Platform,
  AccessibilityTrait,
  ViewStyle,
  Image
} from "react-native";
import Share from "react-native-share";
import TimeAgo from "react-native-timeago";

import { Navigation } from "react-native-navigation";
import { UIStore } from "../../stores/UIStore";

import { cards } from "../../mock/card";

const s = require("./Card.scss");

export class Card extends React.PureComponent {
  public share = () => {
    const shareOptions = {
      title: "Share via",
      message: "some message",
      url: "some share url",
      social: Share.Social.WHATSAPP
    };
    Share.shareSingle(shareOptions);
  };

  public componentDidAppear() {
    UIStore.setComponentId(this.props.componentId);
  }

  public push = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: "ueno-rns.Screen2",
        options: {}
      }
    });
  };

  public render() {
    const {
      username,
      profilpic,
      bodypic,
      createdAt,
      body,
      comments,
      likes,
      tag,
      push
    } = this.props;

    return (
      <View style={s.container}>
        <View>
          <Image style={s.cardImage} source={{ uri: bodypic }} />

          <View style={s.cardImageFooter}>
            <Image source={{ uri: profilpic }} style={s.cardImageUser} />

            <View style={s.cardImageUserName}>
              <Text style={s.cardImageUserNameText}>{username}</Text>
              <Text style={s.cardImageTimeAgo}>
                <TimeAgo time={createdAt} />
              </Text>
            </View>
          </View>
        </View>
        <View>
          <View style={s.bodyTop}>
            <Text style={s.bodyTopText}>{tag}</Text>
          </View>
          <View style={s.bodyMid}>
            <Text style={s.bodyMidText}>{body}</Text>
          </View>
          <View style={s.bodyFooter}>
            <View style={s.bodyFooterLeft}>
              <TouchableOpacity
                onPress={() => {
                  window.alert("Like");
                  console.log("Like");
                }}
              >
                <Image source={require("../../assets/Like.png")} />
              </TouchableOpacity>
              <Text style={s.bodyFooterLeftText}>{likes}</Text>
              <TouchableOpacity onPress={this.push}>
                <Image
                  style={{ marginLeft: 10 }}
                  source={require("../../assets/Comments.png")}
                />
              </TouchableOpacity>
              <Text style={s.bodyFooterLeftText}>{comments}</Text>
            </View>
            <View style={s.bodyFooterRight}>
              <TouchableOpacity onPress={this.share}>
                <Image
                  style={{ marginLeft: 10 }}
                  source={require("../../assets/Share.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
{
}
