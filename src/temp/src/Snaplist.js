import React from "react";
import { Query } from "react-apollo";
import { GET_SNAPS } from "./queries";
import { Text, View } from "react-native";

const SnapList = () => (
  <View>
    <Query query={GET_SNAPS}>
      {({ data, subscribeToMore, loading, error }) => {
        if (loading) return <Text className="loading">Loading snaps...</Text>;
        if (error) return <Text>Error.</Text>;
        console.log(data);
        return <Text> {data.snaps[0].id}</Text>;
      }}
    </Query>
  </View>
);

export default SnapList;
