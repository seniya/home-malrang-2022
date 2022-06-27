import { Divider } from 'antd'
import { useEffect, useRef } from 'react'

function blogComment () {
  const commentsElem = useRef(null)

  const initComment = () => {
    const utterances = document.createElement('script')
    utterances.type = 'text/javascript'
    utterances.async = true
    utterances.crossorigin = 'anonymous'
    utterances.src = 'https://utteranc.es/client.js'

    utterances.setAttribute('issue-term', 'pathname') // pathname|url|title|og:title 중 택 1
    utterances.setAttribute('theme', 'github-light') // theme 설정
    utterances.setAttribute('repo', 'seniya/blog-comment') // 사용할 repository

    // script tag 삽입
    commentsElem.current.appendChild(utterances)
  }
  useEffect(() => {
    initComment()
  }, [])

  return (
    <>
      <Divider />
      <div ref={commentsElem}></div>
    </>
  )
}

export default blogComment
