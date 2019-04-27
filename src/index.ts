// tslint:disable origin-ordered-imports no-import-side-effect
import "./utils/setup";

import { Navigation } from "react-native-navigation";
import makeInspectable from "mobx-devtools-mst";

import { updateTheme } from "./utils/theme";
import { Screens, startApp } from "./screens";
import { UIStore } from "./stores/UIStore";
import { CounterStore } from "./stores/CounterStore";
import { MovieStore } from "./stores/MovieStore";

import { gestureHandlerRootHOC } from "react-native-gesture-handler";

import vars from "./utils/themevars.js";

// Register screens
Screens.forEach((ScreenComponent, key) =>
  Navigation.registerComponent(key, () =>
    gestureHandlerRootHOC(ScreenComponent)
  )
);

// Make inspectable

makeInspectable(UIStore);
makeInspectable(CounterStore);
makeInspectable(MovieStore);

export const defaultOptions = {
  topBar: {
    visible: false,
    drawBehind: true,
    animate: false
  },
  bottomTabs: {
    elevation: 18,
    titleDisplayMode: "alwaysShow",
    backgroundColor: vars.dark
  }
};

// Start application
Navigation.events().registerAppLaunchedListener(async () => {
  await UIStore.hydrate();
  await CounterStore.hydrate();
  await updateTheme();

  startApp();
});
