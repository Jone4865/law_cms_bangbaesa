/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createNotice
// ====================================================

export interface createNotice_createNotice {
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
}

export interface createNotice {
  /**
   * 공지사항 생성 (관리자)
   */
  createNotice: createNotice_createNotice;
}

export interface createNoticeVariables {
  title: string;
  content: string;
}
