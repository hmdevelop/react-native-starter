import { Navigation } from "react-native-navigation";

 


import {homeStack} from './homeStack'
import {messagesStack} from './messagesStack'
import {streamStack} from './streamStack'
import {notificationStack} from './notificationStack'
 


export const   center=  {
      bottomTabs: {
        topBar: {
          visible: false
        },
        backgroundColor: "blue",
        children: [
          {
            stack:homeStack
          },
          {
            stack:streamStack
          },
          {
            stack:messagesStack
          },
          {
            stack: notificationStack
          }
        ]
      }
    }
 