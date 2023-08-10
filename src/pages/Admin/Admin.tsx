import { Button, Divider, Form, Input, notification, Table } from "antd";
import React, { useEffect, useState } from "react";
import { ColumnsType } from "antd/lib/table";
import moment from "moment";

import { AdminDetailModal } from "../../components/AdminDetailModal";
import { OtpQrModal } from "../../components/OtpQrModal";
import TransformBox from "../../components/TransformBox";
import { AdminType } from "../../utils/columns/admin";
import { FIND_MANY_ADMIN } from "src/graphql/query/findManyAdmin";
import { useLazyQuery } from "@apollo/client";
import * as S from "./style";

export function Admin() {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState<AdminType>();
  const [adminData, setAdminData] = useState<AdminType[]>([]);
  const [adminAuths] = useState<KindType[]>([]);
  const [secret, setSecret] = useState("");
  const [otpUrl, setOtpUrl] = useState("");
  const [qrModalopen, setQrModalopen] = useState(false);
  const [email, setEmail] = useState("");
  const [take, setTake] = useState(10);
  const [skip, setSkip] = useState(0);
  const [totalCount] = useState(0);
  const [current, setCurrent] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [next, setNext] = useState(false);

  const handlePagination = (e: number) => {
    setSkip((e - 1) * take);
    setCurrent(e);
  };

  const columns: ColumnsType<AdminType> = [
    {
      title: "no",
      key: "id",
      dataIndex: "id",
      align: "center",
      render: (_val, _record, index) => index + 1,
    },
    {
      title: "이메일",
      key: "email",
      dataIndex: "email",
      align: "center",
    },

    {
      title: "생성일",
      key: "createdAt",
      dataIndex: "createdAt",
      render: (val) => {
        return moment(val).format("YYYY-MM-DD hh:mm");
      },
      align: "center",
    },
  ];

  const handleCancel = () => {
    setOpen(false);
    setNext(false);
  };

  const handleClick = () => {
    setOpen(true);
    setModalData(undefined);
  };

  const handleRow = (record: AdminType) => {
    setOpen(true);
    setModalData(record);
  };

  const handleCancelQr = () => {
    setQrModalopen(false);
  };

  const handleNext = () => {
    handleCancelQr();
    setNext(true);
    setOpen(true);
  };

  const handleRefetch = () => {
    if (refetch) {
      refetch()
        .then((data) => {
          setAdminData(data.data.findManyAdmin.admins);
        })
        .catch((e) => {
          notification.error({ message: e.message });
        });
    }
  };

  const handleSearch = (value: { searchText?: string }) => {
    findManyAdmin({
      variables: {
        take,
        skip: 0,
        searchText,
        ...value,
      },
    });
    setSkip(0);
    setCurrent(1);
    setSearchText(value.searchText ?? "");
  };

  const [findManyAdmin, { refetch, loading }] = useLazyQuery(FIND_MANY_ADMIN, {
    onCompleted: (data) => {
      setAdminData(data.findManyAdmin.admins);
    },
    onError: (e) => {
      notification.error({ message: e.message });
    },
    fetchPolicy: "no-cache",
  });

  useEffect(() => {
    findManyAdmin({
      variables: {
        take,
        skip,
        searchText,
      },
    });
  }, [take, skip]);

  return (
    <>
      <AdminDetailModal
        open={open}
        handleCancel={handleCancel}
        admin={modalData}
        refetch={handleRefetch}
        adminRoles={adminAuths}
        setQrModalopen={setQrModalopen}
        setEmail={setEmail}
        email={email}
        setOtpSecret={setSecret}
        setOtpUrl={setOtpUrl}
        next={next}
      />
      <Divider>관리자</Divider>
      <OtpQrModal
        open={qrModalopen}
        handleCancel={handleCancelQr}
        handleNext={handleNext}
        otpSecret={secret}
        otpUrl={otpUrl}
      />
      <Form
        layout="inline"
        onFinish={handleSearch}
        style={{
          marginBottom: 30,
        }}
      >
        <S.Form>
          <Form.Item name="searchWord">
            <Input.Search
              style={{ maxWidth: "180px" }}
              enterButton
              placeholder="검색어(이메일)"
              onSearch={(e) => {
                handleSearch({ searchText: e });
              }}
            />
          </Form.Item>
          <TransformBox justifyContent="flex-end" marginBottom={"30px"}>
            <Button type="primary" onClick={handleClick}>
              관리자 생성
            </Button>
          </TransformBox>
        </S.Form>
      </Form>

      <Table
        columns={columns}
        dataSource={adminData}
        onRow={(rec) => {
          return {
            onClick: () => handleRow(rec),
          };
        }}
        rowKey={(rec) => rec.email}
        loading={loading}
        pagination={{
          position: ["bottomCenter"],
          showSizeChanger: true,
          onChange: handlePagination,
          onShowSizeChange: (_current, size) => setTake(size),
          total: totalCount,
          current: current,
        }}
        style={{
          marginBottom: 30,
        }}
        scroll={{ x: 1000 }}
      />
    </>
  );
}
