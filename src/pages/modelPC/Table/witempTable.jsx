import React, {Component} from "react";
import ScrollBoard from "@jiaminghi/data-view-react/es/scrollBoard";
import {BorderBox1} from "@jiaminghi/data-view-react";


export default class WitempTable extends Component {

    constructor() {
        super();

        this.config = {
            header: ['设备名称','上臂A', '下臂A'],
            headerBGC: '#0D5DFF',
            headerHeight: 30,

            data: [
                ['#1电容器','11 °C', '6 °C'],
                ['海凤3731','2 °C', '16 °C'],
                ['#3电容器','4 °C', '0 °C'],
                ['#1所用变','5 °C', '6 °C'],
                ['35kVI段母线避雷器','13 °C', '3 °C'],
                ['海洪3734','19 °C', '19 °C'],
                ['35kVI段母线压变插件','13 °C', '0 °C'],
                ['#1主变35kV','17 °C', '7 °C'],
                ['海变3733','11 °C', '6 °C'],
                ['35kV母分开关','8 °C', '8 °C']
            ],
            oddRowBGC: 'transparent',
            evenRowBGC: 'transparent',
            rowNum: 5,
        }
    }

    render() {
        return (
            <div style={{width:'100%', height: '85%'}}>
                <div className="div-title">
                    无线测温
                </div>
                <div className="scroll-div">
                    <ScrollBoard config={this.config}/>
                </div>
            </div>
        )

    }
}

