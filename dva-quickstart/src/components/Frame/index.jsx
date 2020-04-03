import { Layout, Menu, Breadcrumb } from 'antd';
import { withRouter } from 'dva/router';
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Logo from '../../assets/yay.jpg';
import { adminRoutes } from '../../routes';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const routes = adminRoutes.filter(route => route.isShow);

function Index(props) {
  return (
    <Layout style={{height: "100%"}}>
      <Header className="header">
        <div className="logo" style={{ height: "100%" }}>
          <img src={Logo} alt="logo" style={{ height: "100%" }} />
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            {routes.map(route=>{
              return (
              <Menu.Item key={route.path} onClick={p=>props.history.push(p.key)}>{route.title}</Menu.Item>
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