import React from "react";
import { Ionicons } from "@expo/vector-icons";

import Image1 from "../../assets/Image5.png";
import Image2 from "../../assets/Image8.png";
import Image3 from "../../assets/MaskGroup2.png";
import Image4 from "../../assets/Image20.png";
import Image5 from "../../assets/splash.png";

//
export const CategoryPillData = [
  { name: "Grocery", mode: "contained" },
  { name: "Accessory", mode: "outlined" },
  { name: "Clothing", mode: "outlined" },
  { name: "Electronics", mode: "outlined" },
  { name: "Toys", mode: "outlined" },
  { name: "Books", mode: "outlined" },
  { name: "Grocery", mode: "outlined" },
];

export const ExploreProductCardData = [
  {
    image: Image1,
    storeName: "Super Grocery",
    name: "Diary Milk",
    price: 1000,
    quantityType: "Packet",
    rating: 4.5,
    id: 1,
  },
  {
    image: Image2,
    storeName: "Grocery Mania",
    name: "Coca Cola",
    price: 330,
    quantityType: "Bottle",
    rating: 4.5,
    id: 2,
  },
  {
    image: Image3,
    storeName: "Manage Lit",
    name: "Cheese It",
    price: 450,
    quantityType: "Packet",
    rating: 4.5,
    id: 3,
  },
  {
    image: Image2,
    storeName: "Drink In",
    name: "Coca Cola",
    price: 330,
    quantityType: "Bottle",
    rating: 4.5,
    id: 4,
  },
  {
    image: Image1,
    storeName: "Beaverage Mall",
    name: "Diary Milk",
    price: 100,
    quantityType: "Packet",
    rating: 4.5,
    id: 5,
  },
  {
    image: Image2,
    storeName: "Drink In",
    name: "Coca Cola",
    price: 330,
    quantityType: "Bottle",
    rating: 4.5,
    id: 6,
  },
  {
    image: Image3,
    storeName: "Your Choice",
    name: "Cheese It",
    price: 450,
    quantityType: "Packet",
    rating: 4.5,
    id: 7,
  },
];

export const FavouriteProductData = [
  {
    image: Image1,
    name: "Diary Milk",
    price: 1003,
    quantityType: "Packet",
    id: 1,
  },
  {
    image: Image2,
    name: "Coca Cola",
    price: 330,
    quantityType: "Bottle",
    id: 2,
  },
  {
    image: Image3,
    name: "Cheese It",
    price: 450,
    quantityType: "Packet",
    id: 3,
  },
  {
    image: Image2,
    name: "Coca Cola",
    price: 330,
    quantityType: "Bottle",
    id: 4,
  },
  {
    image: Image1,
    name: "Diary Milk",
    price: 100,
    quantityType: "Packet",
    id: 5,
  },
  {
    image: Image2,
    name: "Coca Cola",
    price: 330,
    quantityType: "Bottle",
    id: 6,
  },
  {
    image: Image3,
    name: "Cheese It",
    price: 450,
    quantityType: "Packet",
    id: 7,
  },
];

//food services
export const FoodCategoryList = [
  { name: "All", mode: "contained" },
  { name: "chinese", mode: "outlined" },
  { name: "Italian", mode: "outlined" },
  { name: "Spanish", mode: "outlined" },
  { name: "Spanish", mode: "outlined" },
  { name: "Spanish", mode: "outlined" },
  { name: "Spanish", mode: "outlined" },
];

export const PopularFoodList = [
  {
    image: require("../../assets/burger.png"),
    name: "Tofu Burger king ",
    price: 388,
    rating: 4.3,
    id: 1,
    ratingIcon: <Ionicons name="star" color="grey" />,
  },
  {
    image: require("../../assets/burger.png"),
    name: "Tofu Burger king",
    price: 300,
    rating: 4.3,
    id: 2,
    ratingIcon: <Ionicons name="star" color="grey" />,
  },
  {
    image: require("../../assets/burger.png"),
    name: "Tofu Burger king",
    price: 400,
    rating: 4.3,
    id: 3,
    ratingIcon: <Ionicons name="star" color="grey" />,
  },
];

export const FoodStoreList = [
  {
    image: require("../../assets/storeLogo.png"),
    name: "RoseLine Fast Food",
    address: "No 1 Owerri street",
    followers: 10,
    ratingIcon: <Ionicons name="star" color="grey" />,
    rating: 4.3,
  },
  {
    image: require("../../assets/storeLogo.png"),
    name: "RoseLine Fast Food",
    address: "No 1 Owerri street",
    followers: 10,
    ratingIcon: <Ionicons name="star" color="grey" />,
    rating: 4.3,
  },
  {
    image: require("../../assets/storeLogo.png"),
    name: "RoseLine Fast Food",
    address: "No 1 Owerri street",
    followers: 10,
    ratingIcon: <Ionicons name="star" color="#ffff" />,
    rating: 4.3,
  },
];

//store
export const StoreCategoryList = [
  { name: "Grocery", mode: "contained" },
  { name: "Clothings", mode: "outlined" },
  { name: "Electronics", mode: "outlined" },
  { name: "Buliding Materials", mode: "outlined" },
  { name: "Electronics", mode: "outlined" },
];

export const StoreList = [
  {
    image: require("../../assets/storeLogo.png"),
    name: " Fresh Mart",
    address: "No 4 owerri street Aba",
    rating: 4.3,
    id: 1,
    ratingIcon: <Ionicons name="star" color="grey" />,
  },
  {
    image: require("../../assets/storeLogo.png"),
    name: "Fresh Mart",
    address: "No 4 owerri street Aba",
    rating: 4.3,
    id: 2,
    ratingIcon: <Ionicons name="star" color="grey" />,
  },
  {
    image: require("../../assets/storeLogo.png"),
    name: "Fresh Mart",
    address: "No 4 owerri street Aba",
    rating: 4.3,
    id: 3,
    ratingIcon: <Ionicons name="star" color="grey" />,
  },
  {
    image: require("../../assets/storeLogo.png"),
    name: " Fresh Mart",
    address: "No 4 owerri street Aba",
    rating: 4.3,
    id: 4,
    ratingIcon: <Ionicons name="star" color="grey" />,
  },
  {
    image: require("../../assets/storeLogo.png"),
    name: "Fresh Mart",
    address: "No 4 owerri street Aba",
    rating: 4.3,
    id: 5,
    ratingIcon: <Ionicons name="star" color="grey" />,
  },
  {
    image: require("../../assets/storeLogo.png"),
    name: "Fresh Mart",
    address: "No 4 owerri street Aba",
    rating: 4.3,
    id: 6,
    ratingIcon: <Ionicons name="star" color="grey" />,
  },
];

export const ExploreStore = [
  {
    image: require("../../assets/storeLogo.png"),
    name: "RoseLine Fast Food",
    address: "No 1 Owerri street",
    followers: 10,
    ratingIcon: <Ionicons name="star" color="grey" />,
    rating: 4.3,
  },
  {
    image: require("../../assets/storeLogo.png"),
    name: "RoseLine Fast Food",
    address: "No 1 Owerri street",
    followers: 10,
    ratingIcon: <Ionicons name="star" color="grey" />,
    rating: 4.3,
  },
  {
    image: require("../../assets/storeLogo.png"),
    name: "RoseLine Fast Food",
    address: "No 1 Owerri street",
    followers: 10,
    ratingIcon: <Ionicons name="star" color="#ffff" />,
    rating: 4.3,
  },
  {
    image: require("../../assets/storeLogo.png"),
    name: "RoseLine Fast Food",
    address: "No 1 Owerri street",
    followers: 10,
    ratingIcon: <Ionicons name="star" color="grey" />,
    rating: 4.0,
  },
  {
    image: require("../../assets/storeLogo.png"),
    name: "RoseLine Fast Food",
    address: "No 1 Owerri street",
    followers: 10,
    ratingIcon: <Ionicons name="star" color="grey" />,
    rating: 4.1,
  },
  {
    image: require("../../assets/storeLogo.png"),
    name: "RoseLine Fast Food",
    address: "No 1 Owerri street",
    followers: 10,
    ratingIcon: <Ionicons name="star" color="#ffff" />,
    rating: 4.5,
  },
];
