import { Editor } from '@toast-ui/react-editor'

import Prism from 'prismjs'
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight'

import { createRef } from 'react'

export default function BlogEditor () {
  const editorRef = createRef<Editor>()
  const handleClick = () => {
    console.log(' editorRef.current : ', editorRef.current)
    console.log(' editorRef.current?.getInstance() : ', editorRef.current?.getInstance())
    editorRef.current?.getInstance().exec('bold')
  }

  const getMarkdown = () => {
    const resultMd = editorRef.current?.getInstance().getMarkdown()
    console.log('resultMd : ', resultMd)
  }

  return (
    <div>
      <Editor
        previewStyle="vertical"
        height="800px"
        initialEditType="markdown"
        initialValue="hello"
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
        ref={editorRef}
        usageStatistics={false}

      />
      <button onClick={handleClick}>make bold</button>
      <button onClick={getMarkdown}>getMarkdown</button>
    </div>
  )
}

// export default Blog
