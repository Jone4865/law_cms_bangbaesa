import React, { useEffect, useState } from "react";
import { Button, Input, message, Modal, notification, Upload } from "antd";
import TransformBox from "../TransformBox";

import { PlusOutlined } from "@ant-design/icons";
import type { RcFile, UploadProps } from "antd/es/upload";
import type { UploadFile } from "antd/es/upload/interface";
import { useMutation } from "@apollo/client";
import { CREATE_BANNER } from "src/graphql/mutation/createBanner";
import Loader from "../Loader";
import { findManyBanner } from "src/graphql/generated/findManyBanner";
import { UPDATE_BANNER } from "src/graphql/mutation/updateBanner";

type Props = {
  open: boolean;
  handleCancel: () => void;
  detailData: findManyBanner["findManyBanner"][0] | undefined;
  isEdit?: boolean;
};

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

export function BannerDetailModal({
  handleCancel,
  open,
  detailData,
  isEdit,
}: Props) {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [pcFile, setPcFile] = useState<UploadFile[]>([]);
  const [mobileFile, setMobileFile] = useState<UploadFile[]>([]);

  const [path, setPath] = useState("");
  const [arrowColor, setArrowColor] = useState("black");
  const [dotColor, setDotColor] = useState("black");
  const [index, setIndex] = useState<number>(1);

  const handleSubmit = () => {
    if (!isEdit) {
      if (!index) {
        message.warn("순서를 입력해주세요.");
      } else if (!arrowColor) {
        message.warn("화살표 색상을 입력해주세요.");
      } else if (!dotColor) {
        message.warn("하단 버튼 색상을 입력해주세요.");
      } else {
        createBanner({
          variables: {
            arrowColor,
            dotColor,
            index,
            pcFile: pcFile[0].originFileObj,
            mobileFile: mobileFile[0].originFileObj,
            path,
          },
        });
      }
    } else {
      updateBanner({
        variables: {
          updateBannerId: detailData && +detailData?.id,
          arrowColor,
          dotColor,
          index,
          pcFile: pcFile.length !== 0 ? pcFile[0].originFileObj : undefined,
          mobileFile:
            mobileFile.length !== 0 ? mobileFile[0].originFileObj : undefined,
          path,
        },
      });
    }
  };

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1)
    );
  };

  const handlePcFileChange: UploadProps["onChange"] = ({ fileList: newFile }) =>
    setPcFile(newFile);

  const handleMobileFileChange: UploadProps["onChange"] = ({
    fileList: newFile,
  }) => setMobileFile(newFile);

  const handlePreviewCancel = () => setPreviewOpen(false);

  const [createBanner, { loading }] = useMutation(CREATE_BANNER, {
    onCompleted: () => {
      message.success("이미지를 등록하였습니다.");
      handleCancel();
    },
    onError: (e) => {
      notification.error({ message: e.message });
    },
    fetchPolicy: "no-cache",
  });

  const [updateBanner, { loading: loading1 }] = useMutation(UPDATE_BANNER, {
    onCompleted: () => {
      message.success("내용을 수정하였습니다.");
      handleCancel();
    },
    onError: (e) => {
      notification.error({ message: e.message });
    },
    fetchPolicy: "no-cache",
  });

  useEffect(() => {
    if (isEdit && detailData) {
      setIndex(detailData.index);
      setArrowColor(detailData.arrowColor);
      setDotColor(detailData.dotColor);
      setPath(detailData.path ? detailData.path : "");
    }
  }, [open, isEdit]);

  useEffect(() => {}, [mobileFile, pcFile]);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <Modal
      open={open}
      onCancel={handleCancel}
      title={detailData ? "배너 수정" : "배너 등록"}
      centered
      width={800}
      bodyStyle={{
        maxHeight: "90vh",
        overflow: "auto",
      }}
      footer={
        <TransformBox justifyContent="flex-end">
          <Button onClick={handleCancel}>취소</Button>

          <Button type="primary" onClick={handleSubmit}>
            {detailData ? "수정" : "등록"}
          </Button>
        </TransformBox>
      }
    >
      {(loading || loading1) && <Loader />}
      <TransformBox alignItems="center" justifyContent="space-between">
        <h3>순서</h3>
      </TransformBox>
      <Input
        type="number"
        value={index}
        onChange={(e) => setIndex(+e.target.value)}
      />
      <TransformBox
        alignItems="center"
        justifyContent="space-between"
        marginTop="20px"
      >
        <h3>이동경로</h3>
      </TransformBox>
      <Input value={path} onChange={(e) => setPath(e.target.value)} />
      <TransformBox
        alignItems="center"
        justifyContent="space-between"
        marginTop="20px"
      >
        <h3>화살표 색상</h3>
      </TransformBox>
      <Input
        value={arrowColor}
        onChange={(e) => setArrowColor(e.target.value)}
      />
      <TransformBox
        alignItems="center"
        justifyContent="space-between"
        marginTop="20px"
      >
        <h3>하단 버튼 색상</h3>
      </TransformBox>
      <Input value={dotColor} onChange={(e) => setDotColor(e.target.value)} />
      <TransformBox
        alignItems="center"
        justifyContent="space-between"
        marginTop="20px"
      >
        <h3>PC 이미지</h3>
      </TransformBox>
      <Upload
        listType="picture-card"
        fileList={pcFile}
        onPreview={handlePreview}
        onChange={handlePcFileChange}
      >
        {detailData && isEdit ? (
          <img
            width={"100px"}
            height={"100px"}
            alt="배너 이미지"
            src={`${process.env.REACT_APP_IMAGE_URL}/banner/${detailData?.pcFileName}`}
          />
        ) : pcFile.length >= 1 ? null : (
          uploadButton
        )}
      </Upload>
      <TransformBox
        alignItems="center"
        justifyContent="space-between"
        marginTop="20px"
      >
        <h3>모바일 이미지</h3>
      </TransformBox>
      <Upload
        listType="picture-card"
        fileList={mobileFile}
        onPreview={handlePreview}
        onChange={handleMobileFileChange}
      >
        {detailData && isEdit ? (
          <img
            width={"100px"}
            height={"100px"}
            alt="배너 이미지"
            src={`${process.env.REACT_APP_IMAGE_URL}/banner/${detailData?.mobileFileName}`}
          />
        ) : mobileFile.length >= 1 ? null : (
          uploadButton
        )}
      </Upload>

      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handlePreviewCancel}
      >
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </Modal>
  );
}
