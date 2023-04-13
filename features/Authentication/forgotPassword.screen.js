import React, { useState } from "react";
import { View, Text } from "react-native";
import TextInputContainer from "../../components/textInput/textInput.component";

import {
  AuthContainer,
  Container,
  Successful,
  ButtonCover,
  Checkemail,
} from "./forgotPassword.styles";

import Button from "../../components/button/button.component";

const GetStarted = () => {
  return (
    <AuthContainer>
      <Container>
        <Successful>Forgot Password?</Successful>
        {/* <Appearance>
          <FontAwesome name="facebook-f" size={20} color="#fff" />
        </Appearance> */}
        <Checkemail>
          Enter the email you used in creating your account below
        </Checkemail>
        <View style={{ height: 70 }}></View>

        <TextInputContainer
          backgroundColor="#FFF9EC"
          placeholder="* * * * * * *"
          label="Email address"
        />
        <View
          style={{ marginTop: 10, flexDirection: "row", alignItems: "center" }}
        >
          <Checkemail>Remember the password? </Checkemail>
          <Text style={{ color: "#F38B1C", marginTop: 4 }}>Sign in</Text>
        </View>
      </Container>
      <ButtonCover>
        <Button text="Submit" />
      </ButtonCover>
    </AuthContainer>
  );
};

export default GetStarted;
