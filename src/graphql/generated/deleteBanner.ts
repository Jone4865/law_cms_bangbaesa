/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: deleteBanner
// ====================================================

export interface deleteBanner_deleteBanner {
  /**
   * ID
   */
  id: number;
  /**
   * 순서
   */
  index: number;
  /**
   * PC 파일명
   */
  pcFileName: string;
  /**
   * 모바일 파일명
   */
  mobileFileName: string;
  /**
   * 화살표 색상
   */
  arrowColor: string;
  /**
   * 점 색상
   */
  dotColor: string;
  /**
   * 배너 경로
   */
  path: string;
  /**
   * 생성일
   */
  createdAt: any;
}

export interface deleteBanner {
  /**
   * 배너 삭제 (관리자)
   */
  deleteBanner: deleteBanner_deleteBanner;
}

export interface deleteBannerVariables {
  deleteBannerId: number;
}
