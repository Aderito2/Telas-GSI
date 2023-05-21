import { Button, Form, Input, DatePicker, Select, InputNumber, } from 'antd';
import { AllGets } from './../requests/Get/AllGets'
import { useEffect, useState } from 'react';
const { RangePicker } = DatePicker;
const { Option } = Select;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 70 }}>
      <Option value="86">+86</Option>
      <Option value="87">+87</Option>
    </Select>
  </Form.Item>
);


/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: ' Introduza o ${label} !',
  types: {
    email: '${label} invalido!',
  }
};

function FormMaterial(props) {

  const { GetMateriais } = AllGets();
  const [material, setMaterial] = useState([])
  useEffect(() => {
    (async () => {
      let response = await GetMateriais()
      console.log("Quiiiiiiiiiii ", response)
      setMaterial(response.data)
    })()
  }, [material])


  return (
    <div className='bg-blue-100 pt-4' >
      <Form
        {...layout}
        name="nest-messages"
        className='text-start ml-40'
        style={{ maxWidth: 600 }}
        validateMessages={validateMessages}
      >
        <Form.Item name={['Material', 'nome']} label="Nome" rules={[{ required: true }]}>
          <Input className='p-2' />
        </Form.Item>
        <Form.Item name={['material', 'descricao']} label="Descricao" rules={[{ required: true }]}>
          <Input className='p-2' />
        </Form.Item>
        <Form.Item name={['material', 'codigo']} label="Codigo de barra" rules={[{ type: 'email' }]}>
          <Input className='p-2' />
        </Form.Item>
        <Form.Item name={['material', 'categoria']} label="Categoria">
          <Input className='p-2' />
        </Form.Item>

        <Form.Item label="Quantidade Minima">
          <InputNumber />
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit" className='bg-blue-700 w-2/3 mb-4 p-2'>
            Registrar
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
export default FormMaterial;