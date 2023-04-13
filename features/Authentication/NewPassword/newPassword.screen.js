import React from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import {
  PageContainer,
  ContentContainer,
  Wrapper,
  Title,
  SubText,
} from "./newPassword.styles";
import {
  Spacer,
  GroupedSpacer,
} from "../../../components/spacer/spacer.component";
import ButtonContainer from "../../../components/button/button.component";
import TextInputContainer from "../../../components/textInput/textInput.component";

const NewPassword = ({navigation}) => {
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
            <Title variant="h5">Change New Password</Title>
            <Spacer />
            <SubText variant="smallBody">
              Enter a different password with the previous
            </SubText>
          </Wrapper>
          <GroupedSpacer />
          <GroupedSpacer />
          <GroupedSpacer />
          <Wrapper>
            <TextInputContainer
              containerWidth="100%"
              placeholder="New Password"
              label="New Password"
              secure
            />
          </Wrapper>
          <Spacer size="large" position="top" />
          <Wrapper>
            <TextInputContainer
              containerWidth="100%"
              placeholder="Confirm Password"
              label="Confirm Password"
              secure
            />
          </Wrapper>
        </ContentContainer>

        <ButtonContainer text="Reset Password" onPress={() => {
          navigation.navigate("Successful")
        }} />
      </PageContainer>
    </SafeArea>
  );
};

export default NewPassword;
