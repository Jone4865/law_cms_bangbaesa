import { Button, Input, Modal, notification } from "antd";
import React, { useEffect, useState } from "react";
import * as S from "./style";

import moment from "moment";

import { useMutation } from "@apollo/client";
import TransformBox from "../TransformBox";

import { REPLY_USER_INQUIRY_BY_ADMIN } from "src/graphql/mutation/replyUserInquiryByAdmin";
import { FindManyUserInquiryByAdminOutput } from "src/graphql/generated/graphql";

type Props = {
  handleCancel: () => void;
  open: boolean;
  data: FindManyUserInquiryByAdminOutput["userInquiries"][0] | undefined;
  refetch: () => void;
};

export function InquiryDetailModal({
  open,
  handleCancel,
  data,
  refetch,
}: Props) {
  const [reply, setReply] = useState("");

  const handleReply = () => {
    if (data?.reply) {
      return handleCancel();
    }
    if (!reply.length) {
      return notification.error({ message: "답변을 입력해주세요." });
    }
    replyUserInquiryByAdmin({
      variables: {
        replyUserInquiryByAdminId: Number(data?.id ?? 0),
        reply,
      },
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReply(e.target.value);
  };

  const [replyUserInquiryByAdmin] = useMutation(REPLY_USER_INQUIRY_BY_ADMIN, {
    onCompleted: () => {
      notification.success({ message: "답변을 등록했습니다." });
      handleCancel();
      refetch();
    },
    onError: (e) => {
      notification.error({ message: e.message });
    },
  });

  useEffect(() => {
    if (data?.reply) {
      setReply(data.reply);
    } else {
      setReply("");
    }
  }, [open]);

  return (
    <Modal
      open={open}
      onCancel={handleCancel}
      footer={false}
      centered
      width={1000}
      bodyStyle={{
        maxHeight: "90vh",
        overflow: "auto",
      }}
    >
      <S.Wrap>
        <S.Label>문의자</S.Label>
      </S.Wrap>
      <S.Wrap>
        <S.Label>문의 날짜</S.Label>
        {moment(data?.createdAt).format("YYYY-MM-DD HH:mm:ss")}
      </S.Wrap>

      <h3>문의내용</h3>
      <Input.TextArea
        value={data?.content}
        readOnly
        style={{
          marginBottom: 30,
          height: 100,
        }}
      />

      <h3>문의답변</h3>
      <Input.TextArea
        value={reply}
        readOnly={(data?.reply?.length ?? -1) > 0}
        style={{
          height: 100,
        }}
        onChange={handleChange}
      />

      <TransformBox justifyContent="center" marginTop="30px">
        <Button
          type="primary"
          style={{
            width: 150,
          }}
          onClick={handleReply}
        >
          {data?.reply ? "확인" : "답변 작성"}
        </Button>
      </TransformBox>
    </Modal>
  );
}
