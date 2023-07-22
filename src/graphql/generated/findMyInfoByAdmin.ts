/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Role } from "./graphql-global-types";

// ====================================================
// GraphQL query operation: findMyInfoByAdmin
// ====================================================

export interface findMyInfoByAdmin_findMyInfoByAdmin {
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

export interface findMyInfoByAdmin {
  /**
   * 내정보 조회 (관리자)
   */
  findMyInfoByAdmin: findMyInfoByAdmin_findMyInfoByAdmin;
}
