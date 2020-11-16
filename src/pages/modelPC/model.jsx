import React, { Component } from 'react';

import {BorderBox1, Decoration11, FullScreenContainer, ScrollBoard, ActiveRingChart} from '@jiaminghi/data-view-react'

import MachineTable from "./Table/machineTable";
import PartTable from './Table/partTable'
import SwitchTable from "./Table/swtichTable";
import DuanTable from "./Table/duanTable";

import DuanEcharts from "./echarts/DuanEcharts";

import Screen from "./screen/screen";

import Time from './time/time'

import './model.less'
import WitempTable from "./Table/witempTable";


/*
    模型页面路由
 */
export default class Model extends Component{

    constructor(props) {
        super(props);
        // 开关柜除湿机滚动数据
        this.state = {
            switch: true,
            part: true,
            date: new Date(),
        }

        // 告警环图数据
        this.configRing = {
            radius: '70%',
            activeRadius: '80%',
            data: [
                {
                    name: '机械特性',
                    value: 14
                },
                {
                    name: '局部放电',
                    value: 20
                },
                {
                    name: '无线测温',
                    value: 9
                },
                {
                    name: '除湿机',
                    value: 20
                },
                {
                    name: '端子箱',
                    value: 26
                }
            ],
            digitalFlopStyle: {
                fontSize: 20
            },
            showOriginValue: true,
        }
    }

    componentDidMount() {
        let timeNum = setInterval(() => {
            let table1 = this.state.switch
            let table2 = this.state.part
            this.setState({
                switch: !table1,
                part: !table2
            })
        },13000)
        setInterval(() => this.tick(),1000)
    }
    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div className={'body'}>
                <div className={'test'}>

                        <div className="div-container">

                            <div className="div1">

                                <div className="div11">
                                    {/*开关柜与端子箱除湿机数据滚动轮播*/}
                                    <BorderBox1>
                                        {this.state.switch ? <SwitchTable /> : <DuanTable />}

                                    </BorderBox1>
                                </div>

                                <div className="div12">
                                    {/*局部放电与机械特性数据滚动轮播*/}
                                    <BorderBox1>
                                        {this.state.part ? <PartTable /> : <MachineTable />}
                                    </BorderBox1>
                                </div>
                                <div className="div13">
                                    {/*局部放电数据滚动*/}
                                    <BorderBox1>
                                        <WitempTable />
                                    </BorderBox1>
                                </div>
                            </div>



                            <div className="div2">
                                <div className="div21">
                                    <Decoration11 style={{width: '70%', height: '40%'}} >海门220kV变电站设备状态监控示意图</Decoration11>
                                    <div className={'time'}>{this.state.date.toLocaleTimeString()}</div>
                                </div>
                                <div className="div22">
                                    <Screen />
                                </div>

                            </div>



                            <div className="div3">
                                <div className="div31">
                                    {/*echarts图表轮播*/}
                                    <BorderBox1>
                                        <div className="div-title">
                                            设备状态趋势
                                        </div>
                                        <DuanEcharts/>
                                    </BorderBox1>
                                </div>
                                <div className="div32">
                                    <BorderBox1>
                                        <div className="div-title">
                                            设备数量
                                        </div>
                                        <div className="scroll-div">
                                            <ActiveRingChart config={this.configRing} />
                                        </div>
                                    </BorderBox1>
                                </div>
                                <div className="div33">
                                    {/*机械特性数据滚动*/}
                                    <BorderBox1>
                                        <MachineTable />
                                        {/*<div className="div-title">*/}
                                        {/*    机械特性*/}
                                        {/*</div>*/}
                                        {/*<div className="scroll-div">*/}
                                        {/*    <ScrollBoard config={this.configMachine}/>*/}
                                        {/*</div>*/}
                                    </BorderBox1>
                                </div>
                            </div>

                        </div>




                </div>
            </div>
        )
    }

}