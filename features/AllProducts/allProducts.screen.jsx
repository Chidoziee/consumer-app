import React from "react";
import {
  Container,
  FlatListContainer,
} from "../../components/container/container.component";
import { Image } from "react-native";
import { Header } from "../../components/header/header.component";
import {
  Spacer,
  GroupedSpacer,
} from "../../components/spacer/spacer.component";
import { SearchBar } from "../../components/SearchBar/searchBar.component";

import { ContainerView, Wrapper } from "./allProducts.styles";

import { RestrauntsBranchCard } from "../../components/restrauntsBranchCard/restrauntsBranchCard.component";
import { VerticalFoodCard } from "../../components/VerticalFoodCard/vertical-food-card.component";

import CardImage from "../../assets/Crunchies.png";
import Handbugger from "../../assets/handbugger.png";
import ChickenPepperSoup from "../../assets/chickenPepperSoup.png";
import Back from "../../assets/back.png";
import { SafeArea } from "../../components/utility/safe-area.component";

const AllProducts = ({ navigation }) => {
  const RestaurantMenu = [
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
      image: ChickenPepperSoup,
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
    <SafeArea showStatusBar={true}>
      <ContainerView>
        <Container paddingHorizontal>
          <Header svg={"previous"} text="All Products" />
          <SearchBar sort placeholder="Search Dish" />
        </Container>
        <GroupedSpacer size="large" position="top" />
        <Wrapper>
          {RestaurantMenu.map(({ image, name, description, amount }) => (
            <Spacer size="large" position="bottom">
              <VerticalFoodCard
                source={image}
                name={name}
                location={description}
                amount={amount}
                onPress={() => {
                  navigation.navigate("DishDetails");
                }}
              />
            </Spacer>
          ))}
        </Wrapper>
      </ContainerView>
    </SafeArea>
  );
};

export default AllProducts;
