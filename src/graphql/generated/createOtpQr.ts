/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createOtpQr
// ====================================================

export interface createOtpQr_createOtpQr {
  /**
   * URL
   */
  url: string;
  /**
   * OTP Secret
   */
  otpSecret: string;
}

export interface createOtpQr {
  /**
   * OTP QR코드 생성
   */
  createOtpQr: createOtpQr_createOtpQr;
}

export interface createOtpQrVariables {
  email: string;
}
