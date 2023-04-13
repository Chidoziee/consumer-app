import React from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { SplashImage,PageContainer } from "./splash.styles";
import Logo from "../../../assets/logo.png";

const SplashScreen = () => {
 
  return (
    <SafeArea showStatusBar={true}>
      <PageContainer justifyContent="center">
        <SplashImage source={Logo} resizeMode="contain" />
      </PageContainer>
    </SafeArea>
  );
};

export default SplashScreen;
