/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PolicyKind } from "./graphql-global-types";

// ====================================================
// GraphQL mutation operation: createPolicy
// ====================================================

export interface createPolicy {
  /**
   * 약관 생성 (관리자)
   */
  createPolicy: boolean;
}

export interface createPolicyVariables {
  policyKind: PolicyKind;
  title: string;
  content: string;
}
