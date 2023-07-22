import { PolicyKind } from 'src/graphql/generated/graphql';

export const policyKindFormat = (policyKind: PolicyKind) => {
  switch (policyKind) {
    case PolicyKind.TermsAndConditions:
      return '이용약관';
    case PolicyKind.PersonalInformationProcessingPolicy:
      return '개인정보처리방침';
  }
};
