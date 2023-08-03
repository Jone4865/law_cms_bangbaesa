/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: refreshByAdmin
// ====================================================

export interface refreshByAdmin_refreshByAdmin {
  /**
   * Access Token
   */
  accessToken: string;
  /**
   * Refresh Token
   */
  refreshToken: string;
}

export interface refreshByAdmin {
  /**
   * Token 재발급 (관리자)
   */
  refreshByAdmin: refreshByAdmin_refreshByAdmin;
}
