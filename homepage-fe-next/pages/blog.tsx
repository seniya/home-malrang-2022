import type { NextPage } from 'next'

import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
  () => import('@/components/blogEditor'),
  { ssr: false }
)

const Blog: NextPage = () => {
  return (
      <>
    <div>
      Blog page
    </div>
    <div>
      <DynamicComponentWithNoSSR />
    </div>
    </>
  )
}

export default Blog
