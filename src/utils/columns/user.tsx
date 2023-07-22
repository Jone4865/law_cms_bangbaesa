import { ColumnsType } from 'antd/lib/table';
import moment from 'moment';
import { FindManyUserOutput } from 'src/graphql/generated/graphql';
import { phoneFormat } from '../phoneFormat';

export const userListColumns: ColumnsType<FindManyUserOutput['users'][0]> = [
  {
    title: 'no',
    key: 'id',
    dataIndex: 'id',
    align: 'center',
    render: (_val, _record, index) => index + 1,
  },
  {
    title: '이메일',
    key: 'emailAuth',
    dataIndex: 'emailAuth',
    align: 'center',
    render(v) {
      return v?.email;
    },
  },
  {
    title: '닉네임',
    key: 'identity',
    dataIndex: 'identity',
    align: 'center',
    render(value) {
      return value;
    },
  },
  {
    title: '인증단계',
    key: 'level',
    dataIndex: 'level',
    align: 'center',
    render(value) {
      return value;
    },
  },
  {
    title: '전화번호',
    key: 'phone',
    dataIndex: 'phone',
    align: 'center',
    render: (val) => (val ? phoneFormat(val) : '-'),
  },
  {
    title: '생성일',
    key: 'createdAt',
    dataIndex: 'createdAt',
    align: 'center',
    render: (val: string) => {
      return moment(val).format('YYYY-MM-DD HH:mm:ss');
    },
  },
  {
    title: '최근접속',
    key: 'connectionDate',
    dataIndex: 'connectionDate',
    align: 'center',
    render: (val: string) => {
      return moment(val).format('YYYY-MM-DD HH:mm:ss');
    },
  },
];
