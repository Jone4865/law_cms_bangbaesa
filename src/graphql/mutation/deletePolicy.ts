import { gql } from '@apollo/client';

export const DELETE_POLICY = gql`
  mutation deletePolicy($deletePolicyId: Int!) {
    deletePolicy(id: $deletePolicyId) {
      id
      policyKind
      title
      content
      createdAt
      updatedAt
    }
  }
`;
