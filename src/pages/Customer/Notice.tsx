import React, { useEffect, useState } from 'react';
import {
  Button,
  Divider,
  Form,
  Input,
  notification,
  Select,
  Table,
} from 'antd';

import { useLazyQuery } from '@apollo/client';
import { NoticeDetailModal } from '../../components/NoticeDetailModal';
import TransformBox from '../../components/TransformBox';
import { noticeColumns } from '../../utils/columns';
import { FIND_MANY_NOTICE } from 'src/graphql/query/findManyNotice';
import {
  FindManyNoticeOutput,
  NoticeSearchKind,
} from 'src/graphql/generated/graphql';

import * as S from './style';

export function Notice() {
  const [noticeData, setNoticeData] = useState<FindManyNoticeOutput['notices']>(
    [],
  );

  const searchKindArr = [
    { id: 0, name: '제목', kind: NoticeSearchKind.Title },
    { id: 1, name: '내용', kind: NoticeSearchKind.Content },
  ];

  const [modalData, setModalData] =
    useState<FindManyNoticeOutput['notices'][0]>();
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [take, setTake] = useState(10);
  const [skip, setSkip] = useState(0);
  const [current, setCurrent] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [searchKind, setSearchKind] = useState(NoticeSearchKind.Title);
  const [searchKindId, setSearchKindId] = useState(0);

  const changeSerachKindHandle = (id: number) => {
    if (id === 0) {
      setSearchKind(NoticeSearchKind.Title);
    } else {
      setSearchKind(NoticeSearchKind.Content);
    }
  };

  const handlePagination = (e: number) => {
    setCurrent(e);
    setSkip((e - 1) * take);
  };

  const handleClick = () => {
    setOpen(true);
    setIsEdit(false);
  };

  const handleRow = (record: FindManyNoticeOutput['notices'][0]) => {
    setOpen(true);
    setIsEdit(true);
    setModalData(record);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleRefetch = () => {
    if (refetch) {
      refetch({ take, skip })
        .then((data) => {
          const { notices, totalCount } = data.data.findManyNotice;
          setNoticeData(notices);
          setTotalCount(totalCount);
          if (notices.length < 0 && skip !== 0) {
            setSkip(skip - take);
          }
        })
        .catch((e) => {
          notification.error({ message: e.message });
        });
    }
  };

  const handleSearch = (value: { searchText?: string }) => {
    findManyNotice({
      variables: {
        searchText: value.searchText,
        skip: 0,
        take,
        searchKind,
      },
    });
    setSkip(0);
    setCurrent(1);
    setSearchText(value.searchText ?? '');
  };

  const [findManyNotice, { loading, refetch }] = useLazyQuery(
    FIND_MANY_NOTICE,
    {
      onCompleted: (data) => {
        setNoticeData(data.findManyNotice.notices);
        setTotalCount(data.findManyNotice.totalCount);
      },
      onError: (e) => {
        notification.error({ message: e.message });
      },
      fetchPolicy: 'no-cache',
    },
  );

  useEffect(() => {
    findManyNotice({
      variables: {
        take,
        skip,
        searchText,
      },
    });
  }, [take, skip]);

  useEffect(() => {
    changeSerachKindHandle(searchKindId);
  }, [searchKindId]);

  return (
    <>
      <NoticeDetailModal
        data={modalData}
        open={open}
        handleCancel={handleCancel}
        isEdit={isEdit}
        refetch={handleRefetch}
      />
      <Divider>공지사항</Divider>
      <Form layout="inline" onFinish={handleSearch}>
        <Form.Item name="searchText">
          <S.Flex>
            <Select
              value={searchKindId}
              style={{
                width: 150,
                marginRight: 10,
              }}
              onChange={setSearchKindId}
            >
              {searchKindArr.map((v) => {
                return <Select.Option value={v.id}>{v.name}</Select.Option>;
              })}
            </Select>
            <Input.Search
              enterButton
              placeholder="검색어"
              onSearch={(e) => {
                handleSearch({ searchText: e });
              }}
            />
          </S.Flex>
        </Form.Item>
      </Form>

      <TransformBox justifyContent="flex-end">
        <Button type="primary" onClick={handleClick}>
          공지사항 등록
        </Button>
      </TransformBox>

      <Table
        columns={noticeColumns}
        dataSource={noticeData}
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
        style={{
          marginTop: '30px',
        }}
        rowKey={(rec) => rec.id}
        loading={loading}
        scroll={{ x: 800 }}
      />
    </>
  );
}
