import React from "react";
import { SafeArea } from "../../components/utility/safe-area.component";
import { Header } from "../../components/header/header.component";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../infrastructure/theme/colors";
import {
  PageContainer,
  ArrowIcon,
  ContentContainer,
  MapInfoContainer,
  UserInfoContainer,
  HeaderWrapper,
  LeftSection,
  RightSection,
  BigText,
  SubText,
} from "./mapTracking.styles";
import { Spacer } from "../../components/spacer/spacer.component";
import ButtonContainer from "../../components/button/button.component";
import CartIcon from "react-native-vector-icons/FontAwesome";
import TextInputContainer from "../../components/textInput/textInput.component";
import { CheckboxComponent } from "../../components/checkBox/checkBox.component";
import HorizontalTable from "../../components/HorizontalTable/horizontalTable.component";
import { Map } from "../../components/map/map.component";
import DeliveryManagementCard from "../../components/deliveryManagementCard/deliveryManagementCard.component";
import { Arrow } from "../../assets/Icons";

const MapTracking = () => {
  const data = [
    {
      food: "Order ID:",
      price: "#CR845645 - Hot Dog Pie",
      naira: false,
    },
    {
      food: "Order Date",
      price: "22-04-2021 - 01:30PM",
      naira: false,
    },
    {
      food: "Delivery",
      price: "01:30PM",
      naira: false,
    },
  ];
  return (
    <SafeArea showStatusBar={true}>
      <PageContainer height="100%">
        <Header text="On Delivery" paddingHorizontal svg={"previous"} />
        <ContentContainer>
          <Map />
          <MapInfoContainer>
            <Spacer size="large" position="top" />
            <HeaderWrapper
              flexDirection="row"
              paddingHorizontal
              justifyContent="space-between"
            >
              <LeftSection width="50%" alignItems="flex-start">
                <BigText variant="smallBody">From</BigText>
                <SubText variant="caption">
                  6 Factory Rd(Leventis building) Aba, Abia State, Nigeria.
                </SubText>
              </LeftSection>
              <RightSection width="50%" alignItems="flex-start">
                <BigText variant="smallBody">To</BigText>
                <SubText variant="caption">
                  145 Abia polytechnic street, off Aba Owerii Road, Abia,
                  Nigeria
                </SubText>
              </RightSection>
            </HeaderWrapper>
            <HorizontalTable
              orderSummary
              orderSummaryArray={data}
              headerSection={false}
              deliveryPrice={6400}
              lastLabel="Total"
              NetTotal={false}
            />
            <DeliveryManagementCard
              DeliveryAgentTitle={false}
              OrderDetailsSection={false}
            />
          </MapInfoContainer>
        </ContentContainer>
      </PageContainer>
    </SafeArea>
  );
};

export default MapTracking;

// PaymentMethod.defaultProps = {};
