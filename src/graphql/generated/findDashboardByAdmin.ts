/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: findDashboardByAdmin
// ====================================================

export interface findDashboardByAdmin_findDashboardByAdmin_users {
  /**
   * 수
   */
  count: number;
  /**
   * 날짜
   */
  date: any;
}

export interface findDashboardByAdmin_findDashboardByAdmin_userInquiries {
  /**
   * 수
   */
  count: number;
  /**
   * 날짜
   */
  date: any;
}

export interface findDashboardByAdmin_findDashboardByAdmin_offers {
  /**
   * 수
   */
  count: number;
  /**
   * 날짜
   */
  date: any;
}

export interface findDashboardByAdmin_findDashboardByAdmin {
  /**
   * 회원
   */
  users: findDashboardByAdmin_findDashboardByAdmin_users[];
  /**
   * 1:1문의
   */
  userInquiries: findDashboardByAdmin_findDashboardByAdmin_userInquiries[];
  /**
   * 오퍼 생성
   */
  offers: findDashboardByAdmin_findDashboardByAdmin_offers[];
}

export interface findDashboardByAdmin {
  /**
   * 대시보드 그래프 조회 (관리자)
   */
  findDashboardByAdmin: findDashboardByAdmin_findDashboardByAdmin;
}
