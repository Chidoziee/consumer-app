import React from "react";
import { colors } from "../../../../infrastructure/theme/colors";
import {
  Spacer,
  GroupedSpacer,
} from "../../../../components/spacer/spacer.component";
import ButtonContainer from "../../../../components/button/button.component";
import {
  ContentContainer,
  Wrapper,
  CustomText,
  HorizontaLine,
  Icon,
} from "./signIn.styles";
import TextInputContainer from "../../../../components/textInput/textInput.component";

const SignIn = ({navigation,handleCloseAuthScreen}) => {
  return (
    <ContentContainer paddingVertical="20">
      <Spacer size="large" position="top" />
      <Wrapper>
        <TextInputContainer
          containerWidth="100%"
          placeholder="anonymousemail@gmail.com"
          label="Email address"
        />
      </Wrapper>
      <Spacer size="medium" position="top" />
      <Wrapper>
        <TextInputContainer
          containerWidth="100%"
          placeholder="*************"
          label="Password"
          secure
        />
      </Wrapper>

      <Wrapper alignItems="flex-end">
        <CustomText
          onPress={() => {
            navigation.navigate("ForgotPassword");
          }}
          variant="smallBody"
          color={colors.primary}
        >
          Forgot Password
        </CustomText>
      </Wrapper>

      <Spacer size="large" position="top" />
      <Wrapper paddingVertical={45}>
        <ButtonContainer
          text="Sign In"
          onPress={() => {
            navigation.navigate("Onboard");
          }}
        />
      </Wrapper>

      <Wrapper>
        <CustomText variant="smallBody">Or</CustomText>
      </Wrapper>
      <Wrapper flexDirection="row" justifyContent="space-around">
        <HorizontaLine height={1} background={colors.text.strong} width="30%" />
        <CustomText variant="smallBody" textTransform="capitalize">
          Sign In With
        </CustomText>
        <HorizontaLine height={1} background={colors.text.strong} width="30%" />
      </Wrapper>
      <Spacer size="large" position="top" />
      <Wrapper flexDirection="row" justifyContent="space-between">
        <ButtonContainer
          text="Facebook"
          onPress={() => {}}
          width="40%"
          backgroundColor="#3B5999"
          borderRadius={33}
          rightIcon={<Icon name="facebook" size={18} />}
        />
        <ButtonContainer
          text="Google"
          onPress={() => {}}
          width="40%"
          backgroundColor="#F14336"
          borderRadius={33}
          rightIcon={<Icon name="google" size={18} />}
        />
      </Wrapper>
    </ContentContainer>
  );
};

export default SignIn;
