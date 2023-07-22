/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PolicyKind } from "./graphql-global-types";

// ====================================================
// GraphQL query operation: findManyPolicy
// ====================================================

export interface findManyPolicy_findManyPolicy_policies {
  /**
   * ID
   */
  id: number;
  /**
   * 약관 종류
   */
  policyKind: PolicyKind;
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
   * 수정일
   */
  updatedAt: any;
}

export interface findManyPolicy_findManyPolicy {
  /**
   * 총 개수
   */
  totalCount: number;
  /**
   * 약관 목록
   */
  policies: findManyPolicy_findManyPolicy_policies[];
}

export interface findManyPolicy {
  /**
   * 약관 목록 조회
   */
  findManyPolicy: findManyPolicy_findManyPolicy;
}

export interface findManyPolicyVariables {
  take: number;
  skip: number;
  searchText: string;
}
