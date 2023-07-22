import { gql } from '@apollo/client';

export const REPLY_USER_INQUIRY_BY_ADMIN = gql`
  mutation replyUserInquiryByAdmin(
    $replyUserInquiryByAdminId: Int!
    $reply: String!
  ) {
    replyUserInquiryByAdmin(id: $replyUserInquiryByAdminId, reply: $reply) {
      id
      title
      content
      reply
      repliedAt
      createdAt
    }
  }
`;
