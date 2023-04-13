import { gql } from "@apollo/client";

export const GET_ALL_STOCK_FOR_ORDER = gql`
  query ($storeId: ID) {
    getAllStockForOrder(storeId: $storeId) {
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
    }
  }
`;
