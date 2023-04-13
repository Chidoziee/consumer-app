import { gql } from "@apollo/client";

export const GET_ALL_STOCK = gql`
  query {
    getAllStock{
      _id
      productName
      unitPrice
      costPrice
      quantity
      totalPrice
      storeId
      expiryDate
      storeName
      storeAddress
      unit
      limit
      productStatus
      category
      code
      createdAt
      updatedAt
      vendorAddress
      vendorEmail
      vendorPhone
      vendorName
      reason
    }
  }
`;
