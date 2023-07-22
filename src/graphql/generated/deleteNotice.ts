/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: deleteNotice
// ====================================================

export interface deleteNotice_deleteNotice {
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

export interface deleteNotice {
  /**
   * 공지사항 삭제 (관리자)
   */
  deleteNotice: deleteNotice_deleteNotice;
}

export interface deleteNoticeVariables {
  deleteNoticeId: number;
}
