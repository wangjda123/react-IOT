import React, {Component} from "react";
import {Card} from 'antd'
import ReactEcharts from 'echarts-for-react'


export default class DianlanaEcharts extends Component {

    state = {
        dianlan_A: [
            {
                "time": "14:00",
                "dianlan_A1": 39.97,
                "dianlan_A2": 51.41,
                "dianlan_A3": 31.22,
                "dianlan_A4": 49.239999999999995,
                "dianlan_A5": 45.76,
                "dianlan_A6": 30.05,
                "dianlan_A7": 31.1,
                "dianlan_A8": 39.01,
                "dianlan_A9": 50.739999999999995,
                "dianlan_A10": 52.94,
                "dianlan_A11": 50.83,
                "dianlan_A12": 49.07,
                "dianlan_A13": 32.49,
                "dianlan_A14": 44.97,
                "dianlan_A15": 48.980000000000004,
                "dianlan_A16": 34.63,
                "dianlan_A17": 33.67,
                "dianlan_A18": 33.14,
                "dianlan_A19": 31.54,
                "dianlan_A20": 44.66
            },
            {
                "time": "14:15",
                "dianlan_A1": 34.95,
                "dianlan_A2": 37.11,
                "dianlan_A3": 40.51,
                "dianlan_A4": 30.24,
                "dianlan_A5": 53.97,
                "dianlan_A6": 52.11,
                "dianlan_A7": 30.31,
                "dianlan_A8": 48.04,
                "dianlan_A9": 39.71,
                "dianlan_A10": 39.01,
                "dianlan_A11": 44.07,
                "dianlan_A12": 49.61,
                "dianlan_A13": 45.9,
                "dianlan_A14": 31.06,
                "dianlan_A15": 31.11,
                "dianlan_A16": 33.39,
                "dianlan_A17": 34.12,
                "dianlan_A18": 34.94,
                "dianlan_A19": 49.239999999999995,
                "dianlan_A20": 50.58
            },
            {
                "time": "14:30",
                "dianlan_A1": 49.82,
                "dianlan_A2": 47.36,
                "dianlan_A3": 52.25,
                "dianlan_A4": 47.31,
                "dianlan_A5": 34.11,
                "dianlan_A6": 45.730000000000004,
                "dianlan_A7": 44.26,
                "dianlan_A8": 39.96,
                "dianlan_A9": 47.82,
                "dianlan_A10": 32.23,
                "dianlan_A11": 48.97,
                "dianlan_A12": 45.68,
                "dianlan_A13": 50.25,
                "dianlan_A14": 53.510000000000005,
                "dianlan_A15": 47.67,
                "dianlan_A16": 43.15,
                "dianlan_A17": 37.08,
                "dianlan_A18": 52.79,
                "dianlan_A19": 48.2,
                "dianlan_A20": 54.55
            },
            {
                "time": "14:45",
                "dianlan_A1": 48.34,
                "dianlan_A2": 38.85,
                "dianlan_A3": 47.64,
                "dianlan_A4": 36.62,
                "dianlan_A5": 35.71,
                "dianlan_A6": 33.74,
                "dianlan_A7": 45.64,
                "dianlan_A8": 36.61,
                "dianlan_A9": 41.81,
                "dianlan_A10": 34.42,
                "dianlan_A11": 48.19,
                "dianlan_A12": 30.55,
                "dianlan_A13": 33.42,
                "dianlan_A14": 33.94,
                "dianlan_A15": 36.65,
                "dianlan_A16": 35.29,
                "dianlan_A17": 51.09,
                "dianlan_A18": 44.24,
                "dianlan_A19": 44.94,
                "dianlan_A20": 46.28
            },
            {
                "time": "15:00",
                "dianlan_A1": 48.35,
                "dianlan_A2": 48.85,
                "dianlan_A3": 36.46,
                "dianlan_A4": 31.47,
                "dianlan_A5": 47.2,
                "dianlan_A6": 39.8,
                "dianlan_A7": 49.41,
                "dianlan_A8": 40.69,
                "dianlan_A9": 50.93,
                "dianlan_A10": 54.480000000000004,
                "dianlan_A11": 42.71,
                "dianlan_A12": 47.72,
                "dianlan_A13": 53.35,
                "dianlan_A14": 45.47,
                "dianlan_A15": 31.87,
                "dianlan_A16": 35.7,
                "dianlan_A17": 34.769999999999996,
                "dianlan_A18": 30.11,
                "dianlan_A19": 54,
                "dianlan_A20": 46.09
            },
            {
                "time": "15:15",
                "dianlan_A1": 50.879999999999995,
                "dianlan_A2": 30.22,
                "dianlan_A3": 49.07,
                "dianlan_A4": 37.58,
                "dianlan_A5": 53.2,
                "dianlan_A6": 47.980000000000004,
                "dianlan_A7": 54.1,
                "dianlan_A8": 39.71,
                "dianlan_A9": 38.13,
                "dianlan_A10": 32.72,
                "dianlan_A11": 35.24,
                "dianlan_A12": 53.72,
                "dianlan_A13": 38.84,
                "dianlan_A14": 49.15,
                "dianlan_A15": 47.81,
                "dianlan_A16": 39,
                "dianlan_A17": 37.37,
                "dianlan_A18": 31.38,
                "dianlan_A19": 43.1,
                "dianlan_A20": 42.05
            },
            {
                "time": "15:30",
                "dianlan_A1": 51.61,
                "dianlan_A2": 50.61,
                "dianlan_A3": 35.38,
                "dianlan_A4": 36.55,
                "dianlan_A5": 36.71,
                "dianlan_A6": 49.35,
                "dianlan_A7": 30.88,
                "dianlan_A8": 53.510000000000005,
                "dianlan_A9": 52.870000000000005,
                "dianlan_A10": 52.35,
                "dianlan_A11": 30.66,
                "dianlan_A12": 51.92,
                "dianlan_A13": 50.58,
                "dianlan_A14": 50.97,
                "dianlan_A15": 44.51,
                "dianlan_A16": 43.36,
                "dianlan_A17": 50.14,
                "dianlan_A18": 45.71,
                "dianlan_A19": 48.59,
                "dianlan_A20": 44.730000000000004
            },
            {
                "time": "15:45",
                "dianlan_A1": 35.519999999999996,
                "dianlan_A2": 35.7,
                "dianlan_A3": 45.6,
                "dianlan_A4": 32.66,
                "dianlan_A5": 52.35,
                "dianlan_A6": 37.34,
                "dianlan_A7": 44.730000000000004,
                "dianlan_A8": 51.730000000000004,
                "dianlan_A9": 42.31,
                "dianlan_A10": 33.94,
                "dianlan_A11": 43.35,
                "dianlan_A12": 40.61,
                "dianlan_A13": 45.42,
                "dianlan_A14": 40.89,
                "dianlan_A15": 42.3,
                "dianlan_A16": 41.06,
                "dianlan_A17": 44.4,
                "dianlan_A18": 33.73,
                "dianlan_A19": 52.510000000000005,
                "dianlan_A20": 39.78
            },
            {
                "time": "16:00",
                "dianlan_A1": 48.58,
                "dianlan_A2": 33.9,
                "dianlan_A3": 42.33,
                "dianlan_A4": 35.04,
                "dianlan_A5": 48.7,
                "dianlan_A6": 45.85,
                "dianlan_A7": 52.480000000000004,
                "dianlan_A8": 52.769999999999996,
                "dianlan_A9": 38.61,
                "dianlan_A10": 42.12,
                "dianlan_A11": 34.480000000000004,
                "dianlan_A12": 53.83,
                "dianlan_A13": 42.64,
                "dianlan_A14": 32.7,
                "dianlan_A15": 49.83,
                "dianlan_A16": 32.45,
                "dianlan_A17": 45.84,
                "dianlan_A18": 49.6,
                "dianlan_A19": 47.89,
                "dianlan_A20": 45.05
            },
            {
                "time": "16:15",
                "dianlan_A1": 36.45,
                "dianlan_A2": 47.53,
                "dianlan_A3": 30.11,
                "dianlan_A4": 48.69,
                "dianlan_A5": 36.08,
                "dianlan_A6": 43.68,
                "dianlan_A7": 45.07,
                "dianlan_A8": 53.46,
                "dianlan_A9": 47.120000000000005,
                "dianlan_A10": 33.08,
                "dianlan_A11": 30.79,
                "dianlan_A12": 30.42,
                "dianlan_A13": 39.42,
                "dianlan_A14": 37.7,
                "dianlan_A15": 54.64,
                "dianlan_A16": 45.57,
                "dianlan_A17": 30.34,
                "dianlan_A18": 35.86,
                "dianlan_A19": 43.38,
                "dianlan_A20": 46.739999999999995
            }
        ],
    }
    getOption = () => {

        var list = this.state.dianlan_A

        var time = new Array();
        var dianlan_A1 = new Array();
        var dianlan_A2 = new Array();
        var dianlan_A3 = new Array();
        var dianlan_A4 = new Array();
        var dianlan_A5 = new Array();
        var dianlan_A6 = new Array();
        var dianlan_A7 = new Array();
        var dianlan_A8 = new Array();
        var dianlan_A9 = new Array();
        var dianlan_A10 = new Array();
        var dianlan_A11 = new Array();
        var dianlan_A12 = new Array();
        var dianlan_A13 = new Array();
        var dianlan_A14 = new Array();
        var dianlan_A15 = new Array();
        var dianlan_A16 = new Array();
        var dianlan_A17 = new Array();
        var dianlan_A18 = new Array();
        var dianlan_A19 = new Array();
        var dianlan_A20 = new Array();

        for (var i = 0; i < list.length; i++) {
            time[i] = list[i].time;
            dianlan_A1[i] = list[i].dianlan_A1;
            dianlan_A2[i] = list[i].dianlan_A2;
            dianlan_A3[i] = list[i].dianlan_A3;
            dianlan_A4[i] = list[i].dianlan_A4;
            dianlan_A5[i] = list[i].dianlan_A5;
            dianlan_A6[i] = list[i].dianlan_A6;
            dianlan_A7[i] = list[i].dianlan_A7;
            dianlan_A8[i] = list[i].dianlan_A8;
            dianlan_A9[i] = list[i].dianlan_A9;
            dianlan_A10[i] = list[i].dianlan_A10;
            dianlan_A11[i] = list[i].dianlan_A11;
            dianlan_A12[i] = list[i].dianlan_A12;
            dianlan_A13[i] = list[i].dianlan_A13;
            dianlan_A14[i] = list[i].dianlan_A14;
            dianlan_A15[i] = list[i].dianlan_A15;
            dianlan_A16[i] = list[i].dianlan_A16;
            dianlan_A17[i] = list[i].dianlan_A17;
            dianlan_A18[i] = list[i].dianlan_A18;
            dianlan_A19[i] = list[i].dianlan_A19;
            dianlan_A20[i] = list[i].dianlan_A20;

        }

        return {
            title: {
                text: '无线测温电缆A相折线图',
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
                    data: dianlan_A1,
                    itemStyle: {
                        color: '#027db4'
                    },
                }, {
                    name: '海凤3731',
                    type: 'line',
                    data: dianlan_A2,
                    // smooth : true,

                }, {
                    name: '#3电容器',
                    type: 'line',
                    data: dianlan_A3,
                    // smooth : true,

                }, {
                    name: '#1所用变',
                    type: 'line',
                    data: dianlan_A4,
                    // smooth : true,

                }, {
                    name: '35kVI段母线避雷器',
                    type: 'line',
                    data: dianlan_A5,
                    // smooth : true,

                }, {
                    name: '海洪3734',
                    type: 'line',
                    data: dianlan_A6,
                    // smooth : true,

                }, {
                    name: '35kVI段母线压变插件',
                    type: 'line',
                    data: dianlan_A7,
                    // smooth : true,

                }, {
                    name: '#1主变35kV',
                    type: 'line',
                    data: dianlan_A8,
                    // smooth : true,

                }, {
                    name: '海变3733',
                    type: 'line',
                    data: dianlan_A9,
                    // smooth : true,

                }, {
                    name: '35kV母分开关',
                    type: 'line',
                    data: dianlan_A10,
                    itemStyle: {
                        color: '#027db4'
                    },
                }, {
                    name: '35kV母分插件',
                    type: 'line',
                    data: dianlan_A11,
                }, {
                    name: '备用3572开关',
                    type: 'line',
                    data: dianlan_A12,
                }, {
                    name: '#2主变35kV开关',
                    type: 'line',
                    data: dianlan_A13,
                }, {
                    name: '35kVII段母线避雷器',
                    type: 'line',
                    data: dianlan_A14,
                }, {
                    name: '海牌3735开关',
                    type: 'line',
                    data: dianlan_A15,
                }, {
                    name: '35kVII段母线压变插件',
                    type: 'line',
                    data: dianlan_A16,
                }, {
                    name: '#2电容器开关',
                    type: 'line',
                    data: dianlan_A17,
                }, {
                    name: '#2所用变开关',
                    type: 'line',
                    data: dianlan_A18,
                }, {
                    name: '#2电抗器开关',
                    type: 'line',
                    data: dianlan_A19,
                }, {
                    name: '海时3738开关',
                    type: 'line',
                    data: dianlan_A20,
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