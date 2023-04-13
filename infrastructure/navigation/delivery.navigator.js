import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Delivery from "../../features/Delivery/delivery.screen";
import MapTracking from "../../features/MapTracking/mapTracking.screen";

const Stack = createStackNavigator();
// const screenOptions = {
//   ...TransitionPresets.ModalPresentationIOS,
// };

export const DeliveryNavigator = () => {
  return (
    <Stack.Navigator
      headerShown="false"
      //screenOptions={screenOptions}
      initialRouteName="Delivery"
    >
      <Stack.Screen name="Delivery" component={Delivery} />
      <Stack.Screen name="MapTracking" component={MapTracking} />
    </Stack.Navigator>
  );
};
