import React, { Component } from "react";
import { View, Text } from "react-native";

import style from "../theme/index";
import { loadKey } from "../utils/db";
import { inject } from "mobx-react";
import { Navigation } from "react-native-navigation";

@inject("User")
@inject("Conversation")
@inject("Contact")
@inject("Chat")
class Spalsh extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    loadKey((err, result) => {
      if (result) {
        this.props.User.key = result;
        this.props.Conversation.key = result;
        this.props.Contact.key = result;
        this.props.Chat.userKey = result;

        Navigation.push(this.props.componentId, {
          component: {
            name: "Conversation"
          }
        });
      }
      Navigation.push(this.props.componentId, {
        component: {
          name: "Register"
        }
      });
    });
  }

  render() {
    return (
      <View
        style={[
          style.container,
          { justifyContent: "center", alignItems: "center" }
        ]}
      >
        <Text>Loading</Text>
      </View>
    );
  }
}

export default Spalsh;
