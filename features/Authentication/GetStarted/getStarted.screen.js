import React, { useState } from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Header } from "../../../components/header/header.component";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../infrastructure/theme/colors";
import {
  PageContainer,
  ContentContainer,
  Title,
  SubText,
  TermsAgreementText,
  Links,
} from "./getStarted.styles";
import {
  Spacer,
  GroupedSpacer,
} from "../../../components/spacer/spacer.component";
import ButtonContainer from "../../../components/button/button.component";
import { Group } from "../../../assets/Icons";


const GetStarted = ({ navigation }) => {

  return (
    <SafeArea showStatusBar={true}>
      <PageContainer height="100%" paddingHorizontal paddingVertical="20">
       
        <ContentContainer justifyContent="center" paddingHorizontal width="80%">
          <Group height="30%" width="100%" />
          <GroupedSpacer />
          <GroupedSpacer />
          <Title variant="h5">Welcome</Title>
          <Spacer />
          <SubText variant="smallBody">
            Before enjoying Crunchies services Please register first
          </SubText>
        </ContentContainer>

        <Spacer size="large" position="top" />
        <ButtonContainer text="Create Account" onPress={()=>{navigation.navigate("SignInAndCreateAccount")}} />

        <Spacer size="large" position="top" />
        <ButtonContainer
          onPress={() => {
            navigation.navigate("SignInAndCreateAccount")
          }}
          text="Sign In"
          backgroundColor={colors.bg.darkOrange}
          color={colors.primary}
        />
        <Spacer size="medium" position="top" />
        <TermsAgreementText variant="small">
          By logging in or registering, you have agreed to the{" "}
          <Links variant="small">Terms and Conditions</Links> and{" "}
          <Links variant="small">Privacy Policy.</Links>
        </TermsAgreementText>
      </PageContainer>
    </SafeArea>
  );
};

export default GetStarted;

// PaymentMethod.defaultProps = {};
