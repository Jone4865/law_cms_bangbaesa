import { useMutation } from "@apollo/client";
import { Button, Input, Modal, Popconfirm, notification } from "antd";

import React, { useEffect, useState } from "react";
import { Editor } from "../Editor";
import TransformBox from "../TransformBox";
import { UPDATE_POLICY } from "src/graphql/mutation/updatePolicy";
import { FindManyPolicyQuery } from "src/graphql/generated/graphql";
import { DELETE_POLICY } from "src/graphql/mutation/deletePolicy";
import { CREATE_POLICY } from "src/graphql/mutation/createPolicy";

type Props = {
  open: boolean;
  handleCancel: () => void;
  data: FindManyPolicyQuery["findManyPolicy"]["policies"][0] | undefined;
  refetch: () => void;
};

export function PolicyDetailModal({
  open,
  handleCancel,
  data,
  refetch,
}: Props) {
  const [kind, setKind] = useState("");
  const [content, setContent] = useState("");

  const handleClick = () => {
    if (!content.length) {
      return notification.error({ message: "약관 내용을 입력해주세요" });
    }
    if (data) {
      const variables = {
        content,
        updatePolicyId: data?.id,
        title: "",
      };

      updatePolicy({
        variables: {
          ...variables,
          updatePolicyId: data?.id,
        },
      });
    } else {
      createPolicy({
        variables: {
          policyKind: kind,
          title: kind,
          content,
        },
      });
    }
  };

  const [createPolicy] = useMutation(CREATE_POLICY, {
    onCompleted: () => {
      notification.success({ message: "약관을 생성했습니다." });
      handleCancel();
      refetch();
    },
    onError: (e) => {
      notification.error({ message: e.message });
    },
  });

  const [updatePolicy] = useMutation(UPDATE_POLICY, {
    onCompleted: () => {
      notification.success({ message: "약관을 수정했습니다." });
      handleCancel();
      refetch();
    },
    onError: (e) => {
      notification.error({ message: e.message });
    },
  });

  const [deletePolicy] = useMutation(DELETE_POLICY, {
    onCompleted: () => {
      notification.success({ message: "약관을 삭제했습니다." });
      handleCancel();
      refetch();
    },
    onError: (e) => {
      notification.error({ message: e.message });
    },
    variables: {
      id: data?.id ?? -1,
    },
  });

  useEffect(() => {
    setContent(data?.content ?? "");
  }, [open]);

  return (
    <Modal
      open={open}
      onCancel={handleCancel}
      width={1000}
      closable={false}
      centered
      footer={
        <TransformBox justifyContent="flex-end">
          <Button onClick={handleCancel}>취소</Button>
          <>
            <Button type="primary" onClick={handleClick}>
              {data ? "저장" : "등록"}
            </Button>
          </>
        </TransformBox>
      }
    >
      <>
        <TransformBox justifyContent="space-between">
          <h3>약관 종류</h3>
          {data && (
            <Popconfirm
              title="정말 삭제하시겠습니까?"
              okText="삭제"
              onConfirm={() => deletePolicy()}
            >
              <Button type="primary" danger>
                삭제
              </Button>
            </Popconfirm>
          )}
        </TransformBox>
        {data ? (
          data.title
        ) : (
          <Input value={kind} onChange={(e) => setKind(e.target.value)} />
        )}
      </>

      <TransformBox marginBottom="30px" marginTop="30px" flexDirection="column">
        <h3>약관 내용</h3>
        <Editor state={content} setState={setContent} />
      </TransformBox>
    </Modal>
  );
}
