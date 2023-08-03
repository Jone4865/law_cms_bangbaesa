import { gql } from "@apollo/client";

export const CREATE_BANNER = gql`
  mutation createBanner(
    $arrowColor: String!
    $dotColor: String!
    $pcFile: Upload!
    $mobileFile: Upload!
    $index: Int!
    $path: String
  ) {
    createBanner(
      arrowColor: $arrowColor
      dotColor: $dotColor
      pcFile: $pcFile
      mobileFile: $mobileFile
      index: $index
      path: $path
    ) {
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
