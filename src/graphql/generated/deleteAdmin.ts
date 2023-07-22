/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Role } from "./graphql-global-types";

// ====================================================
// GraphQL mutation operation: deleteAdmin
// ====================================================

export interface deleteAdmin_deleteAdmin {
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

export interface deleteAdmin {
  /**
   * 관리자 삭제 (관리자)
   */
  deleteAdmin: deleteAdmin_deleteAdmin;
}

export interface deleteAdminVariables {
  deleteAdminId: number;
}
