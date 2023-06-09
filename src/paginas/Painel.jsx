import React, { useState } from 'react';
import Log from './../Imagens/Logo.jpeg'
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { HiOutlineUserGroup, HiOutlineDocumentDuplicate } from "react-icons/hi";
import { RiUserLocationLine } from "react-icons/ri";
import { AiOutlineUser, AiOutlineAreaChart } from "react-icons/ai";
import { BsSendExclamation, BsSearch } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiSettings, CiSearch } from "react-icons/ci";
import {
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import { Avatar, Badge, Breadcrumb, Divider, Input, Layout, Menu, Tooltip, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const SlideData = [
  {
    path: "dados",
    nome: "Funcionarios",
  },
  {
    path: "funcionarios",
    nome: "Categorias",
  },
  {
    path: "material",
    nome: "Material",
  },
  {
    path: "pedidomaterial",
    nome: "Pedidos",
  },
  {
    path: "perfil",
    nome: "Fornecedor",
  },
  {
    path: "perfil",
    nome: "Relatorios",
  }
]

const items: MenuProps['items'] = [
  AiOutlineUser,
  HiOutlineUserGroup,
  HiOutlineDocumentDuplicate,
  BsSendExclamation,
  RiUserLocationLine,
  AiOutlineAreaChart,
].map((icon, index) => ({
  key: SlideData[index].path,
  icon: React.createElement(icon),
  label: SlideData[index].nome
}));

function Painel() {
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          background: colorBgContainer
        }}
      >
        <div className="demo-logo-vertical" />
        <div className='flex flex-col gap-2 pl-8'>
          <div className='w-28'>
            <img className='h-fit' src={Log} alt="" />
          </div>
          <Divider />
          <div className='flex flex-row gap-2 -translate-x-5 -translate-y-3 mb-8'>
            <Avatar className='flex items-center justify-center' shape="square" size={24} icon={<UserOutlined />} />
            <span className='font-semibold'>Ginovaldo Cumbe</span>
          </div>
        </div>
        <Menu onClick={({ key }) => navigate(key)} mode="inline" defaultSelectedKeys={['4']} items={items} />
        <div className='absolute bottom-2 flex items-center w-full pl-7 gap-3'>
          <LogoutOutlined />
          <span>Log out</span>
        </div>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className='flex items-center justify-between !px-6 h-12' style={{ padding: 0, background: colorBgContainer }} >
          <Input className='w-96 rounded-3xl' placeholder="Pesquise" prefix={<BsSearch className='text-slate-400' />} />
          <div className='flex flex-row items-center gap-2'>
            <Tooltip title="Notificações">
              <Badge dot>
                <IoMdNotificationsOutline className='text-lg text-slate-600' />
              </Badge>
            </Tooltip>
            <Tooltip title="Definições">
              <CiSettings className='text-xl' />
            </Tooltip>
          </div>
        </Header>
        <Content style={{ margin: '18px 13px 0', overflow: 'initial' }}>
          <div style={{ padding: 24, textAlign: 'center', background: colorBgContainer }}>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
    // <Layout style={{ minHeight: '100vh' }}>
    //   <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
    //     <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
    //     <ul class="nav-links">
    //       <li className='p-2 text-left'><a href="/">
    //         <span className="text-blue-300 hover:text-blue-800 text-lg ">Tela Principal</span>
    //       </a></li>
    //       <li className='p-2 text-start'>
    //         <NavLink className="text-blue-300 hover:text-blue-800 text-lg" to='dados' >
    //           Registar Funcionario
    //         </NavLink>
    //       </li>
    //       <li className='p-2 text-start'>
    //         <NavLink className="text-blue-300 hover:text-blue-800 text-lg" to='registar'>
    //           Registar material
    //         </NavLink>

    //       </li>
    //       <li className='p-2 text-start'><a href="#">
    //         <span className="text-blue-300 hover:text-blue-800 text-lg">Entrada de material </span>
    //       </a></li>
    //       <li className='p-2 text-start'>
    //         <NavLink className="text-blue-300 hover:text-blue-800 text-lg" to='pedidomaterial'>
    //           Requisicao do material
    //         </NavLink>
    //         </li>
    //       <li className='p-2 text-start'><a href="#">
    //         <span className="text-blue-300 hover:text-blue-800 text-lg">Saidas do material</span>
    //       </a></li>
    //       <li className='p-2 text-start'>
    //         <NavLink className="text-blue-300 hover:text-blue-800 text-lg" to='materiais'>
    //           Materiais
    //         </NavLink>
    //         </li>
    //       <li className='p-2 text-start'>
    //         <NavLink className="text-blue-300 hover:text-blue-800 text-lg" to='funcionarios'>
    //           Funcionarios
    //         </NavLink>
    //         </li>
    //       <li className='p-2 text-start'><a href="#">
    //         <span className="text-blue-300 hover:text-blue-800 text-lg">Definicoes</span>
    //       </a></li>

    //     </ul>

    //     <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" />
    //   </Sider>
    //   <Layout className="site-layout">
    //     <Header style={{ padding: 0, background: colorBgContainer }} />
    //     <Content style={{ margin: '0 16px' }}>
    //       <Breadcrumb style={{ margin: '16px 0' }}>
    //         <Breadcrumb.Item>Usuario</Breadcrumb.Item>
    //         <Breadcrumb.Item>Samboco</Breadcrumb.Item>
    //       </Breadcrumb>
    //       <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
    //         {/* <Dados/> */}
    //         <Outlet />

    //         {/*<Funcionarios/>*/}



    //         {/*<Materiais/>*/}

    //         {/*<Registar/>*/}

    //       </div>
    //     </Content>
    //     <Footer style={{ textAlign: 'center' }}>Devloped by Aderito & Ginovaldo</Footer>
    //   </Layout>
    // </Layout>
  );
};

export default Painel;