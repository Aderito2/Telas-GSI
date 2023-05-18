import React, { useState } from 'react';
import Dados from './../components/FormCadastro';
import Registar from './../components/FormMaterial';
import Materiais from './../components/ListaMaterial';
import Funcionarios from './../components/ListaFuncionarios';
import PedidoMaterial from './../components/PedidoMaterial';
import { Outlet, NavLink } from 'react-router-dom';


import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;


function Painel() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
        <ul class="nav-links">
          <li className='p-2 text-left'><a href="/">
            <span className="text-blue-300 hover:text-blue-800 text-lg ">Tela Principal</span>
          </a></li>
          <li className='p-2 text-start'>
            <NavLink className="text-blue-300 hover:text-blue-800 text-lg" to='dados' >
              Registar Funcionario
            </NavLink>
          </li>
          <li className='p-2 text-start'>
            <NavLink className="text-blue-300 hover:text-blue-800 text-lg" to='registar'>
              Registar material
            </NavLink>
      
          </li>
          <li className='p-2 text-start'><a href="#">
            <span className="text-blue-300 hover:text-blue-800 text-lg">Entrada de material </span>
          </a></li>
          <li className='p-2 text-start'>
            <NavLink className="text-blue-300 hover:text-blue-800 text-lg" to='pedidomaterial'>
              Requisicao do material
            </NavLink>
            </li>
          <li className='p-2 text-start'><a href="#">
            <span className="text-blue-300 hover:text-blue-800 text-lg">Saidas do material</span>
          </a></li>
          <li className='p-2 text-start'>
            <NavLink className="text-blue-300 hover:text-blue-800 text-lg" to='materiais'>
              Materiais
            </NavLink>
            </li>
          <li className='p-2 text-start'>
            <NavLink className="text-blue-300 hover:text-blue-800 text-lg" to='funcionarios'>
              Funcionarios
            </NavLink>
            </li>
          <li className='p-2 text-start'><a href="#">
            <span className="text-blue-300 hover:text-blue-800 text-lg">Definicoes</span>
          </a></li>

        </ul>

        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Usuario</Breadcrumb.Item>
            <Breadcrumb.Item>Samboco</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
            {/* <Dados/> */}
            <Outlet />

            {/*<Funcionarios/>*/}



            {/*<Materiais/>*/}

            {/*<Registar/>*/}

          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Devloped by Aderito & Ginovaldo</Footer>
      </Layout>
    </Layout>
  );
};

export default Painel;