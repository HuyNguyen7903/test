import React, { useState } from 'react';
import { Image } from "antd";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Giới thiệu bản thân', 'sub1', <UserOutlined />, [
    getItem('Huy', '3'),

  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <h1>Giới thiệu bản thân</h1>
            <div>
    <table >
      <tr>
        <td>
          <Image width={250} src={process.env.PUBLIC_URL + '/profile.jpg'} />
        </td>
        <td style={{ padding: "20px" }}>
          <p style={{ marginBottom: "10px" }}>MSSV: 2151150041</p>
          <p style={{ marginBottom: "10px" }}>Họ và tên: Nguyễn Quốc Huy</p>
          <p style={{ marginBottom: "10px" }}>Liên hệ: 0933309488</p>
          <p style={{ marginBottom: "10px" }}>Trường: Đại học giao thông vận tải TPHCM</p>
          <p style={{ marginBottom: "10px" }}>Khoa: Công nghệ thông tin</p>
          <p style={{ marginBottom: "10px" }}>Chuyên ngành: Công nghệ phần mềm</p>
        </td>
      </tr>
    </table>
  </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;