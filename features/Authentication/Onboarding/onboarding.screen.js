import React from "react";
import { View, Text } from "react-native";
import OnboardingPages from "./onBoardingPages/onboardingPages.screen";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Container } from "./onboarding.styles";

const Onboarding = ({navigation}) => {
  return (
    <SafeArea showStatusBar={true}>
      <Container >
        <OnboardingPages navigation={navigation}/>
      </Container>
    </SafeArea>
  );
};

export default Onboarding;
