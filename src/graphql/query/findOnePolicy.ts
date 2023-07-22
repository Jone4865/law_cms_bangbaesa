import { gql } from '@apollo/client';

export const FIND_ONE_POLICY = gql`
  query findOnePolicy($findOnePolicyId: Int, $policyKind: PolicyKind) {
    findOnePolicy(id: $findOnePolicyId, policyKind: $policyKind) {
      id
      policyKind
      title
      content
      createdAt
      updatedAt
    }
  }
`;
