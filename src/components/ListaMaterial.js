import React from 'react'
import { Table } from 'antd';



class Materiais extends React.Component{
constructor(props){

    super(props);
    this.state = {
        materiais:[]
    }
}
render(){
return(

    <div>

 <table className='w-full'>
     <thead className='p-10'>
        <tr className='bg-blue-300 text-blue-900 text-lg italic border-b-4 border-blue-950'>
            <th><b>Id</b></th>
            <th><b>Nome</b></th>
            <th><b>Categoria</b></th>
            <th><b>Quantidade</b></th>
            <th><b>Acoes</b></th>
        </tr>
     </thead>
     <tbody>
         <tr className='text-base text-center'>
          <td>1 </td>
          <td>Tesoura</td>
          <td> Limpeza</td>
          <td>27</td>
          <td>Editar Excluir</td>
         </tr>

     </tbody>
 </table>

    </div>
)

}
}
export default Materiais;