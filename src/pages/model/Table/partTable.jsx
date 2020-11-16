import React, {Component} from "react";
import ScrollBoard from "@jiaminghi/data-view-react/es/scrollBoard";
import {BorderBox1} from "@jiaminghi/data-view-react";


export default class PartTable extends Component {

    constructor() {
        super();

        this.config = {
            header: ['设备名称','超声波', '地电波'],
            headerBGC: '#0D5DFF',
            headerHeight: 30,

            data: [
                ['#1电容器','11 dBmV', '6 dBmV'],
                ['海凤3731','2 dBmV', '16 dBmV'],
                ['#3电容器','4 dBmV', '0 dBmV'],
                ['#1所用变','5 dBmV', '6 dBmV'],
                ['35kVI段母线避雷器','13 dBmV', '3 dBmV'],
                ['海洪3734','19 dBmV', '19 dBmV'],
                ['35kVI段母线压变插件','13 dBmV', '0 dBmV'],
                ['#1主变35kV','17 dBmV', '7 dBmV'],
                ['海变3733','11 dBmV', '6 dBmV'],
                ['35kV母分开关','8 dBmV', '8 dBmV']
            ],
            oddRowBGC: 'transparent',
            evenRowBGC: 'transparent',
            rowNum: 5,
        }
    }

    render() {
        return (
            <div style={{width:'100%', height: '100%'}}>
                <div className="div-title">
                    局部放电
                </div>
                <div className="scroll-div">
                    <ScrollBoard config={this.config}/>
                </div>
            </div>
        )

    }
}

