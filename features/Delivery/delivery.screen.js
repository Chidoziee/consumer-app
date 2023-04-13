import React from "react";
import { SafeArea } from "../../components/utility/safe-area.component";
import { Container } from "../../components/container/container.component";
import { Header } from "../../components/header/header.component";
import DeliveryManagementCard from "../../components/deliveryManagementCard/deliveryManagementCard.component";
import { Scrollable } from "../Checkout/checkout.styles";
import { View } from "react-native";
import Profile from "../../assets/profile.png";
import Pics from "../../assets/pics.png";
import { colors } from "../../infrastructure/theme/colors";

const Delivery = ({navigation}) => {
  return (
    <SafeArea showStatusBar={true}>
      <Container background="#FFF9EC" height="100%">
        <Header paddingHorizontal text="Order Details"  />

        <Scrollable showsVerticalScrollIndicator={false}>
          <View>
            <DeliveryManagementCard />
            <DeliveryManagementCard
              picture={Profile}
              name="Aiony Haust"
              bgColor={colors.green.strong}
              progress="Delivered"
              food="Chicken peppersoup"
            />
            <DeliveryManagementCard
              picture={Pics}
              bgColor={colors.red.strong}
              progress="Cancelled"
              name="Juan Manuel"
              food="Chicken Crunch"
            />
          </View>
        </Scrollable>
      </Container>
    </SafeArea>
  );
};
export default Delivery;