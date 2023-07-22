import { gql } from '@apollo/client';

export const FIND_MANY_POLICY = gql`
  query findManyPolicy($take: Int!, $skip: Int!, $searchText: String!) {
    findManyPolicy(take: $take, skip: $skip, searchText: $searchText) {
      totalCount
      policies {
        id
        policyKind
        title
        content
        createdAt
        updatedAt
      }
    }
  }
`;
