/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Role } from "./graphql-global-types";

// ====================================================
// GraphQL query operation: findManyAdmin
// ====================================================

export interface findManyAdmin_findManyAdmin_admins {
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

export interface findManyAdmin_findManyAdmin {
  /**
   * 총 개수
   */
  totalCount: number;
  /**
   * 문의 목록
   */
  admins: findManyAdmin_findManyAdmin_admins[];
}

export interface findManyAdmin {
  /**
   * 관리자 목록 조회 (관리자)
   */
  findManyAdmin: findManyAdmin_findManyAdmin;
}

export interface findManyAdminVariables {
  take: number;
  skip: number;
  searchText: string;
}
