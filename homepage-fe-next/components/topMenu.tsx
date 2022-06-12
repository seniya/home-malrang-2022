import type { NextPage } from 'next'
import { Layout, Menu } from 'antd'
import { useRouter } from 'next/router'

const { Header } = Layout

const items = [
  { label: 'home', key: 'home' },
  { label: 'blog', key: 'blog' },
  { label: 'about', key: 'about' },
  {
    label: 'sub menu',
    key: 'submenu',
    children: [{ label: 'item 3', key: 'submenu-item-1' }]
  }
]

const TopMenu: NextPage = () => {
  const router = useRouter()

  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%', background: '#fff' }}>
      <div className="logo" />
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={items}
        onClick={({ key }) => router.push(key)}
      />
    </Header>

  )
}

export default TopMenu
