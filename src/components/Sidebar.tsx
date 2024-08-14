import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { FileSearchOutlined, ProfileOutlined, EditOutlined } from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar: React.FC = () => {
  return (
    <Sider collapsible>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
        <Menu.Item key="1" icon={<FileSearchOutlined />}>
          <Link to="/document-search">文案搜索</Link>
        </Menu.Item>

        <SubMenu key="sub1" icon={<ProfileOutlined />} title="翻译需求">
          <Menu.Item key="2">
            <Link to="/request-list">需求列表</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/request-review">需求审核</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/modify-review">修改审核</Link>
          </Menu.Item>
        </SubMenu>

        <Menu.Item key="5" icon={<EditOutlined />}>
          <Link to="/document-usage">文案使用</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
