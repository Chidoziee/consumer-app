import { gql } from "@apollo/client";

export const GET_ALL_LOGISTICS = gql`
  query {
    GetAllLogistics{
      _id
      firstName
      lastName
      address
      gender
      state
      nationality
      passport
      userId
      phone
      email
    }
  }
`;

export const REQUEST_TRANSPORT = gql`
  mutation (
    $userId: ID
    $sendersStoreName: String
    $sendersStoreId: ID
    $receiverAddress: String
    $logisticsId: ID
    $logisticsName: ID
    $logisticsLocation: ID
  ) {
    requestTransport(
      data: {
        userId: $userId
        sendersStoreName: $sendersStoreName
        sendersStoreId: $sendersStoreId
        receiverAddress: $receiverAddress
        logisticsId: $logisticsId
        logisticsNae: $logisticsName
        logisticsLocation: $logisticsLocation
      }
    )
  }
`;