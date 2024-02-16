import React, { createContext, useContext, useState } from 'react';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import ViewMembers from './viewMembers.js'
import UploadAdv from './uploadAdv.js';
import './mainLayout.css';
import UploadVedio from './uploadVedio.js';
//import Test from './components/uploadVedio.js';

const { Header, Content, Footer, Sider } = Layout;

const items = [
  { key: '1', icon: <UserOutlined />, label: 'View Member', component: () => <ViewMembers/> },
  // { key: '2', icon: <VideoCameraOutlined />, label: 'Collect Payment', component: () => <h1>Component 2</h1> },
  { key: '3', icon: <UploadOutlined />, label: 'Upload Video', component: () => <UploadVedio/> },
  { key: '4', icon: <BarChartOutlined />, label: 'Upload Adv', component: () => <UploadAdv/> },
];

const NavContext = createContext();

const NavProvider = ({ children }) => {
  const [selectedNav, setSelectedNav] = useState('1');

  return (
    <NavContext.Provider value={{ selectedNav, setSelectedNav }}>
      {children}
    </NavContext.Provider>
  );
};

const NavContent = () => {
  const { selectedNav } = useContext(NavContext);

  const selectedNavObj = items.find((item) => item.key === selectedNav);

  return selectedNavObj.component();
};

const mainLayout = () => {


  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <NavProvider>
      <Layout hasSider>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
            flex: '0 0 200px'
          }}
        >
          <div className="demo-logo-vertical" />
          <NavMenu />
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          <Header style={{ padding: 0, background: colorBgContainer, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h1>Manage System</h1>
          </Header>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial', position: 'relative' }}>
            <div
              style={{
                padding: 24,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <NavContent />
            </div>
          </Content>
        </Layout>
      </Layout>
    </NavProvider>
  );
};

const NavMenu = () => {
  const { selectedNav, setSelectedNav } = useContext(NavContext);

  const handleClick = ({ key }) => {
    setSelectedNav(key);
  };

  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={handleClick}>
      {items.map((item) => (
        <Menu.Item key={item.key} icon={item.icon}>
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default mainLayout;
