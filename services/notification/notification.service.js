import { gql } from "@apollo/client";


export const Get_User_Notifications = gql`
query{
    getUserNotifications{
      _id
      title
      read
      detail
      sender
      receiverId
      createdAt
    }
  }
`;