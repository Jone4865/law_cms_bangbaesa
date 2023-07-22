import { useLazyQuery } from '@apollo/client';
import { Divider, Form, Input, Tag, Table, notification, Button } from 'antd';
import { ColumnsType } from 'antd/lib/table';

import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { InquiryDetailModal } from '../../components/InquiryDetailModal';
import { UserDetailModal } from '../../components/UserDetailModal';
import { FIND_MANY_USER_INQUIRY_BY_ADMIN } from '../../graphql/query/findManyUserInquiryByAdmin';
import { FindManyUserInquiryByAdminOutput } from '../../graphql/generated/graphql';

export function Inquiry() {
  const [open, setOpen] = useState(false);
  const [detailModalopen, setDetailModalopen] = useState(false);
  const [modalData, setModalData] =
    useState<FindManyUserInquiryByAdminOutput['userInquiries'][0]>();
  const [inquiryData, setInquiryData] = useState<
    FindManyUserInquiryByAdminOutput['userInquiries']
  >([]);
  const [take, setTake] = useState(10);
  const [skip, setSkip] = useState(0);
  const [current, setCurrent] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [searchText, setSearchText] = useState('');

  const columns: ColumnsType<
    FindManyUserInquiryByAdminOutput['userInquiries'][0]
  > = [
    {
      title: 'no',
      key: 'id',
      dataIndex: 'id',
      align: 'center',
      render: (_val, _record, index) => index + 1,
    },
    {
      title: '문의내용',
      key: 'content',
      dataIndex: 'content',
      align: 'center',
    },
    {
      title: '닉네임',
      key: 'userIdentity',
      dataIndex: 'userIdentity',
      render: (val, record) => {
        return (
          <Button
            type="link"
            onClick={(e) => {
              setOpen(true);
              setModalData(record);
              e.stopPropagation();
            }}
          >
            {val}
          </Button>
        );
      },
      align: 'center',
    },
    {
      title: '접수일시',
      key: 'reportingDate',
      dataIndex: 'reportingDate',
      render: (val) => {
        return moment(val).format('YYYY-MM-DD hh:mm');
      },
      align: 'center',
    },
    {
      title: '처리일시',
      key: 'processingDate',
      dataIndex: 'processingDate',
      render: (val, record) => {
        return record.reply ? moment(val).format('YYYY-MM-DD hh:mm') : '-';
      },
      align: 'center',
    },
    {
      title: '처리',
      key: 'isReply',
      dataIndex: 'reply',
      render: (val?: string) => {
        return val ? (
          <Tag color="blue">완료</Tag>
        ) : (
          <Tag color="error">미처리</Tag>
        );
      },
      align: 'center',
    },
  ];

  const handlePagination = (e: number) => {
    setCurrent(e);
    setSkip((e - 1) * 10);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleRow = (
    data: FindManyUserInquiryByAdminOutput['userInquiries'][0],
  ) => {
    setDetailModalopen(true);
    setModalData(data);
  };

  const handleCancelDetail = () => {
    setDetailModalopen(false);
  };

  const handleSearch = (values: { searchText?: string }) => {
    findManyUserInquiryByAdmin({
      variables: {
        take,
        skip,
        searchText: values.searchText ? values.searchText : '',
      },
    });
    setCurrent(1);
    setSkip(0);
    setSearchText(values.searchText ?? '');
  };

  const handleRefetch = () => {
    if (refetch) {
      refetch({ take, skip })
        .then((data) => {
          setInquiryData(data.data.findManyUserInquiryByAdmin.userInquiries);
          setTotalCount(data.data.findManyUserInquiryByAdmin.totalCount);
        })
        .catch((e) => {
          notification.error({ message: e.message });
        });
    }
  };

  const [findManyUserInquiryByAdmin, { loading, refetch }] = useLazyQuery(
    FIND_MANY_USER_INQUIRY_BY_ADMIN,
    {
      onCompleted: (data) => {
        setInquiryData(data.findManyUserInquiryByAdmin.userInquiries);
        setTotalCount(data.findManyUserInquiryByAdmin.totalCount);
      },
      onError: (e) => {
        notification.error({ message: e.message ?? `${e}` });
      },
      fetchPolicy: 'no-cache',
    },
  );

  useEffect(() => {
    findManyUserInquiryByAdmin({
      variables: {
        take,
        skip,
        searchText,
        cursorId: inquiryData[inquiryData?.length - 1]?.id,
      },
    });
  }, [skip, take]);

  return (
    <>
      <UserDetailModal
        handleCancel={handleCancel}
        open={open}
        identity={modalData?.userIdentity ?? ''}
      />
      <InquiryDetailModal
        data={modalData}
        open={detailModalopen}
        handleCancel={handleCancelDetail}
        refetch={handleRefetch}
      />
      <Divider>1:1 문의</Divider>
      <Form layout="inline" onFinish={handleSearch}>
        <Form.Item name="searchText">
          <Input.Search enterButton placeholder="검색어(문의내용, 닉네임)" />
        </Form.Item>
      </Form>
      <Table
        columns={columns}
        dataSource={inquiryData}
        pagination={{
          position: ['bottomCenter'],
          showSizeChanger: true,
          onChange: handlePagination,
          onShowSizeChange: (_current, size) => setTake(size),
          total: totalCount,
          current: current,
        }}
        style={{
          marginTop: 30,
        }}
        onRow={(record) => {
          return {
            onClick: () => handleRow(record),
          };
        }}
        rowKey={(rec) => rec.id}
        loading={loading}
        scroll={{ x: 800 }}
      />
    </>
  );
}
