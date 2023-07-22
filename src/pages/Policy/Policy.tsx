import { Divider, Form, Input, notification, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';

import { PolicyDetailModal } from '../../components/PolicyDetailModal';
import { policyColumns } from '../../utils/columns';
import { FIND_MANY_POLICY } from 'src/graphql/query/findManyPolicy';
import { FindManyPolicyQuery } from 'src/graphql/generated/graphql';

export function Policy() {
  const [policyData, setPolicyData] =
    useState<FindManyPolicyQuery['findManyPolicy']['policies']>();

  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [modalData, setModalData] =
    useState<FindManyPolicyQuery['findManyPolicy']['policies'][0]>();
  const [take, setTake] = useState(10);
  const [skip, setSkip] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [current, setCurrent] = useState(1);
  const [searchText, setSearchText] = useState('');

  const handlePagination = (e: number) => {
    setSkip((e - 1) * take);
    setCurrent(e);
  };

  const handleRow = (
    record: FindManyPolicyQuery['findManyPolicy']['policies'][0],
  ) => {
    setOpen(true);
    setIsEdit(true);
    setModalData(record);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleRefetch = () => {
    if (refetch) {
      refetch()
        .then((data) => {
          setPolicyData(data.data.findManyPolicy.policies);
          setTotalCount(data.data.findManyPolicy.totalCount);
        })
        .catch((e) => {
          notification.error({ message: e.message });
        });
    }
  };

  const handleSearch = (value: { searchText?: string }) => {
    findManyPolicy({
      variables: {
        searchText: value.searchText,
        skip: 0,
        take,
      },
    });
    setSkip(0);
    setCurrent(1);
    setSearchText(value.searchText ?? '');
  };

  const [findManyPolicy, { refetch, loading }] = useLazyQuery(
    FIND_MANY_POLICY,
    {
      onCompleted: (data) => {
        setPolicyData(data.findManyPolicy.policies);
        setTotalCount(data.findManyPolicy.totalCount);
      },
      onError: (e) => {
        notification.error({ message: e.message });
      },
      fetchPolicy: 'no-cache',
    },
  );

  useEffect(() => {
    findManyPolicy({
      variables: {
        skip,
        take,
        searchText,
      },
    });
  }, [take, skip]);

  return (
    <>
      <PolicyDetailModal
        data={modalData}
        handleCancel={handleCancel}
        open={open}
        isEdit={isEdit}
        refetch={handleRefetch}
      />
      <Divider>약관 관리</Divider>
      <Form layout="inline" onFinish={handleSearch}>
        <Form.Item name="searchText">
          <Input.Search
            enterButton
            placeholder="검색어(종류, 내용)"
            onSearch={(e) => {
              handleSearch({ searchText: e });
            }}
          />
        </Form.Item>
      </Form>

      <Table
        columns={policyColumns}
        dataSource={policyData}
        onRow={(rec) => {
          return {
            onClick: () => handleRow(rec),
          };
        }}
        pagination={{
          position: ['bottomCenter'],
          showSizeChanger: true,
          onChange: handlePagination,
          onShowSizeChange: (_current, size) => setTake(size),
          total: totalCount,
          current: current,
        }}
        loading={loading}
        rowKey={(rec) => rec.id}
        scroll={{ x: 800 }}
        style={{
          marginTop: '30px',
        }}
      />
    </>
  );
}
