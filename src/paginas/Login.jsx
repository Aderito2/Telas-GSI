import React, { useEffect } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { AllGets } from '../requests/Get/AllGets';



function Login() {
  const { GetMateriais } = AllGets();
  useEffect(() => {
    (async () => {
      let response = await GetMateriais()
      console.log(response)
      // setPublicacoes(response.data)
    })()
  }, [])

  return (
    <div className='flex flex-col items-center justify-center  h-screen '>
      <div className='text-center italic text-5xl text-blue-950 mb-5'><b>Login</b></div>
      <Form
        layout="vertical"
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        className='flex flex-col !items-center !justify-center w-full '
      >
        <Form.Item
          label="Usuario"
          name="username"
          className='w-full flex flex-col items-center'
        >
          <Input className='!w-[400px]' />
        </Form.Item>

        <Form.Item
          label="Senha"
          name="password"
          className='w-full flex flex-col items-center'
          rules={[{ message: 'Please input your password!' }]}
        >
          <Input.Password className='!w-[400px]' />
        </Form.Item>
        <div className='flex flex-row justify-between w-full px-24'>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button className='text-white bg-blue-500 hover:!text-white hover:shadow hover:shaddow-3xl' htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>Lembrar</Checkbox>
          </Form.Item>

        </div>
      </Form>
    </div>
  );
};

export default Login;

