import { gql } from '@apollo/client';

export const FIND_MANY_USER_INQUIRY_BY_ADMIN = gql`
  query findManyUserInquiryByAdmin(
    $take: Int!
    $skip: Int!
    $searchText: String!
  ) {
    findManyUserInquiryByAdmin(
      take: $take
      skip: $skip
      searchText: $searchText
    ) {
      totalCount
      userInquiries {
        id
        title
        content
        reply
        repliedAt
        createdAt
        admin {
          email
          createdAt
          role
        }
        userIdentity
      }
    }
  }
`;
