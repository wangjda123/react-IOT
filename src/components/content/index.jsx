import React, {Component} from "react";
import TempEcharts from "../echarts/tempEcharts";
import HumEcharts from "../echarts/humEcharts";

import './index.less'

export default class Content extends Component {
    constructor(props) {
        super(props)
        this.ClickHum = this.ClickHum.bind(this)
        this.ClickTemp = this.ClickTemp.bind(this)
        // 添加图表判定的值
        this.state = {
            visibleTemp:  true,
            visibleHum: false,
            visibleSwitch: true,
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

        if (element.classList.contains('right') ) {
            // e.preventDefault()
            let es = document.querySelectorAll('.right')
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
            <div className='content'>
                <ul className = 'contentUl' onClick = {this.ClickStyle}>

                    {this.state.visibleSwitch ? (
                        <button className = 'left alight' onClick={this.ClickTemp}>温度</button>
                    ) : null}
                    {this.state.visibleSwitch ? (
                        <button className = 'left' onClick={this.ClickHum}>湿度</button>
                    ) : null}

                </ul>

                {this.state.visibleTemp ? (
                    <TempEcharts className='tempTable' />
                    ) : null}
                {this.state.visibleHum ? (
                    <HumEcharts className = 'hunTable' />
                ) : null}




            </div>
        )
    }
}