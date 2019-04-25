import React, { Component } from "react";
import { View, Text } from "react-native";

export function withOptions(WrappedComponent, options) {
  // ...and returns another component...
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <WrappedComponent optionss={options} {...this.props} />;
    }
  };
}
