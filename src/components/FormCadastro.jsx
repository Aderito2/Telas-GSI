import { Button, Form, Input, DatePicker, Select, Tabs, Tag, Space, Table,Tooltip } from 'antd';
import { BsSearch,BsTrash3 } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";

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

export default function FormCadastro(props) {
  function Formulario() {
    return (
      <Form
        {...layout}
        name="nest-messages"
        className='text-start ml-0 flex flex-row'
        style={{ maxWidth: 900 }}
        validateMessages={validateMessages}
      >
        <div className='w-1/2'>
          <Form.Item name={['user', 'apelido']} label="Apelido" rules={[{ required: true }]}>
            <Input className='p-2' />
          </Form.Item>
          <Form.Item name={['user', 'nome']} label="Nomes" rules={[{ required: true }]}>
            <Input className='p-2' />
          </Form.Item>
          <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
            <Input className='p-2' />
          </Form.Item>

          <Form.Item label="Data de nascimento" className=''>
            <DatePicker className='p-2' />
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
            <Input className='p-2' />
          </Form.Item>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit" className='bg-blue-700 w-2/3 mb-4 p-2 ml-10 h-12 text-lg'>
              Cadastrar
            </Button>
          </Form.Item>
        </div>
      </Form>
    )
  }

  interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Tooltip title="Editar">
            <Button className='flex items-center justify-center border border-blue-500 text-blue-500' shape="circle" icon={<FiEdit2 />} />
          </Tooltip>
          <Tooltip title="Apagar">
            <Button className='flex items-center justify-center' danger shape="circle" icon={<BsTrash3 />} />
          </Tooltip>
        </Space>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool'],
    },
  ];
  function Listar() {
    return (
      <Table columns={columns} dataSource={data} />
    )
  }

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `Registar`,
      children: Formulario(),
    },
    {
      key: '2',
      label: `Listar`,
      children: Listar(),
    },
  ];
  return (
    <Tabs defaultActiveKey="1" items={items} />
  )
}