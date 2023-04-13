import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Home from "../../features/Home/home.screen";
import AllProducts from "../../features/AllProducts/allProducts.screen";
import AllRestaurant from "../../features/AllRestaurants/allRestaurants.screen";
import DishDetails from "../../features/DishDetails/dishDetails.screen";
import Cart from "../../features/Cart/cart.screen";
import Checkout from "../../features/Checkout/checkout.screen";
import PaymentSuccess from "../../features/PaymentSuccess/paymentSuccess.screen";
import RestaurantMenu from "../../features/RestaurantsMenu/restaurantMenu.screeen";
import PaymentMethod from "../../features/PaymentMethod/paymentMethod.screen";
import UserProfile from "../../features/UserProfile/UserProfile.screen";

const Stack = createStackNavigator();
// const screenOptions = {
//   ...TransitionPresets.ModalPresentationIOS,
// };

export const HomeNavigator = () => {
  return (
    <Stack.Navigator
      headerShown="false"
      //screenOptions={screenOptions}
      initialRouteName="Orders"
    >
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="AllProducts" component={AllProducts} />
      <Stack.Screen name="AllRestaurant" component={AllRestaurant} />
      <Stack.Screen name="DishDetails" component={DishDetails} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="PaymentSuccess" component={PaymentSuccess} />
      <Stack.Screen name="RestaurantMenu" component={RestaurantMenu} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
      <Stack.Screen name="UserProfile" component={UserProfile} />
    </Stack.Navigator>
  );
};
