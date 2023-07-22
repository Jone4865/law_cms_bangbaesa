/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Role } from "./graphql-global-types";

// ====================================================
// GraphQL query operation: findManyUserInquiryByAdmin
// ====================================================

export interface findManyUserInquiryByAdmin_findManyUserInquiryByAdmin_userInquiries_admin {
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

export interface findManyUserInquiryByAdmin_findManyUserInquiryByAdmin_userInquiries {
  /**
   * ID
   */
  id: number;
  /**
   * 제목
   */
  title: string;
  /**
   * 내용
   */
  content: string;
  /**
   * 답변
   */
  reply: string | null;
  /**
   * 답변일
   */
  repliedAt: any | null;
  /**
   * 생성일
   */
  createdAt: any;
  /**
   * 답변한 관리자
   */
  admin: findManyUserInquiryByAdmin_findManyUserInquiryByAdmin_userInquiries_admin | null;
  /**
   * 회원 아이디
   */
  userIdentity: string;
}

export interface findManyUserInquiryByAdmin_findManyUserInquiryByAdmin {
  /**
   * 총 개수
   */
  totalCount: number;
  /**
   * 문의 목록
   */
  userInquiries: findManyUserInquiryByAdmin_findManyUserInquiryByAdmin_userInquiries[];
}

export interface findManyUserInquiryByAdmin {
  /**
   * 문의 목록 조회 (관리자)
   */
  findManyUserInquiryByAdmin: findManyUserInquiryByAdmin_findManyUserInquiryByAdmin;
}

export interface findManyUserInquiryByAdminVariables {
  take: number;
  skip: number;
  searchText: string;
}
