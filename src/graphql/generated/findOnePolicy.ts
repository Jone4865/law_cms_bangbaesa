/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PolicyKind } from "./graphql-global-types";

// ====================================================
// GraphQL query operation: findOnePolicy
// ====================================================

export interface findOnePolicy_findOnePolicy {
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

export interface findOnePolicy {
  /**
   * 약관 상세 조회
   */
  findOnePolicy: findOnePolicy_findOnePolicy;
}

export interface findOnePolicyVariables {
  findOnePolicyId?: number | null;
  policyKind?: PolicyKind | null;
}
