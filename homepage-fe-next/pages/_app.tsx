
import 'antd/dist/antd.css'
import '@toast-ui/editor/dist/toastui-editor.css'
import 'prismjs/themes/prism.css'
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css'

import '@/styles/globals.css'
import '@/styles/index.css'
import type { AppProps } from 'next/app'
import TopMenu from '@/components/topMenu'

import { Breadcrumb, Layout } from 'antd'
const { Content, Footer } = Layout

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <TopMenu />
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          <Component {...pageProps} />
          </div>
        </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  )
}

export default MyApp
