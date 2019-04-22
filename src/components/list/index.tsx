import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";

import Comment from "../../components/comment";

export default class List extends Component {
  render() {
    const { RenderItem, componentId } = this.props;

    return (
      <View>
        <FlatList
          {...this.props}
          data={this.props.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <RenderItem componentId {...item} />}
        />
      </View>
    );
  }
}
