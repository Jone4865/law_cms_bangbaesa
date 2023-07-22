/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: replyUserInquiryByAdmin
// ====================================================

export interface replyUserInquiryByAdmin_replyUserInquiryByAdmin {
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
}

export interface replyUserInquiryByAdmin {
  /**
   * 1:1 문의 답변 작성 (관리자)
   */
  replyUserInquiryByAdmin: replyUserInquiryByAdmin_replyUserInquiryByAdmin;
}

export interface replyUserInquiryByAdminVariables {
  replyUserInquiryByAdminId: number;
  reply: string;
}
