import { ColumnsType } from 'antd/lib/table';
import moment from 'moment';
import { policyKindFormat } from '../policyKindFormat';
import { FindManyPolicyQuery } from 'src/graphql/generated/graphql';
import { deleteTag } from '../deleteTag';

export const policyColumns: ColumnsType<
  FindManyPolicyQuery['findManyPolicy']['policies'][0]
> = [
  {
    title: 'no',
    key: 'id',
    dataIndex: 'id',
    align: 'center',
  },
  {
    title: '약관 종류',
    key: 'policyKind',
    dataIndex: 'policyKind',
    align: 'center',
    render: (val) => {
      return policyKindFormat(val);
    },
  },
  {
    title: '약관 내용',
    key: 'content',
    dataIndex: 'content',
    align: 'center',
    render: (val: string) => {
      return val.length > 40
        ? deleteTag(val.substr(0, 40)) + '...'
        : deleteTag(val);
    },
  },
  {
    title: '생성 일자',
    key: 'createdAt',
    dataIndex: 'createdAt',
    align: 'center',
    render: (val) => {
      return moment(val).format('YYYY-MM-DD HH:mm:ss');
    },
  },
];
