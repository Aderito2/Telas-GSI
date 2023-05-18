//import Reaect,{useState,useEffect} from '';
import './App.css';
import Login from './components/Login';
import Dados from './components/FormCadastro';
import Painel from './components/Painel';
import Registar from './components/FormMaterial';
import Materiais from './components/ListaMaterial';
import Funcionarios from './components/ListaFuncionarios';
import PedidoMaterial from './components/PedidoMaterial';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Rotas from './Rotas';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="painel" element={<Painel />} >
            <Route path='dados' element= {<Dados/>} />
            <Route path='registar' element= {<Registar/>} />
            <Route path='materiais' element= {<Materiais/>} />
            <Route path='funcionarios' element= {<Funcionarios/>} />
            <Route path='pedidomaterial' element= {<PedidoMaterial/>} />

          </Route>
        </Routes>
      </Router>
    </>



  );
}

export default App;