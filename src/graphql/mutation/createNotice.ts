import { gql } from '@apollo/client';

export const CREATE_NOTICE = gql`
  mutation createNotice($title: String!, $content: String!) {
    createNotice(title: $title, content: $content) {
      id
      title
      content
      createdAt
      hits
    }
  }
`;
