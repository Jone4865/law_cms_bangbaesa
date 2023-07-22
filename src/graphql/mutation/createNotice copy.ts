import { gql } from '@apollo/client';

export const CREATE_OTP_QR = gql`
  mutation createOtpQr($email: String!) {
    createOtpQr(email: $email) {
      url
      otpSecret
    }
  }
`;
