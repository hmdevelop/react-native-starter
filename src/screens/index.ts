import { Navigation } from "react-native-navigation";

import { Home } from "./home/Home";
import { Screen2 } from "./screen2/Screen2";
import { Screen3 } from "./screen3/Screen3";
import { Screen4 } from "./screen4/Screen4";
import { Counter } from "./counter/Counter";
import { Drawer } from "./drawer/Drawer";
export interface IScreen {
  componentId: string;
  testID?: string;
}

export const Screens = new Map();

export const HOME = "ueno-rns.Home";
export const SCREEN2 = "ueno-rns.Screen2";
export const SCREEN3 = "ueno-rns.Screen3";
export const SCREEN4 = "ueno-rns.Screen4";
export const COUNTER = "ueno-rns.Counter";
export const DRAWER = "ueno-rns.Drawer";

Screens.set(HOME, Home);
Screens.set(SCREEN2, Screen2);
Screens.set(SCREEN3, Screen3);
Screens.set(SCREEN4, Screen4);
Screens.set(COUNTER, Counter);
Screens.set(DRAWER, Drawer);

export const startApp = () => {
  Navigation.setRoot({
    root: {
      backButton: {
        visible: true
      },
      sideMenu: {
        left: {
          width: 100,
          height: 270,
          visible: true,
          enabled: true,
          component: {
            name: DRAWER,
            passProps: {
              text: "This is a left side menu screen"
            }
          }
        },
        center: {
          bottomTabs: {
            animate: true,
            visible: true,
            currentTabIndex: 1,
            drawBehind: false,
            children: [
              {
                component: {
                  name: HOME,
                  passProps: {
                    text: "This is tab 1",
                    myFunction: () => "Hello from a function!"
                  }
                }
              },
              {
                component: {
                  name: SCREEN2,
                  passProps: {
                    text: "This is tab 2"
                  }
                }
              },
              {
                component: {
                  name: SCREEN3,
                  passProps: {
                    text: "This is tab 2"
                  }
                }
              },
              {
                component: {
                  name: SCREEN4,
                  passProps: {
                    text: "This is tab 2"
                  }
                }
              }
            ]
          }
        }
      }
    }
  });
};
