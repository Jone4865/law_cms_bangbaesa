/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { NoticeSearchKind, Role } from "./graphql-global-types";

// ====================================================
// GraphQL query operation: findManyNotice
// ====================================================

export interface findManyNotice_findManyNotice_notices_admin {
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

export interface findManyNotice_findManyNotice_notices {
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
   * 생성일
   */
  createdAt: any;
  /**
   * 조회수
   */
  hits: number;
  /**
   * 작성한 관리자
   */
  admin: findManyNotice_findManyNotice_notices_admin | null;
}

export interface findManyNotice_findManyNotice {
  /**
   * 총 개수
   */
  totalCount: number;
  /**
   * 공지사항 목록
   */
  notices: findManyNotice_findManyNotice_notices[];
}

export interface findManyNotice {
  /**
   * 공지사항 목록 조회
   */
  findManyNotice: findManyNotice_findManyNotice;
}

export interface findManyNoticeVariables {
  take: number;
  skip: number;
  searchText: string;
  searchKind?: NoticeSearchKind | null;
}
