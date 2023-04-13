import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import NotificationsScreen from "../../features/Notifications/notificationsScreen";
const OrderStack = createStackNavigator();
// const screenOptions = {
//   ...TransitionPresets.ModalPresentationIOS,
// };

export const NotificationNavigator = () => {
  return (
    <OrderStack.Navigator
      headerShown="false"
      //screenOptions={screenOptions}
      initialRouteName="NotificationsScreen"
    >
      <OrderStack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
      />
    </OrderStack.Navigator>
  );
};
