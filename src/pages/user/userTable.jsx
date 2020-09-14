import React,{Component} from "react";
import {Table, Button, Card, Modal, message, Form} from 'antd';
import { Resizable } from 'react-resizable';

import {reqShowUser, reqDeleteUser, reqAddRole, reqUpdateUser} from "../../api";

import AddForm from "./addForm";
import './userTable.less'
import Input from "antd/es/input";
import Select from "antd/es/select";
import Search from "antd/es/input/Search";

const { Option } = Select;

const ResizableTitle = props => {
    const { onResize, width, ...restProps } = props;

    if (!width) {
        return <th {...restProps} />;
    }

    return (
        <Resizable
            width={width}
            height={0}
            handle={
                <span
                    className="react-resizable-handle"
                    onClick={e => {
                        e.stopPropagation();
                    }}
                />
            }
            onResize={onResize}
            draggableOpts={{ enableUserSelectHack: false }}
        >
            <th {...restProps} />
        </Resizable>
    );
};


class Demo extends Component {
    constructor() {
        super();
        this.delete = this.delete.bind(this)
        this.upDate = this.upDate.bind(this)
        this.search = this.search.bind(this)
        this.upDateModal = this.upDateModal.bind(this)

        this.formItemLayout = {
            labelCol:{ span: 5,offset:0 },
            wrapperCol:{ span: 15,offset:0 }
        }
        this.state = {
            columns: [
                {
                    title: 'ID',
                    dataIndex: 'id',
                    width: 200,
                },
                {
                    title: '登陆名',
                    dataIndex: 'name',
                    width: 300,
                },
                {
                    title: '角色名称',
                    dataIndex: 'roleName',
                    width: 300,
                },

                {
                    title: '操作',
                    key: 'action',
                    render: (text, record, index) => {
                        // console.log('record',text,record,index)
                        return (
                            <div>
                                <Button style={{float: "left", marginRight: '20px'}}
                                        onClick={this.upDate.bind(this, record)}>配置修改</Button>
                                <Button style={{float: "left"}} onClick={this.delete.bind(this, record)}>删除</Button>

                            </div>
                        )
                    }

                },
            ],
            record: {
                name: null,
                passward: null,
                roleName: null,
            },
            data: [],
            isShow: false,
            upDate: false,
            delete: false,
            all: [],
        };

        this.components = {
            header: {
                cell: ResizableTitle,
            },
        };
    }


    // 点击弹窗的ok
    async upDateModal() {
        this.setState({
            upDate: false
        })
        let name = document.querySelector('#username').value
        let passward = document.querySelector('#password').value
        let roleName = document.querySelector('.ant-select-selection-item').innerHTML
        console.log('upDateModal:','username',name,'password',passward,roleName)
        let roleId
        if( roleName === '管理员') {
            roleId = '1'
        } else if ( roleName === '业务员') {
            roleId = '2'
        } else {
            roleId = '3'
        }
        let user = {}
        user.id = this.state.record.id
        user.name = name
        user.passward = passward
        user.roleId = roleId
        // console.log(await reqUpdateUser(user))
        const result = await reqUpdateUser(user)
        console.log('update响应',result)
        if(result.code === 1) {
            // 修改成功
            message.success('修改成功')
            const list = await reqShowUser()
            console.log('result',list)
            const {data} = list
            console.log('data', data)
            for (let i = 0; i < data.length; i++) {
                let data1 = data[i]
                data1.key = i + 1
            }
            this.setState({
                all: data,
                data: data
            })
        } else {
            // 修改失败
            message.error('修改失败')
        }
    }

    // 删除方法
    delete(record){
        this.setState({
            delete: true,
            record: record,
        })
        console.log('record', record)
         Modal.confirm({
            content: '确定删除吗？',
             // 本地api的删除代码
             // onOk: async () => {
            //     const data = await reqDeleteUser(record.name)
            //     for (let i = 0; i < data.length; i++) {
            //         let data1 = data[i]
            //         data1.key = i + 1
            //     }
            //     this.setState({
            //         data: data,
            //         all:data
            //     })
            //     this.setState({
            //         delete: false
            //     })
            //     console.log('this.data', this.state.data)
            // },

             // 远程api
             onOk: async () => {
                 const result = await reqDeleteUser(String(record.id))
                 if(result.code === 1) {
                    // 删除成功
                     message.success('删除用户成功')
                     const list = await reqShowUser()
                     console.log('result',list)
                     const {data} = list
                     console.log('data', data)
                     for (let i = 0; i < data.length; i++) {
                         let data1 = data[i]
                         data1.key = i + 1
                     }
                     this.setState({
                         all: data,
                         data: data
                     })
                 } else {
                     // 删除失败
                     message.error('删除失败')
                 }

             },

            onCancel: () => {
                this.setState({
                    delete: false
                })
            }
        })
    }


    async upDate(record) {
        console.log('管理', record)
        this.setState({
            record: record,
            upDate: true,
        })
    }



    handleResize = index => (e, { size }) => {
        this.setState(({ columns }) => {
            const nextColumns = [...columns];
            nextColumns[index] = {
                ...nextColumns[index],
                width: size.width,
            };
            return { columns: nextColumns };
        });
    };



    //【3】Modal弹窗点ok
     handleOk= async ()=>{
        // let form = document.querySelector('.ant-form-horizontal')
        let username = document.querySelector('#username').value
        let password = document.querySelector('#password').value
        let role = document.querySelector('.ant-select-selection-item').innerHTML
        console.log('username',username,'password',password,role)
        let form = {}
        let roleId
         form.name = username
         form.passward = password
         if( role === '管理员') {
             roleId = '1'
         } else if ( role === '数据分析员') {
             roleId = '2'
         } else {
             roleId = '3'
         }
         form.roleId = roleId
         console.log('form', form)
        // const values = this.form.getFieldsValue()
        // console.log('this.values', values)
        this.setState({
            isShow:false}) //关闭弹窗
        // // this.form.resetFields() //清空表单方便下次使用
         //2.提交表单
        const result = await reqAddRole(form)
         if(result.code === 1) {
             //3.更新列表
             message.success('添加用户成功')
             const result = await reqShowUser()
             console.log('result',result)
             const {data} = result
             console.log('data', data)
             for (let i = 0; i < data.length; i++) {
                 let data1 = data[i]
                 data1.key = i + 1
             }
             this.setState({
                 all: data,
                 data: data
             })
         } else {
             message.error('添加用户失败')
         }
    }

    //【4】Modal弹窗点cancel
    handleCancel=()=>{
        this.setState({
            isShow:false,
            upDate: false,})
        // this.form.resetFields() //清空表单方便下次使用
    }

    search(value) {
        let all = this.state.all
        if(!value) {
            this.setState({
                data: all
            })
        } else {
            let data = this.state.data
            let arr = []
            for (let i = 0; i < data.length; i++) {
                let name = data[i].name
                if(name.indexOf(value) >= 0) {
                    arr.push(data[i])
                }
            }
            this.setState({
                data: arr
            })
        }

    }

    async componentDidMount() {
        console.log('用户列表')
        const result = await reqShowUser()
        console.log('result',result)
        const {data} = result
        console.log('data', data)
        for (let i = 0; i < data.length; i++) {
            let data1 = data[i]
            data1.key = i + 1
        }
        this.setState({
            all: data,
            data: data
        })
        // console.log('this.data', this.data)
    }

    render() {
        const columns = this.state.columns.map((col, index) => ({
            ...col,
            onHeaderCell: column => ({
                width: column.width,
                onResize: this.handleResize(index),
            }),
        }));
        const formItemLayout = {
            labelCol:{ span: 5,offset:0 },
            wrapperCol:{ span: 15,offset:0 }
        }
        const {record} = this.state
        const title1=
            <Button type='primary' onClick={()=>this.setState({isShow:true})}>创建用户</Button>
        const title2=
            <Search placeholder="请输入用户名进行搜索" style={{ width: 400}} onSearch={value => this.search(value)} enterButton />
        return (
                <Card title={title1} extra={title2}>
                    <Table bordered components={this.components} columns={columns} dataSource={this.state.data} />
                    {/*添加用户*/}
                    <Modal
                        title='添加用户'
                        visible={this.state.isShow}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        cancelText="取消"
                        okText="确定">
                        <Form

                            {...formItemLayout}>
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

                                <Select size={'large'}>
                                    <Option value='管理员'>管理员</Option>
                                    <Option value='业务员'>业务员</Option>
                                    <Option value='数据分析员'>数据分析员</Option>
                                </Select>

                            </Form.Item>
                        </Form>
                    </Modal>
                    {/*管理用户*/}
                    <Modal
                        title='管理用户'
                        visible={this.state.upDate}
                        onOk={this.upDateModal}
                        onCancel={this.handleCancel}
                        cancelText="取消"
                        okText="确定">
                        <Form {...this.formItemLayout}>
                            <Form.Item
                                label="用户名"
                                name="username"
                                rules={[{required: true, whitespace: true, message: '用户名必须输入'},
                                    {min: 4, message: '用户名至少4位'},
                                    {max: 12, message: '用户名最多12位'},
                                ]}
                            >
                                <Input size={"large"} placeholder={record.name}/>
                            </Form.Item>

                            <Form.Item
                                label="密&nbsp;&nbsp;&nbsp;&nbsp;码"
                                name="password"
                                rules={[{required: true, whitespace: true, message: '密码必须输入'},
                                    {min: 4, message: '密码至少4位'},
                                    {max: 12, message: '密码最多12位'},
                                ]}
                            >
                                <Input
                                    size={"large"}
                                    placeholder={record.passward}
                                />
                            </Form.Item>
                            <Form.Item label='角&nbsp;&nbsp;&nbsp;&nbsp;色'>

                                <Select size={'large'} placeholder={record.roleName}>
                                    <Option value='管理员'>管理员</Option>
                                    <Option value='业务员'>业务员</Option>
                                    <Option value='数据分析员'>数据分析员</Option>
                                </Select>

                            </Form.Item>
                        </Form>
                    </Modal>
                </Card>
            )
    }
}

export default class UserTable extends Component{
    constructor() {
        super();

    }

    render() {
        return <Demo />
    }
}