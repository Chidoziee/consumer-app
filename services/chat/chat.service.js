import { gql } from "@apollo/client";


export const Get_My_Forum = gql`
query{
    getMyForum{
      _id
      title
      description
      creatorPhone
      creatorEmail
      creatorId
      storeId
      members
      createdAt
      updatedAt
      isPrivate
    }
  }
`;

export const Get_All_Message = gql`
query{
  getAllMessage(forumId: $forumId){
    message
    senderId
    createdAt
    senderEmail
    _id
  }
  }
`;