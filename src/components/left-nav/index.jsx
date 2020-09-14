import React, {Component} from 'react'
import { Menu, Button } from 'antd';
import {
    LineChartOutlined,
    TeamOutlined,
    DesktopOutlined,
    EyeOutlined,
    AlertOutlined
} from '@ant-design/icons';

import menuList from '../../config/menuConfig'

import './index.less'

import {Link, withRouter} from "react-router-dom";




const { SubMenu } = Menu;
/*左侧导航组件 */
class LeftNav extends Component {


    getMenuNodes = (menuList) => {

        const path = this.props.location.pathname

        return menuList.map(item => {
            {/*
            <Menu.Item key="/model" icon={<EyeOutlined />}>
                <Link to={'/model'}>
                    海门模型
                </Link>

            </Menu.Item>

            <SubMenu key="/charts" icon={<LineChartOutlined />} title="数据查询">
                <Menu.Item key="/machineCharts">
                    <Link to={'/charts/machineCharts'}>
                        机械特性
                    </Link>
                </Menu.Item>
            </SubMenu>
            */}
            if (!item.children) {
                return (
                    <Menu.Item key={item.key} icon={item.icon}>
                        <Link to={item.key}>
                            {item.title}
                        </Link>

                    </Menu.Item>
                )
            } else {

                const cItem = item.children.find(cItem => cItem.key === path)
                if(cItem) {
                    this.openKey = item.key
                }

                return (
                    <SubMenu key={item.key} icon={item.icon} title={item.title}>
                        {/*递归调用来生成子元素*/}
                        { this.getMenuNodes(item.children) }
                    </SubMenu>
                )
            }
        })
    }


    componentWillMount() {
        this.menunNodes =  this.getMenuNodes(menuList)

    }

    render() {
        const path = this.props.location.pathname

        const openKey = this.openKey

        return (
            <div className="left-nav">
                <header className='left-nav-header'>
                    <div className='logo'/>
                </header>

                <Menu
                    // 默认打开的具体菜单项
                    selectedKeys={[path]}

                    // 默认打开的子菜单栏
                    defaultOpenKeys={[openKey]}
                    mode="inline"
                    theme="dark"
                    // 导航栏压缩功能
                    // inlineCollapsed={this.state.collapsed}
                >
                    {
                        this.menunNodes
                    }
                    {/*
                    <Menu.Item key="/model" icon={<EyeOutlined />}>
                        <Link to={'/model'}>
                            海门模型
                        </Link>

                    </Menu.Item>

                    <SubMenu key="/charts" icon={<LineChartOutlined />} title="数据查询">
                        <Menu.Item key="/machineCharts">
                            <Link to={'/charts/machineCharts'}>
                                机械特性
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/partCharts">
                            <Link to={'/charts/partCharts'}>
                                局部放电
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/wiTempCharts">
                            <Link to={'/charts/wiTempCharts'}>
                                无线测温
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/switchCharts">
                            <Link to={'/charts/switchCharts'}>
                                开关柜除湿机
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/duanCharts">
                            <Link to={'/charts/duanCharts'}>
                                端子箱除湿机
                            </Link>
                        </Menu.Item>
                    </SubMenu>

                    <SubMenu key='/error' icon={<AlertOutlined />} title="告警">
                        <Menu.Item key="/errorData">
                            <Link to={'/error/errorData'}>
                                告警信息
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/errorSet">
                            <Link to={'/error/errorSet'}>
                                告警设置
                            </Link>
                        </Menu.Item>
                    </SubMenu>


                    <Menu.Item key="/test" icon={<DesktopOutlined />}>
                        <Link to={'/test'}>
                            采集测试
                        </Link>
                    </Menu.Item>

                    <SubMenu key='/user' icon={<TeamOutlined />} title="用户管理">
                        <Menu.Item key="/userList">
                            <Link to={'/user/userList'}>
                                用户列表
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/role">
                            <Link to={'/user/role'}>
                                用户组
                            </Link></Menu.Item>
                    </SubMenu>
                    */}


                </Menu>
            </div>
        )
    }
}

export default withRouter(LeftNav)