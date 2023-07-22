import { useMutation } from '@apollo/client';
import { Button, Input, Modal, notification, Popconfirm } from 'antd';

import React, { useEffect, useState } from 'react';
import { Editor } from '../Editor';
import TransformBox from '../TransformBox';
import { FindManyNoticeOutput } from 'src/graphql/generated/graphql';
import { DELETE_NOTICE } from 'src/graphql/mutation/deleteNotice';
import { UPDATE_NOTICE } from 'src/graphql/mutation/updateNotice';

import { CREATE_NOTICE } from 'src/graphql/mutation/createNotice';

type Props = {
  open: boolean;
  handleCancel: () => void;
  isEdit: boolean;
  data: FindManyNoticeOutput['notices'][0] | undefined;
  refetch: () => void;
};

export function NoticeDetailModal({
  open,
  handleCancel,
  isEdit,
  data,
  refetch,
}: Props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState(' ');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleClick = () => {
    if (!title.length) {
      return notification.error({ message: '공지사항 제목을 입력해주세요.' });
    }
    if (!content.length) {
      return notification.error({ message: '공지사항 내용을 입력해주세요.' });
    }
    const variables = {
      title,
      content,
    };
    if (!isEdit) {
      createNotice({
        variables,
      });
    } else {
      updateNotice({
        variables: {
          ...variables,
          updateNoticeId: data?.id ?? -1,
        },
      });
    }
  };

  const handleDelete = () => {
    deleteNotice({
      variables: {
        deleteNoticeId: data?.id ?? -1,
      },
    });
  };

  const [createNotice] = useMutation(CREATE_NOTICE, {
    onCompleted: () => {
      notification.success({ message: '공지사항을 등록했습니다' });
      handleCancel();
      refetch();
    },
    onError: (e) => {
      notification.error({ message: e.message });
    },
  });

  const [updateNotice] = useMutation(UPDATE_NOTICE, {
    onCompleted: () => {
      notification.success({ message: '공지사항을 수정했습니다' });
      handleCancel();
      refetch();
    },
    onError: (e) => {
      notification.error({ message: e.message });
    },
  });

  const [deleteNotice] = useMutation(DELETE_NOTICE, {
    onCompleted: () => {
      notification.success({ message: '공지사항을 삭제했습니다' });
      handleCancel();
      refetch();
    },
    onError: (e) => {
      notification.error({ message: e.message });
    },
  });

  useEffect(() => {
    if (isEdit) {
      setTitle(data?.title ?? '');
      setContent(data?.content ?? ' ');
    } else {
      setTitle('');
      setContent(' ');
    }
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

          <Button type="primary" onClick={handleClick}>
            {isEdit ? '저장' : '등록'}
          </Button>
        </TransformBox>
      }
    >
      <TransformBox alignItems="center" justifyContent="space-between">
        <>
          <h3>제목</h3>
          {isEdit && (
            <TransformBox>
              <Popconfirm
                title="삭제하시겠습니까?"
                okText="삭제"
                onConfirm={handleDelete}
              >
                <Button type="primary" danger>
                  삭제
                </Button>
              </Popconfirm>
            </TransformBox>
          )}
        </>
      </TransformBox>
      <Input value={title} onChange={handleChange} />
      <TransformBox marginBottom="30px" marginTop="10px" flexDirection="column">
        <TransformBox justifyContent="space-between" alignItems="center">
          <h3>내용</h3>
        </TransformBox>
        <Editor state={content} setState={setContent} />
      </TransformBox>
    </Modal>
  );
}
