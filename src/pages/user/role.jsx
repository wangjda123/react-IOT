import React,{Component} from "react";
import RoleTable from "./roleTable";

import './role.less'

/*
    告警路由
 */
export default class Role extends Component{
    render() {
        return (
            <div>
                <div className={'role'}>
                    <div className={'role-header'}>
                        <div>用户组</div>

                    </div>
                    <div className={'role-list'}>
                        <RoleTable />
                    </div>
                </div>
            </div>
        )
    }

}