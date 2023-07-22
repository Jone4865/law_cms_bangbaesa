import { gql } from '@apollo/client';

export const FIND_MANY_USER = gql`
  query findManyUser($take: Int!, $skip: Int!, $searchText: String!) {
    findManyUser(take: $take, skip: $skip, searchText: $searchText) {
      totalCount
      users {
        identity
        createdAt
        level
        connectionDate
        phone
        emailAuth {
          id
          email
          createdAt
        }
      }
    }
  }
`;
