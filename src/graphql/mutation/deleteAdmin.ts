import { gql } from '@apollo/client';

export const DELETE_ADMIN = gql`
  mutation deleteAdmin($deleteAdminId: Int!) {
    deleteAdmin(id: $deleteAdminId) {
      email
      createdAt
      role
    }
  }
`;
