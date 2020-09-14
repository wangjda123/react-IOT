import React,{Component} from "react";
import {Button, message} from "antd";

import './errorSet.less'
import SetValue from "./SetValue";


/*
    告警设置路由
 */
export default class ErrorSet extends Component{

    constructor() {
        super();
    }

    machineClick () {
        console.log("提交了机械特性")
        message.success('设置成功')
        // alert("设置成功")
    }

    witempClick () {
        console.log("提交了无线测温")
        message.success('设置成功')
    }

    partClick () {
        console.log("提交了局部放电")
        message.success('设置成功')
    }

    switchClick () {
        console.log("提交了开关柜除湿机")
        message.success('设置成功')
    }

    duanClick () {
        console.log("提交了端子箱除湿机")
        message.success('设置成功')
    }

    render() {
        return (
            <div className="page-errorSet">
                <div className={'errorSet-header'}>
                    <div>告警设置</div>

                </div>
                <div className={'errorSet-content'}>
                    <div className="set-machine com-err">
                        <div className="com-title">机械特性</div>

                        <div className="right-solid">
                            <SetValue name="合闸电流" unit="A" />
                            <SetValue name="分闸电流" unit="A" />
                            <SetValue name="储能电流" unit="A" />
                            <SetValue name="合闸电压" unit="V" />
                            <SetValue name="分闸电压" unit="V" />
                            <SetValue name="储能电压" unit="V" />
                        </div>

                        <Button className="com-button" type="primary" onClick={this.machineClick.bind(this)}>确定</Button>


                    </div>

                    {/*无线测温*/}
                    <div className="set-witemp com-err witemp-left">
                        <div className="com-title">无线测温</div>

                        <div>
                            <SetValue name="上臂A相" unit="°C" />
                            <SetValue name="上臂B相" unit="°C" />
                            <SetValue name="上臂C相" unit="°C" />
                            <SetValue name="下臂A相" unit="°C" />
                            <SetValue name="下臂B相" unit="°C" />
                            <SetValue name="下臂C相" unit="°C" />
                        </div>

                    </div>
                    <div className="set-witemp com-err">
                        <div className="com-title witemp-right">无线测温</div>

                        <div className="right-solid">
                            <SetValue name="母排A相" unit="°C" />
                            <SetValue name="母排B相" unit="°C" />
                            <SetValue name="母排C相" unit="°C" />
                            <SetValue name="电缆A相" unit="°C" />
                            <SetValue name="电缆B相" unit="°C" />
                            <SetValue name="电缆C相" unit="°C" />
                        </div>

                        <Button className="com-button" type="primary" onClick={this.witempClick.bind(this)}>确定</Button>


                    </div>

                    {/*局部放电*/}
                    <div className="set-part com-err" >
                        <div className="com-title">局部放电</div>

                        <div className="right-solid">
                            <SetValue name="超声波" unit="dBmV" />
                            <SetValue name="地电波" unit="dBmV" />
                        </div>

                        <Button className="com-button" type="primary" onClick={this.partClick.bind(this)}>确定</Button>

                    </div>

                    {/*开关柜除湿机*/}
                    <div className="set-switch com-err">
                        <div className="com-title">开关柜除湿机</div>

                        <div className="right-solid">
                            <SetValue name="温度" unit="°C" />
                            <SetValue name="湿度" unit="%rh" />
                        </div>

                        <Button className="com-button" type="primary" onClick={this.switchClick.bind(this)}>确定</Button>
                    </div>

                    {/*端子箱除湿机*/}
                    <div className="set-duan com-err">
                        <div className="com-title">端子箱除湿机</div>

                        <div className="duan-div">
                            <SetValue name="温度" unit="°C" />
                            <SetValue name="湿度" unit="%rh" />
                        </div>

                        <Button className="com-button" type="primary" onClick={this.duanClick.bind(this)}>确定</Button>
                    </div>
                </div>
            </div>
        )
    }

}