import React,{Component} from "react";
import DuantempEcharts from "../../components/echarts/duan/duantempEcharts";
import DuanhumEcharts from "../../components/echarts/duan/duanhumEcharts";

import DuanHumTable from "../../components/tables/duan/duanHumTable";
import DuanTempTable from "../../components/tables/duan/duanTempTable";
import './index.less'

/*
    端子箱路由
 */
export default class DuanCharts extends Component{
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
                        <DuantempEcharts className='tempTable' />
                    ) : null}
                    {this.state.visibleHum ? (
                        <DuanhumEcharts className = 'hunTable' />
                    ) : null}

                    {this.state.visibleTemp ? (
                        <DuanTempTable />
                    ) : null}
                    {this.state.visibleHum ? (
                        <DuanHumTable />
                    ) : null}



                </div>
            </div>
        )
    }

}