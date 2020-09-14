import React, {Component} from "react";
import {Card} from 'antd'
import ReactEcharts from 'echarts-for-react'


export default class DianlanbEcharts extends Component {

    state = {
        dianlan_B: [
            {
                "time": "14:00",
                "dianlan_B1": 42.33,
                "dianlan_B2": 41.5,
                "dianlan_B3": 43.55,
                "dianlan_B4": 34.03,
                "dianlan_B5": 35.22,
                "dianlan_B6": 45.56,
                "dianlan_B7": 35.11,
                "dianlan_B8": 30.48,
                "dianlan_B9": 41.97,
                "dianlan_B10": 31.28,
                "dianlan_B11": 31.53,
                "dianlan_B12": 36.35,
                "dianlan_B13": 46.82,
                "dianlan_B14": 41.230000000000004,
                "dianlan_B15": 46.09,
                "dianlan_B16": 43.58,
                "dianlan_B17": 46.69,
                "dianlan_B18": 37.08,
                "dianlan_B19": 38.18,
                "dianlan_B20": 36.3
            },
            {
                "time": "14:15",
                "dianlan_B1": 36.24,
                "dianlan_B2": 39.29,
                "dianlan_B3": 35.05,
                "dianlan_B4": 46.79,
                "dianlan_B5": 37.01,
                "dianlan_B6": 39.269999999999996,
                "dianlan_B7": 31.96,
                "dianlan_B8": 48.58,
                "dianlan_B9": 42.3,
                "dianlan_B10": 50.269999999999996,
                "dianlan_B11": 36.3,
                "dianlan_B12": 43.08,
                "dianlan_B13": 38.28,
                "dianlan_B14": 30.55,
                "dianlan_B15": 38.22,
                "dianlan_B16": 40.82,
                "dianlan_B17": 39.11,
                "dianlan_B18": 33.09,
                "dianlan_B19": 34.78,
                "dianlan_B20": 31.11
            },
            {
                "time": "14:30",
                "dianlan_B1": 50.31,
                "dianlan_B2": 45.17,
                "dianlan_B3": 42.85,
                "dianlan_B4": 40.11,
                "dianlan_B5": 47.18,
                "dianlan_B6": 32.46,
                "dianlan_B7": 47.5,
                "dianlan_B8": 46.379999999999995,
                "dianlan_B9": 48.19,
                "dianlan_B10": 31.35,
                "dianlan_B11": 50.65,
                "dianlan_B12": 31.45,
                "dianlan_B13": 39.24,
                "dianlan_B14": 41.78,
                "dianlan_B15": 43.61,
                "dianlan_B16": 33.04,
                "dianlan_B17": 54.879999999999995,
                "dianlan_B18": 31.06,
                "dianlan_B19": 49.84,
                "dianlan_B20": 40.67
            },
            {
                "time": "14:45",
                "dianlan_B1": 42.91,
                "dianlan_B2": 52.14,
                "dianlan_B3": 43.49,
                "dianlan_B4": 30.74,
                "dianlan_B5": 47.81,
                "dianlan_B6": 48.06,
                "dianlan_B7": 33.3,
                "dianlan_B8": 32.52,
                "dianlan_B9": 39.980000000000004,
                "dianlan_B10": 40.58,
                "dianlan_B11": 32.73,
                "dianlan_B12": 43.15,
                "dianlan_B13": 54.769999999999996,
                "dianlan_B14": 30.88,
                "dianlan_B15": 51.42,
                "dianlan_B16": 32.35,
                "dianlan_B17": 52.86,
                "dianlan_B18": 42.06,
                "dianlan_B19": 35.82,
                "dianlan_B20": 52.6
            },
            {
                "time": "15:00",
                "dianlan_B1": 44.39,
                "dianlan_B2": 36.95,
                "dianlan_B3": 43.89,
                "dianlan_B4": 35.54,
                "dianlan_B5": 41.32,
                "dianlan_B6": 46.010000000000005,
                "dianlan_B7": 31.42,
                "dianlan_B8": 51.04,
                "dianlan_B9": 34.7,
                "dianlan_B10": 30.87,
                "dianlan_B11": 49.42,
                "dianlan_B12": 30.33,
                "dianlan_B13": 40.769999999999996,
                "dianlan_B14": 54.21,
                "dianlan_B15": 36.53,
                "dianlan_B16": 41.769999999999996,
                "dianlan_B17": 42.59,
                "dianlan_B18": 44.6,
                "dianlan_B19": 34.35,
                "dianlan_B20": 35.89
            },
            {
                "time": "15:15",
                "dianlan_B1": 33.37,
                "dianlan_B2": 35.72,
                "dianlan_B3": 31.16,
                "dianlan_B4": 47.45,
                "dianlan_B5": 45.1,
                "dianlan_B6": 40.03,
                "dianlan_B7": 45.1,
                "dianlan_B8": 52.14,
                "dianlan_B9": 50.78,
                "dianlan_B10": 49.15,
                "dianlan_B11": 52.86,
                "dianlan_B12": 35.7,
                "dianlan_B13": 31.41,
                "dianlan_B14": 49.769999999999996,
                "dianlan_B15": 46.36,
                "dianlan_B16": 52.08,
                "dianlan_B17": 43.480000000000004,
                "dianlan_B18": 40.31,
                "dianlan_B19": 38.94,
                "dianlan_B20": 33.43
            },
            {
                "time": "15:30",
                "dianlan_B1": 43.2,
                "dianlan_B2": 50.56,
                "dianlan_B3": 53.129999999999995,
                "dianlan_B4": 34.32,
                "dianlan_B5": 52.57,
                "dianlan_B6": 43.26,
                "dianlan_B7": 53.59,
                "dianlan_B8": 32.67,
                "dianlan_B9": 51.06,
                "dianlan_B10": 46.730000000000004,
                "dianlan_B11": 42.83,
                "dianlan_B12": 46.83,
                "dianlan_B13": 49.75,
                "dianlan_B14": 51.620000000000005,
                "dianlan_B15": 33.71,
                "dianlan_B16": 50.92,
                "dianlan_B17": 48.14,
                "dianlan_B18": 51.29,
                "dianlan_B19": 53.75,
                "dianlan_B20": 49.28
            },
            {
                "time": "15:45",
                "dianlan_B1": 32.81,
                "dianlan_B2": 38.31,
                "dianlan_B3": 45.89,
                "dianlan_B4": 35.17,
                "dianlan_B5": 35,
                "dianlan_B6": 50.260000000000005,
                "dianlan_B7": 45.15,
                "dianlan_B8": 34.61,
                "dianlan_B9": 37.67,
                "dianlan_B10": 52.230000000000004,
                "dianlan_B11": 43.47,
                "dianlan_B12": 30.84,
                "dianlan_B13": 51.91,
                "dianlan_B14": 31.01,
                "dianlan_B15": 36.09,
                "dianlan_B16": 30.48,
                "dianlan_B17": 38.47,
                "dianlan_B18": 53.89,
                "dianlan_B19": 51.9,
                "dianlan_B20": 38.66
            },
            {
                "time": "16:00",
                "dianlan_B1": 43.76,
                "dianlan_B2": 52.35,
                "dianlan_B3": 43.67,
                "dianlan_B4": 40.86,
                "dianlan_B5": 36.22,
                "dianlan_B6": 44.82,
                "dianlan_B7": 31.48,
                "dianlan_B8": 33.86,
                "dianlan_B9": 45.81,
                "dianlan_B10": 38.55,
                "dianlan_B11": 34.230000000000004,
                "dianlan_B12": 42.730000000000004,
                "dianlan_B13": 50.56,
                "dianlan_B14": 35,
                "dianlan_B15": 31.67,
                "dianlan_B16": 46.57,
                "dianlan_B17": 52.93,
                "dianlan_B18": 47.97,
                "dianlan_B19": 36.12,
                "dianlan_B20": 46.84
            },
            {
                "time": "16:15",
                "dianlan_B1": 35.22,
                "dianlan_B2": 31.05,
                "dianlan_B3": 42.33,
                "dianlan_B4": 33.6,
                "dianlan_B5": 32.26,
                "dianlan_B6": 46,
                "dianlan_B7": 40.32,
                "dianlan_B8": 49.83,
                "dianlan_B9": 37.25,
                "dianlan_B10": 34.019999999999996,
                "dianlan_B11": 38.25,
                "dianlan_B12": 52.620000000000005,
                "dianlan_B13": 50.69,
                "dianlan_B14": 53.379999999999995,
                "dianlan_B15": 41.65,
                "dianlan_B16": 51.05,
                "dianlan_B17": 33.13,
                "dianlan_B18": 35.44,
                "dianlan_B19": 35.85,
                "dianlan_B20": 34.7
            }
        ],
    }
    getOption = () => {

        var list = this.state.dianlan_B

        var time = new Array();
        var dianlan_B1 = new Array();
        var dianlan_B2 = new Array();
        var dianlan_B3 = new Array();
        var dianlan_B4 = new Array();
        var dianlan_B5 = new Array();
        var dianlan_B6 = new Array();
        var dianlan_B7 = new Array();
        var dianlan_B8 = new Array();
        var dianlan_B9 = new Array();
        var dianlan_B10 = new Array();
        var dianlan_B11 = new Array();
        var dianlan_B12 = new Array();
        var dianlan_B13 = new Array();
        var dianlan_B14 = new Array();
        var dianlan_B15 = new Array();
        var dianlan_B16 = new Array();
        var dianlan_B17 = new Array();
        var dianlan_B18 = new Array();
        var dianlan_B19 = new Array();
        var dianlan_B20 = new Array();

        for (var i = 0; i < list.length; i++) {
            time[i] = list[i].time;
            dianlan_B1[i] = list[i].dianlan_B1;
            dianlan_B2[i] = list[i].dianlan_B2;
            dianlan_B3[i] = list[i].dianlan_B3;
            dianlan_B4[i] = list[i].dianlan_B4;
            dianlan_B5[i] = list[i].dianlan_B5;
            dianlan_B6[i] = list[i].dianlan_B6;
            dianlan_B7[i] = list[i].dianlan_B7;
            dianlan_B8[i] = list[i].dianlan_B8;
            dianlan_B9[i] = list[i].dianlan_B9;
            dianlan_B10[i] = list[i].dianlan_B10;
            dianlan_B11[i] = list[i].dianlan_B11;
            dianlan_B12[i] = list[i].dianlan_B12;
            dianlan_B13[i] = list[i].dianlan_B13;
            dianlan_B14[i] = list[i].dianlan_B14;
            dianlan_B15[i] = list[i].dianlan_B15;
            dianlan_B16[i] = list[i].dianlan_B16;
            dianlan_B17[i] = list[i].dianlan_B17;
            dianlan_B18[i] = list[i].dianlan_B18;
            dianlan_B19[i] = list[i].dianlan_B19;
            dianlan_B20[i] = list[i].dianlan_B20;

        }

        return {
            title: {
                text: '无线测温电缆B相折线图',
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
                    data: dianlan_B1,
                    itemStyle: {
                        color: '#027db4'
                    },
                }, {
                    name: '海凤3731',
                    type: 'line',
                    data: dianlan_B2,
                    // smooth : true,

                }, {
                    name: '#3电容器',
                    type: 'line',
                    data: dianlan_B3,
                    // smooth : true,

                }, {
                    name: '#1所用变',
                    type: 'line',
                    data: dianlan_B4,
                    // smooth : true,

                }, {
                    name: '35kVI段母线避雷器',
                    type: 'line',
                    data: dianlan_B5,
                    // smooth : true,

                }, {
                    name: '海洪3734',
                    type: 'line',
                    data: dianlan_B6,
                    // smooth : true,

                }, {
                    name: '35kVI段母线压变插件',
                    type: 'line',
                    data: dianlan_B7,
                    // smooth : true,

                }, {
                    name: '#1主变35kV',
                    type: 'line',
                    data: dianlan_B8,
                    // smooth : true,

                }, {
                    name: '海变3733',
                    type: 'line',
                    data: dianlan_B9,
                    // smooth : true,

                }, {
                    name: '35kV母分开关',
                    type: 'line',
                    data: dianlan_B10,
                    itemStyle: {
                        color: '#027db4'
                    },
                }, {
                    name: '35kV母分插件',
                    type: 'line',
                    data: dianlan_B11,
                }, {
                    name: '备用3572开关',
                    type: 'line',
                    data: dianlan_B12,
                }, {
                    name: '#2主变35kV开关',
                    type: 'line',
                    data: dianlan_B13,
                }, {
                    name: '35kVII段母线避雷器',
                    type: 'line',
                    data: dianlan_B14,
                }, {
                    name: '海牌3735开关',
                    type: 'line',
                    data: dianlan_B15,
                }, {
                    name: '35kVII段母线压变插件',
                    type: 'line',
                    data: dianlan_B16,
                }, {
                    name: '#2电容器开关',
                    type: 'line',
                    data: dianlan_B17,
                }, {
                    name: '#2所用变开关',
                    type: 'line',
                    data: dianlan_B18,
                }, {
                    name: '#2电抗器开关',
                    type: 'line',
                    data: dianlan_B19,
                }, {
                    name: '海时3738开关',
                    type: 'line',
                    data: dianlan_B20,
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