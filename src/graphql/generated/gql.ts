/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  mutation confirmEmailAuthNumber($email: String!, $authNumber: String!) {\n    confirmEmailAuthNumber(email: $email, authNumber: $authNumber) {\n      id\n      email\n      createdAt\n    }\n  }\n": types.ConfirmEmailAuthNumberDocument,
    "\n  mutation createChatMessage($chatRoomId: Int!, $message: String!) {\n    createChatMessage(chatRoomId: $chatRoomId, message: $message) {\n      chatMessage {\n        id\n        message\n        createdAt\n        sender\n      }\n      totalCount\n    }\n  }\n": types.CreateChatMessageDocument,
    "\n  mutation createDriverLicense(\n    $name: String!\n    $birth: String!\n    $area: String!\n    $licenseNumber: String!\n    $serialNumber: String!\n  ) {\n    createDriverLicense(\n      name: $name\n      birth: $birth\n      area: $area\n      licenseNumber: $licenseNumber\n      serialNumber: $serialNumber\n    ) {\n      id\n      name\n      birth\n      area\n      licenseNumber\n      serialNumber\n    }\n  }\n": types.CreateDriverLicenseDocument,
    "\n  mutation createIdCard(\n    $name: String!\n    $registrationNumber: String!\n    $issueDate: String!\n  ) {\n    createIdCard(\n      name: $name\n      registrationNumber: $registrationNumber\n      issueDate: $issueDate\n    ) {\n      id\n      name\n      registrationNumber\n      issueDate\n    }\n  }\n": types.CreateIdCardDocument,
    "\n  mutation createOfferByUser(\n    $coinKind: CoinKind!\n    $offerAction: OfferAction!\n    $transactionMethod: TransactionMethod!\n    $cityId: Int!\n    $price: Int!\n    $minAmount: Int!\n    $maxAmount: Int!\n    $responseSpeed: Int!\n    $content: String!\n  ) {\n    createOfferByUser(\n      coinKind: $coinKind\n      offerAction: $offerAction\n      transactionMethod: $transactionMethod\n      cityId: $cityId\n      price: $price\n      minAmount: $minAmount\n      maxAmount: $maxAmount\n      responseSpeed: $responseSpeed\n      content: $content\n    ) {\n      id\n      coinKind\n      offerAction\n      transactionMethod\n      price\n      minAmount\n      maxAmount\n      responseSpeed\n      content\n      createdAt\n      reservationStatus\n      transactionStatus\n    }\n  }\n": types.CreateOfferByUserDocument,
    "\n  mutation createPassport(\n    $name: String!\n    $passportNumber: String!\n    $issueDate: String!\n    $expirationDate: String!\n    $birth: String!\n  ) {\n    createPassport(\n      name: $name\n      passportNumber: $passportNumber\n      issueDate: $issueDate\n      expirationDate: $expirationDate\n      birth: $birth\n    ) {\n      id\n      name\n      passportNumber\n      issueDate\n      expirationDate\n      birth\n    }\n  }\n": types.CreatePassportDocument,
    "\n  mutation createUserInquiryByUser($title: String!, $content: String!) {\n    createUserInquiryByUser(title: $title, content: $content) {\n      id\n      title\n      content\n      reply\n      repliedAt\n      createdAt\n    }\n  }\n": types.CreateUserInquiryByUserDocument,
    "\n  mutation deleteOfferByUser($deleteOfferByUserId: Int!) {\n    deleteOfferByUser(id: $deleteOfferByUserId) {\n      id\n      coinKind\n      offerAction\n      transactionMethod\n      price\n      minAmount\n      maxAmount\n      responseSpeed\n      content\n      createdAt\n      reservationStatus\n      transactionStatus\n    }\n  }\n": types.DeleteOfferByUserDocument,
    "\n  mutation deleteUserInquiry($deleteUserInquiryId: Int!) {\n    deleteUserInquiry(id: $deleteUserInquiryId)\n  }\n": types.DeleteUserInquiryDocument,
    "\n  mutation enterChatRoom($offerId: Int!) {\n    enterChatRoom(offerId: $offerId) {\n      id\n      createdAt\n    }\n  }\n": types.EnterChatRoomDocument,
    "\n  mutation refreshByUser {\n    refreshByUser {\n      accessToken\n      refreshToken\n    }\n  }\n": types.RefreshByUserDocument,
    "\n  mutation signOutByUser {\n    signOutByUser\n  }\n": types.SignOutByUserDocument,
    "\n  mutation signUpByUser(\n    $identity: String!\n    $password: String!\n    $phone: String!\n    $hash: String!\n    $loginKind: LoginKind!\n  ) {\n    signUpByUser(\n      identity: $identity\n      password: $password\n      phone: $phone\n      hash: $hash\n      loginKind: $loginKind\n    ) {\n      identity\n      createdAt\n      level\n      connectionDate\n      phone\n    }\n  }\n": types.SignUpByUserDocument,
    "\n  mutation toggleFeedbackByUser(\n    $feedbackKind: FeedbackKind!\n    $receiverIdentity: String!\n  ) {\n    toggleFeedbackByUser(\n      feedbackKind: $feedbackKind\n      receiverIdentity: $receiverIdentity\n    ) {\n      id\n      feedbackKind\n      createdAt\n    }\n  }\n": types.ToggleFeedbackByUserDocument,
    "\n  mutation updateCheckedCurrentChatMessageByUser(\n    $chatRoomId: Int!\n    $chatMessageId: Int!\n  ) {\n    updateCheckedCurrentChatMessageByUser(\n      chatRoomId: $chatRoomId\n      chatMessageId: $chatMessageId\n    ) {\n      id\n      createdAt\n    }\n  }\n": types.UpdateCheckedCurrentChatMessageByUserDocument,
    "\n  mutation updatePasswordByUser(\n    $originPassword: String!\n    $newPassword: String!\n  ) {\n    updatePasswordByUser(\n      originPassword: $originPassword\n      newPassword: $newPassword\n    ) {\n      identity\n      createdAt\n      level\n      connectionDate\n      phone\n    }\n  }\n": types.UpdatePasswordByUserDocument,
    "\n  mutation updatePhoneNumberByUser($hash: String!, $phone: String!) {\n    updatePhoneNumberByUser(hash: $hash, phone: $phone) {\n      identity\n      createdAt\n      level\n      connectionDate\n      phone\n    }\n  }\n": types.UpdatePhoneNumberByUserDocument,
    "\n  mutation updateReservationStatusByUser(\n    $updateReservationStatusByUserId: Int!\n  ) {\n    updateReservationStatusByUser(id: $updateReservationStatusByUserId) {\n      id\n      coinKind\n      offerAction\n      transactionMethod\n      price\n      minAmount\n      maxAmount\n      responseSpeed\n      content\n      createdAt\n      reservationStatus\n      transactionStatus\n    }\n  }\n": types.UpdateReservationStatusByUserDocument,
    "\n  mutation updateTransactionStatusByUser(\n    $updateTransactionStatusByUserId: Int!\n  ) {\n    updateTransactionStatusByUser(id: $updateTransactionStatusByUserId) {\n      id\n      coinKind\n      offerAction\n      transactionMethod\n      price\n      minAmount\n      maxAmount\n      responseSpeed\n      content\n      createdAt\n      reservationStatus\n      transactionStatus\n    }\n  }\n": types.UpdateTransactionStatusByUserDocument,
    "\n  mutation updateUserInquiry(\n    $updateUserInquiryId: Int!\n    $title: String!\n    $content: String!\n  ) {\n    updateUserInquiry(\n      id: $updateUserInquiryId\n      title: $title\n      content: $content\n    )\n  }\n": types.UpdateUserInquiryDocument,
    "\n  mutation withdrawalUser {\n    withdrawalUser\n  }\n": types.WithdrawalUserDocument,
    "\n  query checkDuplicateIdentity($identity: String!) {\n    checkDuplicateIdentity(identity: $identity)\n  }\n": types.CheckDuplicateIdentityDocument,
    "\n  query confirmPhoneAuthNumber(\n    $phone: String!\n    $authNumber: String!\n    $identity: String\n  ) {\n    confirmPhoneAuthNumber(\n      phone: $phone\n      authNumber: $authNumber\n      identity: $identity\n    )\n  }\n": types.ConfirmPhoneAuthNumberDocument,
    "\n  query findIdentity($hash: String!, $phone: String!) {\n    findIdentity(hash: $hash, phone: $phone)\n  }\n": types.FindIdentityDocument,
    "\n  query findManyChatMessageByUser(\n    $take: Int!\n    $chatRoomId: Int!\n    $cursorId: Int\n    $direction: ChatMessageDirection\n  ) {\n    findManyChatMessageByUser(\n      take: $take\n      chatRoomId: $chatRoomId\n      cursorId: $cursorId\n      direction: $direction\n    ) {\n      totalCount\n      chatMessages {\n        id\n        message\n        createdAt\n        sender\n        isUnread\n      }\n      isEnd\n    }\n  }\n": types.FindManyChatMessageByUserDocument,
    "\n  query FindManyChatRoomByUser($take: Int!, $cursorId: Int, $offerId: Int) {\n    findManyChatRoomByUser(\n      take: $take\n      cursorId: $cursorId\n      offerId: $offerId\n    ) {\n      totalCount\n      chatRooms {\n        id\n        createdAt\n        otherIdentity\n        offerId\n        isNewChatMessage\n        isUnread\n      }\n    }\n  }\n": types.FindManyChatRoomByUserDocument,
    "\n  query findManyCity {\n    findManyCity {\n      id\n      name\n    }\n  }\n": types.FindManyCityDocument,
    "\n  query findManyCountryCode {\n    findManyCountryCode {\n      id\n      code\n      country\n    }\n  }\n": types.FindManyCountryCodeDocument,
    "\n  query findManyMarketPrice {\n    findManyMarketPrice {\n      upbitMarkets {\n        code\n        timestamp\n        krwPrice\n        usdPrice\n      }\n      binanceMarkets {\n        code\n        timestamp\n        krwPrice\n        usdPrice\n      }\n      kimchiMarkets {\n        code\n        timestamp\n        changePrice\n        changeRate\n      }\n    }\n  }\n": types.FindManyMarketPriceDocument,
    "\n  query findManyNotice(\n    $take: Int!\n    $skip: Int!\n    $searchText: String!\n    $searchKind: NoticeSearchKind\n  ) {\n    findManyNotice(\n      take: $take\n      skip: $skip\n      searchText: $searchText\n      searchKind: $searchKind\n    ) {\n      totalCount\n      notices {\n        id\n        title\n        content\n        createdAt\n        hits\n      }\n    }\n  }\n": types.FindManyNoticeDocument,
    "\n  query findManyOffer(\n    $take: Int!\n    $skip: Int!\n    $coinKind: CoinKind\n    $offerAction: OfferAction\n    $identity: String\n    $isChat: Boolean\n  ) {\n    findManyOffer(\n      take: $take\n      skip: $skip\n      coinKind: $coinKind\n      offerAction: $offerAction\n      identity: $identity\n      isChat: $isChat\n    ) {\n      offers {\n        id\n        coinKind\n        offerAction\n        transactionMethod\n        price\n        minAmount\n        maxAmount\n        responseSpeed\n        content\n        createdAt\n        reservationStatus\n        transactionStatus\n        city {\n          id\n          name\n        }\n        identity\n        positiveCount\n        isNewChatMessage\n        connectionDate\n      }\n      totalCount\n    }\n  }\n": types.FindManyOfferDocument,
    "\n  query findManyPolicy($take: Int!) {\n    findManyPolicy(take: $take) {\n      totalCount\n      policies {\n        id\n        policyKind\n        title\n        content\n        createdAt\n        updatedAt\n      }\n    }\n  }\n": types.FindManyPolicyDocument,
    "\n  query findManyUserInquiryByUser($take: Int!, $skip: Int!) {\n    findManyUserInquiryByUser(take: $take, skip: $skip) {\n      totalCount\n      userInquiries {\n        id\n        title\n        content\n        reply\n        repliedAt\n        createdAt\n      }\n    }\n  }\n": types.FindManyUserInquiryByUserDocument,
    "\n  query findMyInfoByUser {\n    findMyInfoByUser {\n      identity\n      createdAt\n      level\n      connectionDate\n      phone\n      emailAuth {\n        id\n        email\n        createdAt\n      }\n      idCard {\n        id\n        name\n        registrationNumber\n        issueDate\n      }\n      driverLicense {\n        id\n        name\n        birth\n        area\n        licenseNumber\n        serialNumber\n      }\n      passport {\n        id\n        passportNumber\n        issueDate\n        expirationDate\n      }\n      positiveFeedbackCount\n      negativeFeedbackCount\n    }\n  }\n": types.FindMyInfoByUserDocument,
    "\n  query findOneNotice($findOneNoticeId: Int!) {\n    findOneNotice(id: $findOneNoticeId) {\n      id\n      title\n      content\n      createdAt\n      hits\n    }\n  }\n": types.FindOneNoticeDocument,
    "\n  query findOneOffer($findOneOfferId: Int!) {\n    findOneOffer(id: $findOneOfferId) {\n      id\n      coinKind\n      offerAction\n      transactionMethod\n      price\n      minAmount\n      maxAmount\n      responseSpeed\n      content\n      createdAt\n      reservationStatus\n      transactionStatus\n      city {\n        id\n        name\n      }\n      identity\n      isNewChatMessage\n    }\n  }\n": types.FindOneOfferDocument,
    "\n  query findOnePolicy($findOnePolicyId: Int, $policyKind: PolicyKind) {\n    findOnePolicy(id: $findOnePolicyId, policyKind: $policyKind)\n  }\n": types.FindOnePolicyDocument,
    "\n  query findOneUserInquiryByUser($findOneUserInquiryByUserId: Float!) {\n    findOneUserInquiryByUser(id: $findOneUserInquiryByUserId) {\n      id\n      title\n      content\n      reply\n      repliedAt\n      createdAt\n    }\n  }\n": types.FindOneUserInquiryByUserDocument,
    "\n  query findPassword(\n    $identity: String!\n    $hash: String!\n    $phone: String!\n    $newPassword: String!\n  ) {\n    findPassword(\n      identity: $identity\n      hash: $hash\n      phone: $phone\n      newPassword: $newPassword\n    )\n  }\n": types.FindPasswordDocument,
    "\n  query findUserInfoByUser($identity: String!) {\n    findUserInfoByUser(identity: $identity) {\n      identity\n      level\n      connectionDate\n      positiveFeedbackCount\n      negativeFeedbackCount\n    }\n  }\n": types.FindUserInfoByUserDocument,
    "\n  query sendMailAuthNumber($email: String!) {\n    sendMailAuthNumber(email: $email)\n  }\n": types.SendMailAuthNumberDocument,
    "\n  query sendPhoneAuthNumber($phone: String!) {\n    sendPhoneAuthNumber(phone: $phone)\n  }\n": types.SendPhoneAuthNumberDocument,
    "\n  query signInByUser($identity: String!, $password: String!) {\n    signInByUser(identity: $identity, password: $password) {\n      accessToken\n      refreshToken\n    }\n  }\n": types.SignInByUserDocument,
    "\n  query verifyOriginPasswordByUser($password: String!) {\n    verifyOriginPasswordByUser(password: $password)\n  }\n": types.VerifyOriginPasswordByUserDocument,
    "\n  subscription Subscription($chatRoomId: Int!) {\n    subscribeChatMessage(chatRoomId: $chatRoomId) {\n      chatMessage {\n        id\n        message\n        createdAt\n        sender\n      }\n      totalCount\n    }\n  }\n": types.SubscriptionDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation confirmEmailAuthNumber($email: String!, $authNumber: String!) {\n    confirmEmailAuthNumber(email: $email, authNumber: $authNumber) {\n      id\n      email\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  mutation confirmEmailAuthNumber($email: String!, $authNumber: String!) {\n    confirmEmailAuthNumber(email: $email, authNumber: $authNumber) {\n      id\n      email\n      createdAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createChatMessage($chatRoomId: Int!, $message: String!) {\n    createChatMessage(chatRoomId: $chatRoomId, message: $message) {\n      chatMessage {\n        id\n        message\n        createdAt\n        sender\n      }\n      totalCount\n    }\n  }\n"): (typeof documents)["\n  mutation createChatMessage($chatRoomId: Int!, $message: String!) {\n    createChatMessage(chatRoomId: $chatRoomId, message: $message) {\n      chatMessage {\n        id\n        message\n        createdAt\n        sender\n      }\n      totalCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createDriverLicense(\n    $name: String!\n    $birth: String!\n    $area: String!\n    $licenseNumber: String!\n    $serialNumber: String!\n  ) {\n    createDriverLicense(\n      name: $name\n      birth: $birth\n      area: $area\n      licenseNumber: $licenseNumber\n      serialNumber: $serialNumber\n    ) {\n      id\n      name\n      birth\n      area\n      licenseNumber\n      serialNumber\n    }\n  }\n"): (typeof documents)["\n  mutation createDriverLicense(\n    $name: String!\n    $birth: String!\n    $area: String!\n    $licenseNumber: String!\n    $serialNumber: String!\n  ) {\n    createDriverLicense(\n      name: $name\n      birth: $birth\n      area: $area\n      licenseNumber: $licenseNumber\n      serialNumber: $serialNumber\n    ) {\n      id\n      name\n      birth\n      area\n      licenseNumber\n      serialNumber\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createIdCard(\n    $name: String!\n    $registrationNumber: String!\n    $issueDate: String!\n  ) {\n    createIdCard(\n      name: $name\n      registrationNumber: $registrationNumber\n      issueDate: $issueDate\n    ) {\n      id\n      name\n      registrationNumber\n      issueDate\n    }\n  }\n"): (typeof documents)["\n  mutation createIdCard(\n    $name: String!\n    $registrationNumber: String!\n    $issueDate: String!\n  ) {\n    createIdCard(\n      name: $name\n      registrationNumber: $registrationNumber\n      issueDate: $issueDate\n    ) {\n      id\n      name\n      registrationNumber\n      issueDate\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createOfferByUser(\n    $coinKind: CoinKind!\n    $offerAction: OfferAction!\n    $transactionMethod: TransactionMethod!\n    $cityId: Int!\n    $price: Int!\n    $minAmount: Int!\n    $maxAmount: Int!\n    $responseSpeed: Int!\n    $content: String!\n  ) {\n    createOfferByUser(\n      coinKind: $coinKind\n      offerAction: $offerAction\n      transactionMethod: $transactionMethod\n      cityId: $cityId\n      price: $price\n      minAmount: $minAmount\n      maxAmount: $maxAmount\n      responseSpeed: $responseSpeed\n      content: $content\n    ) {\n      id\n      coinKind\n      offerAction\n      transactionMethod\n      price\n      minAmount\n      maxAmount\n      responseSpeed\n      content\n      createdAt\n      reservationStatus\n      transactionStatus\n    }\n  }\n"): (typeof documents)["\n  mutation createOfferByUser(\n    $coinKind: CoinKind!\n    $offerAction: OfferAction!\n    $transactionMethod: TransactionMethod!\n    $cityId: Int!\n    $price: Int!\n    $minAmount: Int!\n    $maxAmount: Int!\n    $responseSpeed: Int!\n    $content: String!\n  ) {\n    createOfferByUser(\n      coinKind: $coinKind\n      offerAction: $offerAction\n      transactionMethod: $transactionMethod\n      cityId: $cityId\n      price: $price\n      minAmount: $minAmount\n      maxAmount: $maxAmount\n      responseSpeed: $responseSpeed\n      content: $content\n    ) {\n      id\n      coinKind\n      offerAction\n      transactionMethod\n      price\n      minAmount\n      maxAmount\n      responseSpeed\n      content\n      createdAt\n      reservationStatus\n      transactionStatus\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createPassport(\n    $name: String!\n    $passportNumber: String!\n    $issueDate: String!\n    $expirationDate: String!\n    $birth: String!\n  ) {\n    createPassport(\n      name: $name\n      passportNumber: $passportNumber\n      issueDate: $issueDate\n      expirationDate: $expirationDate\n      birth: $birth\n    ) {\n      id\n      name\n      passportNumber\n      issueDate\n      expirationDate\n      birth\n    }\n  }\n"): (typeof documents)["\n  mutation createPassport(\n    $name: String!\n    $passportNumber: String!\n    $issueDate: String!\n    $expirationDate: String!\n    $birth: String!\n  ) {\n    createPassport(\n      name: $name\n      passportNumber: $passportNumber\n      issueDate: $issueDate\n      expirationDate: $expirationDate\n      birth: $birth\n    ) {\n      id\n      name\n      passportNumber\n      issueDate\n      expirationDate\n      birth\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createUserInquiryByUser($title: String!, $content: String!) {\n    createUserInquiryByUser(title: $title, content: $content) {\n      id\n      title\n      content\n      reply\n      repliedAt\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  mutation createUserInquiryByUser($title: String!, $content: String!) {\n    createUserInquiryByUser(title: $title, content: $content) {\n      id\n      title\n      content\n      reply\n      repliedAt\n      createdAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation deleteOfferByUser($deleteOfferByUserId: Int!) {\n    deleteOfferByUser(id: $deleteOfferByUserId) {\n      id\n      coinKind\n      offerAction\n      transactionMethod\n      price\n      minAmount\n      maxAmount\n      responseSpeed\n      content\n      createdAt\n      reservationStatus\n      transactionStatus\n    }\n  }\n"): (typeof documents)["\n  mutation deleteOfferByUser($deleteOfferByUserId: Int!) {\n    deleteOfferByUser(id: $deleteOfferByUserId) {\n      id\n      coinKind\n      offerAction\n      transactionMethod\n      price\n      minAmount\n      maxAmount\n      responseSpeed\n      content\n      createdAt\n      reservationStatus\n      transactionStatus\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation deleteUserInquiry($deleteUserInquiryId: Int!) {\n    deleteUserInquiry(id: $deleteUserInquiryId)\n  }\n"): (typeof documents)["\n  mutation deleteUserInquiry($deleteUserInquiryId: Int!) {\n    deleteUserInquiry(id: $deleteUserInquiryId)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation enterChatRoom($offerId: Int!) {\n    enterChatRoom(offerId: $offerId) {\n      id\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  mutation enterChatRoom($offerId: Int!) {\n    enterChatRoom(offerId: $offerId) {\n      id\n      createdAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation refreshByUser {\n    refreshByUser {\n      accessToken\n      refreshToken\n    }\n  }\n"): (typeof documents)["\n  mutation refreshByUser {\n    refreshByUser {\n      accessToken\n      refreshToken\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation signOutByUser {\n    signOutByUser\n  }\n"): (typeof documents)["\n  mutation signOutByUser {\n    signOutByUser\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation signUpByUser(\n    $identity: String!\n    $password: String!\n    $phone: String!\n    $hash: String!\n    $loginKind: LoginKind!\n  ) {\n    signUpByUser(\n      identity: $identity\n      password: $password\n      phone: $phone\n      hash: $hash\n      loginKind: $loginKind\n    ) {\n      identity\n      createdAt\n      level\n      connectionDate\n      phone\n    }\n  }\n"): (typeof documents)["\n  mutation signUpByUser(\n    $identity: String!\n    $password: String!\n    $phone: String!\n    $hash: String!\n    $loginKind: LoginKind!\n  ) {\n    signUpByUser(\n      identity: $identity\n      password: $password\n      phone: $phone\n      hash: $hash\n      loginKind: $loginKind\n    ) {\n      identity\n      createdAt\n      level\n      connectionDate\n      phone\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation toggleFeedbackByUser(\n    $feedbackKind: FeedbackKind!\n    $receiverIdentity: String!\n  ) {\n    toggleFeedbackByUser(\n      feedbackKind: $feedbackKind\n      receiverIdentity: $receiverIdentity\n    ) {\n      id\n      feedbackKind\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  mutation toggleFeedbackByUser(\n    $feedbackKind: FeedbackKind!\n    $receiverIdentity: String!\n  ) {\n    toggleFeedbackByUser(\n      feedbackKind: $feedbackKind\n      receiverIdentity: $receiverIdentity\n    ) {\n      id\n      feedbackKind\n      createdAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation updateCheckedCurrentChatMessageByUser(\n    $chatRoomId: Int!\n    $chatMessageId: Int!\n  ) {\n    updateCheckedCurrentChatMessageByUser(\n      chatRoomId: $chatRoomId\n      chatMessageId: $chatMessageId\n    ) {\n      id\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  mutation updateCheckedCurrentChatMessageByUser(\n    $chatRoomId: Int!\n    $chatMessageId: Int!\n  ) {\n    updateCheckedCurrentChatMessageByUser(\n      chatRoomId: $chatRoomId\n      chatMessageId: $chatMessageId\n    ) {\n      id\n      createdAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation updatePasswordByUser(\n    $originPassword: String!\n    $newPassword: String!\n  ) {\n    updatePasswordByUser(\n      originPassword: $originPassword\n      newPassword: $newPassword\n    ) {\n      identity\n      createdAt\n      level\n      connectionDate\n      phone\n    }\n  }\n"): (typeof documents)["\n  mutation updatePasswordByUser(\n    $originPassword: String!\n    $newPassword: String!\n  ) {\n    updatePasswordByUser(\n      originPassword: $originPassword\n      newPassword: $newPassword\n    ) {\n      identity\n      createdAt\n      level\n      connectionDate\n      phone\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation updatePhoneNumberByUser($hash: String!, $phone: String!) {\n    updatePhoneNumberByUser(hash: $hash, phone: $phone) {\n      identity\n      createdAt\n      level\n      connectionDate\n      phone\n    }\n  }\n"): (typeof documents)["\n  mutation updatePhoneNumberByUser($hash: String!, $phone: String!) {\n    updatePhoneNumberByUser(hash: $hash, phone: $phone) {\n      identity\n      createdAt\n      level\n      connectionDate\n      phone\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation updateReservationStatusByUser(\n    $updateReservationStatusByUserId: Int!\n  ) {\n    updateReservationStatusByUser(id: $updateReservationStatusByUserId) {\n      id\n      coinKind\n      offerAction\n      transactionMethod\n      price\n      minAmount\n      maxAmount\n      responseSpeed\n      content\n      createdAt\n      reservationStatus\n      transactionStatus\n    }\n  }\n"): (typeof documents)["\n  mutation updateReservationStatusByUser(\n    $updateReservationStatusByUserId: Int!\n  ) {\n    updateReservationStatusByUser(id: $updateReservationStatusByUserId) {\n      id\n      coinKind\n      offerAction\n      transactionMethod\n      price\n      minAmount\n      maxAmount\n      responseSpeed\n      content\n      createdAt\n      reservationStatus\n      transactionStatus\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation updateTransactionStatusByUser(\n    $updateTransactionStatusByUserId: Int!\n  ) {\n    updateTransactionStatusByUser(id: $updateTransactionStatusByUserId) {\n      id\n      coinKind\n      offerAction\n      transactionMethod\n      price\n      minAmount\n      maxAmount\n      responseSpeed\n      content\n      createdAt\n      reservationStatus\n      transactionStatus\n    }\n  }\n"): (typeof documents)["\n  mutation updateTransactionStatusByUser(\n    $updateTransactionStatusByUserId: Int!\n  ) {\n    updateTransactionStatusByUser(id: $updateTransactionStatusByUserId) {\n      id\n      coinKind\n      offerAction\n      transactionMethod\n      price\n      minAmount\n      maxAmount\n      responseSpeed\n      content\n      createdAt\n      reservationStatus\n      transactionStatus\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation updateUserInquiry(\n    $updateUserInquiryId: Int!\n    $title: String!\n    $content: String!\n  ) {\n    updateUserInquiry(\n      id: $updateUserInquiryId\n      title: $title\n      content: $content\n    )\n  }\n"): (typeof documents)["\n  mutation updateUserInquiry(\n    $updateUserInquiryId: Int!\n    $title: String!\n    $content: String!\n  ) {\n    updateUserInquiry(\n      id: $updateUserInquiryId\n      title: $title\n      content: $content\n    )\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation withdrawalUser {\n    withdrawalUser\n  }\n"): (typeof documents)["\n  mutation withdrawalUser {\n    withdrawalUser\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query checkDuplicateIdentity($identity: String!) {\n    checkDuplicateIdentity(identity: $identity)\n  }\n"): (typeof documents)["\n  query checkDuplicateIdentity($identity: String!) {\n    checkDuplicateIdentity(identity: $identity)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query confirmPhoneAuthNumber(\n    $phone: String!\n    $authNumber: String!\n    $identity: String\n  ) {\n    confirmPhoneAuthNumber(\n      phone: $phone\n      authNumber: $authNumber\n      identity: $identity\n    )\n  }\n"): (typeof documents)["\n  query confirmPhoneAuthNumber(\n    $phone: String!\n    $authNumber: String!\n    $identity: String\n  ) {\n    confirmPhoneAuthNumber(\n      phone: $phone\n      authNumber: $authNumber\n      identity: $identity\n    )\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query findIdentity($hash: String!, $phone: String!) {\n    findIdentity(hash: $hash, phone: $phone)\n  }\n"): (typeof documents)["\n  query findIdentity($hash: String!, $phone: String!) {\n    findIdentity(hash: $hash, phone: $phone)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query findManyChatMessageByUser(\n    $take: Int!\n    $chatRoomId: Int!\n    $cursorId: Int\n    $direction: ChatMessageDirection\n  ) {\n    findManyChatMessageByUser(\n      take: $take\n      chatRoomId: $chatRoomId\n      cursorId: $cursorId\n      direction: $direction\n    ) {\n      totalCount\n      chatMessages {\n        id\n        message\n        createdAt\n        sender\n        isUnread\n      }\n      isEnd\n    }\n  }\n"): (typeof documents)["\n  query findManyChatMessageByUser(\n    $take: Int!\n    $chatRoomId: Int!\n    $cursorId: Int\n    $direction: ChatMessageDirection\n  ) {\n    findManyChatMessageByUser(\n      take: $take\n      chatRoomId: $chatRoomId\n      cursorId: $cursorId\n      direction: $direction\n    ) {\n      totalCount\n      chatMessages {\n        id\n        message\n        createdAt\n        sender\n        isUnread\n      }\n      isEnd\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FindManyChatRoomByUser($take: Int!, $cursorId: Int, $offerId: Int) {\n    findManyChatRoomByUser(\n      take: $take\n      cursorId: $cursorId\n      offerId: $offerId\n    ) {\n      totalCount\n      chatRooms {\n        id\n        createdAt\n        otherIdentity\n        offerId\n        isNewChatMessage\n        isUnread\n      }\n    }\n  }\n"): (typeof documents)["\n  query FindManyChatRoomByUser($take: Int!, $cursorId: Int, $offerId: Int) {\n    findManyChatRoomByUser(\n      take: $take\n      cursorId: $cursorId\n      offerId: $offerId\n    ) {\n      totalCount\n      chatRooms {\n        id\n        createdAt\n        otherIdentity\n        offerId\n        isNewChatMessage\n        isUnread\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query findManyCity {\n    findManyCity {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query findManyCity {\n    findManyCity {\n      id\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query findManyCountryCode {\n    findManyCountryCode {\n      id\n      code\n      country\n    }\n  }\n"): (typeof documents)["\n  query findManyCountryCode {\n    findManyCountryCode {\n      id\n      code\n      country\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query findManyMarketPrice {\n    findManyMarketPrice {\n      upbitMarkets {\n        code\n        timestamp\n        krwPrice\n        usdPrice\n      }\n      binanceMarkets {\n        code\n        timestamp\n        krwPrice\n        usdPrice\n      }\n      kimchiMarkets {\n        code\n        timestamp\n        changePrice\n        changeRate\n      }\n    }\n  }\n"): (typeof documents)["\n  query findManyMarketPrice {\n    findManyMarketPrice {\n      upbitMarkets {\n        code\n        timestamp\n        krwPrice\n        usdPrice\n      }\n      binanceMarkets {\n        code\n        timestamp\n        krwPrice\n        usdPrice\n      }\n      kimchiMarkets {\n        code\n        timestamp\n        changePrice\n        changeRate\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query findManyNotice(\n    $take: Int!\n    $skip: Int!\n    $searchText: String!\n    $searchKind: NoticeSearchKind\n  ) {\n    findManyNotice(\n      take: $take\n      skip: $skip\n      searchText: $searchText\n      searchKind: $searchKind\n    ) {\n      totalCount\n      notices {\n        id\n        title\n        content\n        createdAt\n        hits\n      }\n    }\n  }\n"): (typeof documents)["\n  query findManyNotice(\n    $take: Int!\n    $skip: Int!\n    $searchText: String!\n    $searchKind: NoticeSearchKind\n  ) {\n    findManyNotice(\n      take: $take\n      skip: $skip\n      searchText: $searchText\n      searchKind: $searchKind\n    ) {\n      totalCount\n      notices {\n        id\n        title\n        content\n        createdAt\n        hits\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query findManyOffer(\n    $take: Int!\n    $skip: Int!\n    $coinKind: CoinKind\n    $offerAction: OfferAction\n    $identity: String\n    $isChat: Boolean\n  ) {\n    findManyOffer(\n      take: $take\n      skip: $skip\n      coinKind: $coinKind\n      offerAction: $offerAction\n      identity: $identity\n      isChat: $isChat\n    ) {\n      offers {\n        id\n        coinKind\n        offerAction\n        transactionMethod\n        price\n        minAmount\n        maxAmount\n        responseSpeed\n        content\n        createdAt\n        reservationStatus\n        transactionStatus\n        city {\n          id\n          name\n        }\n        identity\n        positiveCount\n        isNewChatMessage\n        connectionDate\n      }\n      totalCount\n    }\n  }\n"): (typeof documents)["\n  query findManyOffer(\n    $take: Int!\n    $skip: Int!\n    $coinKind: CoinKind\n    $offerAction: OfferAction\n    $identity: String\n    $isChat: Boolean\n  ) {\n    findManyOffer(\n      take: $take\n      skip: $skip\n      coinKind: $coinKind\n      offerAction: $offerAction\n      identity: $identity\n      isChat: $isChat\n    ) {\n      offers {\n        id\n        coinKind\n        offerAction\n        transactionMethod\n        price\n        minAmount\n        maxAmount\n        responseSpeed\n        content\n        createdAt\n        reservationStatus\n        transactionStatus\n        city {\n          id\n          name\n        }\n        identity\n        positiveCount\n        isNewChatMessage\n        connectionDate\n      }\n      totalCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query findManyPolicy($take: Int!) {\n    findManyPolicy(take: $take) {\n      totalCount\n      policies {\n        id\n        policyKind\n        title\n        content\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"): (typeof documents)["\n  query findManyPolicy($take: Int!) {\n    findManyPolicy(take: $take) {\n      totalCount\n      policies {\n        id\n        policyKind\n        title\n        content\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query findManyUserInquiryByUser($take: Int!, $skip: Int!) {\n    findManyUserInquiryByUser(take: $take, skip: $skip) {\n      totalCount\n      userInquiries {\n        id\n        title\n        content\n        reply\n        repliedAt\n        createdAt\n      }\n    }\n  }\n"): (typeof documents)["\n  query findManyUserInquiryByUser($take: Int!, $skip: Int!) {\n    findManyUserInquiryByUser(take: $take, skip: $skip) {\n      totalCount\n      userInquiries {\n        id\n        title\n        content\n        reply\n        repliedAt\n        createdAt\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query findMyInfoByUser {\n    findMyInfoByUser {\n      identity\n      createdAt\n      level\n      connectionDate\n      phone\n      emailAuth {\n        id\n        email\n        createdAt\n      }\n      idCard {\n        id\n        name\n        registrationNumber\n        issueDate\n      }\n      driverLicense {\n        id\n        name\n        birth\n        area\n        licenseNumber\n        serialNumber\n      }\n      passport {\n        id\n        passportNumber\n        issueDate\n        expirationDate\n      }\n      positiveFeedbackCount\n      negativeFeedbackCount\n    }\n  }\n"): (typeof documents)["\n  query findMyInfoByUser {\n    findMyInfoByUser {\n      identity\n      createdAt\n      level\n      connectionDate\n      phone\n      emailAuth {\n        id\n        email\n        createdAt\n      }\n      idCard {\n        id\n        name\n        registrationNumber\n        issueDate\n      }\n      driverLicense {\n        id\n        name\n        birth\n        area\n        licenseNumber\n        serialNumber\n      }\n      passport {\n        id\n        passportNumber\n        issueDate\n        expirationDate\n      }\n      positiveFeedbackCount\n      negativeFeedbackCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query findOneNotice($findOneNoticeId: Int!) {\n    findOneNotice(id: $findOneNoticeId) {\n      id\n      title\n      content\n      createdAt\n      hits\n    }\n  }\n"): (typeof documents)["\n  query findOneNotice($findOneNoticeId: Int!) {\n    findOneNotice(id: $findOneNoticeId) {\n      id\n      title\n      content\n      createdAt\n      hits\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query findOneOffer($findOneOfferId: Int!) {\n    findOneOffer(id: $findOneOfferId) {\n      id\n      coinKind\n      offerAction\n      transactionMethod\n      price\n      minAmount\n      maxAmount\n      responseSpeed\n      content\n      createdAt\n      reservationStatus\n      transactionStatus\n      city {\n        id\n        name\n      }\n      identity\n      isNewChatMessage\n    }\n  }\n"): (typeof documents)["\n  query findOneOffer($findOneOfferId: Int!) {\n    findOneOffer(id: $findOneOfferId) {\n      id\n      coinKind\n      offerAction\n      transactionMethod\n      price\n      minAmount\n      maxAmount\n      responseSpeed\n      content\n      createdAt\n      reservationStatus\n      transactionStatus\n      city {\n        id\n        name\n      }\n      identity\n      isNewChatMessage\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query findOnePolicy($findOnePolicyId: Int, $policyKind: PolicyKind) {\n    findOnePolicy(id: $findOnePolicyId, policyKind: $policyKind)\n  }\n"): (typeof documents)["\n  query findOnePolicy($findOnePolicyId: Int, $policyKind: PolicyKind) {\n    findOnePolicy(id: $findOnePolicyId, policyKind: $policyKind)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query findOneUserInquiryByUser($findOneUserInquiryByUserId: Float!) {\n    findOneUserInquiryByUser(id: $findOneUserInquiryByUserId) {\n      id\n      title\n      content\n      reply\n      repliedAt\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query findOneUserInquiryByUser($findOneUserInquiryByUserId: Float!) {\n    findOneUserInquiryByUser(id: $findOneUserInquiryByUserId) {\n      id\n      title\n      content\n      reply\n      repliedAt\n      createdAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query findPassword(\n    $identity: String!\n    $hash: String!\n    $phone: String!\n    $newPassword: String!\n  ) {\n    findPassword(\n      identity: $identity\n      hash: $hash\n      phone: $phone\n      newPassword: $newPassword\n    )\n  }\n"): (typeof documents)["\n  query findPassword(\n    $identity: String!\n    $hash: String!\n    $phone: String!\n    $newPassword: String!\n  ) {\n    findPassword(\n      identity: $identity\n      hash: $hash\n      phone: $phone\n      newPassword: $newPassword\n    )\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query findUserInfoByUser($identity: String!) {\n    findUserInfoByUser(identity: $identity) {\n      identity\n      level\n      connectionDate\n      positiveFeedbackCount\n      negativeFeedbackCount\n    }\n  }\n"): (typeof documents)["\n  query findUserInfoByUser($identity: String!) {\n    findUserInfoByUser(identity: $identity) {\n      identity\n      level\n      connectionDate\n      positiveFeedbackCount\n      negativeFeedbackCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query sendMailAuthNumber($email: String!) {\n    sendMailAuthNumber(email: $email)\n  }\n"): (typeof documents)["\n  query sendMailAuthNumber($email: String!) {\n    sendMailAuthNumber(email: $email)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query sendPhoneAuthNumber($phone: String!) {\n    sendPhoneAuthNumber(phone: $phone)\n  }\n"): (typeof documents)["\n  query sendPhoneAuthNumber($phone: String!) {\n    sendPhoneAuthNumber(phone: $phone)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query signInByUser($identity: String!, $password: String!) {\n    signInByUser(identity: $identity, password: $password) {\n      accessToken\n      refreshToken\n    }\n  }\n"): (typeof documents)["\n  query signInByUser($identity: String!, $password: String!) {\n    signInByUser(identity: $identity, password: $password) {\n      accessToken\n      refreshToken\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query verifyOriginPasswordByUser($password: String!) {\n    verifyOriginPasswordByUser(password: $password)\n  }\n"): (typeof documents)["\n  query verifyOriginPasswordByUser($password: String!) {\n    verifyOriginPasswordByUser(password: $password)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  subscription Subscription($chatRoomId: Int!) {\n    subscribeChatMessage(chatRoomId: $chatRoomId) {\n      chatMessage {\n        id\n        message\n        createdAt\n        sender\n      }\n      totalCount\n    }\n  }\n"): (typeof documents)["\n  subscription Subscription($chatRoomId: Int!) {\n    subscribeChatMessage(chatRoomId: $chatRoomId) {\n      chatMessage {\n        id\n        message\n        createdAt\n        sender\n      }\n      totalCount\n    }\n  }\n"];

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function gql(source: string): unknown;

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;