import { gql } from '@apollo/client';

export const FIND_MY_INFO_BY_ADMIN = gql`
  query findMyInfoByAdmin {
    findMyInfoByAdmin {
      email
      createdAt
      role
    }
  }
`;
