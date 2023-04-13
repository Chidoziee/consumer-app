import React from "react";
import { SafeArea } from "../../components/utility/safe-area.component";
import { Header } from "../../components/header/header.component";
import { Ionicons } from "@expo/vector-icons";
import DeliveryProgressCard from "../../components/deliveryCard/deliveryCard.component";
import { colors } from "../../infrastructure/theme/colors";
import {
  PageContainer,
  ContentContainer,
  HeroSection,
  ImageWrapper,
  HeroImage,
  CounterButtonWrapper,
  ScreenHeaderContainer,
  ArrowIcon,
  TitleSection,
  Title,
  SubTitle,
  PriceSection,
  PriceText,
  NairaIcon,
  RatingStarContainer,
  Wrapper,
  RatingStar,
  DishDescriptionWrapper,
  DishDescriptionText,
} from "./dishDetails.styles";
import {
  Spacer,
  GroupedSpacer,
} from "../../components/spacer/spacer.component";
import { CardListHeader } from "../../components/cardListHeader/cardListHeader.component";
import ButtonContainer from "../../components/button/button.component";
import CartIcon from "react-native-vector-icons/FontAwesome";
import Crunchies from "../../assets/Crunchies.png";
import { CounterButton } from "../../components/counterButton/counterButton.component";
import { VerticalFoodCard } from "../../components/VerticalFoodCard/vertical-food-card.component";
import { FlatListContainer } from "../../components/container/container.component";

import ChickenPepperSoup from "../../assets/chickenPepperSoup.png";
import Pizza from "../../assets/pizza.png";
import Handbugger from "../../assets/handbugger.png";

const DishDetails = ({ title, subTitle, price, navigation }) => {
  const StarData = [
    { name: "star", key: 1 },
    { name: "star", key: 2 },
    { name: "star", key: 3 },
    { name: "star", key: 4 },
    { name: "star", key: 5 },
  ];

  const HorizontalCardData = [
    {
      name: "Chicken peppersoup",
      description: "6 Factory Rd(Leventis building) Aba, Abia State, Nigeria.",
      image: ChickenPepperSoup,
      amount: "200",
    },
    {
      name: "Flash",
      description: "We are here with the best desert intown",
      image: Handbugger,
      amount: "200",
    },
    {
      name: "Pizza",
      description: "We are here with the best desert intown",
      image: Pizza,
      amount: "200",
    },
    {
      name: "Flash",
      description: "We are here with the best desert intown",
      image: Handbugger,
      amount: "200",
    },
  ];
  return (
    <SafeArea showStatusBar={true} style={{ backgroundColor: "#fff" }}>
      <PageContainer height="100%">
        <Header
          position="absolute"
          text={null}
          paddingHorizontal
          svg={"previous"}
        />

        <HeroSection>
          <ImageWrapper>
            <HeroImage source={Crunchies} resizeMode="cover" />
          </ImageWrapper>
          <CounterButtonWrapper width="25%" paddingVertical="3%">
            <CounterButton counterMinValue={1} />
          </CounterButtonWrapper>
        </HeroSection>
        <Spacer size="large" position="top" />
        <ContentContainer>
          <Wrapper paddingHorizontal>
            <ScreenHeaderContainer flexDirection="row">
              <TitleSection alignItems="flex-start">
                <Title variant="h4">{title}</Title>
                <Spacer position="top" size="small" />
                <SubTitle variant="smallBody">{subTitle}</SubTitle>
              </TitleSection>
              <PriceSection
                flexDirection="row"
                justifyContent="flex-end"
                alignItems="flex-start"
              >
                <NairaIcon name="currency-ngn" size={12} />
                <PriceText variant="h5">{price}</PriceText>
              </PriceSection>
            </ScreenHeaderContainer>
            <RatingStarContainer flexDirection="row">
              <Wrapper
                width="25%"
                flexDirection="row"
                justifyContent="space-between"
              >
                {StarData.map(({ name, key }) => (
                  <RatingStar name={name} size={14} key={key} />
                ))}
              </Wrapper>
            </RatingStarContainer>
            <Spacer size="medium" position="top" />
            <DishDescriptionWrapper>
              <DishDescriptionText variant="smallBody">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur
              </DishDescriptionText>
            </DishDescriptionWrapper>
            <Spacer size="large" position="top" />
            <ButtonContainer
              text="Add to Cart"
              onPress={() => {
                navigation.navigate("Cart");
              }}
              rightIcon={
                <CartIcon name="shopping-cart" size={20} color={colors.white} />
              }
            />
          </Wrapper>

          <GroupedSpacer size="large" position="bottom" />
          <CardListHeader title="Recently Viewed" subTitle={false} seeAllText={false} />
          <Spacer size="small" />
          <FlatListContainer
            data={HorizontalCardData}
            keyExtractor={(item) => item.id}
            horizontal
            renderItem={({ item }) => (
              <>
                <Spacer size="large" position="left" />
                <VerticalFoodCard
                  source={item.image}
                  name={item.name}
                  location={item.description}
                  amount={item.amount}
                />
              </>
            )}
          />
        </ContentContainer>
      </PageContainer>
    </SafeArea>
  );
};

export default DishDetails;

DishDetails.defaultProps = {
  title: "Hot Dog Pie",
  subTitle: "Dish Code: 4578562",
  price: 500,
};
