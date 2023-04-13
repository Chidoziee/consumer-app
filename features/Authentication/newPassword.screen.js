import React, { useState } from "react";
import { View, Text } from "react-native";
import TextInputContainer from "../../components/textInput/textInput.component";

import {
  AuthContainer,
  Container,
  Successful,
  ButtonCover,
  Checkemail,
} from "./newPassword.styles";

import Button from "../../components/button/button.component";

const GetStarted = () => {
  return (
    <AuthContainer>
      <Container>
        <Successful>Change New Password</Successful>
        {/* <Appearance>
          <FontAwesome name="facebook-f" size={20} color="#fff" />
        </Appearance> */}
        <Checkemail>Enter a different password with the previous</Checkemail>
        <View style={{ height: 70 }}></View>

        <TextInputContainer
          backgroundColor="#FFF9EC"
          placeholder="* * * * * * *"
          label="New Password"
        />
        <View style={{ height: 20 }}></View>
        <TextInputContainer
          backgroundColor="#FFF9EC"
          placeholder="* * * * * * *"
          label="Confirm Password"
        />
      </Container>
      <ButtonCover>
        <Button text="Reset Password" />
      </ButtonCover>
    </AuthContainer>
  );
};

export default GetStarted;
