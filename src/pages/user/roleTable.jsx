import React,{Component} from "react";
import {
    Table, Button, Card,
    Modal, message, Form,
    Row, Col, Checkbox,
    Tree
    } from 'antd';
import { Resizable } from 'react-resizable';

import menuList from "../../config/menuConfig";

import {reqShowUser, reqDeleteUser, reqAddRole} from "../../api";

import './userTable.less'
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
        this.update = this.update.bind(this)
        this.formItemLayout = {
            labelCol:{ span: 5,offset:0 },
            wrapperCol:{ span: 15,offset:0 }
        }
        this.state = {

            treeData: [
                {
                    title: '权限配置',
                    key: 'all',
                    children: menuList,
                }
            ],

            columns: [
                {
                    title: '用户组名称',
                    dataIndex: 'name',
                    width: 350,
                },
                {
                    title: '用户数量',
                    dataIndex: 'number',
                    width: 350,
                },

                {
                    title: '操作',
                    key: 'action',

                    render:

                        (text, record, index) =>

                        <div>
                            <Button style={{float:"left"}} onClick={this.update.bind(this, record)}>
                                配置权限
                            </Button>
                            <Modal
                                title='配置权限'
                                visible={this.state.isShow}
                                onOk={this.handleOk.bind(this)}
                                onCancel={this.handleCancel.bind(this)}
                                cancelText="取消"
                                okText="确定">
                                <Tree
                                    checkable
                                    defaultExpandAll
                                    treeData={this.state.treeData}
                                />
                            </Modal>
                        </div>


                },
            ],
            data: [],
            isShow: false,
        };

        this.components = {
            header: {
                cell: ResizableTitle,
            },
        };
    }

    // 配置权限
    async update(record,text) {
        console.log('record',record.name, record,'text', text)
        this.setState({
            isShow: true
        })
    }

    handleOk () {
        console.log('ok')
        this.setState({isShow:false,})
    }

    handleCancel () {
        console.log('cancel')
        this.setState({isShow:false,})
    }


    async componentWillMount() {
        const userList = await reqShowUser()
        const {data} = userList
        // console.log('data1', data)
            let num0 = 0
            let num1 = 0
            let num2 = 0
            for (let i = 0; i < data.length; i++) {
                let data1 = data[i]
                // console.log('roleName', data1.roleName, data1.roleName === '业务员')
                data1.key = i + 1
                switch (data1.roleName) {
                    case "管理员" :
                        num0 += 1;
                        break;
                    case "业务员" :
                        num1 += 1;
                        // console.log('num1', num1)
                        break;
                    case "数据分析员" :
                        num2 += 1;
                        break;

                }
        }
        let result = [
                    {'name': '管理员','number': num0, key: 0},
                    {'name': '数据分析员','number': num2, key: 1},
                    {'name': '业务员','number': num1, key: 2},
                    ]
        console.log('result', result)
        this.setState({
            data: result
        })
        // console.log('this.data', this.data)
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





    render() {
        console.log('menuList', menuList)
        const columns = this.state.columns.map((col, index) => ({
            ...col,
            onHeaderCell: column => ({
                width: column.width,
                onResize: this.handleResize(index),
            }),
        }));
        const title2=
            <Search placeholder="请输入用户名进行搜索" style={{ width: 400}} onSearch={value => console.log(value)} enterButton />
        return (
                <Card extra={title2}>
                    <Table bordered components={this.components} columns={columns} dataSource={this.state.data} />


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