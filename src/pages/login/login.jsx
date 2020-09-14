import React, {Component} from 'react'
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Redirect} from 'react-router-dom'

import './login.less'
import {reqLogin} from "../../api";
import memoryUtils from "../../utils/memoryUtils";
import storageUtils from "../../utils/storageUtils";
import Checkbox from "antd/es/checkbox";
/*用户登陆的路由组件 */

export default class Login extends Component {
    constructor() {
        super();
        this.state= {
            formValues : '',
        }

    }

    onFinish = async (values) => {
        console.log('values', values)
        this.setState({
            formValues: values
        })
        console.log('formValues', this.state.formValues)

        const {username, password} = values
        const name = username
        const response = await reqLogin(name, password)
        console.log('请求成功', response)
        const result = response // {status: 0, data:{username,password,role}} {status: 1, msg:{}}
        if (result.code === 1) {
            // 登陆成功
            // console.log('user',result)

            // 暂时使用
            const user = {}
            user.username = username
            memoryUtils.user = user
            storageUtils.saveUser(user)
            // 保存user
            // const user = result.data
            // memoryUtils.user = user // 保存在内存中
            // storageUtils.saveUser(user) //保存到local中

            message.success('登陆成功')

            // 跳转到管理界面
            console.log('login-history', this.props.history)
            this.props.history.replace('/')

        }
    }

    render () {
        // const user = memoryUtils.user
        // if(user && user.role) {
        //     return <Redirect to='/'/>
        // }
        return (
            <div className = 'login'>
                <div className='logo'/>
                <div className='logo-tittle'>
                    <div className='logo-tittle1'>国网浙江省电力有限公司</div>
                    <div className='logo-tittle2'>STATE GRID ZHEJIANG ELECTRIC POWER CO .LTD</div>
                </div>
                <div className = 'login-table'>
                    <header className = 'login-header' >
                        <div className="login-title">国家电网物联网系统</div>
                        <div className="login-title2">Internet of Things Monitor System</div>
                    </header>
                    <section className = 'login-content'>
                        <div className='ksbl'/>
                        <h1 className="user-login">用&nbsp;户&nbsp;登&nbsp;陆</h1>
                        <div className='ksbl'/>

                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                            onFinish={this.onFinish}
                        >
                            <Form.Item
                                label="用户名"
                                name="username"
                                rules={[{ required: true, whitespace: true, message: '用户名必须输入' },
                                    { min: 4, message: '用户名至少4位' },
                                    { max: 12, message: '用户名最多12位' },
                                ]}
                            >
                                <Input size={"large"} placeholder="请输入用户名" />
                            </Form.Item>
                            <div style={{height: '10px'}}/>
                            <Form.Item
                                label="密&nbsp;&nbsp;&nbsp;&nbsp;码"
                                name="password"
                                rules={[{ required: true, whitespace: true, message: '密码必须输入' },
                                    { min: 4, message: '密码至少4位' },
                                    { max: 12, message: '密码最多12位' },
                                ]}
                            >
                                <Input
                                    size={"large"}
                                    type="password"
                                    placeholder="请输入密码"
                                />
                            </Form.Item>

                            <Form.Item  name="remember" valuePropName="checked">
                                <Checkbox>记住我</Checkbox>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    登&nbsp;&nbsp;录
                                </Button>
                            </Form.Item>
                        </Form>
                        <div className='ksbl'/>

                    </section>
                </div>
            </div>
        )
    }
}

