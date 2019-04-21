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
import { defaultCipherList } from 'constants';

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

export default  class Comment extends React.PureComponent<IProps> {
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
    const {
      title,
      accessibilityLabel,
      disabled,
      style,
      onPress,
      hasTVPreferredFocus,
      testID
    } = this.props;
    const buttonStyles = [s.button];
    const textStyles = [s.text];
    const accessibilityTraits: AccessibilityTrait[] = ["button"];

    if (disabled) {
      buttonStyles.push(s.button__disabled);
      textStyles.push(s.text__disabled);
      accessibilityTraits.push("disabled");
    }

    return (
      <View style={s.container} >

          <View style={s.header} >
         
         
          <View style={s.headerLeft} >
    
          <Image
              source={require("../../assets/Oval.png")}
              style={s.headerImg}
            />


              </View>

              <View style={s.headerRight} >
              <View style={s.headerRightTop} >

               <Text style={s.headerRightTopText}>Augusta Welch</Text>
                  </View>

                  <View style={s.headerRightBottomText} >

                 <Text style={s.headerRightBottomText}>5 hours ago</Text>
                 </View>
              
         
              </View>

   
        </View>

        <View style={s.body}> 
         <Text style={s.text}> I am upset. At this moment,
         as I sit here typing this up, I am truly upset.
         Something happened a little while ago.</Text>
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
