import React, {Component} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {Button, Layout} from 'antd'

import Header from '../../components/header'
import LeftNav from '../../components/left-nav'

import memoryUtils from "../../utils/memoryUtils";

import MachineCharts from "../charts/machineCharts";
import DuanCharts from "../charts/duanCharts";
import PartCharts from "../charts/partCharts";
import SwitchCharts from "../charts/switchCharts";
import WitempCharts from "../charts/witempCharts";

import Error from "../error/error";
import ErrorSet from "../error/errorSet";

import Home from "../home/home";

import Model from "../model/model";

import Test from "../test/test";

import User from "../user/user";
import Role from "../user/role";


/*后台管理的路由组件 */

const { Footer, Sider, Content } = Layout
/*后台管理的路由组件 */
export default class Admin extends Component {
    constructor() {
        super();
        this.state ={
            user: ''
        }
    }

    componentDidMount() {
        const user = memoryUtils.user
        this.setState({
            user: user
        })
    }

    render () {
        const user = memoryUtils.user
        console.log('user',user)
        if(!user.username) {
            return <Redirect to='/login'/>
        }
        return (
            <Layout style={{height: '100%'}}>
                <Sider>
                    <LeftNav/>
                </Sider>
                <Layout>
                    <Header user = {this.state.user} />

                    <Content style = {{margin: '10px 10px 0px 10px',backgroundColor: 'white'}}>
                        <Switch>

                            <Route path = '/charts/machineCharts' component={MachineCharts} />
                            <Route path = '/charts/duanCharts' component={DuanCharts} />
                            <Route path = '/charts/partCharts' component={PartCharts} />
                            <Route path = '/charts/switchCharts' component={SwitchCharts} />
                            <Route path = '/charts/witempCharts' component={WitempCharts} />

                            <Route path = '/error/errorData' component={Error} />
                            <Route path = '/error/errorSet' component={ErrorSet} />

                            <Route path = '/model' component={Model} />
                            <Route path = '/test' component={Test} />

                            <Route path = '/user/userList' component={User} />
                            <Route path = '/user/role' component={Role} />

                            {/* 不点击就跳转 home */}
                            <Redirect to={'/model'} />
                        </Switch>

                    </Content>

                    <Footer style={{height:'2%', paddingTop: 0, textAlign: 'center', color: '#aaaaaa'}}>
                        版权所有
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        杭州昶旭电力科技有限公司  2020
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        保留一切权利</Footer>
                </Layout>
            </Layout>
        )
    }
}