import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Divider, Form, Input, Typography } from 'antd'
import { FacebookOutlined, GoogleOutlined, TwitterOutlined } from '@ant-design/icons'
import './style.css';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // message.success('Login Successful');
        navigate('/dashboard');

    }
    return (
        <div className='loginBg'>

            <Form className='loginForm' onFinish={() => handleLogin()}>
                <Typography.Title>envato</Typography.Title>
                <Form.Item
                    rules={[
                        {
                            required: true,
                            type: "email",
                            message: "Enter valid email"
                        }
                    ]}
                    label='Email' name={'myEmail'} >
                    <Input placeholder='user@gmail.com' />
                </Form.Item>
                <Form.Item
                    rules={[
                        {
                            required: true,
                            message: "Enter your password"
                        }
                    ]}
                    label='Password'
                    name={'myPassword'}>
                    <Input.Password placeholder='user123' />
                </Form.Item>
                <Button type='primary' htmlType='submit' block >Login</Button>
                <Divider style={{ borderColor: "black" }}>or Login with</Divider>
                <div className='socialLogin'>
                    <GoogleOutlined className="socialIcon" onClick={handleLogin} style={{ color: "red" }} />
                    <FacebookOutlined className="socialIcon" onClick={handleLogin} style={{ color: "blue" }} />
                    <TwitterOutlined className="socialIcon" onClick={handleLogin} style={{ color: "cyan" }} />
                </div>
            </Form>
        </div >
    )
}

export default Login