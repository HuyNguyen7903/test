import React, { useState, useEffect } from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
  key: string;
  id: number;
  tenmonhoc: string;
  abbreation: string;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Tên Môn Học',
    dataIndex: 'tenmonhoc',
    key: 'tenmonhoc',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Từ Viết Tắt',
    dataIndex: 'abbreation',
    key: 'abbreation',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Hành động',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        
        <a>Delete</a>
      </Space>
    ),
  },
];


const Requirement2: React.FC = () => {
  const [data, setData] = useState<DataType[]>([]);

  useEffect(() => {
    fetch("https://internship-api.dev.altasoftware.vn/api/subject", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data: DataType[]) => {
        setData(data);
      });
  }, []);

  return <Table columns={columns} dataSource={data} />;
};

export default Requirement2;
