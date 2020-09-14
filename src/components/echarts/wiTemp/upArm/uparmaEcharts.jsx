import React, {Component} from "react";
import {Card} from 'antd'
import ReactEcharts from 'echarts-for-react'


export default class UparmaEcharts extends Component {

    state = {
        upArm_A: [
            {
                "time": "14:00",
                "upArm_A1": 40.83,
                "upArm_A2": 31.47,
                "upArm_A3": 32.14,
                "upArm_A4": 42.33,
                "upArm_A5": 43.980000000000004,
                "upArm_A6": 48.17,
                "upArm_A7": 47.47,
                "upArm_A8": 41.81,
                "upArm_A9": 33.43,
                "upArm_A10": 49.54,
                "upArm_A11": 30.44,
                "upArm_A12": 52.41,
                "upArm_A13": 45.269999999999996,
                "upArm_A14": 30.89,
                "upArm_A15": 42.56,
                "upArm_A16": 51.04,
                "upArm_A17": 51.4,
                "upArm_A18": 39.480000000000004,
                "upArm_A19": 49.7,
                "upArm_A20": 52.1
            },
            {
                "time": "14:15",
                "upArm_A1": 46.510000000000005,
                "upArm_A2": 37.82,
                "upArm_A3": 47.269999999999996,
                "upArm_A4": 31.84,
                "upArm_A5": 42.769999999999996,
                "upArm_A6": 46.56,
                "upArm_A7": 50.6,
                "upArm_A8": 41.3,
                "upArm_A9": 43.730000000000004,
                "upArm_A10": 40.64,
                "upArm_A11": 30.13,
                "upArm_A12": 51.35,
                "upArm_A13": 31.78,
                "upArm_A14": 54.379999999999995,
                "upArm_A15": 40.89,
                "upArm_A16": 44.13,
                "upArm_A17": 47.43,
                "upArm_A18": 43.85,
                "upArm_A19": 46.21,
                "upArm_A20": 41.45
            },
            {
                "time": "14:30",
                "upArm_A1": 36.81,
                "upArm_A2": 47.19,
                "upArm_A3": 30.69,
                "upArm_A4": 49.53,
                "upArm_A5": 51.9,
                "upArm_A6": 32.58,
                "upArm_A7": 42.99,
                "upArm_A8": 37.41,
                "upArm_A9": 32.22,
                "upArm_A10": 54.4,
                "upArm_A11": 43.85,
                "upArm_A12": 51.3,
                "upArm_A13": 31.68,
                "upArm_A14": 32.34,
                "upArm_A15": 42.05,
                "upArm_A16": 49.989999999999995,
                "upArm_A17": 43.47,
                "upArm_A18": 42.269999999999996,
                "upArm_A19": 41.95,
                "upArm_A20": 54.47
            },
            {
                "time": "14:45",
                "upArm_A1": 30.69,
                "upArm_A2": 50.93,
                "upArm_A3": 39.78,
                "upArm_A4": 54.57,
                "upArm_A5": 44.37,
                "upArm_A6": 50.08,
                "upArm_A7": 37.76,
                "upArm_A8": 51.84,
                "upArm_A9": 47.82,
                "upArm_A10": 34.67,
                "upArm_A11": 44,
                "upArm_A12": 37.66,
                "upArm_A13": 45.769999999999996,
                "upArm_A14": 37.75,
                "upArm_A15": 54.08,
                "upArm_A16": 53.53,
                "upArm_A17": 36.6,
                "upArm_A18": 41.5,
                "upArm_A19": 34.05,
                "upArm_A20": 53.39
            },
            {
                "time": "15:00",
                "upArm_A1": 49.05,
                "upArm_A2": 51.57,
                "upArm_A3": 50.03,
                "upArm_A4": 32.07,
                "upArm_A5": 37.93,
                "upArm_A6": 45.13,
                "upArm_A7": 42.75,
                "upArm_A8": 34.85,
                "upArm_A9": 50.41,
                "upArm_A10": 30.11,
                "upArm_A11": 30.92,
                "upArm_A12": 46.370000000000005,
                "upArm_A13": 38.8,
                "upArm_A14": 49.32,
                "upArm_A15": 49.34,
                "upArm_A16": 47.53,
                "upArm_A17": 45.99,
                "upArm_A18": 31.31,
                "upArm_A19": 43.62,
                "upArm_A20": 45.980000000000004
            },
            {
                "time": "15:15",
                "upArm_A1": 52.08,
                "upArm_A2": 37.88,
                "upArm_A3": 36.13,
                "upArm_A4": 44.06,
                "upArm_A5": 41.05,
                "upArm_A6": 49.489999999999995,
                "upArm_A7": 42.75,
                "upArm_A8": 38.78,
                "upArm_A9": 53.989999999999995,
                "upArm_A10": 53.92,
                "upArm_A11": 43.96,
                "upArm_A12": 50.44,
                "upArm_A13": 39.29,
                "upArm_A14": 30.2,
                "upArm_A15": 48.129999999999995,
                "upArm_A16": 34.04,
                "upArm_A17": 49.85,
                "upArm_A18": 36.83,
                "upArm_A19": 38.57,
                "upArm_A20": 44.96
            },
            {
                "time": "15:30",
                "upArm_A1": 53.72,
                "upArm_A2": 40.69,
                "upArm_A3": 35.35,
                "upArm_A4": 42.01,
                "upArm_A5": 48.4,
                "upArm_A6": 52.21,
                "upArm_A7": 37.32,
                "upArm_A8": 54.89,
                "upArm_A9": 43.61,
                "upArm_A10": 41.62,
                "upArm_A11": 37.06,
                "upArm_A12": 48.29,
                "upArm_A13": 48.57,
                "upArm_A14": 46.17,
                "upArm_A15": 38.68,
                "upArm_A16": 51.980000000000004,
                "upArm_A17": 50.64,
                "upArm_A18": 47.44,
                "upArm_A19": 49.19,
                "upArm_A20": 46.44
            },
            {
                "time": "15:45",
                "upArm_A1": 34.21,
                "upArm_A2": 42.3,
                "upArm_A3": 30.82,
                "upArm_A4": 37.43,
                "upArm_A5": 36.78,
                "upArm_A6": 44.35,
                "upArm_A7": 50.47,
                "upArm_A8": 50.85,
                "upArm_A9": 31.03,
                "upArm_A10": 34.59,
                "upArm_A11": 48.56,
                "upArm_A12": 34.3,
                "upArm_A13": 32.95,
                "upArm_A14": 53.66,
                "upArm_A15": 43.15,
                "upArm_A16": 36.65,
                "upArm_A17": 34.06,
                "upArm_A18": 54.18,
                "upArm_A19": 37.519999999999996,
                "upArm_A20": 37.65
            },
            {
                "time": "16:00",
                "upArm_A1": 51.66,
                "upArm_A2": 44.64,
                "upArm_A3": 31.63,
                "upArm_A4": 37.12,
                "upArm_A5": 49.47,
                "upArm_A6": 34.7,
                "upArm_A7": 35.41,
                "upArm_A8": 38.24,
                "upArm_A9": 46.7,
                "upArm_A10": 36.47,
                "upArm_A11": 33.67,
                "upArm_A12": 43.25,
                "upArm_A13": 41.14,
                "upArm_A14": 50.43,
                "upArm_A15": 35.49,
                "upArm_A16": 40.3,
                "upArm_A17": 33.55,
                "upArm_A18": 48.41,
                "upArm_A19": 35.32,
                "upArm_A20": 40.79
            },
            {
                "time": "16:15",
                "upArm_A1": 53.09,
                "upArm_A2": 36.39,
                "upArm_A3": 43.41,
                "upArm_A4": 47.480000000000004,
                "upArm_A5": 34.230000000000004,
                "upArm_A6": 42.11,
                "upArm_A7": 50.09,
                "upArm_A8": 37,
                "upArm_A9": 48.91,
                "upArm_A10": 43.230000000000004,
                "upArm_A11": 45.31,
                "upArm_A12": 32.19,
                "upArm_A13": 41.09,
                "upArm_A14": 43.54,
                "upArm_A15": 38.26,
                "upArm_A16": 31.36,
                "upArm_A17": 31.68,
                "upArm_A18": 44.84,
                "upArm_A19": 41.99,
                "upArm_A20": 47.84
            }
        ],
    }
    getOption = () => {

        var list = this.state.upArm_A

        var time = new Array();
        var upArm_A1 = new Array();
        var upArm_A2 = new Array();
        var upArm_A3 = new Array();
        var upArm_A4 = new Array();
        var upArm_A5 = new Array();
        var upArm_A6 = new Array();
        var upArm_A7 = new Array();
        var upArm_A8 = new Array();
        var upArm_A9 = new Array();
        var upArm_A10 = new Array();
        var upArm_A11 = new Array();
        var upArm_A12 = new Array();
        var upArm_A13 = new Array();
        var upArm_A14 = new Array();
        var upArm_A15 = new Array();
        var upArm_A16 = new Array();
        var upArm_A17 = new Array();
        var upArm_A18 = new Array();
        var upArm_A19 = new Array();
        var upArm_A20 = new Array();

        for (var i = 0; i < list.length; i++) {
            time[i] = list[i].time;
            upArm_A1[i] = list[i].upArm_A1;
            upArm_A2[i] = list[i].upArm_A2;
            upArm_A3[i] = list[i].upArm_A3;
            upArm_A4[i] = list[i].upArm_A4;
            upArm_A5[i] = list[i].upArm_A5;
            upArm_A6[i] = list[i].upArm_A6;
            upArm_A7[i] = list[i].upArm_A7;
            upArm_A8[i] = list[i].upArm_A8;
            upArm_A9[i] = list[i].upArm_A9;
            upArm_A10[i] = list[i].upArm_A10;
            upArm_A11[i] = list[i].upArm_A11;
            upArm_A12[i] = list[i].upArm_A12;
            upArm_A13[i] = list[i].upArm_A13;
            upArm_A14[i] = list[i].upArm_A14;
            upArm_A15[i] = list[i].upArm_A15;
            upArm_A16[i] = list[i].upArm_A16;
            upArm_A17[i] = list[i].upArm_A17;
            upArm_A18[i] = list[i].upArm_A18;
            upArm_A19[i] = list[i].upArm_A19;
            upArm_A20[i] = list[i].upArm_A20;

        }

        return {
            title: {
                text: '无线测温上臂A相折线图',
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
                    data: upArm_A1,
                    itemStyle: {
                        color: '#027db4'
                    },
                }, {
                    name: '海凤3731',
                    type: 'line',
                    data: upArm_A2,
                    // smooth : true,

                }, {
                    name: '#3电容器',
                    type: 'line',
                    data: upArm_A3,
                    // smooth : true,

                }, {
                    name: '#1所用变',
                    type: 'line',
                    data: upArm_A4,
                    // smooth : true,

                }, {
                    name: '35kVI段母线避雷器',
                    type: 'line',
                    data: upArm_A5,
                    // smooth : true,

                }, {
                    name: '海洪3734',
                    type: 'line',
                    data: upArm_A6,
                    // smooth : true,

                }, {
                    name: '35kVI段母线压变插件',
                    type: 'line',
                    data: upArm_A7,
                    // smooth : true,

                }, {
                    name: '#1主变35kV',
                    type: 'line',
                    data: upArm_A8,
                    // smooth : true,

                }, {
                    name: '海变3733',
                    type: 'line',
                    data: upArm_A9,
                    // smooth : true,

                }, {
                    name: '35kV母分开关',
                    type: 'line',
                    data: upArm_A10,
                    itemStyle: {
                        color: '#027db4'
                    },
                }, {
                    name: '35kV母分插件',
                    type: 'line',
                    data: upArm_A11,
                }, {
                    name: '备用3572开关',
                    type: 'line',
                    data: upArm_A12,
                }, {
                    name: '#2主变35kV开关',
                    type: 'line',
                    data: upArm_A13,
                }, {
                    name: '35kVII段母线避雷器',
                    type: 'line',
                    data: upArm_A14,
                }, {
                    name: '海牌3735开关',
                    type: 'line',
                    data: upArm_A15,
                }, {
                    name: '35kVII段母线压变插件',
                    type: 'line',
                    data: upArm_A16,
                }, {
                    name: '#2电容器开关',
                    type: 'line',
                    data: upArm_A17,
                }, {
                    name: '#2所用变开关',
                    type: 'line',
                    data: upArm_A18,
                }, {
                    name: '#2电抗器开关',
                    type: 'line',
                    data: upArm_A19,
                }, {
                    name: '海时3738开关',
                    type: 'line',
                    data: upArm_A20,
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