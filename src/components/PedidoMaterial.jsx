
import React from 'react';
import  { useState } from 'react';
import {Button, Cascader, DatePicker,Form, Input, InputNumber, Radio, Select,Switch,TreeSelect,} from 'antd';


function PedidoMaterial()  {
  

  

  return (
    <div className='bg-blue-300 w-full'>
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      className=' pt-10 ml-60 pb-10'
      style={{ maxWidth: 600 }}
    >
      
      <Form.Item label="Nome">
        <Input />
      </Form.Item>
    
      
      <Form.Item label="Material">
        <Cascader
          options={[
            {
              value: 'zhejiang',
              label: 'Zhejiang',
              children: [{ value: 'hangzhou', label: 'Hangzhou' }],
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="Data">
        <DatePicker />
      </Form.Item>
      <Form.Item label="Quantidade">
        <InputNumber />
      </Form.Item>
      
      <Form.Item >
        <Button className='bg-blue-600 ml-40'>Comfirmar</Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default PedidoMaterial;