import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'
import { Button, Layout, Menu, Tooltip } from 'antd'
import {
  HomeOutlined,
  CoffeeOutlined,
  BulbOutlined,
  SettingOutlined,
  LogoutOutlined
} from '@ant-design/icons'

import { userStore } from '@/store/user.store'
import Breadcrumbs from './components/breadcrumb'

const Home = lazy(() => import('@/pages/home'))
const About = lazy(() => import('@/pages/about'))
const SignIn = lazy(() => import('@/pages/signin'))
const Blog = lazy(() => import('@/pages/blog/_blog.container'))
const SignUp = lazy(() => import('@/pages/signup'))
const Toys = lazy(() => import('@/pages/toys'))

const { Header, Content, Footer } = Layout
const { SubMenu } = Menu

function Container () {
  const { isDone, isLoading, user, token } = userStore()

  // const dispatch = useDispatch()
  // const getUserInfo = () => {
  //   dispatch(userModule.actions.GET_USER_REQUEST())
  // }

  // useEffect(() => {
  //   getUserInfo()
  // }, [])

  // const userState = useSelector((store: RootState) => store.user.userReducer)
  // const { user, token } = userState

  const location = useLocation()
  const onClickBtnSignout = () => {
    // dispatch(userModule.actions.SIGN_OUT())
  }

  const renderBtnLogout = () => {
    return (
      <div className="site-layout-sub-header-background-sign-btn">
        <Tooltip title="sign-out">
          <Button
            type="link"
            shape="circle"
            icon={<LogoutOutlined />}
            size="small"
            onClick={onClickBtnSignout}
          />
        </Tooltip>
      </div>
    )
  }

  return (
    <>
      <Layout className="site-layout">
        <Header
          className="site-layout-sub-header-background"
          style={{ position: 'fixed', zIndex: 999, width: '100%' }}
        >
          {
            <div className="logo">
              {<span>Hello. </span>}
              {<span>{token ? `${user.name} 님` : '손님'}</span>}
              {token ? renderBtnLogout() : ''}
            </div>
          }
          <Menu theme="dark" mode="horizontal" selectedKeys={[location.pathname]}>
            <Menu.Item key="/" icon={<HomeOutlined style={{ fontSize: '18px' }} />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="/blogs" icon={<CoffeeOutlined style={{ fontSize: '18px' }} />}>
              <Link to="/blogs">Blog</Link>
            </Menu.Item>
            <Menu.Item key="/toys" icon={<CoffeeOutlined style={{ fontSize: '18px' }} />}>
              <Link to="/toys">Toys</Link>
            </Menu.Item>
            <Menu.Item key="/about" icon={<BulbOutlined style={{ fontSize: '18px' }} />}>
              <Link to="/about">About</Link>
            </Menu.Item>
            <SubMenu
              key="admin"
              icon={<SettingOutlined style={{ fontSize: '18px' }} />}
              title="Admin"
            >
              <Menu.Item key="/sign-in">
                <Link to="/sign-in">sign-in</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          <Breadcrumbs />
          <div
            className="site-layout-main-content site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {/* <div>메인 컨테이너</div> */}
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blogs" element={<Blog />} />
                <Route path="/toys" element={<Toys />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/sign-in" element={<SignIn />} />
              </Routes>
            </Suspense>
          </div>
        </Content>
        <Footer className="site-layout" style={{ textAlign: 'center' }}>
          Made By Malrang
        </Footer>
      </Layout>
      ,
    </>
  )
}

export default Container
