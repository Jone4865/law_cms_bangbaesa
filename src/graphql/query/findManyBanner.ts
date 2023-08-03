import { gql } from "@apollo/client";

export const FIND_MANY_BANNER = gql`
  query findManyBanner {
    findManyBanner {
      id
      index
      pcFileName
      mobileFileName
      arrowColor
      dotColor
      path
      createdAt
    }
  }
`;
