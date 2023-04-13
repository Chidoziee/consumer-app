import React from "react";

import { Text, View } from "react-native";
import { SearchBar } from "../../components/SearchBar/searchBar.component";
import {
  Container,
  FlatListContainer,
  ScrollViewContainer,
} from "../../components/container/container.component";
import { Header } from "../../components/header/header.component";
import { HomeContainer, SafeAreaViewContainer } from "./home.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Profile from "../../assets/logo.png";
import Menu from "react-native-vector-icons/MaterialIcons";
import { HorizontalFoodCard } from "../../components/HorizontalFoodCard/horizontal-food-card.component";
import Pizza from "../../assets/pizza.png";
import Handbugger from "../../assets/handbugger.png";
import {
  Spacer,
  GroupedSpacer,
} from "../../components/spacer/spacer.component";
import { CardListHeader } from "../../components/cardListHeader/cardListHeader.component";
import { VerticalFoodCard } from "../../components/VerticalFoodCard/vertical-food-card.component";
import { RestrauntsBranchCard } from "../../components/restrauntsBranchCard/restrauntsBranchCard.component";
import CardImage from "../../assets/Crunchies.png";
import ChickenPepperSoup from "../../assets/chickenPepperSoup.png";

const Home = ({ navigation }) => {
  const VerticalData = [
    {
      name: "Crunchies Pizza",
      description: "We are here with the best desert intown",
      image: Pizza,
    },
    {
      name: "Flash",
      description: "We are here with the best desert intown",
      image: Handbugger,
    },
    {
      name: "Pizza",
      description: "We are here with the best desert intown",
      image: Pizza,
    },
    {
      name: "Flash",
      description: "We are here with the best desert intown",
      image: Handbugger,
    },
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
  const Restaurant = [
    {
      image: CardImage,
      name: "dd",
    },
    {
      image: CardImage,
      name: "dd",
    },
  ];

  return (
    <SafeAreaViewContainer showStatusBar="false">
      <HomeContainer>
        <Container paddingHorizontal>
          <Header source={Profile} svg={"menu"} text />
          <SearchBar cart />
        </Container>
        <GroupedSpacer size="large" position="bottom" />
        <Spacer size="large" position="bottom" />
        <FlatListContainer
          data={VerticalData}
          keyExtractor={(item) => item.id}
          horizontal
          renderItem={({ item }) => (
            <HorizontalFoodCard
              name={item.name}
              description={item.description}
              source={item.image}
            />
          )}
        />
        <GroupedSpacer size="large" position="bottom" />
        <Spacer size="large" position="bottom" />
        <CardListHeader
          title="Today New Arivable"
          subTitle="Best of the today food list update"
          onPress={() => {
            navigation.navigate("AllProducts");
          }}
        />
        <Spacer size="large" />
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
                onPress={() => {
                  navigation.navigate("DishDetails");
                }}
              />
            </>
          )}
        />
        <GroupedSpacer size="large" position="bottom" />
        <Spacer size="large" position="bottom" />
        <CardListHeader
          title="Restaurants Near By"
          subTitle="Check Crunchies Restaurants nearby to you"
          onPress={() => {
            navigation.navigate("AllRestaurant");
          }}
        />
        <Spacer size="large" position="bottom" />
        <Container paddingHorizontal>
          <FlatListContainer
            data={Restaurant}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <>
                <RestrauntsBranchCard
                  onPress={() => {
                    navigation.navigate("RestaurantMenu");
                  }}
                />
                <Spacer size="large" position="bottom" />
              </>
            )}
          />
        </Container>
      </HomeContainer>
    </SafeAreaViewContainer>
  );
};

export default Home;
