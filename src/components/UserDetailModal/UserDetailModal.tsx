import { Descriptions, Modal, Tabs } from "antd";

import React, { useEffect, useState } from "react";
import { UserInquiryHistory } from "../UserInquiryHistory/UserInquiryHistory";

type Props = {
  open: boolean;
  identity: string;
  email?: string;
  handleCancel: () => void;
};

const { TabPane } = Tabs;

export function UserDetailModal({
  email,
  open,
  identity,
  handleCancel,
}: Props) {
  const [selectedKey, setSeletedKey] = useState("1");

  useEffect(() => {
    setSeletedKey("1");
  }, [open]);

  return (
    <Modal
      open={open}
      onCancel={handleCancel}
      footer={false}
      title={`${identity}님의 상세정보`}
      bodyStyle={{
        maxHeight: "90vh",
        overflow: "auto",
      }}
      centered
      width={1000}
    >
      <Tabs
        defaultActiveKey="1"
        activeKey={selectedKey}
        onChange={setSeletedKey}
      >
        <TabPane tab={<span>상세정보</span>} key="1">
          <Descriptions bordered>
            <Descriptions.Item label="닉네임" span={24}>
              {identity}
            </Descriptions.Item>
            {email && (
              <Descriptions.Item label="이메일" span={24}>
                {email}
              </Descriptions.Item>
            )}
          </Descriptions>
        </TabPane>
        <TabPane tab={<span>1:1 문의</span>} key="2">
          <UserInquiryHistory identity={identity} selectedKey={selectedKey} />
        </TabPane>
      </Tabs>
    </Modal>
  );
}
