import { gql } from '@apollo/client';

export const REFRESH_BY_ADMIN = gql`
  mutation refreshByAdmin {
    refreshByAdmin {
      accessToken
      refreshToken
    }
  }
`;
