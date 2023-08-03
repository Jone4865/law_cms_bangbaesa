import React, { useEffect, useState } from "react";
import { Button, Input, Modal, notification, Popconfirm } from "antd";
import * as S from "./style";

import { useMutation } from "@apollo/client";
import TransformBox from "../TransformBox";
import { DELETE_ADMIN } from "src/graphql/mutation/deleteAdmin";
import { CREATE_OTP_QR } from "src/graphql/mutation/createOtopQr";
import { SIGN_UP_BY_ADMIN } from "src/graphql/mutation/signUpByAdmin";

export type SubmitType = {
  email?: string;
  password?: string;
  adminRoles: KindType[];
  otpSecret: string;
};

type Props = {
  email: string;
  open: boolean;
  next: boolean;
  handleCancel: () => void;
  admin?: any;
  refetch: () => void;
  adminRoles: KindType[];
  setQrModalopen: React.Dispatch<React.SetStateAction<boolean>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setOtpSecret: React.Dispatch<React.SetStateAction<string>>;
  setOtpUrl: React.Dispatch<React.SetStateAction<string>>;
};

export function AdminDetailModal({
  handleCancel,
  open,
  admin,
  refetch,
  // adminRoles,
  setEmail,
  setQrModalopen,
  email,
  setOtpSecret,
  setOtpUrl,
  next,
}: Props) {
  const [isPasswordChange, setPasswordChange] = useState(false);
  const [adminInfo, setAdminInfo] = useState<SubmitType>({
    adminRoles: [
      {
        name: "READ_DASHBOARD",
        id: 2,
      },
      {
        name: "READ_PARTNERSHIP_INQUIRY",
        id: 17,
      },
      {
        name: "READ_INQUIRY",
        id: 7,
      },
    ],
    email: "",
    password: "",
    otpSecret: "",
  });

  const onCreateQr = () => {
    createOtpQr({ variables: { email } });
  };

  const onCreateAdmin = () => {
    if (!adminInfo.password?.length) {
      notification.error({ message: "비밀번호를 입력해주세요." });
    } else if (!adminInfo.otpSecret.length) {
      notification.error({ message: "Otp Secret code를 입력해주세요." });
    } else {
      signUpByAdmin({ variables: { ...adminInfo } });
    }
  };

  const DeleteHandle = (id: number) => {
    deleteAdmin({ variables: { deleteAdminId: id } });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    keyword: string
  ) => {
    setAdminInfo({
      ...adminInfo,
      [keyword]: e.target.value,
    });

    if (keyword === "email") {
      setEmail(e.target.value);
    }
  };

  const [createOtpQr] = useMutation(CREATE_OTP_QR, {
    onCompleted: (data) => {
      setOtpSecret(data.createOtpQr.otpSecret);
      setOtpUrl(data.createOtpQr.url);
      notification.success({ message: "Qr코드를 생성했습니다" });
      handleCancel();
      setQrModalopen(true);
    },
    onError: (e) => {
      notification.error({ message: e.message });
      refetch();
    },
  });

  const [signUpByAdmin] = useMutation(SIGN_UP_BY_ADMIN, {
    onCompleted: (data) => {
      notification.success({ message: "관리자를 생성했습니다" });
    },
    onError: (e) => {
      notification.error({ message: e.message });
      refetch();
    },
  });

  const [deleteAdmin] = useMutation(DELETE_ADMIN, {
    onCompleted: () => {
      notification.success({ message: "관리자를 삭제했습니다" });
      handleCancel();
      refetch();
    },
    onError: (e) => {
      notification.error({ message: e.message });

      refetch();
    },
  });

  useEffect(() => {
    if (admin) {
      setAdminInfo({
        ...admin,
        password: "qweasd123@",
      });
      setPasswordChange(true);
    } else {
      setAdminInfo({
        adminRoles: [
          {
            name: "READ_DASHBOARD",
            id: 2,
          },
          {
            name: "READ_PARTNERSHIP_INQUIRY",
            id: 17,
          },
          {
            name: "READ_INQUIRY",
            id: 7,
          },
        ],
        email: "",
        password: "",
        otpSecret: "",
      });
      setPasswordChange(false);
    }

    if (next) {
      setAdminInfo({
        ...admin,
        email,
      });
    }
  }, [open]);

  return (
    <Modal
      open={open}
      onCancel={handleCancel}
      title="관리자 생성"
      centered
      width={800}
      footer={false}
      bodyStyle={{
        maxHeight: "90vh",
        overflow: "auto",
      }}
    >
      <S.FormWrap>
        <S.Label>이메일</S.Label>
        <Input
          value={adminInfo.email}
          onChange={(e) => handleChange(e, "email")}
          disabled={admin || next ? true : false}
        />
      </S.FormWrap>
      {(admin || next) && (
        <S.FormWrap>
          <S.Label>비밀번호</S.Label>
          <TransformBox width="100%">
            <Input.Password
              disabled={isPasswordChange}
              value={adminInfo.password}
              onChange={(e) => handleChange(e, "password")}
            />
          </TransformBox>
        </S.FormWrap>
      )}
      {next && (
        <S.FormWrap>
          <S.Label>Otp Secret 코드</S.Label>
          <TransformBox width="100%">
            <Input
              value={adminInfo.otpSecret}
              onChange={(e) => handleChange(e, "otpSecret")}
            />
          </TransformBox>
        </S.FormWrap>
      )}

      <TransformBox justifyContent="center">
        <>
          {admin ? (
            <Popconfirm
              onConfirm={() => DeleteHandle(1)}
              okText="삭제"
              title="정말로 삭제하시겠습니까?"
            >
              <Button
                style={{
                  marginLeft: 30,
                }}
                type="primary"
                danger
              >
                삭제
              </Button>
            </Popconfirm>
          ) : (
            <Button
              style={{
                marginLeft: 30,
              }}
              type="primary"
              onClick={!next ? onCreateQr : onCreateAdmin}
            >
              생성하기
            </Button>
          )}
        </>
      </TransformBox>
    </Modal>
  );
}
