import { Navigation } from "react-native-navigation";

import { Home } from "./home/Home";
import { Counter } from "./counter/Counter";
import { Drawer } from "./drawer/Drawer";
export interface IScreen {
  componentId: string;
  testID?: string;
}

export const Screens = new Map();

export const HOME = "ueno-rns.Home";
export const COUNTER = "ueno-rns.Counter";
export const DRAWER = "ueno-rns.Drawer";

Screens.set(HOME, Home);
Screens.set(COUNTER, Counter);
Screens.set(DRAWER, Drawer);

export const startApp = () => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            name: DRAWER,
            passProps: {
              text: "This is a left side menu screen"
            }
          }
        },
        center: {
          component: {
            name: HOME
          }
        },
        right: {
          component: {
            name: COUNTER,
            passProps: {
              text: "This is a right side menu screen"
            }
          }
        }
      }
    }
  });
};
