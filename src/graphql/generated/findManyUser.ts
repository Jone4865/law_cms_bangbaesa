/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: findManyUser
// ====================================================

export interface findManyUser_findManyUser_users_emailAuth {
  /**
   * ID
   */
  id: number;
  /**
   * 이메일
   */
  email: string;
  /**
   * 생성일
   */
  createdAt: any;
}

export interface findManyUser_findManyUser_users {
  /**
   * 아이디
   */
  identity: string;
  /**
   * 생성일
   */
  createdAt: any;
  /**
   * 레벨
   */
  level: number;
  /**
   * 접속일
   */
  connectionDate: any | null;
  /**
   * 휴대폰
   */
  phone: string;
  /**
   * 이메일 인증
   */
  emailAuth: findManyUser_findManyUser_users_emailAuth | null;
}

export interface findManyUser_findManyUser {
  /**
   * 총 개수
   */
  totalCount: number;
  /**
   * 회원 목록
   */
  users: findManyUser_findManyUser_users[];
}

export interface findManyUser {
  /**
   * 회원 목록 조회 (관리자)
   */
  findManyUser: findManyUser_findManyUser;
}

export interface findManyUserVariables {
  take: number;
  skip: number;
  searchText: string;
}
