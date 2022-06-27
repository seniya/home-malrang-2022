import { userStore } from '@/store/user.store'
import { Form, Input, Button, Checkbox } from 'antd'
import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// import { RootState } from '../store/configureStore'
// import userModule from '../store/modules/user'

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 }
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
}

function SignIn () {
  const history = useNavigate()
  const { isDone, isLoading, user, token, apiSignIn } = userStore()

  const onFinish = (values: any) => {
    console.log('onFinish Success:', values)
    // fetchSignin(values)
    apiSignIn(values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  // useEffect(() => {
  //   if (token) {
  //     history('/')
  //   }
  // }, [token])

  // useEffect(() => {
  //   if (isDone) {
  //     history.push('/')
  //   }
  // }, [isDone])

  return (
    <>
      {
      <div>
        <p>isLoading: {isLoading ? 'true' : 'false'}</p>
        <p>isDone: {isDone ? 'true' : 'false'}</p>
        <p>name: {user.name}</p>
        <p>token: {token}</p>
      </div>
      }
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="id"
          name="email"
          rules={[{ required: true, type: 'email', message: 'Please input your username!' }]}
        >
          <Input disabled={isLoading} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password disabled={isLoading} />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default SignIn
