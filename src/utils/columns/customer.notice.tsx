import { ColumnsType } from "antd/lib/table";
import moment from "moment";
import { FindManyNoticeOutput } from "src/graphql/generated/graphql";

export const noticeColumns: ColumnsType<FindManyNoticeOutput["notices"][0]> = [
  {
    title: "no",
    key: "id",
    dataIndex: "id",
    align: "center",
    render: (_val, _record, index) => index + 1,
  },
  {
    title: "제목",
    key: "title",
    dataIndex: "title",
    align: "center",
  },
  {
    title: "내용",
    key: "content",
    dataIndex: "content",
    align: "center",
    render: (val: string) => {
      return val.length > 40 ? val.substr(0, 40) + "..." : val;
    },
  },

  {
    title: "조회수",
    key: "hits",
    dataIndex: "hits",
    align: "center",
    render: (val) => {
      return val;
    },
  },
  {
    title: "작성자",
    key: "admin",
    dataIndex: "admin",
    align: "center",
    render: (val) => {
      return val.email;
    },
  },
  {
    title: "생성 일자",
    key: "createdAt",
    dataIndex: "createdAt",
    align: "center",
    render: (val) => {
      return moment(val).format("YYYY-MM-DD HH:mm:ss");
    },
  },
];
