import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  GestureResponderEvent,
  Platform,
  AccessibilityTrait,
  ViewStyle,
  Image,
} from 'react-native';

interface IProps {
  title: string;
  accessibilityLabel?: string;
  testID?: string;
  disabled?: boolean;
  style?: ViewStyle;
  hasTVPreferredFocus?: boolean;
  onPress?(event: GestureResponderEvent): void;
}

const s = require('./Card.scss');

export class Card extends React.PureComponent<IProps> {
  public render() {
    const {
      title,
      accessibilityLabel,
      disabled,
      style,
      onPress,
      hasTVPreferredFocus,
      testID,
    } = this.props;
    const buttonStyles = [s.button];
    const textStyles = [s.text];
    const accessibilityTraits: AccessibilityTrait[] = ['button'];

    if (disabled) {
      buttonStyles.push(s.button__disabled);
      textStyles.push(s.text__disabled);
      accessibilityTraits.push('disabled');
    }

    const Touchable: any =
      Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
    const titleLabel =
      Platform.OS === 'android' ? title.toLocaleUpperCase() : title;

    return (
      <View style={s.container}>
        <View>
          <Image
            style={s.cardImage}
            source={require('../../assets/postImg.png')}
          />

          <View style={s.cardImageFooter}>
            <Image
              source={require('../../assets/User.png')}
              style={s.cardImageUser}
            />

            <View style={s.cardImageUserName}>
              <Text style={s.cardImageUserNameText}>Pearl Freeman</Text>
              <Text style={s.cardImageTimeAgo}>2 hours ago</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={s.bodyTop}>
            <Text style={s.bodyTopText}>#relax, #travel</Text>
          </View>
          <View style={s.bodyMid}>
            <Text style={s.bodyMidText}>
              Coventry is a city with a thousand years of history that has
              plenty to offer the visiting tourist. Located in the heart of
              Warwickshire, which is well-known as Shakespeare’s county.
            </Text>
          </View>
          <View style={s.bodyFooter}>
            <View style={s.bodyFooterLeft}>
              <Image source={require('../../assets/Like.png')} />
              <Text style={s.bodyFooterLeftText}>1125</Text>
              <Image
                style={{ marginLeft: 10 }}
                source={require('../../assets/Comments.png')}
              />
              <Text style={s.bodyFooterLeftText}>1125</Text>
            </View>
            <View style={s.bodyFooterRight}>
              <Image
                style={{ marginLeft: 10 }}
                source={require('../../assets/Share.png')}
              />
            </View>
          </View>
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
