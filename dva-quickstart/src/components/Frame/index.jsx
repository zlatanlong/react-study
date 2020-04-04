import { Layout, Menu, Breadcrumb, Dropdown, Avatar, message } from 'antd';
import { withRouter } from 'dva/router';
import { DownOutlined } from '@ant-design/icons';
import Logo from '../../assets/yay.jpg';
import { adminRoutes } from '../../routes';
import style from './frame.css';
import { clearToken } from '../../utils/authc';


const { Header, Content, Sider } = Layout;

const routes = adminRoutes.filter(route => route.isShow);

function Index(props) {
  const popMenu = (
    <Menu onClick={(p) => {
      if (p.key === 'logOut') {
        props.history.push('/login')
        clearToken() 
      } else {
        message.info(p.key)
      }
    }
    }>
      <Menu.Item key='noti'>通知中心</Menu.Item>
      <Menu.Item key='setting'>设置</Menu.Item>
      <Menu.Item key='logOut'>退出</Menu.Item>
    </Menu >
  );

  return (
    <Layout style={{ height: "100%" }}>
      <Header className={style.header}>
        <div className="logo" style={{ height: "100%" }}>
          <img src={Logo} alt="logo" style={{ height: "100%" }} />
        </div>
        <Dropdown overlay={popMenu}>
          <div>
            <Avatar>U</Avatar>
            <span style={{ color: '#fff', margin: '0 10px' }}>
              超级管理员 <DownOutlined />
            </span>
          </div>
        </Dropdown>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            {routes.map(route => {
              return (
                <Menu.Item key={route.path} onClick={p => props.history.push(p.key)}>{route.title}</Menu.Item>
              )
            })}
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 16px 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default withRouter(Index);