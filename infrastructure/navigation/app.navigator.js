import React, { useMemo, useEffect, useReducer, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import { AuthNavigator } from "./auth.navigator";
import { HomeNavigator } from "./home.navigator";
import { BottomNavigation } from "../../components/BottomNavigation/bottomNavigation";
import { SideDrawerNavigator } from "./side-drawer.navigator";
import SplashScreen from "../../features/Authentication/Splash/splash.screen";

export const AppNavigator = () => {
  const initialState = {
    showSplashScreen: true,
    showOnboarding: false,
    userToken: null,
    accountType: null,
  };

  //CREATE AUTHREDUCER
  const authReducer = (prevState, action) => {
    switch (action.type) {
      case "SHOW_ONBOARDING":
        return {
          ...prevState,
          showSplashScreen: false,
          showOnboarding: true,
          userToken: null,
          accountType: null,
        };
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          showSplashScreen: false,
          showOnboarding: false,
          userToken: action.token,
          accountType: action.accountType,
        };
      case "LOGIN":
        return {
          ...prevState,
          showSplashScreen: false,
          showOnboarding: false,
          accountType: action.accountType,
          userToken: action.token,
        };
      case "SIGNOUT":
        return {
          ...prevState,
          userToken: null,
          accountType: null,
          showSplashScreen: false,
          showOnboarding: false,
        };
    }
  };

  // SET UP USEREDUCER
  const [authState, dispatch] = useReducer(authReducer, initialState);

  const get = async () => {
    let userToken = null;
    let accountType = null;

    //demo code, remove later and uncomment below
    setTimeout(async () => {
      dispatch({ type: "SHOW_ONBOARDING" });
    }, 5000);

    // try {
    //   userToken = await AsyncStorage.getItem("token");
    //   accountType = await AsyncStorage.getItem("accountType");
    // } catch (e) {
    //   ShowMessage(type.ERROR, "There was error");
    // }
    // dispatch({ type: "RETRIEVE_TOKEN", token: userToken, accountType });
  };

  useEffect(() => {
    //SplashScreen.hide();
    get();
  }, []);

  // if (authState.showSplashScreen) {
  //   return <SplashScreen />;
  // }

  // if (authState.showOnboarding) {
  //   return null;
  // }

  // const {navigate} = this.props.navigation;

  // setTimeout(() => {
  //     navigate('Login'); //this.props.navigation.navigate('Login')
  // }, 5000);

  return (
    <NavigationContainer>
      {/* <AuthNavigator /> */}
      <SideDrawerNavigator />
    </NavigationContainer>
  );
};


