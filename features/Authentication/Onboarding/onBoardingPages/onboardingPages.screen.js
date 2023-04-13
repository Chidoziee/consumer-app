import React, { useState } from "react";
import AppIntroSlider from "react-native-app-intro-slider";

import {
  Container,
  ImageIcon,
  Title,
  SubText,
  ButtonComponent,
  ButtonSection,
  Icon,
  SkipLabel,
  NextIcon,
} from "./onboardingPages.styles";
import { colors } from "../../../../infrastructure/theme/colors";
import {
  Spacer,
  GroupedSpacer,
} from "../../../../components/spacer/spacer.component";
import {
  Group,
  OrderIllustration,
  MapTracking,
} from "../../../../assets/Icons";

const slides = [
  {
    key: 1,
    title: "Nearby restaurants",
    subText:
      "You don't have to go far to find a good restaurant we have provided all the restaurants that is near you",
  },
  {
    key: 2,
    title: "Select the Favorites Menu",
    subText:
      "You don't have to go far to find a good restaurant we have provided all the restaurants that is near you",
  },
  {
    key: 3,
    title: "Delivery and Tracking",
    subText: "Track all your dishes as it Is been delivered to you in realtime",
  },
];

const OnboardingPages = ({ navigation }) => {
  const [showRealApp, setShowRealApp] = useState(false);

  const renderItem = ({ item }) => {
    return (
      <Container paddingHorizontal justifyContent="center">
        {item.key == 1 ? (
          <MapTracking />
        ) : item.key == 2 ? (
          <OrderIllustration />
        ) : item.key == 3 ? (
          <Group />
        ) : (
          <Group />
        )}
        <GroupedSpacer />
        <GroupedSpacer />
        <Title variant="h5">{item.title}</Title>
        <Spacer />
        <SubText variant="caption">{item.subText}</SubText>
      </Container>
    );
  };

  const onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    setShowRealApp(true);
  };

  return (
    <>
      <AppIntroSlider
        showNextButton={true}
        showDoneButton={true}
        showSkipButton={true}
        doneLabel={<SkipLabel>Done</SkipLabel>}
        skipLabel={<SkipLabel>Skip</SkipLabel>}
        onDone={() => {
          navigation.navigate("GetStarted");
        }}
        nextLabel={<NextIcon name="arrowright" size={20} />}
        activeDotStyle={{
          backgroundColor: colors.primary,
        }}
        dotStyle={{
          backgroundColor: "#C8C8C8",
        }}
        renderItem={renderItem}
        data={slides}
      />
    </>
  );
};

export default OnboardingPages;
