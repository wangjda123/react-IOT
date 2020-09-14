import React,{Component} from "react";
import HezhaEcharts from "../../components/echarts/machine/hezhaEcharts";
import FenzhaEcharts from "../../components/echarts/machine/fenzhaEcharts";
import ChunengEcharts from "../../components/echarts/machine/chunengEcharts";

import ChunengTable from "../../components/tables/machine/chunengTable";
import FenzhaTable from "../../components/tables/machine/fenzhaTable";
import HezhaTable from "../../components/tables/machine/hezhaTable";

import './index.less'
/*
    机械特性路由
 */
export default class MachineCharts extends Component{
    constructor(props) {
        super(props)
        this.ClickHezha = this.ClickHezha.bind(this)
        this.ClickFenzha = this.ClickFenzha.bind(this)
        this.ClickChuneng = this.ClickChuneng.bind(this)
        // 添加图表判定的值
        this.state = {
            visibleFenzha: false,
            visibleChuneng: false,
            visibleHezha: true,
        }
    }


    ClickHezha(e) {
        this.setState({
            visibleFenzha: false,
            visibleChuneng: false,
            visibleHezha: true,
        })
    }

    ClickFenzha(e) {
        this.setState({
            visibleFenzha: true,
            visibleChuneng: false,
            visibleHezha: false,
        })
    }

    ClickChuneng(e) {
        this.setState({
            visibleFenzha: false,
            visibleChuneng: true,
            visibleHezha: false,
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

                        <button className = 'left alight' onClick={this.ClickHezha}>合闸电流</button>
                        <button className = 'left' onClick={this.ClickFenzha}>分闸电流</button>
                        <button className = 'left' onClick={this.ClickChuneng}>储能电流</button>


                    </ul>

                    {this.state.visibleHezha ? (
                        <HezhaEcharts/>
                    ) :null
                    }

                    {this.state.visibleFenzha ? (
                        <FenzhaEcharts/>
                    ) :null
                    }

                    {this.state.visibleChuneng ? (
                        <ChunengEcharts/>
                    ) :null
                    }

                    {this.state.visibleHezha ? (
                        <HezhaTable/>
                    ) :null
                    }

                    {this.state.visibleFenzha ? (
                        <FenzhaTable/>
                    ) :null
                    }

                    {this.state.visibleChuneng ? (
                        <ChunengTable/>
                    ) :null
                    }


                </div>
            </div>
        )
    }

}