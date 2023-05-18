import React from 'react'
import { Table } from 'antd';



class funcionarios extends React.Component{
constructor(props){

    super(props);
    this.state = {
        funcionarios:[
         {'id':1,'nome':'Cumbe De Lasvega','email':'lasvega85@gmail.com','cargo':'Jardineiro','idade':23 },
         {'id':2,'nome':'Roberto Langa','email':'langa93@gmail.com','cargo':'Seguranca','idade':39 },
        ]
    }
}
render(){
return(

    <div>

 <table className='w-full'>
     <thead className='p-10'>
        <tr className='bg-blue-300 text-blue-900 text-lg italic border-b-4 border-blue-950 '>
            <th><b>Id</b></th>
            <th><b>Nome</b></th>
            <th><b>Email</b></th>
            <th><b>Cargo</b></th>
            <th><b>Idade</b></th>
            <th><b>Acoes</b></th>
        </tr>
     </thead>
     <tbody>
        {
            this.state.funcionarios.map((funcionario) =>
         <tr className='text-base bg-blue-50 text-center '>
          <td>{funcionario.id }</td>
        <td>{funcionario.nome}</td>
        <td> {funcionario.email}</td>
          <td>{funcionario.cargo }</td>
          <td>{funcionario.idade}</td>
          <td>Editar   Excluir</td>
         </tr>
            )
}
     </tbody>
 </table>

    </div>
)

}
}
export default funcionarios;