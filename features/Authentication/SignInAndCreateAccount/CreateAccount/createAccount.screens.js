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
} from "./createAccount.styles";
import TextInputContainer from "../../../../components/textInput/textInput.component";

const CreateAccount = ({navigation}) => {
  return (
    <ContentContainer paddingVertical="20">
      <Spacer size="large" position="top" />
      <Wrapper>
        <TextInputContainer
          containerWidth="100%"
          placeholder="Enter your fullname"
          label="Full Name"
        />
      </Wrapper>
      <Spacer size="large" position="top" />
      <Wrapper>
        <TextInputContainer
          containerWidth="100%"
          placeholder="anonymousemail@gmail.com"
          label="Email address"
        />
      </Wrapper>
      <Spacer size="large" position="top" />
      <Wrapper>
        <TextInputContainer
          containerWidth="100%"
          placeholder="*************"
          label="Password"
          secure
        />
      </Wrapper>

      <Spacer size="small" position="top" />
      <Wrapper paddingVertical={35}>
        <ButtonContainer text="Register"
          onPress={() => { navigation.navigate("Onboard"); }}
        />
      </Wrapper>

      <Wrapper>
        <CustomText variant="smallBody">Or</CustomText>
      </Wrapper>
      <Wrapper flexDirection="row" justifyContent="space-around">
        <HorizontaLine height={1} background={colors.text.strong} width="30%" />
        <CustomText variant="smallBody" textTransform="capitalize">
          Register With
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

export default CreateAccount;
