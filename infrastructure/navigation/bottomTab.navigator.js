import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import {
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import { theme } from "../../infrastructure/theme";
import navigationTheme from "../theme/navigation-theme";

import { SafeArea } from "../../components/utility/safe-area.component";

//components for the HomeScreen Stack Navigator
import { HomeNavigator } from "./home.navigator";
import { NotificationNavigator } from "./notification.navigator";
import { OrderNavigator } from "./order.navigator";
import { FavouriteNavigator } from "./favourite.navigator";
import { DeliveryNavigator } from "./delivery.navigator";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const DeliveryScreen = () => {
  // return <ProductNavigator />;
  return <Text>Delivery</Text>;
};

const TAB_ICONS = {
  Home: "home",
  Orders: "shopping",
  Notification: "bell",
  Delivery: "truck-delivery",
  Favourite: "heart",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICONS[route.name];

  return {
    tabBarIcon: ({ size, color }) => (
      <MaterialCommunityIcons name={iconName} size={size} color={color} />
    ),
    headerShown: false,
    tabBarActiveBackgroundColor: theme.colors.white,
    tabBarActiveTintColor: theme.colors.primary,
  };
};

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Orders" component={OrderNavigator} />
      <Tab.Screen name="Notification" component={NotificationNavigator} />
      <Tab.Screen name="Delivery" component={DeliveryNavigator} />
      <Tab.Screen name="Favourite" component={FavouriteNavigator} />
    </Tab.Navigator>
  );
};
