import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { SubscriptionClient } from "subscriptions-transport-ws";
import { WebSocketLink } from "apollo-link-ws";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { AsyncStorage } from "react-native";

const middlewareLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: AsyncStorage.getItem("token") || null
    }
  });
  return forward(operation);
});

const wsLink = new WebSocketLink(
  new SubscriptionClient("http://192.168.1.25:4001/graphql", {
    reconnect: true
  })
);

const httpLink = middlewareLink.concat(
  createHttpLink({
    uri: "http://192.168.1.25:4001/graphql"
  })
);

const hasSubscriptionOperation = ({ query: { definitions } }) => {
  return definitions.some(
    ({ kind, operation }) =>
      kind === "OperationDefinition" && operation === "subscription"
  );
};

const link = ApolloLink.split(hasSubscriptionOperation, wsLink, httpLink);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

export default client;
