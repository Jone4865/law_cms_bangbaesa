import { gql } from "@apollo/client";

export const DELETE_BANNER = gql`
  mutation deleteBanner($deleteBannerId: Int!) {
    deleteBanner(id: $deleteBannerId) {
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
