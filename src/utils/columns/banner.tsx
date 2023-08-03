import { Button, Popconfirm } from "antd";
import { ColumnsType } from "antd/lib/table";
import moment from "moment";
import { findManyBanner } from "src/graphql/generated/findManyBanner";

type Props = {
  deleteHandle: (id: number) => void;
  onClickImgHandle: (url: string) => void;
};

export const bannerColumns = ({
  deleteHandle,
  onClickImgHandle,
}: Props): ColumnsType<findManyBanner["findManyBanner"][0]> => [
  {
    title: "no",
    key: "id",
    dataIndex: "id",
    align: "center",
    render: (_val, _record, index) => index + 1,
  },
  {
    title: "순서",
    key: "index",
    dataIndex: "index",
    align: "center",
  },
  {
    title: "PC 이미지",
    key: "pcFileName",
    dataIndex: "pcFileName",
    align: "center",
    render(val) {
      const url = `${process.env.REACT_APP_IMAGE_URL}/banner/${val}`;
      return (
        <img
          onClick={() => onClickImgHandle(val)}
          style={{ width: "100px", height: "50px" }}
          alt="배너 이미지"
          src={`${url}`}
        />
      );
    },
  },
  {
    title: "모바일 이미지",
    key: "mobileFileName",
    dataIndex: "mobileFileName",
    align: "center",
    render(val) {
      const url = `${process.env.REACT_APP_IMAGE_URL}/banner/${val}`;
      return (
        <img
          onClick={() => onClickImgHandle(val)}
          style={{ width: "100px", height: "50px" }}
          alt="배너 이미지"
          src={`${url}`}
        />
      );
    },
  },
  {
    title: "화살표 색상",
    key: "arrowColor",
    dataIndex: "arrowColor",
    align: "center",
  },
  {
    title: "하단 버튼 색상",
    key: "dotColor",
    dataIndex: "dotColor",
    align: "center",
  },
  {
    title: "이동 경로",
    key: "path",
    dataIndex: "path",
    align: "center",
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
  {
    title: "삭제",
    key: "id",
    dataIndex: "id",
    align: "center",
    render(val) {
      return (
        <Popconfirm
          title="삭제하시겠습니까?"
          okText="삭제"
          onConfirm={(e) => {
            e?.stopPropagation();
            deleteHandle(val);
          }}
          onCancel={(e) => e?.stopPropagation()}
        >
          <Button onClick={(e) => e?.stopPropagation()} type="primary" danger>
            삭제
          </Button>
        </Popconfirm>
      );
    },
  },
];
