import vars from "../../../utils/themevars.js";

export const HOME = "ueno-rns.Home";

export const COMMENTS = "ueno-rns.Comments";

export const SCREEN2 = "ueno-rns.Screen2";

export const homeStack = {
  topBar: {
    visible: false
  },
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
          text: "merhaba",
          myFunction: () => console.warn("Hello from a function!")
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

export const navOptions = {
  bottomTab: {
    text: "Home",
    badgeColor: "red",
    testID: "bottomTabTestID",
    icon: require("../../../assets/Home.png"),
    iconColor: "#979191",
    textColor: "#979191",
    selectedTextColor: "#F54B64",
    selectedIconColor: "#F54B64",
    fontSize: 10
  },
  bottomTabs: {
    elevation: 8, // BottomTabs elevation in dp
    titleDisplayMode: "alwaysShow" // Sets the title state for each tab.
  },
  topBar: {
    visible: false,
    drawBehind: true
  }
};
