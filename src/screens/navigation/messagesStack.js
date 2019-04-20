import { Navigation } from "react-native-navigation";

 
import { Screen3 } from "../screen3/Screen3";
 
import { Screen5 } from "../screen5/Screen5";
 
import vars from "../../utils/themevars.js";

 
 

export const Screens = new Map();

 
export const SCREEN3 = "ueno-rns.Screen3";
 
export const SCREEN5 = "ueno-rns.Screen5";
 

 
Screens.set(SCREEN3, Screen3);
 
Screens.set(SCREEN5, Screen5);
 


export const    messagesStack = {
              children: [
                {
                  component: {
                    name: SCREEN3,
                    options: {
                      bottomTabs: {
                        backgroundColor: vars.dark
                      }
                    }
                  }
                },
                {
                  component: {
                    name: SCREEN5,
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
          