import React, {Component} from "react";
import {Card} from 'antd'
import ReactEcharts from 'echarts-for-react'


export default class DownarmaEcharts extends Component {

    state = {
        downArm_A: [
            {
                "time": "14:00",
                "downArm_A1": 41.38,
                "downArm_A2": 44.96,
                "downArm_A3": 52.28,
                "downArm_A4": 33.22,
                "downArm_A5": 33.75,
                "downArm_A6": 48.379999999999995,
                "downArm_A7": 42.480000000000004,
                "downArm_A8": 51.96,
                "downArm_A9": 47.8,
                "downArm_A10": 49.03,
                "downArm_A11": 48.129999999999995,
                "downArm_A12": 33.89,
                "downArm_A13": 42.83,
                "downArm_A14": 35.46,
                "downArm_A15": 52.04,
                "downArm_A16": 47.47,
                "downArm_A17": 33.4,
                "downArm_A18": 53.64,
                "downArm_A19": 45.5,
                "downArm_A20": 42.16
            },
            {
                "time": "14:15",
                "downArm_A1": 49.2,
                "downArm_A2": 40.72,
                "downArm_A3": 50.989999999999995,
                "downArm_A4": 48.72,
                "downArm_A5": 38.769999999999996,
                "downArm_A6": 37.53,
                "downArm_A7": 42.43,
                "downArm_A8": 35.12,
                "downArm_A9": 52.69,
                "downArm_A10": 50.85,
                "downArm_A11": 52.8,
                "downArm_A12": 31.36,
                "downArm_A13": 43.769999999999996,
                "downArm_A14": 40.92,
                "downArm_A15": 42.03,
                "downArm_A16": 51.39,
                "downArm_A17": 51.05,
                "downArm_A18": 30.91,
                "downArm_A19": 32.79,
                "downArm_A20": 49.730000000000004
            },
            {
                "time": "14:30",
                "downArm_A1": 40.83,
                "downArm_A2": 46.480000000000004,
                "downArm_A3": 48.92,
                "downArm_A4": 44.79,
                "downArm_A5": 50.58,
                "downArm_A6": 54.09,
                "downArm_A7": 53.53,
                "downArm_A8": 38.74,
                "downArm_A9": 33.8,
                "downArm_A10": 31.97,
                "downArm_A11": 54.47,
                "downArm_A12": 32.82,
                "downArm_A13": 47.239999999999995,
                "downArm_A14": 34.4,
                "downArm_A15": 54.34,
                "downArm_A16": 39.93,
                "downArm_A17": 33.3,
                "downArm_A18": 36.95,
                "downArm_A19": 47.43,
                "downArm_A20": 31.08
            },
            {
                "time": "14:45",
                "downArm_A1": 54.79,
                "downArm_A2": 51.28,
                "downArm_A3": 44.65,
                "downArm_A4": 38.17,
                "downArm_A5": 46.45,
                "downArm_A6": 53.84,
                "downArm_A7": 31.44,
                "downArm_A8": 47.129999999999995,
                "downArm_A9": 43.85,
                "downArm_A10": 31.58,
                "downArm_A11": 31.43,
                "downArm_A12": 51.75,
                "downArm_A13": 51.989999999999995,
                "downArm_A14": 41.51,
                "downArm_A15": 51.83,
                "downArm_A16": 47.47,
                "downArm_A17": 34.29,
                "downArm_A18": 31.28,
                "downArm_A19": 35.480000000000004,
                "downArm_A20": 49.69
            },
            {
                "time": "15:00",
                "downArm_A1": 43.730000000000004,
                "downArm_A2": 44.63,
                "downArm_A3": 36.44,
                "downArm_A4": 37.93,
                "downArm_A5": 42.41,
                "downArm_A6": 38.58,
                "downArm_A7": 49.22,
                "downArm_A8": 35.01,
                "downArm_A9": 54.56,
                "downArm_A10": 52.8,
                "downArm_A11": 42.79,
                "downArm_A12": 32.46,
                "downArm_A13": 51.18,
                "downArm_A14": 32.57,
                "downArm_A15": 33.58,
                "downArm_A16": 49.56,
                "downArm_A17": 51.22,
                "downArm_A18": 39.9,
                "downArm_A19": 52.870000000000005,
                "downArm_A20": 30.17
            },
            {
                "time": "15:15",
                "downArm_A1": 30.95,
                "downArm_A2": 32.32,
                "downArm_A3": 42.39,
                "downArm_A4": 52.2,
                "downArm_A5": 51.519999999999996,
                "downArm_A6": 48.21,
                "downArm_A7": 42.24,
                "downArm_A8": 43.29,
                "downArm_A9": 45.64,
                "downArm_A10": 40.72,
                "downArm_A11": 50.32,
                "downArm_A12": 41.3,
                "downArm_A13": 44.79,
                "downArm_A14": 52.69,
                "downArm_A15": 37.26,
                "downArm_A16": 32.32,
                "downArm_A17": 31.33,
                "downArm_A18": 34.63,
                "downArm_A19": 52.75,
                "downArm_A20": 54.96
            },
            {
                "time": "15:30",
                "downArm_A1": 39.75,
                "downArm_A2": 45.34,
                "downArm_A3": 45.01,
                "downArm_A4": 45.53,
                "downArm_A5": 48.06,
                "downArm_A6": 36.93,
                "downArm_A7": 43.26,
                "downArm_A8": 36.09,
                "downArm_A9": 35.32,
                "downArm_A10": 32.46,
                "downArm_A11": 45.53,
                "downArm_A12": 45.54,
                "downArm_A13": 31.13,
                "downArm_A14": 36.25,
                "downArm_A15": 52.760000000000005,
                "downArm_A16": 39.19,
                "downArm_A17": 41.47,
                "downArm_A18": 44.14,
                "downArm_A19": 33.6,
                "downArm_A20": 37.87
            },
            {
                "time": "15:45",
                "downArm_A1": 45.38,
                "downArm_A2": 50.519999999999996,
                "downArm_A3": 39.37,
                "downArm_A4": 52.85,
                "downArm_A5": 44.05,
                "downArm_A6": 50.54,
                "downArm_A7": 36.230000000000004,
                "downArm_A8": 53.16,
                "downArm_A9": 51.18,
                "downArm_A10": 37.96,
                "downArm_A11": 31.72,
                "downArm_A12": 32.89,
                "downArm_A13": 41.97,
                "downArm_A14": 39.33,
                "downArm_A15": 47.8,
                "downArm_A16": 48.64,
                "downArm_A17": 31.25,
                "downArm_A18": 45.65,
                "downArm_A19": 31.25,
                "downArm_A20": 48.57
            },
            {
                "time": "16:00",
                "downArm_A1": 51.81,
                "downArm_A2": 36.89,
                "downArm_A3": 44.44,
                "downArm_A4": 38.75,
                "downArm_A5": 41.59,
                "downArm_A6": 32.14,
                "downArm_A7": 43.12,
                "downArm_A8": 40.79,
                "downArm_A9": 49.31,
                "downArm_A10": 41.46,
                "downArm_A11": 49.989999999999995,
                "downArm_A12": 50.010000000000005,
                "downArm_A13": 53.739999999999995,
                "downArm_A14": 51.519999999999996,
                "downArm_A15": 37.64,
                "downArm_A16": 32.31,
                "downArm_A17": 30.83,
                "downArm_A18": 34.93,
                "downArm_A19": 54.22,
                "downArm_A20": 37.38
            },
            {
                "time": "16:15",
                "downArm_A1": 32.27,
                "downArm_A2": 50.6,
                "downArm_A3": 51.53,
                "downArm_A4": 45.07,
                "downArm_A5": 34.28,
                "downArm_A6": 31.43,
                "downArm_A7": 30.12,
                "downArm_A8": 49.21,
                "downArm_A9": 53.22,
                "downArm_A10": 31.15,
                "downArm_A11": 52.260000000000005,
                "downArm_A12": 40.53,
                "downArm_A13": 31.91,
                "downArm_A14": 51.91,
                "downArm_A15": 42.42,
                "downArm_A16": 35.05,
                "downArm_A17": 41.54,
                "downArm_A18": 45.63,
                "downArm_A19": 48.07,
                "downArm_A20": 30.4
            }
        ],
    }
    getOption = () => {

        var list = this.state.downArm_A

        var time = new Array();
        var downArm_A1 = new Array();
        var downArm_A2 = new Array();
        var downArm_A3 = new Array();
        var downArm_A4 = new Array();
        var downArm_A5 = new Array();
        var downArm_A6 = new Array();
        var downArm_A7 = new Array();
        var downArm_A8 = new Array();
        var downArm_A9 = new Array();
        var downArm_A10 = new Array();
        var downArm_A11 = new Array();
        var downArm_A12 = new Array();
        var downArm_A13 = new Array();
        var downArm_A14 = new Array();
        var downArm_A15 = new Array();
        var downArm_A16 = new Array();
        var downArm_A17 = new Array();
        var downArm_A18 = new Array();
        var downArm_A19 = new Array();
        var downArm_A20 = new Array();

        for (var i = 0; i < list.length; i++) {
            time[i] = list[i].time;
            downArm_A1[i] = list[i].downArm_A1;
            downArm_A2[i] = list[i].downArm_A2;
            downArm_A3[i] = list[i].downArm_A3;
            downArm_A4[i] = list[i].downArm_A4;
            downArm_A5[i] = list[i].downArm_A5;
            downArm_A6[i] = list[i].downArm_A6;
            downArm_A7[i] = list[i].downArm_A7;
            downArm_A8[i] = list[i].downArm_A8;
            downArm_A9[i] = list[i].downArm_A9;
            downArm_A10[i] = list[i].downArm_A10;
            downArm_A11[i] = list[i].downArm_A11;
            downArm_A12[i] = list[i].downArm_A12;
            downArm_A13[i] = list[i].downArm_A13;
            downArm_A14[i] = list[i].downArm_A14;
            downArm_A15[i] = list[i].downArm_A15;
            downArm_A16[i] = list[i].downArm_A16;
            downArm_A17[i] = list[i].downArm_A17;
            downArm_A18[i] = list[i].downArm_A18;
            downArm_A19[i] = list[i].downArm_A19;
            downArm_A20[i] = list[i].downArm_A20;

        }

        return {
            title: {
                text: '无线测温下臂A相折线图',
                left: 'left'
            },

            grid: {
                // right: '150px',
                // width: '900px',
                left: '0%'
            },

            type: 'category',

            legend: {
                type: 'scroll',
                // data: ['除湿机1','data'],
                // show: 'true',
                // padding: [5, 5, 5, 1950],
                // itemGap: 20,
                // top: '80%',
                left: 'right',
                // x: '920px',
                // y: '20px',
                orient: 'vertical',
                selectedMode: 'multiple',
                selector: [
                    {
                        type: 'all',
                        // 可以是任意你喜欢的 title
                        title: '全选'
                    },
                    {
                        type: 'none',
                        title: '反选'
                    },
                    // {
                    //     type: 'inverse',
                    //     title: '反选'
                    // },

                ],

            },
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
                name: '时间',
                nameLocation: 'center',
                nameTextStyle: {
                    lineHeight: 50,
                    fontSize: 20,
                    fontWeight: 'bold'
                }
            },

            dataZoom:[
                {
                    type: 'slider',
                    show: true,
                    xAxisIndex: [0],
                },
                {
                    type: 'inside',
                    xAxisIndex: [0],
                }
            ],


            yAxis: {
                type: 'value',
                min: 30,
                axisLabel: {
                    formatter: '{value} °C'
                }
            },

            tooltip: {
                // axisPointer: {
                // 	trigger : 'axis',
                // 	// type : 'line',
                // 	// snap : true
                // }，
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
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
                    name: '#1电容器',
                    type: 'line',
                    data: downArm_A1,
                    itemStyle: {
                        color: '#027db4'
                    },
                }, {
                    name: '海凤3731',
                    type: 'line',
                    data: downArm_A2,
                    // smooth : true,

                }, {
                    name: '#3电容器',
                    type: 'line',
                    data: downArm_A3,
                    // smooth : true,

                }, {
                    name: '#1所用变',
                    type: 'line',
                    data: downArm_A4,
                    // smooth : true,

                }, {
                    name: '35kVI段母线避雷器',
                    type: 'line',
                    data: downArm_A5,
                    // smooth : true,

                }, {
                    name: '海洪3734',
                    type: 'line',
                    data: downArm_A6,
                    // smooth : true,

                }, {
                    name: '35kVI段母线压变插件',
                    type: 'line',
                    data: downArm_A7,
                    // smooth : true,

                }, {
                    name: '#1主变35kV',
                    type: 'line',
                    data: downArm_A8,
                    // smooth : true,

                }, {
                    name: '海变3733',
                    type: 'line',
                    data: downArm_A9,
                    // smooth : true,

                }, {
                    name: '35kV母分开关',
                    type: 'line',
                    data: downArm_A10,
                    itemStyle: {
                        color: '#027db4'
                    },
                }, {
                    name: '35kV母分插件',
                    type: 'line',
                    data: downArm_A11,
                }, {
                    name: '备用3572开关',
                    type: 'line',
                    data: downArm_A12,
                }, {
                    name: '#2主变35kV开关',
                    type: 'line',
                    data: downArm_A13,
                }, {
                    name: '35kVII段母线避雷器',
                    type: 'line',
                    data: downArm_A14,
                }, {
                    name: '海牌3735开关',
                    type: 'line',
                    data: downArm_A15,
                }, {
                    name: '35kVII段母线压变插件',
                    type: 'line',
                    data: downArm_A16,
                }, {
                    name: '#2电容器开关',
                    type: 'line',
                    data: downArm_A17,
                }, {
                    name: '#2所用变开关',
                    type: 'line',
                    data: downArm_A18,
                }, {
                    name: '#2电抗器开关',
                    type: 'line',
                    data: downArm_A19,
                }, {
                    name: '海时3738开关',
                    type: 'line',
                    data: downArm_A20,
                },]
        }
    }

    render() {
        return (
            <div className='table'>
                <Card>
                    <ReactEcharts option={this.getOption()} style={{height: ((window.innerHeight - 200) * 0.6 )}}/>
                </Card>

                {/*<Card title='湿度折线图'>*/}
                {/*    <ReactEcharts option={this.getOption2()} style={{height: 300}}/>*/}
                {/*</Card>*/}
            </div>
        )
    }
}