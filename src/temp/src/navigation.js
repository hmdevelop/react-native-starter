// navigation.js
import { Navigation } from "react-native-navigation";

export const goToAuth = () =>
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: "BottomTabsId",
        children: [
          {
            component: {
              name: "SignIn",
              options: {
                bottomTab: {
                  fontSize: 12,
                  text: "Sign In",
                  icon: require("../../assets/Like.png")
                }
              }
            }
          },
          {
            component: {
              name: "SignUp",
              options: {
                bottomTab: {
                  text: "Sign Up",
                  fontSize: 12,
                  icon: require("../../assets/Like.png")
                }
              }
            }
          }
        ]
      }
    }
  });

export const goToAuth2 = () =>
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: "SignIn",
              options: {
                bottomTab: {
                  text: "Tab 2"
                }
              }
            }
          }
        ]
      }
    }
  });

export const goHome = () =>
  Navigation.setRoot({
    root: {
      stack: {
        id: "App",
        children: [
          {
            component: {
              name: "Home"
            }
          }
        ]
      }
    }
  });

export const goWalk = () =>
  Navigation.setRoot({
    root: {
      stack: {
        id: "App",
        children: [
          {
            component: {
              name: "Walk"
            }
          }
        ]
      }
    }
  });

export const goSignIn = () =>
  Navigation.setRoot({
    root: {
      stack: {
        id: "App",
        children: [
          {
            component: {
              name: "SignIn"
            }
          }
        ]
      }
    }
  });

export const goSignUp = () =>
  Navigation.setRoot({
    root: {
      stack: {
        id: "App",
        children: [
          {
            component: {
              name: "SignUp"
            }
          }
        ]
      }
    }
  });
