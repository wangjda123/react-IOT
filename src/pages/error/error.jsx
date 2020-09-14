import React,{Component} from "react";

import ErrorTable from "./errorTable";
import ErrorDataTable from "./errorDataTable";
import './error.less'
/*
    告警路由
 */
export default class Error extends Component{
    render() {
        return (
            <div className="page-error">
                <div className={'error-header'}>
                    <div>告警信息</div>

                </div>
                <div className={'error-content'}>
                    <ErrorDataTable />
                </div>
            </div>
        )
    }

}