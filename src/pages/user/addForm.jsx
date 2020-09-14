import React,{Component} from "react";
import {Form} from "antd";
import Input from "antd/es/input";
import Select from "antd/es/select";
import PropTypes from 'prop-types'


const Option=Select.Option

export default class AddForm extends Component {

    static propTypes = {
        setForm: PropTypes.func.isRequired, //接收父组件传过来的setForm函数
    }

    componentWillMount(){
        console.log('addform', this.props)
        this.props.setForm(this.props.form) //把当前页面的form通过setForm函数传到父组件
    }

    render() {

        //表单样式控制
        const formItemLayout = {
            labelCol:{ span: 5,offset:0 },
            wrapperCol:{ span: 15,offset:0 }
        }



        return (
            <Form {...formItemLayout}>
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
                <Form.Item label='角&nbsp;&nbsp;&nbsp;&nbsp;色'>

                    <Select>
                        <Option value='0'>0</Option>
                        <Option value='1'>1</Option>
                        <Option value='2'>2</Option>
                    </Select>

                </Form.Item>
            </Form>
        );
    }
}