import { gql } from '@apollo/client';

export const FIND_MANY_ADMIN = gql`
  query findManyAdmin($take: Int!, $skip: Int!, $searchText: String!) {
    findManyAdmin(take: $take, skip: $skip, searchText: $searchText) {
      totalCount
      admins {
        email
        createdAt
        role
      }
    }
  }
`;
