import React from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { colors } from "../../../infrastructure/theme/colors";
import {
  PageContainer,
  ContentContainer,
  Wrapper,
  Title,
  SubText,
  TermsAgreementText,
  Links,
} from "./forgotPassword.styles";
import {
  Spacer,
  GroupedSpacer,
} from "../../../components/spacer/spacer.component";
import ButtonContainer from "../../../components/button/button.component";
import TextInputContainer from "../../../components/textInput/textInput.component";

const ForgotPassword = ({ navigation }) => {
  const handleButton = () => {
    console.log("Hello World");
  };
  return (
    <SafeArea showStatusBar={true}>
      <PageContainer height="100%" paddingHorizontal paddingVertical="20">
        <ContentContainer alignItems="flex-start">
          <GroupedSpacer />
          <GroupedSpacer />
          <GroupedSpacer />
          <Wrapper alignItems="flex-start">
            <Title variant="h5">Forgot Password?</Title>
            <Spacer />
            <SubText variant="smallBody">
              Enter the email you used in creating your account below
            </SubText>
          </Wrapper>
          <GroupedSpacer />
          <GroupedSpacer />
          <GroupedSpacer />
          <Wrapper>
            <TextInputContainer
              containerWidth="100%"
              placeholder="Email Address"
              label="Email Address"
            />
          </Wrapper>
          <Spacer size="small" position="top" />
          <TermsAgreementText variant="smallBody">
            Remember the password?{" "}
            <Links
              onPress={() => {
                navigation.push("SignInAndCreateAccount");
              }}
              variant="smallBody"
            >
              Sign in
            </Links>
          </TermsAgreementText>
        </ContentContainer>

        <ButtonContainer
          text="Submit"
          onPress={() => {
            navigation.navigate("BackEmail");
          }}
        />
      </PageContainer>
    </SafeArea>
  );
};

export default ForgotPassword;
