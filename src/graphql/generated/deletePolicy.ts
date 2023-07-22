/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PolicyKind } from "./graphql-global-types";

// ====================================================
// GraphQL mutation operation: deletePolicy
// ====================================================

export interface deletePolicy_deletePolicy {
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

export interface deletePolicy {
  /**
   * 약관 삭제 (관리자)
   */
  deletePolicy: deletePolicy_deletePolicy;
}

export interface deletePolicyVariables {
  deletePolicyId: number;
}
