import { useLazyQuery, useMutation } from "@apollo/client";
import { Button, Divider, Modal, Table, message, notification } from "antd";
import React, { useEffect, useState } from "react";
import { BannerDetailModal } from "src/components/BannerDetailModal";
import { findManyBanner } from "src/graphql/generated/findManyBanner";
import { DELETE_BANNER } from "src/graphql/mutation/deleteBanner";
import { FIND_MANY_BANNER } from "src/graphql/query/findManyBanner";
import { bannerColumns } from "src/utils/columns";
import * as S from "./style";

export function Banner() {
  const [bannerData, setBannerData] =
    useState<findManyBanner["findManyBanner"]>();
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [skip, setSkip] = useState(0);
  const [take, setTake] = useState(10);
  const [totalCount, setTotalCount] = useState(10);
  const [detailData, setDetailData] =
    useState<findManyBanner["findManyBanner"][0]>();
  const [prevViewUrl, setPrevViewUrl] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const handlePagination = (e: number) => {
    setCurrent(e);
    setSkip((e - 1) * 10);
  };

  const previewCancle = () => {
    setPreviewOpen(false);
  };

  const createModalVisibleHandle = () => {
    setIsEdit(false);
    setCreateModalOpen(false);
    refetch();
  };

  const deleteHandle = (id: number) => {
    deleteBanner({ variables: { deleteBannerId: id } });
  };

  const onClickImgHandle = (url: string) => {
    setPrevViewUrl(url);
    setPreviewOpen(true);
  };

  const handleRow = (rec: findManyBanner["findManyBanner"][0]) => {
    setDetailData(rec);
    setIsEdit(true);
    setCreateModalOpen(true);
  };

  const [findManyBanner, { loading, refetch }] = useLazyQuery(
    FIND_MANY_BANNER,
    {
      onCompleted: (data) => {
        setBannerData(data.findManyBanner);
      },
      onError: (e) => {
        notification.error({ message: e.message });
      },
      fetchPolicy: "no-cache",
    }
  );

  const [deleteBanner] = useMutation(DELETE_BANNER, {
    onCompleted: () => {
      message.success("해당 이미지를 삭제했습니다.");
      refetch();
    },
    onError: (e) => {
      notification.error({ message: e.message });
    },
    fetchPolicy: "no-cache",
  });

  useEffect(() => {
    findManyBanner();
  }, []);

  return (
    <>
      <Modal
        width={"80vw"}
        open={previewOpen}
        footer={null}
        onCancel={previewCancle}
      >
        <img
          alt="example"
          style={{ width: "100%" }}
          src={`${process.env.REACT_APP_IMAGE_URL}/banner/${prevViewUrl}`}
        />
      </Modal>
      <Divider>배너 관리</Divider>
      <S.CreateBtnWrap>
        <Button type="primary" onClick={() => setCreateModalOpen(true)}>
          등록
        </Button>
      </S.CreateBtnWrap>
      <BannerDetailModal
        open={createModalOpen}
        handleCancel={createModalVisibleHandle}
        detailData={detailData}
        isEdit={isEdit}
      />
      <Table
        columns={bannerColumns({ deleteHandle, onClickImgHandle })}
        dataSource={bannerData}
        rowKey={(rec) => rec.id}
        loading={loading}
        pagination={{
          position: ["bottomCenter"],
          showSizeChanger: true,
          onChange: handlePagination,
          onShowSizeChange: (_current, size) => setTake(size),
          total: totalCount,
          current: current,
        }}
        onRow={(rec) => {
          return {
            onClick: () => handleRow(rec),
          };
        }}
        style={{
          marginBottom: 30,
        }}
        scroll={{ x: 1000 }}
      />
    </>
  );
}
