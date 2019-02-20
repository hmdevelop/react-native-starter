import * as React from "react";
import { View, Text, Image } from "react-native";
import { observer } from "mobx-react";
import { Navigation } from "react-native-navigation";
import CodePush from "react-native-code-push";

import { UIStore } from "stores/UIStore";
import { codePushConfig } from "utils/code-push";
import { COUNTER, IScreen } from "screens";
import { Button } from "components/button/Button";
// @ts-ignore
import ImagePicker from "../../components/examples/ImagePicker.js";
// @ts-ignore
import Icon from "react-native-vector-icons/FontAwesome5";
import Video from "react-native-video";

const s = require("./Home.scss");

@CodePush(codePushConfig())
@observer
export class Home extends React.Component<IScreen> {
  static get options() {
    return {
      topBar: {
        title: {
          text: "Home"
        }
      }
    };
  }

  componentDidAppear() {
    UIStore.setComponentId(this.props.componentId);
  }

  onCounterScreenPress = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: COUNTER
      }
    });
  };

  videoError = (e: any) => {
    window.alert(JSON.stringify(e));
  };

  render() {
    return (
      <View style={s.host} testID="HOME_SCREEN">
        <Icon name="comments" size={30} color="#900" />
        <View style={s.content}>
          <Text style={s.text}>Welcome Home Rigel-Native-Beta</Text>
        </View>

        <Button onPress={this.onCounterScreenPress} title="Counter Screen" />
        <ImagePicker />
        <Video
          source={{
            uri:
              "https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_10mb.mp4"
          }} // Can be a URL or a local file.
          // @ts-ignore
          ref={ref => {
            // @ts-ignore
            this.player = ref;
          }} // Store reference
          onError={this.videoError} // Callback when video cannot be loaded
          style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0 }}
        />
      </View>
    );
  }
}
