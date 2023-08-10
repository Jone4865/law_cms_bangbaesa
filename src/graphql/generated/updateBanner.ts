/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: updateBanner
// ====================================================

export interface updateBanner_updateBanner {
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

export interface updateBanner {
  /**
   * 배너 수정 (관리자)
   */
  updateBanner: updateBanner_updateBanner;
}

export interface updateBannerVariables {
  updateBannerId: number;
  arrowColor?: string | null;
  dotColor?: string | null;
  index?: number | null;
  path?: string | null;
  pcFile?: any | null;
  mobileFile?: any | null;
}
