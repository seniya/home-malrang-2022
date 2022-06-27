import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import BlogPageHeader from '@/pages/blog/components/blogPageHeader'

const BlogList = lazy(() => import('@/pages/blog/blogList'))
const BlogCreate = lazy(() => import('@/pages/blog/blogCreate'))
const BlogUpdate = lazy(() => import('@/pages/blog/blogUpdate'))
const BlogRead = lazy(() => import('@/pages/blog/blogRead'))

function Blog () {
  return (
    <>
      {BlogPageHeader()}
      <div>
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="create" element={<BlogCreate />} />
          <Route path="update/:id" element={<BlogUpdate />} />
          <Route path="read/:id" element={<BlogRead />} />
        </Routes>
      </div>
    </>
  )
}

export default Blog
