import React from "react";
import { View, Text, ImageBackground, Dimensions } from "react-native";

import colors from "../theme/colors";
import HeaderIcon from "./headerIcon";

export const Header = props => {
  return (
    <View style={{ backgroundColor: "#212530", paddingTop: 15 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <View style={{ flexDirection: "row" }}>
          {props.back ? (
            <HeaderIcon
              name={"arrow-back"}
              style={{ marginTop: 8, color: "#7E797B" }}
              onPress={() => props.nav.goBack()}
            />
          ) : (
            <View />
          )}
          <Text
            style={{
              color: "#7E797B",
              fontSize: 20,
              margin: 8,
              marginLeft: props.back ? 8 : 16,
              marginBottom: 16,
              fontWeight: "500"
            }}
          >
            {props.title}
          </Text>
        </View>
        {props.rightIcon ? (
          <HeaderIcon
            name={props.rightIcon}
            style={{ marginRight: 16, color: "#7E797B" }}
            onPress={() => props.nav.navigate("Profile")}
          />
        ) : (
          <View />
        )}
      </View>
    </View>
  );
};
