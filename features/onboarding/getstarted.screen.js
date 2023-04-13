import React, { useState } from "react";
import { View, Text } from "react-native";
import {
  AuthContainer,
  ViewCover,
  OnboardHeader,
  OnboardLabel,
  ImageIcon,
  BottomCover,
  BottomSection,
} from "./getstarted.styles";
import DrawerNavigator from "../drawerNavigator/drawernavigator.screen";
import Bottom from "../../components/button/button.component";

export const GetStartedScreen = ({ navigation }) => {
  const [show, setShow] = useState(false);
  const [isSignIn, setIsSignIn] = React.useState(false);
  const { navigate } = navigation;

  const handlerPressed = (e, v) => {
    // setIsSignIn(v);
    // setShow(true);
    navigate(v);
  };

  return (
    <AuthContainer>
      <ViewCover>
        <ImageIcon source={require("../../assets/welcome.png")} />
        <OnboardHeader>Welcome</OnboardHeader>
        <OnboardLabel>
          Before enjoying crunchies services please register first
        </OnboardLabel>
      </ViewCover>

      <BottomSection>
        <BottomCover>
          <Bottom
            // onPress={handlerPressed.bind(this, false)}
            onPress={handlerPressed.bind(this, "SignUp")}
            text="Create Account"
          />
          <View style={{ height: 30 }}></View>
          <Bottom
            // onPress={handlerPressed.bind(this, true)}
            onPress={handlerPressed.bind(this, "SignIn")}
            color="#F38B1C"
            text="Sign In"
            backgroundColor="#FAD1A4"
          />
          <Text
            style={{ color: "#242323", marginTop: 30, textAlign: "center" }}
          >
            By logging in or registering, you have agreed to the{" "}
            <Text style={{ color: "#F38B1C" }}>Terms and Conditions</Text> and{" "}
            <Text style={{ color: "#F38B1C" }}>Privacy Policy.</Text>
          </Text>
        </BottomCover>
      </BottomSection>
      {show && (
        <DrawerNavigator
          show={show}
          onPress={() => setShow(false)}
          setIsSignIn={(e) => setIsSignIn(e)}
          isSignIn={isSignIn}
        />
      )}
    </AuthContainer>
  );
};

//export const GetStarted;
