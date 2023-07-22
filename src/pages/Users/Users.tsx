import { useLazyQuery } from '@apollo/client';
import { Divider, Form, Input, notification, Table } from 'antd';

import React, { useEffect, useState } from 'react';
import { UserDetailModal } from '../../components/UserDetailModal';
import { userListColumns } from '../../utils/columns';
import { FIND_MANY_USER } from 'src/graphql/query/findManyUser';
import { FindManyUserOutput } from 'src/graphql/generated/graphql';

export function Users() {
  const [userData, setUserData] = useState<FindManyUserOutput['users']>([]);
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState<FindManyUserOutput['users'][0]>();
  const [take, setTake] = useState(10);
  const [skip, setSkip] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [current, setCurrent] = useState(1);
  const [searchText, setSearchText] = useState('');

  const handleCancel = () => {
    setOpen(false);
  };

  const handleClickRow = (rec: FindManyUserOutput['users'][0]) => {
    setModalData(rec);
    setOpen(true);
  };

  const handleSearch = (value: { searchText?: string }) => {
    findManyUser({
      variables: {
        take,
        skip: 0,
        ...value,
      },
    });
    setSkip(0);
    setCurrent(1);
    setSearchText(value.searchText ?? '');
  };

  const handlePagination = (e: number) => {
    setSkip((e - 1) * take);
    setCurrent(e);
  };

  const [findManyUser, { loading }] = useLazyQuery(FIND_MANY_USER, {
    onCompleted: (data) => {
      setUserData(data.findManyUser.users);
      setTotalCount(data.findManyUser.totalCount);
    },
    onError: (e) => {
      notification.error({ message: e.message });
    },
    fetchPolicy: 'no-cache',
  });

  useEffect(() => {
    findManyUser({
      variables: {
        take,
        skip,
        searchText,
      },
    });
  }, [skip, take]);

  return (
    <>
      <UserDetailModal
        open={open}
        handleCancel={handleCancel}
        identity={modalData?.identity ?? ''}
        email={modalData?.emailAuth?.email ?? ''}
      />
      <Divider>회원</Divider>
      <Form layout="inline" onFinish={handleSearch}>
        <Form.Item name="searchText">
          <Input.Search
            style={{ width: '350px' }}
            enterButton
            placeholder="검색어(이메일, 닉네임, 휴대폰)"
            onSearch={(e) => {
              handleSearch({ searchText: e });
            }}
          />
        </Form.Item>
      </Form>
      <Table
        columns={userListColumns}
        dataSource={userData}
        pagination={{
          position: ['bottomCenter'],
          showSizeChanger: true,
          onChange: handlePagination,
          onShowSizeChange: (_current, size) => setTake(size),
          total: totalCount,
          current: current,
        }}
        loading={loading}
        style={{
          marginTop: 30,
        }}
        onRow={(rec) => {
          return {
            onClick: () => handleClickRow(rec),
          };
        }}
        rowKey={(rec) => rec.identity}
        scroll={{ x: 800 }}
      />
    </>
  );
}
