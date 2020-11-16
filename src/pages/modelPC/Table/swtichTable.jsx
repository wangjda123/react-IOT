import React, {Component} from "react";
import ScrollBoard from "@jiaminghi/data-view-react/es/scrollBoard";
import {BorderBox1} from "@jiaminghi/data-view-react";


export default class SwitchTable extends Component {

    constructor() {
        super();

        this.config = {
            header: ['设备名称','温度', '湿度'],
            headerBGC: '#0D5DFF',
            headerHeight: 30,

            data: [
                ['#1电容器','26.9 °C', '65.8 %'],
                ['海凤3731','27.8 °C', '63.5 %'],
                ['#3电容器','24.8 °C', '64.1 %'],
                ['#1所用变','29.3 °C', '65.3 %'],
                ['35kVI段母线避雷器','29.4 °C', '63.5 %'],
                ['海洪3734','27.3 °C', '65.3 %'],
                ['35kVI段母线压变插件','23.5 °C', '66.6 %'],
                ['#1主变35kV','24.3 °C', '63.2 %'],
                ['海变3733','24.3 °C', '64.1 %'],
                ['35kV母分开关','21.3 °C', '64.7 %']
            ],
            oddRowBGC: 'transparent',
            evenRowBGC: 'transparent',
            rowNum: 5,
        }
    }

    render() {
        return (
            <div style={{width: '100%', height: '100%'}}>
                <div className="div-title">
                    开关柜除湿机
                </div>
                <div className="scroll-div">
                    <ScrollBoard config={this.config}/>
                </div>
            </div>
        )

    }
}

