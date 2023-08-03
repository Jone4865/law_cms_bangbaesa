import { useMutation } from "@apollo/client";
import { Button, Input, message, Modal, notification, Popconfirm } from "antd";

import React, { useEffect, useRef, useState } from "react";
import { Editor } from "../Editor";
import TransformBox from "../TransformBox";

import { DELETE_NOTICE } from "src/graphql/mutation/deleteNotice";
import { UPDATE_NOTICE } from "src/graphql/mutation/updateNotice";

import { CREATE_NOTICE } from "src/graphql/mutation/createNotice";
import { FindManyNoticeOutput } from "src/graphql/generated/graphql";
import { UPLOAD_NOTICE_FILE } from "src/graphql/mutation/uploadNoticeFile";
import ReactQuill from "react-quill";
import Loader from "../Loader";

type Props = {
  open: boolean;
  handleCancel: () => void;
  isEdit: boolean;
  data: FindManyNoticeOutput["notices"][0] | undefined;
  refetch: () => void;
};

export function NoticeDetailModal({
  open,
  handleCancel,
  isEdit,
  data,
  refetch,
}: Props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState(" ");
  const quillRef = useRef<ReactQuill>();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleClick = () => {
    if (!title.length) {
      return notification.error({ message: "공지사항 제목을 입력해주세요." });
    }
    if (!content.length) {
      return notification.error({ message: "공지사항 내용을 입력해주세요." });
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
      notification.success({ message: "공지사항을 등록했습니다" });
      handleCancel();
      refetch();
    },
    onError: (e) => {
      notification.error({ message: e.message });
    },
  });

  const [updateNotice] = useMutation(UPDATE_NOTICE, {
    onCompleted: () => {
      notification.success({ message: "공지사항을 수정했습니다" });
      handleCancel();
      refetch();
    },
    onError: (e) => {
      notification.error({ message: e.message });
    },
  });

  const [deleteNotice] = useMutation(DELETE_NOTICE, {
    onCompleted: () => {
      notification.success({ message: "공지사항을 삭제했습니다" });
      handleCancel();
      refetch();
    },
    onError: (e) => {
      notification.error({ message: e.message });
    },
  });

  const [uploadNoticeFile, { loading }] = useMutation(UPLOAD_NOTICE_FILE, {
    onCompleted: (data) => {
      const IMG_URL = `${process.env.REACT_APP_IMAGE_URL}/notice/${data.uploadNoticeFile}`;
      const range = quillRef.current?.getEditor().getSelection()?.index ?? 0;

      if (range > -1) {
        try {
          let quill = quillRef.current?.getEditor();
          if (quill) {
            quill.setSelection(range, 1);
            quill.clipboard.dangerouslyPasteHTML(
              range,
              `<p class="ql-align-center"><img src=${IMG_URL} alt="공지사항 이미지" /></p>`
            );
          }
        } catch (error) {
          console.error("Error inserting image:", error);
        }
      }
    },
    onError: (e) => {
      message.error(e.message);
    },
  });

  const handleImage = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.setAttribute("multiple", "");
    input.click();
    input.addEventListener("change", async () => {
      const file = input.files?.length ? input.files : null;
      if (file) {
        await uploadNoticeFile({
          variables: {
            file: file.item(0),
          },
          context: {
            headers: {
              "content-type": "application/json",
            },
          },
        });
      }
    });
  };

  useEffect(() => {
    if (isEdit) {
      setTitle(data?.title ?? "");
      setContent(data?.content ?? " ");
    } else {
      setTitle("");
      setContent(" ");
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
            {isEdit ? "저장" : "등록"}
          </Button>
        </TransformBox>
      }
    >
      {loading && <Loader />}
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
        <Editor
          state={content}
          setState={setContent}
          handleImage={handleImage}
          quillRef={quillRef}
        />
      </TransformBox>
    </Modal>
  );
}
