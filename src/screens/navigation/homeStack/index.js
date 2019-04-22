import { Navigation } from "react-native-navigation";

import vars from "../../../utils/themevars.js";

export const HOME = "ueno-rns.Home";

export const COMMENTS = "ueno-rns.Comments";

export const SCREEN2 = "ueno-rns.Screen2";

export const homeStack = {
  children: [
    {
      component: {
        name: COMMENTS,
        passProps: {
          text: "This is tab 1",
          myFunction: () => "Hello from a function!"
        },
        options: {
          bottomTabs: {
            backgroundColor: vars.dark
          }
        }
      }
    },
    {
      component: {
        name: HOME,
        passProps: {
          text: "This is tab 1",
          myFunction: () => "Hello from a function!"
        },
        options: {
          bottomTabs: {
            backgroundColor: vars.dark
          }
        }
      }
    }
  ],
  options: {
    topBar: {
      visible: false
    },
    bottomTabs: {
      backgroundColor: vars.dark
    }
  }
};
