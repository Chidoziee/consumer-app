import React, { useState, useCallback } from "react";
import { SafeArea } from "../../components/utility/safe-area.component";
import { Container } from "../../components/container/container.component";
import { Header } from "../../components/header/header.component";
import SwipeableDelete from "../../components/deleteSwipeable/swipeable.component";
import { MultiPurposeCard } from "../../components/MultiPurposeCard/multi-purpose-card.component";
import { FlatList, Alert, RefreshControl } from "react-native";
import { favourites } from "../../components/utility/mockData";

const FavouritesScreen = () => {
  const [favouriteItems, setFavouriteItems] = useState(favourites);
  const [refreshing, setRefreshing] = useState(false);

  //   pull to refresh initiated
  const refreshPage = useCallback(() => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  /**
   * @param id refers to an item's unique identification...
   * filter through an array return current item's id
   *
   */
  const deleteCardHandler = (food, id) => {
    Alert.alert(
      "Delete Favourite",
      "Do you wish to delete this item from your favourites?",
      [
        {
          text: "No",
          onPress: () => console.log("Delete favourite action cancelled"),
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            setFavouriteItems(favouriteItems.filter((item) => item.id !== id));
            setTimeout(() => {
              alert(`${food} removed from favourites`);
            }, 300);
          },
        },
      ]
    );
  };
  return (
    <SafeArea showStatusBar={true}>
      <Container background="#FFF9EC" height="100%">
        <Header paddingHorizontal text="Favourites" />

        <FlatList
          data={favouriteItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <SwipeableDelete
              handleDelete={() => deleteCardHandler(item.food, item.id)}
            >
              <MultiPurposeCard
                source={item.img}
                foodName={item.food}
                price={item.price}
                address={item.address}
                favourite={true}
                OnPressOpacity={1}
                // onPress={()=>{null}}
              />
            </SwipeableDelete>
          )}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={refreshPage} />
          }
        />
      </Container>
    </SafeArea>
  );
};

export default FavouritesScreen;
