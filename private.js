import React from "react";
import {
  ManagementCard,
  FlexComponent,
  TextContent,
  ManagementBtn,
  FlexContainer,
  ImageContainer,
  Imaged,
  DefaultWrap,
  PriceWrapper,
  NairaIcon,
  PriceFigure,
  PersonalDetails,
} from "./index.styles";
import { colors } from "../../infrastructure/theme/colors";
import Person from "../../assets/pdf.png";
import { fontWeights } from "../../infrastructure/theme/fonts";
import { FontAwesome5 } from "@expo/vector-icons";
import { Platform, Linking, Alert, TouchableOpacity } from "react-native";

const DeliveryManagementCard = ({
  picture = Person,
  total = 6400,
  progress = "On Delivery",
  name = "Nico Marks",
  email = "matthewcabret@gmail.com",
  date = "22-04-2021",
  time = "01:30PM",
  bgColor,
  restaurant = "Crunchies Restaurant 6 Factory Rd(Leventis building) Aba, Abia State, Nigeria.",
  address = "145 Abia polytechnic street, off Aba Owerii Road, Abia, Nigeria"
}) => {

  return (
    <ManagementCard>
      <FlexComponent>
        <TextContent>Delivered To</TextContent>
        <ManagementBtn bgColor={bgColor}>
          <TextContent
            fontSize="16px"
            color={colors.bg.white}
            fontWeight={fontWeights.bold}
          >
            {progress}
          </TextContent>
        </ManagementBtn>
      </FlexComponent>
      <FlexComponent>
        <FlexComponent>
          <ImageContainer>
            <Imaged source={picture} />
          </ImageContainer>
          <PersonalDetails>
            <TextContent
              lineHeights="26px"
              fontSize="16px"
              color={colors.black.strong}
              fontWeight={fontWeights.bold}
            >
              {name}
            </TextContent>
            <TextContent fontSize="12px">{email}</TextContent>
          </PersonalDetails>
        </FlexComponent>
      </FlexComponent>
      <FlexComponent alignItems="flex-start">
        <DefaultWrap>
          <TextContent>Pick Up</TextContent>
          <TextContent
            fontWeight={fontWeights.bold}
            color={colors.black.strong}
          >
            {restaurant}
          </TextContent>
        </DefaultWrap>
        <DefaultWrap>
          <TextContent>Delivery</TextContent>
          <TextContent
            fontWeight={fontWeights.bold}
            color={colors.black.strong}
          >
            {address}
          </TextContent>
        </DefaultWrap>
      </FlexComponent>
    </ManagementCard>
  );
};

export default DeliveryManagementCard;
