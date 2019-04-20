import { Navigation } from "react-native-navigation";

 
 
// @ts-ignore
import vars from "../../utils/themevars.js";

 
 
 

 
export const SCREEN4 = "ueno-rns.Screen4";
export const SCREEN5 = "ueno-rns.Screen5";
 
 
 



export const    notificationStack = {
              children: [
                {
                    component: {
                      name: SCREEN5,
                      options: {
                        bottomTabs: {
                          backgroundColor: vars.dark
                        }
                      }
                    }
                  },
                  {
                    component: {
                      name: SCREEN4,
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
          