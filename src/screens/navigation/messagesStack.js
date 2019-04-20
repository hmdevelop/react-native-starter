import { Navigation } from "react-native-navigation";
 
 
import vars from "../../utils/themevars.js";

 
 

 

 
export const SCREEN3 = "ueno-rns.Screen3";
 
export const SCREEN5 = "ueno-rns.Screen5";
 
 
 


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
          