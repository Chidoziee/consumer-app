import React from "react";
import { SafeArea } from "../../components/utility/safe-area.component";
import {
  PageContainer,
  ContentContainer,
  Icon,
  FlatList,
  CheckoutInfo,
} from "./cart.styles";
import { Header } from "../../components/header/header.component";
import Crunchies from "../../assets/Crunchies.png";
import { Spacer } from "../../components/spacer/spacer.component";
import { MultiPurposeCard } from "../../components/MultiPurposeCard/multi-purpose-card.component";
import SwipeableDelete from "../../components/deleteSwipeable/swipeable.component";
import HorizontalTable from "../../components/HorizontalTable/horizontalTable.component";
import ButtonContainer from "../../components/button/button.component";
import { Arrow } from "../../assets/Icons";

const Cart = ({navigation}) => {
  const CartCardData = [
    { image: "", price: "200" },
    { image: "", price: "200" },
    { image: "", price: "200" },
    { image: "", price: "200" },
    { image: "", price: "200" },
    { image: "", price: "200" },
    { image: "", price: "200" },
  ];
  const data = [
    {
      food: "Items",
      price: 3,
      naira: false,
    },
    {
      food: "Subtotal",
      price: 5900,
    },
  ];
  return (
    <SafeArea showStatusBar={true}>
      <PageContainer>
        <Header text="Shopping Cart" paddingHorizontal svg={"previous"} />
        <ContentContainer justifyContent="space-between">
          <FlatList
            showsVerticalScrollIndicator={false}
            data={CartCardData}
            key={Math.random()}
            ListFooterComponent={<Spacer size="medium" position="top" />}
            renderItem={({ item }) => (
              <>
                <SwipeableDelete>
                  <MultiPurposeCard counter OnPressOpacity={1} />
                </SwipeableDelete>
                <Spacer size="medium" position="top" />
              </>
            )}
          />
          <Spacer size="large" position="top" />
          <CheckoutInfo paddingHorizontal background="#fff">
            <HorizontalTable
              orderSummary
              orderSummaryArray={data}
              headerSection={false}
              deliveryPrice={400}
              price={2000}
            />
            <Spacer size="medium" position="top" />
            <ButtonContainer
              text="Proceed To Checkout"
              onPress={() => {
                navigation.navigate("Checkout");
              }}
            />
            <Spacer size="large" position="top" />
          </CheckoutInfo>
        </ContentContainer>
      </PageContainer>
    </SafeArea>
  );
};

export default Cart;
