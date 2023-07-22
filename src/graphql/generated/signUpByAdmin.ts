/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Role } from "./graphql-global-types";

// ====================================================
// GraphQL mutation operation: signUpByAdmin
// ====================================================

export interface signUpByAdmin_signUpByAdmin {
  /**
   * 이메일
   */
  email: string;
  /**
   * 생성일
   */
  createdAt: any;
  /**
   * 권한명
   */
  role: Role;
}

export interface signUpByAdmin {
  /**
   * 회원가입 (관리자)
   */
  signUpByAdmin: signUpByAdmin_signUpByAdmin;
}

export interface signUpByAdminVariables {
  email: string;
  password: string;
  otpSecret: string;
}
