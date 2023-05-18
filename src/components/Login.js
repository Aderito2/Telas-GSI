import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';


function Login() {
  

  return (
    <div className='pt-10 h-2/3 w-1/2 bg-blue-100 ml-80 mt-20 items-left'>
    <div className='text-center italic text-5xl text-blue-950'><b>Login</b></div>
    <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    className='mt-10 text-start'
    autoComplete="off"
  >
    <Form.Item
    
      name="username"
      rules={[{ required: true, message: 'Porfavor insira teu username!' }]}
    >
      <label className=' ml-40 text-blue-950'><b>Username</b></label><Input  className='p-2 ml-40'/>
    </Form.Item>

    <Form.Item 
      name="password"
      rules={[{ required: true, message: 'Porfavor insira a tua password!' }]}
    >
     <label className='ml-40 text-blue-950'><b>Password</b></label> <Input.Password  className='p-2 ml-40'/>
    </Form.Item>

    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
      <Checkbox className='text-blue-950'><b>Lembre-me</b></Checkbox>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button className='bg-blue-800 w-2/3 mb-10 text-lg ' type="primary" htmlType="submit">
        Entrar
      </Button>
    </Form.Item>
  </Form>
    </div>
  );
};

export default Login;

// import styles from './Login.module.css';
// <script src="https://kit.fontawesome.com/a076d05399.js"></script>


// function Login(){
// return(
   
// <div className={styles.LoginContainer}>
//       <div className={styles.LoginWrapper}>
//         <div className={styles.LoginTitle}>
//             <span>Login</span>
//         </div>
//         <form action="#">
//           <div className={styles.LoginRow}>
//           <i class="fas fa-user"></i>
//             <input type="text" placeholder="Email" required/>
//           </div>
//           <div className={styles.LoginRow}>
//           <i class="fas fa-lock"></i>
//             <input type="password" placeholder="Senha" required/>
//           </div>
//           <div className={styles.LoginPass}>
//             <a href="#">Esqueceu a senha?</a>
//           </div>
//           <div className={styles.LoginButton}>
//             <input type="submit" value="Entrar"/>

//           </div>
//           <div className={styles.LoginSignup}> 
          
//           </div>
//         </form>
//       </div>
//  </div>
// )
// }
