/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Query
// ====================================================

export interface Query_findManyBanner {
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
   * 생성일
   */
  createdAt: any;
}

export interface Query {
  /**
   * 배너 목록 조회
   */
  findManyBanner: Query_findManyBanner[];
}
