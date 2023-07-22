/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: updateNotice
// ====================================================

export interface updateNotice_updateNotice {
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

export interface updateNotice {
  /**
   * 공지사항 수정 (관리자)
   */
  updateNotice: updateNotice_updateNotice;
}

export interface updateNoticeVariables {
  updateNoticeId: number;
  title?: string | null;
  content?: string | null;
}
