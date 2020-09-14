import React,{Component} from "react";
import Button from "antd/es/button";

import UserTable from "./userTable";
import './user.less'
/*
    用户路由
 */
export default class User extends Component{
    render() {
        return (
            <div className={'user'}>
                <div className={'user-header'}>
                    <div>用户列表</div>

                </div>
                <div className={'user-list'}>
                    <UserTable />
                </div>
            </div>
        )
    }

}