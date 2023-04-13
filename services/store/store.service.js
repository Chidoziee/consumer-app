import { gql } from "@apollo/client";
import Image1 from "../../assets/Image5.png";
import Image2 from "../../assets/Image8.png";
import Image3 from "../../assets/MaskGroup2.png";
import Image4 from "../../assets/Image20.png";
import Image5 from "../../assets/splash.png";

// export const GET_CONSUMER_FOLLOWED_STORES = gql`
//   query {
//     getConsumerFollowedStores {
//       _id
//       store_name
//       address
//       location
//       comments
//       currency
//     }
//     getConsumerStores {
//       _id
//       store_name
//       address
//       location
//       comments
//       currency
//     }
//     getOtherStores {
//       _id
//       store_name
//       address
//       location
//       comments
//       currency
//     }
//     getConsumerCategories {
//       _id
//       category
//     }
//   }
// `;

export const TransformStoreCategories = (items) => {
  const newItems = items.map((item) => {
    return {
      ...item,
      mode: "outlined",
      name: item.category,
    };
  });

  return newItems;
};

export const TransformFavouriteStores = (items) => {
  const newItems = items.map((item, index) => {
    const images = [Image1, Image2, Image3, Image4, Image5];
    const idx = Math.floor(Math.random() * 4);
    console.log(idx);
    return {
      ...item,
      id: item._id,
      name: item.store_name,
      address: item.location,
      image: images[idx],
      //remove
      followers: item.followers.length,
    };
  });

  return newItems;
};

export const TransformStockList = (items) => {
  const newItems = items.map((item, index) => {
    const images = [Image1, Image2, Image3, Image4, Image5];
    const idx = Math.floor(Math.random() * 4);
    console.log(idx);
    return {
      ...item,
      image: images[idx],
    };
  });

  return newItems;
};

export const GET_CONSUMER_FOLLOWED_STORES = gql`
  query {
    getConsumerFollowedStores {
      _id
      store_name
      address
      location
      currency
    }
    getConsumerStores {
      _id
      store_name
      address
      location
      currency
      owner
      category
      likes
      followers
    }
    getOtherStores {
      _id
      store_name
      address
      location
      currency
      owner
      category
      likes
      followers
    }
    getConsumerCategories {
      _id
      category
    }
    getAllCategories
  }
`;

export const GET_UNIQUE_STORES = gql`
  query {
    getOtherStores {
      _id
      store_name
      address
      location
      comments
      currency
    }
    getConsumerCategories {
      _id
      category
    }
    providerGetLinked {
      storeId
      store_name
      category
      location
      logisticsId
      logisticsName
      email
    }
  }
`;
export const GET_ALL_STORES_CONSUMER = gql`
  query {
    getConsumerStores {
      _id
      store_name
      address
      location
      comments
    }
  }
`;

export const GET_SERVICE_PROVIDER_FAVOURITE_STORES = gql`
  query {
    providerGetLinked {
      storeId
      store_name
      category
      location
      logisticsId
      logisticsName
      email
    }
  }
`;
export const SERVICE_PROVIDER_LINK_TO_STORE = gql`
  mutation ($storeId: ID) {
    linkToStore(storeId: $storeId)
  }
`;
export const SERVICE_PROVIDER_REQUESTS = gql`
  query {
    getTransportOrders {
      _id
      status
      userId
      receiver
      quantity
      itemName
      createdAt
      storePhone
      receiverEmail
      sendersStoreId
      receiverPhone
      sendersStoreName
      storeAddress
      logisticsId
      logisticsName
      logisticsLocation
    }
    getPersonProfile {
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

export const SERVICE_PROVIDER_UPDATE_STATUS = gql`
  mutation ($serviceId: ID, $status: serviceStatusTypes) {
    updateTransportStatus(serviceId: $serviceId, status: $status)
  }
`;

export const CHANGE_NOTIFICATION_STATUS = gql`
  mutation NotificationsStatus($notificationId: ID!) {
    changeNotificationStatus(notificationId: $notificationId)
  }
`;

export const COUNT_USER_NOTIFICATIONS = gql`
  query {
    countUserNotifications
    getCurrentUser {
      _id
      email
      isVerified
      phone
      accountType
      createdAt
      updatedAt
      countryCode
      name
    }
  }
`;

export const TOGGLE_STORE_ACTIVATION = gql`
  mutation toggeleStoreActivation($storeId: ID) {
    toggeleStoreActivation(storeId: $storeId)
  }
`;

export const UNFOLLOW_STORE = gql`
  mutation ($storeId: ID) {
    removeFollower(storeId: $storeId)
  }
`;

export const SET_LIKE = gql`
  mutation ($storeId: ID!) {
    likeStore(storeId: $storeId)
  }
`;

export const SET_FOLLOW = gql`
  mutation ($storeId: ID!) {
    addFollower(storeId: $storeId)
  }
`;

export const GET_ALL_STORES = gql`
  query {
    followers
  }
`;

export const GetAllStocks = gql`
  query ($storeId: ID, $searchValue: String) {
    getAllStocks(storeId: $storeId) {
      _id
      productName
      unitPrice
      quantity
      totalPrice
      unit
      limit
      # expiryDate
    }
    searchStoreStocks(storeId: $storeId, searchValue: $searchValue) {
      _id
      productName
      unitPrice
      quantity
      totalPrice
      storeId
      expiryDate
    }
    getCurrentUser {
      _id
      email
      isVerified
      phone
      accountType
      createdAt
      updatedAt
      countryCode
      name
      currency
    }
  }
`;
export const GetValidStocks = gql`
  query ($storeId: ID) {
    getValidStocks(storeId: $storeId) {
      _id
      productName
      unitPrice
      quantity
      totalPrice
    }
    getAllStores {
      store_name
      _id
    }
    countCart(storeId: $storeId)
    getCartItems(storeId: $storeId) {
      productId
      productName
      operationType
      category
      dateTransfered
      quantity
      recipientStoreName
      debtorName
      productId
      sellersId
      totalPrice
      unitPrice
      deptInitPay
      debtorEmail
      debtPayType
      debtorAddress
      _id
    }
  }
`;

export const GetAllValidStocks = gql`
  query ($storeId: ID) {
    getValidStocks(storeId: $storeId) {
      _id
      productName
      unitPrice
      quantity
      totalPrice
    }
  }
`;
export const GET_ALL_STOCKS1 = gql`
  query ($storeId: ID) {
    getAllStocks(storeId: $storeId) {
      _id
      productName
      unitPrice
      quantity
      totalPrice
    }
  }
`;

export const GET_EVERY_STOCKS = gql`
  query ($storeId: String) {
    getEveryStocks(storeId: $storeId) {
      _id
      productName
      unitPrice
      quantity
      totalPrice
    }
  }
`;