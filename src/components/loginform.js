import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
//import './index.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { onFailure, onSuccess, onSignIn,signOut } from '../reducer/gsignin';


const NormalLoginForm = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div>
      
      <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
      <Form.Item>
        {/*<Button type="primary" htmlType="submit" className="login-form-button">
          Log in          OAuthTesterShivansh
        </Button>  473765123456
        <a href="">ghj</a>*/}
        <script src="https://apis.google.com/js/platform.js" async defer></script>
        
      </Form.Item>
    </Form>
    
    <div className="g-signin2" data-onsuccess="onSignIn" onClick={()=>{onSignIn()}} >
    <meta name="google-signin-client_id" content="473765123456-9qm8p36ps1r25gn2hcfsklh8799rcun1.apps.googleusercontent.com" />
    <script src="https://apis.google.com/js/platform.js?onload=renderButton" async defer></script>
    <a href="#" onClick={signOut}>Sign out</a>

    </div>
     
    </div>
  );
};

export default NormalLoginForm;