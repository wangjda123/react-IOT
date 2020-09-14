import React, {Component} from "react";
import {Card} from 'antd'
import ReactEcharts from 'echarts-for-react'


export default class UparmbEcharts extends Component {

    state = {
        upArm_B: [
            {
                "time": "14:00",
                "upArm_B1": 53.94,
                "upArm_B2": 50.75,
                "upArm_B3": 52.28,
                "upArm_B4": 36.42,
                "upArm_B5": 34.4,
                "upArm_B6": 48.53,
                "upArm_B7": 38.8,
                "upArm_B8": 51.1,
                "upArm_B9": 32.66,
                "upArm_B10": 40.79,
                "upArm_B11": 34.1,
                "upArm_B12": 52.8,
                "upArm_B13": 33.51,
                "upArm_B14": 48.46,
                "upArm_B15": 30.93,
                "upArm_B16": 43.44,
                "upArm_B17": 36.66,
                "upArm_B18": 45.769999999999996,
                "upArm_B19": 54.55,
                "upArm_B20": 51.46
            },
            {
                "time": "14:15",
                "upArm_B1": 54.79,
                "upArm_B2": 36.45,
                "upArm_B3": 48.67,
                "upArm_B4": 51.21,
                "upArm_B5": 33.35,
                "upArm_B6": 33.94,
                "upArm_B7": 53.16,
                "upArm_B8": 42.35,
                "upArm_B9": 41.38,
                "upArm_B10": 53.05,
                "upArm_B11": 52.760000000000005,
                "upArm_B12": 39.34,
                "upArm_B13": 40.86,
                "upArm_B14": 39.49,
                "upArm_B15": 40.56,
                "upArm_B16": 53.45,
                "upArm_B17": 44.21,
                "upArm_B18": 47.33,
                "upArm_B19": 51.94,
                "upArm_B20": 47.85
            },
            {
                "time": "14:30",
                "upArm_B1": 49.79,
                "upArm_B2": 50.65,
                "upArm_B3": 47.629999999999995,
                "upArm_B4": 44.41,
                "upArm_B5": 33.06,
                "upArm_B6": 44.09,
                "upArm_B7": 35.75,
                "upArm_B8": 34.26,
                "upArm_B9": 52.8,
                "upArm_B10": 47.66,
                "upArm_B11": 37.14,
                "upArm_B12": 37.13,
                "upArm_B13": 48.35,
                "upArm_B14": 31.39,
                "upArm_B15": 36.44,
                "upArm_B16": 36.15,
                "upArm_B17": 31.4,
                "upArm_B18": 51.34,
                "upArm_B19": 30.65,
                "upArm_B20": 35.5
            },
            {
                "time": "14:45",
                "upArm_B1": 52.81,
                "upArm_B2": 49.34,
                "upArm_B3": 43.16,
                "upArm_B4": 38.26,
                "upArm_B5": 52.91,
                "upArm_B6": 48.95,
                "upArm_B7": 44.95,
                "upArm_B8": 45.04,
                "upArm_B9": 38.33,
                "upArm_B10": 52.17,
                "upArm_B11": 32.47,
                "upArm_B12": 43.51,
                "upArm_B13": 38.67,
                "upArm_B14": 47.18,
                "upArm_B15": 40.57,
                "upArm_B16": 33.17,
                "upArm_B17": 35.96,
                "upArm_B18": 39.9,
                "upArm_B19": 32.66,
                "upArm_B20": 49.92
            },
            {
                "time": "15:00",
                "upArm_B1": 43.66,
                "upArm_B2": 34.63,
                "upArm_B3": 40.86,
                "upArm_B4": 36.24,
                "upArm_B5": 31.26,
                "upArm_B6": 43.21,
                "upArm_B7": 37.980000000000004,
                "upArm_B8": 46.28,
                "upArm_B9": 50.08,
                "upArm_B10": 44.15,
                "upArm_B11": 51.8,
                "upArm_B12": 51.17,
                "upArm_B13": 52.1,
                "upArm_B14": 33.18,
                "upArm_B15": 45.71,
                "upArm_B16": 43.01,
                "upArm_B17": 41.72,
                "upArm_B18": 51.2,
                "upArm_B19": 35.32,
                "upArm_B20": 42.68
            },
            {
                "time": "15:15",
                "upArm_B1": 39.14,
                "upArm_B2": 50.61,
                "upArm_B3": 43.43,
                "upArm_B4": 38.47,
                "upArm_B5": 33.66,
                "upArm_B6": 30.12,
                "upArm_B7": 33.91,
                "upArm_B8": 37.85,
                "upArm_B9": 30.82,
                "upArm_B10": 46.83,
                "upArm_B11": 45.42,
                "upArm_B12": 54.620000000000005,
                "upArm_B13": 33.33,
                "upArm_B14": 37.3,
                "upArm_B15": 36.019999999999996,
                "upArm_B16": 31.86,
                "upArm_B17": 51.28,
                "upArm_B18": 53.57,
                "upArm_B19": 46.86,
                "upArm_B20": 30.05
            },
            {
                "time": "15:30",
                "upArm_B1": 42.01,
                "upArm_B2": 54.620000000000005,
                "upArm_B3": 53.81,
                "upArm_B4": 30.31,
                "upArm_B5": 50.55,
                "upArm_B6": 52.19,
                "upArm_B7": 48.42,
                "upArm_B8": 43.1,
                "upArm_B9": 47.92,
                "upArm_B10": 31.48,
                "upArm_B11": 37.34,
                "upArm_B12": 41.93,
                "upArm_B13": 54.97,
                "upArm_B14": 52.3,
                "upArm_B15": 37.17,
                "upArm_B16": 37.36,
                "upArm_B17": 41.72,
                "upArm_B18": 38.14,
                "upArm_B19": 48.04,
                "upArm_B20": 36.7
            },
            {
                "time": "15:45",
                "upArm_B1": 50.83,
                "upArm_B2": 42.22,
                "upArm_B3": 46.8,
                "upArm_B4": 41.55,
                "upArm_B5": 44.44,
                "upArm_B6": 30.96,
                "upArm_B7": 38.769999999999996,
                "upArm_B8": 37.13,
                "upArm_B9": 44.07,
                "upArm_B10": 32.06,
                "upArm_B11": 53.67,
                "upArm_B12": 51.93,
                "upArm_B13": 38.59,
                "upArm_B14": 35.03,
                "upArm_B15": 47.67,
                "upArm_B16": 33.81,
                "upArm_B17": 40.07,
                "upArm_B18": 44.53,
                "upArm_B19": 51.44,
                "upArm_B20": 40.730000000000004
            },
            {
                "time": "16:00",
                "upArm_B1": 44.269999999999996,
                "upArm_B2": 34.32,
                "upArm_B3": 38.42,
                "upArm_B4": 41.92,
                "upArm_B5": 52.03,
                "upArm_B6": 52.269999999999996,
                "upArm_B7": 31.95,
                "upArm_B8": 49.489999999999995,
                "upArm_B9": 52.2,
                "upArm_B10": 40.07,
                "upArm_B11": 52.94,
                "upArm_B12": 46.84,
                "upArm_B13": 37.88,
                "upArm_B14": 35.34,
                "upArm_B15": 46.95,
                "upArm_B16": 31.9,
                "upArm_B17": 43.03,
                "upArm_B18": 43.63,
                "upArm_B19": 43.17,
                "upArm_B20": 41.92
            },
            {
                "time": "16:15",
                "upArm_B1": 54.34,
                "upArm_B2": 50.46,
                "upArm_B3": 53.5,
                "upArm_B4": 54.739999999999995,
                "upArm_B5": 34.36,
                "upArm_B6": 47.510000000000005,
                "upArm_B7": 43.09,
                "upArm_B8": 34.44,
                "upArm_B9": 50.730000000000004,
                "upArm_B10": 44.01,
                "upArm_B11": 37.35,
                "upArm_B12": 30.19,
                "upArm_B13": 48.96,
                "upArm_B14": 36.019999999999996,
                "upArm_B15": 30.89,
                "upArm_B16": 48.2,
                "upArm_B17": 43.35,
                "upArm_B18": 49.89,
                "upArm_B19": 52.92,
                "upArm_B20": 40.59
            }
        ],
    }
    getOption = () => {

        var list = this.state.upArm_B

        var time = new Array();
        var upArm_B1 = new Array();
        var upArm_B2 = new Array();
        var upArm_B3 = new Array();
        var upArm_B4 = new Array();
        var upArm_B5 = new Array();
        var upArm_B6 = new Array();
        var upArm_B7 = new Array();
        var upArm_B8 = new Array();
        var upArm_B9 = new Array();
        var upArm_B10 = new Array();
        var upArm_B11 = new Array();
        var upArm_B12 = new Array();
        var upArm_B13 = new Array();
        var upArm_B14 = new Array();
        var upArm_B15 = new Array();
        var upArm_B16 = new Array();
        var upArm_B17 = new Array();
        var upArm_B18 = new Array();
        var upArm_B19 = new Array();
        var upArm_B20 = new Array();

        for (var i = 0; i < list.length; i++) {
            time[i] = list[i].time;
            upArm_B1[i] = list[i].upArm_B1;
            upArm_B2[i] = list[i].upArm_B2;
            upArm_B3[i] = list[i].upArm_B3;
            upArm_B4[i] = list[i].upArm_B4;
            upArm_B5[i] = list[i].upArm_B5;
            upArm_B6[i] = list[i].upArm_B6;
            upArm_B7[i] = list[i].upArm_B7;
            upArm_B8[i] = list[i].upArm_B8;
            upArm_B9[i] = list[i].upArm_B9;
            upArm_B10[i] = list[i].upArm_B10;
            upArm_B11[i] = list[i].upArm_B11;
            upArm_B12[i] = list[i].upArm_B12;
            upArm_B13[i] = list[i].upArm_B13;
            upArm_B14[i] = list[i].upArm_B14;
            upArm_B15[i] = list[i].upArm_B15;
            upArm_B16[i] = list[i].upArm_B16;
            upArm_B17[i] = list[i].upArm_B17;
            upArm_B18[i] = list[i].upArm_B18;
            upArm_B19[i] = list[i].upArm_B19;
            upArm_B20[i] = list[i].upArm_B20;

        }

        return {
            title: {
                text: '无线测温上臂B相折线图',
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
                    data: upArm_B1,
                    itemStyle: {
                        color: '#027db4'
                    },
                }, {
                    name: '海凤3731',
                    type: 'line',
                    data: upArm_B2,
                    // smooth : true,

                }, {
                    name: '#3电容器',
                    type: 'line',
                    data: upArm_B3,
                    // smooth : true,

                }, {
                    name: '#1所用变',
                    type: 'line',
                    data: upArm_B4,
                    // smooth : true,

                }, {
                    name: '35kVI段母线避雷器',
                    type: 'line',
                    data: upArm_B5,
                    // smooth : true,

                }, {
                    name: '海洪3734',
                    type: 'line',
                    data: upArm_B6,
                    // smooth : true,

                }, {
                    name: '35kVI段母线压变插件',
                    type: 'line',
                    data: upArm_B7,
                    // smooth : true,

                }, {
                    name: '#1主变35kV',
                    type: 'line',
                    data: upArm_B8,
                    // smooth : true,

                }, {
                    name: '海变3733',
                    type: 'line',
                    data: upArm_B9,
                    // smooth : true,

                }, {
                    name: '35kV母分开关',
                    type: 'line',
                    data: upArm_B10,
                    itemStyle: {
                        color: '#027db4'
                    },
                }, {
                    name: '35kV母分插件',
                    type: 'line',
                    data: upArm_B11,
                }, {
                    name: '备用3572开关',
                    type: 'line',
                    data: upArm_B12,
                }, {
                    name: '#2主变35kV开关',
                    type: 'line',
                    data: upArm_B13,
                }, {
                    name: '35kVII段母线避雷器',
                    type: 'line',
                    data: upArm_B14,
                }, {
                    name: '海牌3735开关',
                    type: 'line',
                    data: upArm_B15,
                }, {
                    name: '35kVII段母线压变插件',
                    type: 'line',
                    data: upArm_B16,
                }, {
                    name: '#2电容器开关',
                    type: 'line',
                    data: upArm_B17,
                }, {
                    name: '#2所用变开关',
                    type: 'line',
                    data: upArm_B18,
                }, {
                    name: '#2电抗器开关',
                    type: 'line',
                    data: upArm_B19,
                }, {
                    name: '海时3738开关',
                    type: 'line',
                    data: upArm_B20,
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