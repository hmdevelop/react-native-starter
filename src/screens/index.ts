import { Navigation } from "react-native-navigation";

import { Home } from "./home/Home";
import { Counter } from "./counter/Counter";

export interface IScreen {
  componentId: string;
  testID?: string;
}

export const Screens = new Map();

export const HOME = "ueno-rns.Home";
export const COUNTER = "ueno-rns.Counter";

Screens.set(HOME, Home);
Screens.set(COUNTER, Counter);

export const startApp = () => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            name: COUNTER,
            passProps: {
              text: "This is a left side menu screen"
            }
          }
        },
        center: {
          component: {
            name: HOME
          }
        }
      }
    }
  });
};
