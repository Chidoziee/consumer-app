import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import ForgotPassword from "../../features/Authentication/ForgotPassword/forgotPassword.screen";
import NewPassword from "../../features/Authentication/NewPassword/newPassword.screen";
import BackEmail from "../../features/Authentication/BackEmail/backEmail.screen";
import Successful from "../../features/Authentication/Successful/successful.screen";

import GetStarted from "../../features/Authentication/GetStarted/getStarted.screen";
import Onboarding from "../../features/Authentication/Onboarding/onboarding.screen";
import SplashScreen from "../../features/Authentication/Splash/splash.screen";
import SignInAndCreateAccount from "../../features/Authentication/SignInAndCreateAccount/signInAndCreateAccount.screen"
// import { SplashScreen } from "../../features/Authentication/splash.screen";

const AuthenticationStack = createStackNavigator();
const screenOptions = {
  //   ...TransitionPresets.ModalPresentationIOS,
  headerShown: false,
};

export const AuthNavigator = () => {
  const { Navigator, Screen } = AuthenticationStack;

  return (
    <Navigator
      
      screenOptions={screenOptions}
      initialRouteName="Onboard"
    >
      {/* <AuthenticationStack.Screen name="Splash" component={SplashScreen} /> */}
      <Screen name="Onboard" component={Onboarding} />
      <Screen name="GetStarted" component={GetStarted} />
      <Screen name="ForgotPassword" component={ForgotPassword} />
      <Screen name="NewPassword" component={NewPassword} />
      <Screen name="BackEmail" component={BackEmail} />
      <Screen name="Successful" component={Successful} />
      <Screen
        name="SignInAndCreateAccount"
        component={SignInAndCreateAccount}
      />
    </Navigator>
  );
};
