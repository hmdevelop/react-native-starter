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
        <View style={s.c}>
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
            </View>
          </View>
        </View>
      </View>
    );
  }
}
