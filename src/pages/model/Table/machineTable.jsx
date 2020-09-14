import React, {Component} from "react";
import ScrollBoard from "@jiaminghi/data-view-react/es/scrollBoard";


export default class MachineTable extends Component {

    constructor() {
        super();

        this.config = {
            header: ['设备名称','储能电流', '分闸电流', '合闸电流'],
            headerBGC: '#041D1E',
            headerHeight: 30,
            data: [
                ['#1电容器','3.89 A', '1.95 A', '0.3 A'],
                ['海凤3731','1.96 A', '4.5 A', '2.11 A'],
                ['#3电容器','1.39 A', '4.84 A', '0.22 A'],
                ['#1所用变','3.38 A', '2.15 A', '2.19 A'],
                ['35kVI段母线避雷器','1.01 A', '0.74 A', '3.3 A'],
                ['海洪3734','4.84 A', '2.87 A', '1.57 A'],
                ['35kVI段母线压变插件','2.12 A', '2.58 A', '0.41 A'],
                ['#1主变35kV','2.35 A', '0.01 A', '1.85 A'],
                ['海变3733','4.86 A', '2.99 A', '4.46 A'],
                ['35kV母分开关','3 A', '0.51 A', '2.41 A']
            ],
            oddRowBGC: 'transparent',
            evenRowBGC: 'transparent',
            rowNum: 4,
        }
    }

    render() {
        return (
            <ScrollBoard config={this.config} style={{width: '100%', height: '180px'}} />
        )

    }
}

