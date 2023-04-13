import React from "react";
import { SafeArea } from "../../components/utility/safe-area.component";
import { Container } from "../../components/container/container.component";
import {Header} from "../../components/header/header.component";
import { Ionicons } from "@expo/vector-icons";
import HorizontalTable from "../../components/HorizontalTable/horizontalTable.component";
import { View } from "react-native";
import ButtonContainer from "../../components/button/button.component";
import { Scrollable, CheckoutBtn } from "./checkout.styles";
import { Arrow } from "../../assets/Icons";

const Checkout = ({navigation}) => {
  return (
    <SafeArea showStatusBar={true}>
      <Container background="#FFF9EC" height="100%">
        <Header svg={"previous"} text="Check Out" paddingHorizontal />

        <Scrollable showsVerticalScrollIndicator={false}>
          <View>
            <HorizontalTable
              orderSummary={true}
              headerTitle="Order Summary"
              headerText={false}
            />
            <HorizontalTable nameOrCardNumber="Name" headerText={false} />
            <HorizontalTable
              headerTitle="Payment Details"
              nameOrCardNumber="Card Number"
              headerText="Change"
              address={""}
              cardNumber="0000123456789"
              nameOrNumber=""
              onPressPaymentDetailsHeader={()=>{navigation.navigate("PaymentMethod")}}
            />

            <CheckoutBtn>
              <ButtonContainer
                text="Make Payment"
                onPress={() => {
                  navigation.navigate("PaymentSuccess");
                }}
              />
            </CheckoutBtn>
          </View>
        </Scrollable>
      </Container>
    </SafeArea>
  );
};

export default Checkout;
