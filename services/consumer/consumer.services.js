import { gql } from "@apollo/client";

export const CONSUMER_PLACE_ORDER = gql`
mutation (
    $productName: String
    $quantity: String
    $storeId: ID
) {
    consumerPlaceOrder(
        data: {
            productName: $productName
            quantity: $quantity
            storeId: $storeId
        }
    )
}
`;

export const CONSUMER_DELETE_ORDER = gql`
  mutation ($uniqueCode: String) {
    consumerDeleteOrder(uniqueCode: $uniqueCode)
  }
`;

export const ADD_CONSUMER_PROFILE = gql`
  mutation (
    $firstName: String
    $lastName: String
    $address: String
    $gender: String
    $state: String
    $nationality: String
    $phone: String
    $email: String
  ) {
    addConsumerProfile(
      data: {
        firstName: $firstName
        lastName: $lastName
        address: $address
        gender: $gender
        state: $state
        nationality: $nationality
        phone: $phone
        email: $email
      }
    )
  }
`;

export const GET_CONSUMER_PROFILE = gql`
  query {
    getConsumerProfile {
      firstName
      lastName
      address
      gender
      state
      nationality
      passport
      email
      phone
    }
  }
`;

export const GET_CONSUMER_TRANSACTIONS = gql`
  query {
    getConsumerTransaction {
      _id
      productName
      category
      costPrice
      unitPrice
      totalPrice
      quantity
      seller_code
      seller_location
      createdAt
      isActive
      status
      productCode
      uniqueCode
      storeId
      orderType
    }
  }
`;
