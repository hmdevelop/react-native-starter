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
import { defaultCipherList } from "constants";

import TimeAgo from "react-native-timeago";

// Timestamp can be any valid data type accepted in a Moment.js constructor
// Currently accepts string, number, array, or a Date instance

interface IProps {
  title: string;
  accessibilityLabel?: string;
  testID?: string;
  disabled?: boolean;
  style?: ViewStyle;
  hasTVPreferredFocus?: boolean;
  onPress?(event: GestureResponderEvent): void;
}

const s = require("./index.scss");

export default class Comment extends React.PureComponent<IProps> {
  public share = () => {
    const shareOptions = {
      title: "Share via",
      message: "some message",
      url: "some share url",
      social: Share.Social.WHATSAPP
    };
    Share.shareSingle(shareOptions);
  };

  public render() {
    const { username, profilpic, createdAt, body } = this.props;

    return (
      <View style={s.container}>
        <View style={s.header}>
          <View style={s.headerLeft}>
            <Image source={{ uri: profilpic }} style={s.headerImg} />
          </View>

          <View style={s.headerRight}>
            <View style={s.headerRightTop}>
              <Text style={s.headerRightTopText}>{username}</Text>
            </View>

            <View style={s.headerRightBottomText}>
              <Text style={s.headerRightBottomText}>
                <TimeAgo time={createdAt} />
              </Text>
            </View>
          </View>
        </View>

        <View style={s.body}>
          <Text style={s.bodyText}> {body}</Text>
        </View>
      </View>
    );
  }
}
{
  /* <View style={s.cardBody}>
<Text style={s.cardBodyText}>
  Coventry is a city with a thousand years of history that has
  plenty to offer the visiting tourist. Located in the heart of
  Warwickshire, which is well-known as Shakespeare’s county.
</Text>
</View> */
}
