import { Button, Form, Input,   DatePicker, Select,} from 'antd';
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

function Dados(props){

    return(
        <div className='bg-blue-100 pt-4' >
       <Form
    {...layout}
    name="nest-messages"
    className='text-start ml-0 flex flex-row'
    style={{ maxWidth: 900 }}
    validateMessages={validateMessages}
  >
    <div className='w-1/2'>
    <Form.Item name={['user', 'apelido']} label="Apelido" rules={[{ required: true }]}>
    <Input className='p-2'/>
    </Form.Item>
    <Form.Item name={['user', 'nome']} label="Nomes" rules={[{ required: true }]}>
    <Input className='p-2' />
    </Form.Item>
    <Form.Item name={['user', 'email']}label="Email" rules={[{ type: 'email' }]}>
    <Input className='p-2' />
    </Form.Item>
     
    <Form.Item label="Data de nascimento" className=''> 
          <DatePicker  className='p-2'/>
        </Form.Item>
        </div>
        <div className='w-1/2'>
        <Form.Item
        name="gender"
        label="Sexo"
        rules={[{ required: true, message: 'porfavor selecione teu genero!' }]}
      >
        <Select className='w-12 ' placeholder="selecione o sexo">
          <Option value="male">Masculino</Option>
          <Option value="female">Feminino</Option>
        </Select>
      </Form.Item>

    <Form.Item name={['user', 'contacto']} label="contacto">
      <Input className='p-2' />
    </Form.Item>
    <Form.Item name={['user', 'cargo']} label="Cargo">
      <Input className='p-2'/>
    </Form.Item>

    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
      <Button type="primary" htmlType="submit" className='bg-blue-700 w-2/3 mb-4 p-2 ml-10 h-12 text-lg'>
        Cadastrar 
      </Button>
    </Form.Item>
    </div>
  </Form>
        </div>
    )
}
export default Dados;