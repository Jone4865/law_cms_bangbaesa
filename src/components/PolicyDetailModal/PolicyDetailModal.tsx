import { useMutation } from '@apollo/client';
import { Button, Modal, notification } from 'antd';

import React, { useEffect, useState } from 'react';
import { Editor } from '../Editor';
import TransformBox from '../TransformBox';
import { UPDATE_POLICY } from 'src/graphql/mutation/updatePolicy';
import { FindManyPolicyQuery } from 'src/graphql/generated/graphql';

type Props = {
  open: boolean;
  handleCancel: () => void;
  isEdit: boolean;
  data: FindManyPolicyQuery['findManyPolicy']['policies'][0] | undefined;
  refetch: () => void;
};

export function PolicyDetailModal({
  open,
  handleCancel,
  isEdit,
  data,
  refetch,
}: Props) {
  const [content, setContent] = useState('');

  // const formattedContent = content?.replace(/(?:\r\n|\r|\n)/g, '<br>');

  const handleClick = () => {
    if (!content.length) {
      return notification.error({ message: '약관 내용을 입력해주세요' });
    }
    const variables = {
      content,
      updatePolicyId: data?.id,
      title: '',
    };

    updatePolicy({
      variables: {
        ...variables,
        updatePolicyId: data?.id,
      },
    });
  };

  // const [createPolicy] = useMutation(CREATE_POLICY, {
  //   onCompleted: () => {
  //     notification.success({ message: '약관을 생성했습니다.' });
  //     handleCancel();
  //     refetch();
  //   },
  //   onError: (e) => {
  //     notification.error({ message: e.message });
  //   },
  // });

  const [updatePolicy] = useMutation(UPDATE_POLICY, {
    onCompleted: () => {
      notification.success({ message: '약관을 수정했습니다.' });
      handleCancel();
      refetch();
    },
    onError: (e) => {
      notification.error({ message: e.message });
    },
  });

  // const [deletePolicy] = useMutation(DELETE_POLICY, {
  //   onCompleted: () => {
  //     notification.success({ message: '약관을 삭제했습니다.' });
  //     handleCancel();
  //     refetch();
  //   },
  //   onError: (e) => {
  //     notification.error({ message: e.message });
  //   },
  //   variables: {
  //     id: data?.id ?? -1,
  //   },
  // });

  useEffect(() => {
    setContent(data?.content ?? '');
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
              {isEdit ? '저장' : '등록'}
            </Button>
          </>
        </TransformBox>
      }
    >
      {isEdit && (
        <>
          <TransformBox justifyContent="space-between">
            <h3>약관 종류</h3>
            {/* <>
            <Popconfirm
              title="정말 삭제하시겠습니까?"
              okText="삭제"
              onConfirm={() => deletePolicy()}
            >
              <Button type="primary" danger>
                삭제
              </Button>
            </Popconfirm>
          </> */}
          </TransformBox>
          {data?.title}
        </>
      )}
      <TransformBox marginBottom="30px" marginTop="30px" flexDirection="column">
        <h3>약관 내용</h3>
        <Editor state={content} setState={setContent} />
      </TransformBox>
    </Modal>
  );
}
