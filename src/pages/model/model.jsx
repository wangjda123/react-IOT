import React,{Component} from "react";
import Card from "antd/es/card";

import MachineTable from "./Table/machineTable";
import PartTable from './Table/partTable'
import SwitchTable from "./Table/swtichTable";
import DuanTable from "./Table/duanTable";

import './model.less'
/*
    模型页面路由
 */
export default class Model extends Component{

    constructor() {
        super();
        this.ClickJian = this.ClickJian.bind(this)
    }

    ClickJian (e) {
        let element = e.target
        if(element.tagName === 'BUTTON'){
            alert('点到了间隔')
        }
    }

    componentDidMount() {
        const appendHTML = (element, html) => element.insertAdjacentHTML("beforeend", html)
        let ele = document.querySelector('.button-qun')
        let html = `<button />`
        for (let i = 0; i < 26; i++) {
            appendHTML(ele, html)
        }
    }


    render() {
        return (
            <div>
                <div className={'test'}>
                    {/*头部*/}
                    <div className={'head'}>
                        <h1 className={'name'}>
                            海门变电站物联网监控系统
                        </h1>
                        <div className={'weather'}>
                            <div>MON</div>
                            <div>18°C～28°C</div>
                        </div>
                    </div>

                    {/*按钮群*/}
                    <div className={'modelBG'}>
                        <ul className={'button-qun'} onClick={this.ClickJian}>
                            {/*<button />*/}

                        </ul>
                    </div>


                    {/*设备数据*/}
                    <div className={'MachineDate'}>
                        <h2 className={'machineTittle'}>
                            设备数据
                        </h2>

                        {/*机械特性*/}
                        <div className={'machine'}>
                            <div className={'tittle'}>
                                机械特性
                            </div>
                            <MachineTable/>
                        </div>

                        <div className={'leftPart'}>
                            {/*局部放电*/}
                            <div className={'part'}>
                                <div className={'tittle'}>
                                    局部放电
                                </div>
                                <PartTable />
                            </div>

                            {/*开关柜除湿机*/}
                            <div className={'switch'}>
                                <div className={'tittle'}>
                                    开关柜除湿机
                                </div>
                                <SwitchTable />
                            </div>

                            {/*端子箱除湿机*/}
                            <div className={'duan'}>
                                <div className={'tittle'}>
                                    端子箱除湿机
                                </div>
                                <DuanTable />
                            </div>
                        </div>

                        <div className={'wiTemp'}>
                            <div className={'tittle'}>
                                无线测温
                            </div>
                            <div className={'wiTempTable'}>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}