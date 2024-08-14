import React from 'react';
import { Layout, Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const { Header } = Layout;

const languageMenu = (
  <Menu>
    <Menu.Item key="1">English</Menu.Item>
    <Menu.Item key="2">中文</Menu.Item>
    <Menu.Item key="3">Español</Menu.Item>
  </Menu>
);

const AppHeader: React.FC = () => {
  return (
    <Header className="header" style={{ background: '#fff', padding: 0, display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ marginLeft: '16px' }}>i18n-admin-fe</div>
      <div style={{ marginRight: '16px' }}>
        <Dropdown overlay={languageMenu}>
          <Button>
            Language <DownOutlined />
          </Button>
        </Dropdown>
        <Button style={{ marginLeft: '8px' }}>Login</Button>
        <Button style={{ marginLeft: '8px' }} type="primary">Logout</Button>
      </div>
    </Header>
  );
};

export default AppHeader;
