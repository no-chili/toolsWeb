import React, { useState } from 'react'
import { Empty } from 'antd';
import {
  Input,
  Button,
  Spin
} from 'antd';

import { http } from '../http/http';
export default function HtmlFetch() {
  const [url, setUrl] = useState('')
  const [isLoding, setLding] = useState(false)
  const [content, setContext] = useState('')
  const urlChange = (e) => {
    setUrl(e.target.value)
  }
  async function fetch() {
    setLding(true)
    const res = await http.get(url)
    setLding(true)
    setContext(res.data.context)
  }
  return (
    <div>
      <Input.Group compact >
        <Input style={{ width: 'calc(100% - 200px)' }} defaultValue="" onChange={urlChange} />
        <Button type="primary" onClick={fetch}>Submit</Button>
      </Input.Group>
      {
        content ? content : isLoding ? <Spin /> : <Empty />
      }
    </div>
  )
}
