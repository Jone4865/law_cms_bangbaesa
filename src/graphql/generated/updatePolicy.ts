/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: updatePolicy
// ====================================================

export interface updatePolicy {
  /**
   * 약관 수정 (관리자)
   */
  updatePolicy: boolean;
}

export interface updatePolicyVariables {
  updatePolicyId: number;
  title?: string | null;
  content?: string | null;
}
