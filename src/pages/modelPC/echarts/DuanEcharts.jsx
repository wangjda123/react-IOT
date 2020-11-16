import React, {Component} from "react";
import {Card} from 'antd'
import ReactEcharts from 'echarts-for-react'


export default class DuanEcharts extends Component {

    state = {
        humidity: [
            {'time': '10:00', 'hum1': '27.2', 'hum2': '65.3'},
            {'time': '10:15', 'hum1': '23.6', 'hum2': '61.9'},
            {'time': '10:30', 'hum1': '25.9', 'hum2': '63.2'},
            {'time': '10:45', 'hum1': '22.7', 'hum2': '66.3'},
            {'time': '11:00', 'hum1': '28.6', 'hum2': '68.9'},
            {'time': '11:15', 'hum1': '24.8', 'hum2': '65.1'},
            {'time': '11:30', 'hum1': '28.6', 'hum2': '65.6'},
            {'time': '11:45', 'hum1': '26.7', 'hum2': '62.7'},
            {'time': '12:00', 'hum1': '23.5', 'hum2': '64.9'},
        ],
    }
    getOption = () => {
        var list = this.state.humidity

        var time = new Array();
        var hum1 = new Array();
        var hum2 = new Array();

        for (var i = 0; i < list.length; i++) {
            time[i] = list[i].time;
            hum1[i] = list[i].hum1;
            hum2[i] = list[i].hum2;
        }

        return {
            title: {
                text: '端子箱除湿机温湿度图',
                left: 'left',
                textStyle: {
                    // color: '#fff'
                }
            },

            grid: {
                // right: '150px',
                // width: '900px',
                left: '0%',
                right: '0%',
                bottom:'10%',

            },

            type: 'category',


            // legend: {
            // 	type: 'plain',
            // 	data: [{
            // 		name: '温度'
            // 	}, {
            // 		name: '湿度'
            // 	}]
            // },

            xAxis: {

                data: time,
                // name: '时间',
                nameLocation: 'center',
                nameTextStyle: {
                    lineHeight: 50,
                    fontSize: 20,
                    fontWeight: 'bold',
                    // color: '#000000',
                },
                axisLine: {
                  lineStyle: {
                      // color: '#fff'
                  }
                },
            },




            yAxis: [{
                type: 'value',
                axisLabel: {
                    show: true,
                    formatter: '{value} °C',
                },
                axisLine: {
                    lineStyle: {
                        // color: '#fff'
                    }
                },
            },
                // {
                //     type: 'value',
                //     axisLabel: {
                //         show: true,
                //         formatter: '{value} %',
                //     }
                // },
            ],

            tooltip: {
                // axisPointer: {
                // 	trigger : 'axis',
                // 	// type : 'line',
                // 	// snap : true
                // }，
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        // color: '#000000',
                        // backgroundColor: 'rgba(255,255,255,0.5)'
                    },
                }
            },

            //visualMap: {//区间内控制显示颜色
            //             show: false,
            //             dimension: 1,
            //             pieces: [{gte: 7, lte: 28, color: 'pink'}],
            //             outOfRange: {
            //                 color: 'black'
            //             }
            //         },


            series: [
                {
                    name: '温度',
                    type: 'line',
                    data: hum1,


                }, {
                    name: '湿度',
                    type: 'line',
                    // yAxisIndex: 1,
                    data: hum2,
                    // smooth : true,

                    itemStyle: {
                      // color: '#BCEE68',
                    },

                    // lineStyle: {
                    //     color: '#FFFF00',
                    // },
                }]
        }
    }

    render() {
        return (
            <div className='table'>
                {/*<Card>*/}
                    <ReactEcharts option={this.getOption()} style={{height: '350px'}}/>
                {/*</Card>*/}

            </div>
        )
    }
}