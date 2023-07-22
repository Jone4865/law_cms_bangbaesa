import { useLazyQuery } from '@apollo/client';
import { Button, Divider, notification, Table } from 'antd';

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Chart } from '../../components/Chart';
import { dashboardInquiryColumns } from '../../utils/columns';

import * as S from './style';
import { FIND_DASHBOARD_BY_ADMIN } from 'src/graphql/query/findDashboardByAdmin';
import { FIND_MANY_USER_INQUIRY_BY_ADMIN } from 'src/graphql/query/findManyUserInquiryByAdmin';
import { FindManyUserInquiryByAdminOutput } from 'src/graphql/generated/graphql';

type DashboardStats = {
  [index: string]: any[];
  users: {
    date: string;
    count: number;
  }[];
  userInquiries: {
    date: string;
    count: number;
  }[];
  offers: {
    date: string;
    count: number;
  }[];
};

export function Dashboard() {
  const [inquiryData, setInquiryData] = useState<
    FindManyUserInquiryByAdminOutput['userInquiries']
  >([]);
  const [dashboardData, setDashboardData] = useState<DashboardStats>();
  const navigator = useNavigate();

  const chartTitle = [
    { title: '회원수', keyword: 'users' },
    { title: '1:1 문의 갯수', keyword: 'userInquiries' },
    { title: '오퍼 갯수', keyword: 'offers' },
  ];

  const [findDashboardByAdmin] = useLazyQuery(FIND_DASHBOARD_BY_ADMIN, {
    onCompleted: (data) => {
      setDashboardData(data.findDashboardByAdmin);
    },
    onError: (e) => {
      notification.error({ message: e.message });
    },
    variables: {
      skip: 0,
      take: 5,
    },
    fetchPolicy: 'no-cache',
  });

  const [findManyUserInquiryByAdmin, { loading }] = useLazyQuery(
    FIND_MANY_USER_INQUIRY_BY_ADMIN,
    {
      onCompleted: (data) => {
        setInquiryData(data.findManyUserInquiryByAdmin.userInquiries);
      },
      onError: (e) => {
        notification.error({ message: e.message ?? `${e}` });
      },
      fetchPolicy: 'no-cache',
    },
  );

  useEffect(() => {
    findDashboardByAdmin();
    findManyUserInquiryByAdmin({
      variables: {
        take: 10,
        skip: 0,
        searchText: '',
      },
    });
  }, []);

  return (
    <>
      <Divider>대시보드</Divider>
      <S.ChartContainer>
        {chartTitle.map((v, i) => (
          <div key={i}>
            <S.ChartTitle>{v.title}</S.ChartTitle>
            <Chart data={dashboardData ? dashboardData[v.keyword] : []} />
          </div>
        ))}
      </S.ChartContainer>

      <S.Head>
        <h3>1:1 문의</h3>
        <Button
          type="link"
          style={{
            fontSize: 16,
          }}
          onClick={() => {
            navigator('/customer/inquiry');
          }}
        >
          자세히 보기 {'>'}
        </Button>
      </S.Head>
      <Table
        pagination={false}
        rowKey={(rec) => rec.id}
        columns={dashboardInquiryColumns}
        scroll={{ x: 800 }}
        dataSource={inquiryData}
        loading={loading}
      />
    </>
  );
}
