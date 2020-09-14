import React, {Component} from "react";
import {Card} from 'antd'
import ReactEcharts from 'echarts-for-react'


export default class MupaiaEcharts extends Component {

    state = {
        mupai_A: [
            {
                "time": "14:00",
                "mupai_A1": 49.879999999999995,
                "mupai_A2": 50.91,
                "mupai_A3": 33.05,
                "mupai_A4": 47.83,
                "mupai_A5": 31.43,
                "mupai_A6": 49.82,
                "mupai_A7": 43.29,
                "mupai_A8": 33.58,
                "mupai_A9": 36.95,
                "mupai_A10": 45.46,
                "mupai_A11": 40.45,
                "mupai_A12": 31.98,
                "mupai_A13": 41.34,
                "mupai_A14": 32.04,
                "mupai_A15": 36.87,
                "mupai_A16": 44.28,
                "mupai_A17": 43.75,
                "mupai_A18": 37.7,
                "mupai_A19": 46.29,
                "mupai_A20": 48.89
            },
            {
                "time": "14:15",
                "mupai_A1": 48.9,
                "mupai_A2": 42.89,
                "mupai_A3": 52.239999999999995,
                "mupai_A4": 53.1,
                "mupai_A5": 37.99,
                "mupai_A6": 51.45,
                "mupai_A7": 52.2,
                "mupai_A8": 33.26,
                "mupai_A9": 51.71,
                "mupai_A10": 37.480000000000004,
                "mupai_A11": 30.92,
                "mupai_A12": 43.33,
                "mupai_A13": 42.61,
                "mupai_A14": 45.41,
                "mupai_A15": 34.24,
                "mupai_A16": 39.89,
                "mupai_A17": 43.86,
                "mupai_A18": 54.03,
                "mupai_A19": 33.03,
                "mupai_A20": 43.2
            },
            {
                "time": "14:30",
                "mupai_A1": 34.82,
                "mupai_A2": 44.38,
                "mupai_A3": 34.019999999999996,
                "mupai_A4": 42.44,
                "mupai_A5": 36.24,
                "mupai_A6": 47.05,
                "mupai_A7": 41.14,
                "mupai_A8": 48.260000000000005,
                "mupai_A9": 47.41,
                "mupai_A10": 49.96,
                "mupai_A11": 37,
                "mupai_A12": 49.57,
                "mupai_A13": 37.29,
                "mupai_A14": 51.58,
                "mupai_A15": 52.21,
                "mupai_A16": 43.92,
                "mupai_A17": 49.760000000000005,
                "mupai_A18": 31.62,
                "mupai_A19": 30.74,
                "mupai_A20": 42.13
            },
            {
                "time": "14:45",
                "mupai_A1": 31.38,
                "mupai_A2": 53,
                "mupai_A3": 46.7,
                "mupai_A4": 45.019999999999996,
                "mupai_A5": 35.07,
                "mupai_A6": 44.5,
                "mupai_A7": 33.99,
                "mupai_A8": 52.480000000000004,
                "mupai_A9": 47.72,
                "mupai_A10": 52.19,
                "mupai_A11": 39.46,
                "mupai_A12": 46.42,
                "mupai_A13": 49.36,
                "mupai_A14": 51.989999999999995,
                "mupai_A15": 36.28,
                "mupai_A16": 45.57,
                "mupai_A17": 47.66,
                "mupai_A18": 40.09,
                "mupai_A19": 45.85,
                "mupai_A20": 35.63
            },
            {
                "time": "15:00",
                "mupai_A1": 31.58,
                "mupai_A2": 47.56,
                "mupai_A3": 48.379999999999995,
                "mupai_A4": 49,
                "mupai_A5": 40.33,
                "mupai_A6": 32.86,
                "mupai_A7": 47.16,
                "mupai_A8": 39.86,
                "mupai_A9": 45.47,
                "mupai_A10": 49.43,
                "mupai_A11": 41.37,
                "mupai_A12": 49.58,
                "mupai_A13": 31,
                "mupai_A14": 52.629999999999995,
                "mupai_A15": 31.55,
                "mupai_A16": 52.39,
                "mupai_A17": 41.89,
                "mupai_A18": 34.7,
                "mupai_A19": 53.57,
                "mupai_A20": 54.230000000000004
            },
            {
                "time": "15:15",
                "mupai_A1": 46.86,
                "mupai_A2": 46.15,
                "mupai_A3": 31.04,
                "mupai_A4": 47.09,
                "mupai_A5": 35.79,
                "mupai_A6": 43.99,
                "mupai_A7": 32.03,
                "mupai_A8": 52.93,
                "mupai_A9": 30.52,
                "mupai_A10": 32.69,
                "mupai_A11": 35.93,
                "mupai_A12": 47.53,
                "mupai_A13": 35.88,
                "mupai_A14": 34.39,
                "mupai_A15": 31.33,
                "mupai_A16": 42.58,
                "mupai_A17": 35.230000000000004,
                "mupai_A18": 53.89,
                "mupai_A19": 42.87,
                "mupai_A20": 52.519999999999996
            },
            {
                "time": "15:30",
                "mupai_A1": 42.72,
                "mupai_A2": 51.14,
                "mupai_A3": 40.12,
                "mupai_A4": 41.58,
                "mupai_A5": 39.59,
                "mupai_A6": 46.28,
                "mupai_A7": 39.59,
                "mupai_A8": 40.08,
                "mupai_A9": 54.54,
                "mupai_A10": 44.26,
                "mupai_A11": 34.730000000000004,
                "mupai_A12": 34.69,
                "mupai_A13": 44.15,
                "mupai_A14": 32.81,
                "mupai_A15": 39.47,
                "mupai_A16": 48.65,
                "mupai_A17": 40.18,
                "mupai_A18": 45.45,
                "mupai_A19": 51.25,
                "mupai_A20": 44.230000000000004
            },
            {
                "time": "15:45",
                "mupai_A1": 33.88,
                "mupai_A2": 31.14,
                "mupai_A3": 51.43,
                "mupai_A4": 31.47,
                "mupai_A5": 49.7,
                "mupai_A6": 34.95,
                "mupai_A7": 33.49,
                "mupai_A8": 34.769999999999996,
                "mupai_A9": 47.15,
                "mupai_A10": 53.41,
                "mupai_A11": 31.33,
                "mupai_A12": 30.74,
                "mupai_A13": 39.19,
                "mupai_A14": 38.22,
                "mupai_A15": 43.17,
                "mupai_A16": 53.67,
                "mupai_A17": 38.97,
                "mupai_A18": 45.74,
                "mupai_A19": 51,
                "mupai_A20": 54.870000000000005
            },
            {
                "time": "16:00",
                "mupai_A1": 41.24,
                "mupai_A2": 46.519999999999996,
                "mupai_A3": 52.78,
                "mupai_A4": 44.769999999999996,
                "mupai_A5": 54.519999999999996,
                "mupai_A6": 35.1,
                "mupai_A7": 54.82,
                "mupai_A8": 42.63,
                "mupai_A9": 50.93,
                "mupai_A10": 37.18,
                "mupai_A11": 52.4,
                "mupai_A12": 43.16,
                "mupai_A13": 39.61,
                "mupai_A14": 32.49,
                "mupai_A15": 46.11,
                "mupai_A16": 40.83,
                "mupai_A17": 43.13,
                "mupai_A18": 52.1,
                "mupai_A19": 53.11,
                "mupai_A20": 35.44
            },
            {
                "time": "16:15",
                "mupai_A1": 37.730000000000004,
                "mupai_A2": 34.33,
                "mupai_A3": 32.02,
                "mupai_A4": 40.5,
                "mupai_A5": 35.01,
                "mupai_A6": 50.260000000000005,
                "mupai_A7": 34.51,
                "mupai_A8": 47.61,
                "mupai_A9": 38.1,
                "mupai_A10": 38.18,
                "mupai_A11": 50.58,
                "mupai_A12": 32.71,
                "mupai_A13": 50.739999999999995,
                "mupai_A14": 53.08,
                "mupai_A15": 41.51,
                "mupai_A16": 43.82,
                "mupai_A17": 40.51,
                "mupai_A18": 51.91,
                "mupai_A19": 35.269999999999996,
                "mupai_A20": 34.64
            }
        ],
    }
    getOption = () => {

        var list = this.state.mupai_A

        var time = new Array();
        var mupai_A1 = new Array();
        var mupai_A2 = new Array();
        var mupai_A3 = new Array();
        var mupai_A4 = new Array();
        var mupai_A5 = new Array();
        var mupai_A6 = new Array();
        var mupai_A7 = new Array();
        var mupai_A8 = new Array();
        var mupai_A9 = new Array();
        var mupai_A10 = new Array();
        var mupai_A11 = new Array();
        var mupai_A12 = new Array();
        var mupai_A13 = new Array();
        var mupai_A14 = new Array();
        var mupai_A15 = new Array();
        var mupai_A16 = new Array();
        var mupai_A17 = new Array();
        var mupai_A18 = new Array();
        var mupai_A19 = new Array();
        var mupai_A20 = new Array();

        for (var i = 0; i < list.length; i++) {
            time[i] = list[i].time;
            mupai_A1[i] = list[i].mupai_A1;
            mupai_A2[i] = list[i].mupai_A2;
            mupai_A3[i] = list[i].mupai_A3;
            mupai_A4[i] = list[i].mupai_A4;
            mupai_A5[i] = list[i].mupai_A5;
            mupai_A6[i] = list[i].mupai_A6;
            mupai_A7[i] = list[i].mupai_A7;
            mupai_A8[i] = list[i].mupai_A8;
            mupai_A9[i] = list[i].mupai_A9;
            mupai_A10[i] = list[i].mupai_A10;
            mupai_A11[i] = list[i].mupai_A11;
            mupai_A12[i] = list[i].mupai_A12;
            mupai_A13[i] = list[i].mupai_A13;
            mupai_A14[i] = list[i].mupai_A14;
            mupai_A15[i] = list[i].mupai_A15;
            mupai_A16[i] = list[i].mupai_A16;
            mupai_A17[i] = list[i].mupai_A17;
            mupai_A18[i] = list[i].mupai_A18;
            mupai_A19[i] = list[i].mupai_A19;
            mupai_A20[i] = list[i].mupai_A20;

        }

        return {
            title: {
                text: '无线测温母排A相折线图',
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
                    data: mupai_A1,
                    itemStyle: {
                        color: '#027db4'
                    },
                }, {
                    name: '海凤3731',
                    type: 'line',
                    data: mupai_A2,
                    // smooth : true,

                }, {
                    name: '#3电容器',
                    type: 'line',
                    data: mupai_A3,
                    // smooth : true,

                }, {
                    name: '#1所用变',
                    type: 'line',
                    data: mupai_A4,
                    // smooth : true,

                }, {
                    name: '35kVI段母线避雷器',
                    type: 'line',
                    data: mupai_A5,
                    // smooth : true,

                }, {
                    name: '海洪3734',
                    type: 'line',
                    data: mupai_A6,
                    // smooth : true,

                }, {
                    name: '35kVI段母线压变插件',
                    type: 'line',
                    data: mupai_A7,
                    // smooth : true,

                }, {
                    name: '#1主变35kV',
                    type: 'line',
                    data: mupai_A8,
                    // smooth : true,

                }, {
                    name: '海变3733',
                    type: 'line',
                    data: mupai_A9,
                    // smooth : true,

                }, {
                    name: '35kV母分开关',
                    type: 'line',
                    data: mupai_A10,
                    itemStyle: {
                        color: '#027db4'
                    },
                }, {
                    name: '35kV母分插件',
                    type: 'line',
                    data: mupai_A11,
                }, {
                    name: '备用3572开关',
                    type: 'line',
                    data: mupai_A12,
                }, {
                    name: '#2主变35kV开关',
                    type: 'line',
                    data: mupai_A13,
                }, {
                    name: '35kVII段母线避雷器',
                    type: 'line',
                    data: mupai_A14,
                }, {
                    name: '海牌3735开关',
                    type: 'line',
                    data: mupai_A15,
                }, {
                    name: '35kVII段母线压变插件',
                    type: 'line',
                    data: mupai_A16,
                }, {
                    name: '#2电容器开关',
                    type: 'line',
                    data: mupai_A17,
                }, {
                    name: '#2所用变开关',
                    type: 'line',
                    data: mupai_A18,
                }, {
                    name: '#2电抗器开关',
                    type: 'line',
                    data: mupai_A19,
                }, {
                    name: '海时3738开关',
                    type: 'line',
                    data: mupai_A20,
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