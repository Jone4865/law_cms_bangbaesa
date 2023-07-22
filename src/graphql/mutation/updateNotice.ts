import { gql } from '@apollo/client';

export const UPDATE_NOTICE = gql`
  mutation updateNotice(
    $updateNoticeId: Int!
    $title: String
    $content: String
  ) {
    updateNotice(id: $updateNoticeId, title: $title, content: $content) {
      id
      title
      content
      createdAt
      hits
    }
  }
`;
