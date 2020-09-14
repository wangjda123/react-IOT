import React,{Component} from "react";
import TempEcharts from "../../components/echarts/tempEcharts";
import HumEcharts from "../../components/echarts/humEcharts";

import SwitchHumTable from "../../components/tables/switch/switchHumTable";
import SwitchTempTable from "../../components/tables/switch/switchTempTable";

import './index.less'


/*
    开关柜路由
 */
export default class SwitchCharts extends Component{
    constructor(props) {
        super(props)
        this.ClickHum = this.ClickHum.bind(this)
        this.ClickTemp = this.ClickTemp.bind(this)
        // 添加图表判定的值
        this.state = {
            visibleTemp:  true,
            visibleHum: false,
        }
    }


    ClickHum(e) {
        e.preventDefault()
        this.setState({
            visibleTemp:  false,
            visibleHum: true,
        })
    }
    ClickTemp(e) {
        e.preventDefault()
        this.setState({
            visibleTemp:  true,
            visibleHum: false,
        })
    }



    ClickStyle(e) {
        let element = e.target

        if (element.classList.contains('left') ) {
            // e.preventDefault()
            let es = document.querySelectorAll('.left')
            for (let i = 0; i < es.length; i++) {
                let e = es[i]
                e.classList.remove('alight')
            }
            // console.log('classList', e.classList)
            // console.log('element',element)
            element.classList.add('alight')
        }
        // e.classList.add('alight')
    }

    render() {
        return (
            <div>
                <div className='content'>
                    <ul className = 'contentUl' onClick = {this.ClickStyle}>

                        <button className = 'left alight' onClick={this.ClickTemp}>温度</button>

                        <button className = 'left' onClick={this.ClickHum}>湿度</button>

                    </ul>

                    {this.state.visibleTemp ? (
                        <TempEcharts className='tempTable' />
                    ) : null}
                    {this.state.visibleHum ? (
                        <HumEcharts className = 'hunTable' />
                    ) : null}


                    {this.state.visibleTemp ? (
                        <SwitchTempTable />
                    ) : null}
                    {this.state.visibleHum ? (
                        <SwitchHumTable />
                    ) : null}



                </div>
            </div>
        )
    }

}