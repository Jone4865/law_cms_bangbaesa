/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createBanner
// ====================================================

export interface createBanner_createBanner {
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
  path: string | null;
  /**
   * 생성일
   */
  createdAt: any;
}

export interface createBanner {
  /**
   * 배너 생성 (관리자)
   */
  createBanner: createBanner_createBanner;
}

export interface createBannerVariables {
  arrowColor: string;
  dotColor: string;
  pcFile: any;
  mobileFile: any;
  index: number;
  path?: string | null;
}
