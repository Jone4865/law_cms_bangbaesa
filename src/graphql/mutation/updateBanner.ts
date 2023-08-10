import { gql } from "@apollo/client";

export const UPDATE_BANNER = gql`
  mutation updateBanner(
    $updateBannerId: Int!
    $arrowColor: String
    $dotColor: String
    $index: Int
    $path: String
    $pcFile: Upload
    $mobileFile: Upload
  ) {
    updateBanner(
      id: $updateBannerId
      arrowColor: $arrowColor
      dotColor: $dotColor
      index: $index
      path: $path
      pcFile: $pcFile
      mobileFile: $mobileFile
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
