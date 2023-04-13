import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import FavouritesScreen from "../../features/Favourites/favourites.screen";

const FavouriteStack = createStackNavigator();
// const screenOptions = {
//   ...TransitionPresets.ModalPresentationIOS,
// };

export const FavouriteNavigator = () => {
  return (
    <FavouriteStack.Navigator
      headerShown="false"
      //screenOptions={screenOptions}
      initialRouteName="Favourites"
    >
      <FavouriteStack.Screen name="Favourites" component={FavouritesScreen} />
    </FavouriteStack.Navigator>
  );
};
