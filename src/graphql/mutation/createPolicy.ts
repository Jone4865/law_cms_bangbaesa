import { gql } from '@apollo/client';

export const CREATE_POLICY = gql`
  mutation createPolicy(
    $policyKind: PolicyKind!
    $title: String!
    $content: String!
  ) {
    createPolicy(policyKind: $policyKind, title: $title, content: $content)
  }
`;
