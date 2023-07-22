import React, { useEffect, useState } from 'react';
import { notification, Table } from 'antd';

import { useLazyQuery } from '@apollo/client';
import { userInquiryColumns } from '../../utils/columns';
import { FindManyUserInquiryByAdminOutput } from 'src/graphql/generated/graphql';
import { FIND_MANY_USER_INQUIRY_BY_ADMIN } from 'src/graphql/query/findManyUserInquiryByAdmin';

type Props = {
  identity: string;
  selectedKey: string;
};

export function UserInquiryHistory({ identity, selectedKey }: Props) {
  const [inquiryData, setInquiryData] = useState<
    FindManyUserInquiryByAdminOutput['userInquiries']
  >([]);
  const [take] = useState(10);
  const [skip, setSkip] = useState(0);
  const [current, setCurrent] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const handlePagination = (e: number) => {
    setCurrent(e);
    setSkip((e - 1) * 10);
  };

  const [findManyUserInquiryByAdmin, { loading }] = useLazyQuery(
    FIND_MANY_USER_INQUIRY_BY_ADMIN,
    {
      onCompleted: (data) => {
        setInquiryData(data.findManyUserInquiryByAdmin.userInquiries);
        setTotalCount(data.findManyUserInquiryByAdmin.totalCount);
      },
      onError: (e) => {
        notification.error({ message: e.message });
      },
      fetchPolicy: 'no-cache',
    },
  );

  useEffect(() => {
    if (selectedKey === '2') {
      findManyUserInquiryByAdmin({
        variables: {
          take,
          skip,
          searchText: identity,
        },
      });
    }
  }, [skip, selectedKey]);

  return (
    <>
      <Table
        columns={userInquiryColumns}
        dataSource={inquiryData}
        pagination={{
          current: current,
          total: totalCount,
          onChange: handlePagination,
          position: ['bottomCenter'],
        }}
        loading={loading}
        rowKey={(rec) => rec.id}
        scroll={{ x: 800 }}
      />
    </>
  );
}
