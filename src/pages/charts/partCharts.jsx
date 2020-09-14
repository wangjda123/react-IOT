import React,{Component} from "react";
import VoiceEcharts from "../../components/echarts/jufang/voiceEcharts";
import DeleEcharts from "../../components/echarts/jufang/deleEcharts";

import VoiceTable from "../../components/tables/part/voiceTable";
import DeleTable from "../../components/tables/part/deleTable";

import './index.less'
/*
    局部放电路由
 */
export default class PartCharts extends Component{
    constructor(props) {
        super(props)
        this.ClickSvoice = this.ClickSvoice.bind(this)
        this.ClickDele = this.ClickDele.bind(this)
        // 添加图表判定的值
        this.state = {
            visibleSvoice: true,
            visibleDele: false,
        }
    }


    ClickDele(e) {
        this.setState({
            visibleDele: true,
            visibleSvoice: false,
        })
    }

    ClickSvoice(e) {
        this.setState({
            visibleDele: false,
            visibleSvoice: true,
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

                        <button className = 'left alight' onClick={this.ClickSvoice}>超声波</button>
                        <button className = 'left' onClick={this.ClickDele}>地电波</button>


                    </ul>

                    {this.state.visibleSvoice ? (
                        <VoiceEcharts/>
                    ) :null
                    }
                    {this.state.visibleDele ? (
                        <DeleEcharts/>
                    ) :null
                    }

                    {this.state.visibleSvoice ? (
                        <VoiceTable/>
                    ) :null
                    }
                    {this.state.visibleDele ? (
                        <DeleTable/>
                    ) :null
                    }


                </div>
            </div>
        )
    }

}