import { Navigation } from "react-native-navigation";

import React from "react";

import { Provider as MobxProvider } from "mobx-react";

import { ApolloProvider } from "react-apollo";

import stores from "../../chatApp/store";
import client from "./ApolloClient";

const addStore = (Component, ...props) => {
  return class App extends React.Component {
    render() {
      return (
        <MobxProvider {...stores}>
          <ApolloProvider client={client}>
            <Component
              {...{
                ...this.props,
                ...props
              }}
            />
          </ApolloProvider>
        </MobxProvider>
      );
    }
  };
};

export function registerScreens() {
  Navigation.registerComponent("Home", () => require("./Home").default);
  Navigation.registerComponent(
    "Initializing",
    sc => require("./Initializing").default
  );

  Navigation.registerComponent("Screen2", () => require("./Screen2").default);
  Navigation.registerComponent("Walk", () => require("./Walk").default);
  Navigation.registerComponent("Chat", () =>
    addStore(require("../../chatApp/screens/chat").default)
  );

  Navigation.registerComponent("Conversations", () =>
    addStore(require("../../chatApp/screens/conversations").default)
  );

  Navigation.registerComponent("Splash", () =>
    addStore(require("../../chatApp/screens/splash").default)
  );

  Navigation.registerComponent("Contacts", () =>
    addStore(require("../../chatApp/screens/contacts").default)
  );

  Navigation.registerComponent("Register", () =>
    addStore(require("../../chatApp/screens/register").default)
  );

  Navigation.registerComponent("Verify", () =>
    addStore(require("../../chatApp/screens/verify").default)
  );

  Navigation.registerComponent("Profile", () =>
    addStore(require("../../chatApp/screens/profile").default)
  );
}

Navigation.registerComponent("SignIn", () =>
  addStore(require("./SignIn").default)
);

Navigation.registerComponent("SignUp", () =>
  addStore(require("./SignUp").default)
);
