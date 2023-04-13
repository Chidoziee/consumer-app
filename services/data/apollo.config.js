import "react-native-gesture-handler";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

//ApolloClient utilities
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";
import { createUploadLink } from "apollo-upload-client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  createHttpLink,
} from "@apollo/client";

//message component
import ShowMessage, {
  type,
} from "../../components/showMessage/show-message.component";
import { CREDENTIALS } from "./creds.config";

const { Deployment_URL, Deployment_URL_Sub } = CREDENTIALS;

//DEMO CODE, REMOVE LATER
// const httpLink = createHttpLink({
//   uri: "https://server.myinventhub.com/graphql",
// });

// const authLink = setContext(async (_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = await AsyncStorage.getItem("token");

//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       token: token ? token : "",
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

// export const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

//MAIN CODE
//configure the InMemoryCache
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        getCartItems: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        getAllStoreNotification: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        getPurchaseCartItems: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        filterPlacedOrderDetails: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        dashboardQuery: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        dashboardQuery: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

//configure the Authentication Link
const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = await AsyncStorage.getItem("token");

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      token: token ? token : "",
    },
  };
});

//configure WebSockets for realtime subscriptions
const wsLink = new WebSocketLink({
  uri: __DEV__
    ? // ? "ws://192.168.43.99:3000/sub"
      `wss://${Deployment_URL_Sub}/sub`
    : `wss://${Deployment_URL_Sub}/sub`,
  options: {
    reconnect: true,
  },
});

//configure the ApolloClient instance
export const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError, operation }) => {
      if (
        graphQLErrors &&
        operation.query.definitions[0].operation === "mutation"
      ) {
        graphQLErrors.map(({ message }) => {
          if (message !== "Device already exist") {
            ShowMessage(type.ERROR, message);
          }
        });
        return;
      }
      if (operation.query.definitions[0].operation === "mutation") {
        ShowMessage(type.ERROR, "Network error");
      }
      if (networkError) {
        ShowMessage(type.ERROR, "Network error");
      }
      if (graphQLErrors) {
        console.log(graphQLErrors[0].message, graphQLErrors);
        // ShowMessage(type.ERROR, 'graphQLErrors');
      }
    }),
    authLink,
    ApolloLink.split(
      // split based on operation type
      ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return kind === "OperationDefinition" && operation === "subscription";
      },
      wsLink,
      createUploadLink({
        uri: __DEV__
          ? // ? `http://192.168.43.47:3002/graphql`
            "https://server.myinventhub.com/graphql"
          : "https://server.myinventhub.com/graphql",
        credentials: "include",
      })
    ),
  ]),
  cache,
});
