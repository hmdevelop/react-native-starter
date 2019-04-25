import * as React from "react";
import { View, Text } from "react-native";
import { observer } from "mobx-react";

import { UIStore } from "../../stores/UIStore";
import { codePushConfig } from "../../utils/code-push";
import { COUNTER, IScreen } from "../../screens";
import { Button } from "../../components/button/Button";
import { CounterStore } from "../../stores/CounterStore";

const s = require("./Counter.scss");

@observer
export class Counter extends React.Component<IScreen> {
  static get options() {
    return {
      topBar: {
        title: {
          text: "Counter"
        }
      },
      bottomTab: {
        text: "Tab 2",
        badge: "3",
        badgeColor: "red",
        testID: "bottomTabTestID",

        iconColor: "green",
        selectedIconColor: "blue",
        textColor: "red",
        selectedTextColor: "blue",

        fontSize: 10
      }
    };
  }

  public componentDidAppear() {
    UIStore.setComponentId(this.props.componentId);
  }

  public render() {
    return (
      <View style={s.counter} testID="COUNTER_SCREEN">
        <View style={s.counter__content}>
          <Text style={s.counter__text}>Counter: {CounterStore.counter}</Text>
        </View>

        <View style={s.counter__actions}>
          <Button
            title="Decrement"
            onPress={CounterStore.decrement}
            testID="BUTTON_DECREMENT"
            style={s.counter__button}
          />

          <Button
            title="name"
            onPress={CounterStore.setname("topal")}
            testID="BUTTON_DECREMENT"
            style={s.counter__button}
          />

          <View style={s.counter__spacer} />

          <Button
            title="Increment"
            onPress={CounterStore.increment}
            testID="BUTTON_INCREMENT"
            style={s.counter__button}
          />
        </View>
      </View>
    );
  }
}
