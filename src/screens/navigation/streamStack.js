import { Navigation } from "react-native-navigation";

 
import { Screen2 } from "../screen2/Screen2";
 
// @ts-ignore
import vars from "../../utils/themevars.js";

 

 

export const Screens = new Map();

 
export const SCREEN2 = "ueno-rns.Screen2";
 

 
Screens.set(SCREEN2, Screen2);
 


export const    streamStack = {
              children: [
                {
                    component: {
                      name: SCREEN2,
                      passProps: {
                        text: "This is tab 2"
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
            }
          