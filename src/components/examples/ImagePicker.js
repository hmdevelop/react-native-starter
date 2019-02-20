import React, { Component } from "react";
import { View, Text, Button, Image } from "react-native";
import ImagePicker from "react-native-image-picker";

const options = {
  title: "Select Avatar",
  customButtons: [{ name: "fb", title: "Choose Photo from Facebook" }],
  storageOptions: {
    skipBackup: true,
    path: "images"
  }
};

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: { uri: "" }
    };
  }

  pick = () => {
    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source
        });
      }
    });
  };

  render() {
    return (
      <View>
        <Image
          source={this.state.avatarSource}
          style={{ width: 300, height: 200 }}
        />
        <Button onPress={this.pick} title="Image Picker" />
      </View>
    );
  }
}
