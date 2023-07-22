import { gql } from '@apollo/client';

export const SIGN_UP_BY_ADMIN = gql`
  mutation signUpByAdmin(
    $email: String!
    $password: String!
    $otpSecret: String!
  ) {
    signUpByAdmin(email: $email, password: $password, otpSecret: $otpSecret) {
      email
      createdAt
      role
    }
  }
`;
