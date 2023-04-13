import React, { useState } from "react";
import { View, Text } from "react-native";
import {
  AuthContainer,
  Container,
  Appearance,
  Successful,
  Checkemail,
} from "./backEmail.styles";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

const GetStarted = () => {
  return (
    <AuthContainer>
      <Container>
        <Appearance>
          <FontAwesome name="facebook-f" size={20} color="#fff" />
        </Appearance>
        <Successful>Submission Successful</Successful>
        <Checkemail>Please your email to create a new password</Checkemail>
        <View
          style={{ marginTop: 20, flexDirection: "row", alignItems: "center" }}
        >
          <Checkemail>Can't get email? </Checkemail>
          <Text style={{ color: "#F38B1C" }}>Resubmit</Text>
        </View>
      </Container>
    </AuthContainer>
  );
};

export default GetStarted;
