import React from "react";
import { Query } from "react-apollo";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  AsyncStorage
} from "react-native";

import { GET_ACTIVE_USER } from "./queries";

const sessionWrapperHOC = Component => props => (
  <Query query={GET_ACTIVE_USER}>
    {({ data, loading, refetch }) => {
      if (loading)
        return <Text style={{ textAlign: "center" }}>Loading...</Text>;

      console.log(data);
      return <Component {...props} refetch={refetch} session={data} />;
    }}
  </Query>
);

export default sessionWrapperHOC;
