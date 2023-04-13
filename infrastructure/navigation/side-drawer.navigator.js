import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CustomSidebarMenu } from "../../components/SideDrawer/side-drawer.screen";
import { BottomTabNavigator } from "./bottomTab.navigator";
import { Text } from "react-native";

const SideDrawer = createDrawerNavigator();

export const SideDrawerNavigator = () => {
  const { Navigator, Screen } = SideDrawer;
  return (
    <Navigator
      headerShown="false"
      initialRouteName="Home"
      drawerContent={(props) => <CustomSidebarMenu {...props} />}
      drawerStyle={{ backgroundColor: "transparent" }}
      options={{
        title: "Home",
      }}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="BottomTabNavigator" component={BottomTabNavigator} />
    </Navigator>
  );
};
