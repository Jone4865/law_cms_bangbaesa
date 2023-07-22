import { gql } from '@apollo/client';

export const UPDATE_POLICY = gql`
  mutation updatePolicy(
    $updatePolicyId: Int!
    $title: String
    $content: String
  ) {
    updatePolicy(id: $updatePolicyId, title: $title, content: $content)
  }
`;
