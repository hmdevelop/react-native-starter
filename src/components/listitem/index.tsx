import React, { Component } from "react";
import { Text, View, FlatList, Switch } from "react-native";

const s = require("./index.scss");

export default class ListItem extends Component {
  state = { switchValue: false };

  render() {
    const { title, val } = this.props;

    return (
      <View style={s.container}>
        <View style={s.left}>
          <Text style={s.text}>{title} </Text>
        </View>
        <View style={s.right}>
          {val && (
            <Switch
              thumbColor="#F77662"
              value={this.state.switchValue}
              onValueChange={e =>
                this.setState({ switchValue: !this.state.switchValue })
              }
            />
          )}
        </View>
      </View>
    );
  }
}
