import { Layout, Menu } from 'antd';
import { FileOutlined, SlidersOutlined, UserOutlined, ApiOutlined, TeamOutlined, } from '@ant-design/icons';
import { useRoutes, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import routes from './routes'
const { Content, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('页面元素解析', '/htmlfetch', <SlidersOutlined />),
  getItem('Api调试', '/apifetch', <ApiOutlined />),
  getItem('MD-HTML', '/mdfetch', <FileOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),

];
function App() {
  const [collapsed, setCollapsed] = useState(false);
  const element = useRoutes(routes)
  const navigate = useNavigate();
  const goto = (e) => {
    navigate(e.key)
  }
  return (
    <Layout style={{
      minHeight: '100vh',
    }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          items={items}
          onClick={goto}
        />
      </Sider>
      <Layout>
        <Content>
          {element}
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
