import { gql } from "@apollo/client";

//define queries
// export const LOGIN = gql``;

// export const LOGOUT = gql``;

// export const SIGNUP = gql``;

// export const FORGOT_PASSWORD = gql``;

// export const RESET_PASSWORD = gql``;

//write functions
//login
//signup
//reset_password
//forgot_password

//These Queries and Mutations are for the Login screen
export const LOGIN = gql`
  mutation ($emailOrPhone: String!, $password: String!, $deviceToken: String) {
    mobileLogin(
      data: {
        emailOrPhone: $emailOrPhone
        password: $password
        deviceToken: $deviceToken
      }
    ) {
      accountType
      token
    }
  }
`;

export const LOGIN_USER = gql`
  mutation ($emailOrPhone: String!, $password: String!) {
    loginUser(data: { emailOrPhone: $emailOrPhone, password: $password }) {
      _id
      accountType
      token
    }
  }
`;

// These Queries and Mutations are for the SignUp screen
// export const SIGNUP = gql`
//   mutation (
//     $email: String!
//     $phone: String!
//     $password: String!
//     $accountType: String!
//     $countryCode: String!
//   ) {
//     addUser(
//       data: {
//         email: $email
//         phone: $phone
//         password: $password
//         accountType: $accountType
//         countryCode: $countryCode
//       }
//     ) {
//       email
//       token
//     }
//   }
// `;
export const SIGNUP = gql`
  mutation ($data: addUserInput!) {
    addUser(data: $data) {
      email
      token
    }
  }
`;

export const ACTIVATE_USER = gql`
  query ($token: String!) {
    activateUser(data: { token: $token })
  }
`;

export const VERIFY_USER = gql`
  mutation ($email: String!, $pin: String!) {
    activateMobileUser(data: { email: $email, pin: $pin })
  }
`;

export const RESEND_ACTIVATION_CODE = gql`
  mutation ($phone: String) {
    resendActivationCode(phone: $phone)
  }
`;

// These Queries and Mutations are for the forgotPassword screen
export const FORGOT_PASSWORD = gql`
  mutation ($email: String!) {
    forgotPassword(data: { email: $email })
  }
`;

export const FORGOT_MY_PASSWORD = gql`
  mutation ($email: String!) {
    forgotMyPassword(data: { email: $email })
  }
`;

// These Queries and Mutations are for the logout screen
export const LOGOUT = gql`
  mutation {
    logout
  }
`;

// These Queries and Mutations are for the reset Password screen
export const RESET_MY_PASSWORD = gql`
  mutation ($code: String, $newPassword: String, $confirmPassword: String) {
    resetMyPassword(
      data: {
        code: $code
        newPassword: $newPassword
        confirmPassword: $confirmPassword
      }
    )
  }
`;

export const CHANGE_MY_PASSWORD = gql`
  mutation ($currentPass: String, $newPassword: String) {
    changeMyPassword(
      data: { currentPass: $currentPass, newPassword: $newPassword }
    )
  }
`;

export const CHANGE_MY_PHONE = gql`
  mutation ($email: String, $phone: String) {
    changePhoneAndActivate(data: { email: $email, phone: $phone })
  }
`;

// const VERIFY_USER = gql`
//   mutation($email: String!, $pin: String!) {
//     activateMobileUser(data: {email: $email, pin: $pin})
//   }
// `;

// const RESEND_ACTIVATION_CODE = gql`
//   mutation($phone: String) {
//     resendActivationCode(phone: $phone)
//   }
// `;

export const GET_CURRENT_USER = gql`
  query {
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

export const CHECK_USER_LOGIN = gql`
  query {
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
