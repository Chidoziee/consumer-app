import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Orders from "../../features/Orders/orders.screen";
import OrderDetails from "../../features/Orders/order-details.screen";
import OrderStatus from "../../features/Orders/order-status.screen";

const Stack = createStackNavigator();
// const screenOptions = {
//   ...TransitionPresets.ModalPresentationIOS,
// };

export const OrderNavigator = () => {
  return (
    <Stack.Navigator
      headerShown="false"
      //screenOptions={screenOptions}
      initialRouteName="Orders"
    >
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="OrderDetails" component={OrderDetails} />
      <Stack.Screen name="OrderStatus" component={OrderStatus} />
    </Stack.Navigator>
  );
};
