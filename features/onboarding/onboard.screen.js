import * as React from "react";
import { Image, Text, View, TouchableWithoutFeedback } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import {
  ViewCover,
  OnboardHeader,
  OnboardLabel,
  BottomSection,
  BottomCover,
  EachDotCover,
  AuthContainer,
  ImageIcon,
  EachDot,
} from "./onboard.styles";

export const OnboardScreen = ({ navigation }) => {
  const [counter, setcounter] = React.useState(0);
  const { navigate } = navigation;

  const setNextCircle = () => {
    if (counter === 2) {
      //have reached the end of the carousel,
      //navigate to welcome screen
      navigate("GetStarted");
    }
    setcounter(counter + 1);
  };

  const setBack = (i, e) => {
    setcounter(i);
  };

  const mappedDot = ["", "", ""].map((v, i) => {
    return (
      <EachDot
        key={Math.random()}
        onPress={setBack.bind(this, i)}
        style={{ backgroundColor: i === counter ? "#F38B1C" : "#C8C8C8" }}
      ></EachDot>
    );
  });

  return (
    <AuthContainer>
      <ViewCover>
        <ImageIcon
          source={
            counter === 0
              ? require("../../assets/onboard1.png")
              : counter === 1
              ? require("../../assets/onboard2.png")
              : require("../../assets/onboard3.png")
          }
        />
        <OnboardHeader>
          {counter === 0
            ? "Nearby restaurants"
            : counter === 1
            ? "Select the Favorites Menu"
            : "Delivery and Tracking"}
        </OnboardHeader>
        <OnboardLabel>
          {counter === 0
            ? "You don't have to go far to find a good restaurant, we have provided all the restaurants that is near you"
            : counter === 1
            ? "Now eat well, don't leave the house,You can choose your favorite food only with one click"
            : "Track all your dishes as it Is been delivered to you in realtime"}
        </OnboardLabel>
      </ViewCover>
      <BottomSection>
        <BottomCover>
          <TouchableWithoutFeedback onPress={() => navigate("GetStarted")}>
            <Text>Skip</Text>
          </TouchableWithoutFeedback>
          <EachDotCover>{mappedDot}</EachDotCover>
          <AntDesign
            onPress={setNextCircle}
            name="arrowright"
            size={18}
            color="#F38B1C"
          />
        </BottomCover>
      </BottomSection>
    </AuthContainer>
  );
};

// export const Onboard;
