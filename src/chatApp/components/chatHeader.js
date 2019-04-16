import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import ProgressiveImage from "./progressiveImage";
import colors from "../theme/colors";

export const ChatHeader = props => {
  return (
    <View
      style={{
        flexDirection: "row",
        elevation: 10,
        backgroundColor: colors.primary,
        alignItems: "center",
        paddingLeft: 4,
        paddingRight: 4,
        paddingTop: 10,
        paddingBottom: 4
      }}
    >
      <TouchableOpacity onPress={() => props.nav.goBack()}>
        <Icon name={"arrow-back"} color={colors.white} size={28} />
      </TouchableOpacity>
      <View
        style={{
          margin: 4,
          marginRight: 12,
          marginLeft: 12
        }}
      >
        <Image
          style={{ width: 60, height: 60, borderRadius: 30 }}
          source={{ uri: props.uri }}
          thumbnail={require("../img/profile.png")}
        />
      </View>
      <Text style={{ color: colors.white, fontSize: 20, fontWeight: "500" }}>
        {props.title}
      </Text>
    </View>
  );
};
