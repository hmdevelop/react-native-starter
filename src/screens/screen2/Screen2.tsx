import * as React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  TextInput,
  ScrollView
} from "react-native";
import { observer } from "mobx-react";
import { Navigation } from "react-native-navigation";
import CodePush from "react-native-code-push";

import { UIStore } from "../../stores/UIStore";
import { codePushConfig } from "../../utils/code-push";
import { COUNTER, IScreen } from "../../screens";
import { Button } from "../../components/button/Button";
import firebase from "react-native-firebase";

import { CounterStore } from "../../stores/CounterStore";

import { getVar } from "react-native-ueno-css-modules";

import { normalize } from "../../helpers/normalize.js";

const s = require("./Screen2.scss");

@CodePush(codePushConfig())
@observer
export class Screen2 extends React.Component<IScreen> {
  state = {
    text: "",
    movies: []
  };

  static get options() {
    return {
      topBar: {
        title: {
          text: "Screen2"
        }
      },
      bottomTab: {
        text: "Streams",

        badgeColor: "red",
        testID: "bottomTabTestID",
        icon: require("../../assets/Streams.png"),

        iconColor: "#979191",
        textColor: "#979191",
        selectedTextColor: "#F54B64",
        selectedIconColor: "#F54B64",
        fontSize: normalize(10)
      },
      bottomTabs: {
        elevation: 8, // BottomTabs elevation in dp
        titleDisplayMode: "alwaysShow" // Sets the title state for each tab.
      }
    };
  }

  public componentDidAppear() {
    UIStore.setComponentId(this.props.componentId);
  }
  public getMoviesFromApiAsync = async () => {
    const data = await fetch(
      "https://facebook.github.io/react-native/movies.json"
    );

    const veri = JSON.parse(data._bodyText);
    console.log(veri);
    this.setState({ movies: veri.movies });
  };

  cars = ["lkjk", "lkjklj"];
  public render() {
    return (
      <View style={s.host} testID="HOME_SCREEN">
        <ScrollView>
          <View style={s.content}>
            <Text style={s.text}>Screen2</Text>
            <Text style={s.counter__text}>Counter: {CounterStore.counter}</Text>
            <Text style={s.counter__text}>Counter: {CounterStore.name}</Text>
            <Text style={s.text}>Streams</Text>
            <TextInput
              style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
              onChangeText={text => this.setState({ text })}
              value={this.state.text}
            />

            <Button
              onPress={() => CounterStore.setcars({ brand: this.state.text })}
              title="cars"
            />
            <Button onPress={this.getMoviesFromApiAsync} title="Fetch" />
            {console.log(this.state)}

            {this.state.movies.map(item => (
              <Text key={item} style={s.text}>
                {item.title}
              </Text>
            ))}
            {CounterStore.cars
              .slice()
              .reverse()
              .map(item => (
                <Text key={item} style={s.text}>
                  {item.brand}
                </Text>
              ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  absolute: {
    width: 300,
    height: 100
  }
});
