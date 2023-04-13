import * as React from "react";
import { Image } from "react-native";

import { AuthContainer, ImageIcon } from "./splash.styles";

export const SplashScreen = () => {
  return (
    <AuthContainer>
      <ImageIcon source={require("../../assets/logo.png")} />
    </AuthContainer>
  );
};

//export const Splash;
