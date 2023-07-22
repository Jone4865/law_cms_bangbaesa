import { gql } from '@apollo/client';

export const DELETE_NOTICE = gql`
  mutation deleteNotice($deleteNoticeId: Int!) {
    deleteNotice(id: $deleteNoticeId) {
      id
      title
      content
      createdAt
      hits
    }
  }
`;
