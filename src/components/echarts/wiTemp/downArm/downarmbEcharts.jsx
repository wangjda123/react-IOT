import React, {Component} from "react";
import {Card} from 'antd'
import ReactEcharts from 'echarts-for-react'


export default class DownarmbEcharts extends Component {

    state = {
        downArm_B: [
            {
                "time": "14:00",
                "downArm_B1": 41.38,
                "downArm_B2": 44.96,
                "downArm_B3": 52.28,
                "downArm_B4": 33.22,
                "downArm_B5": 33.75,
                "downArm_B6": 48.379999999999995,
                "downArm_B7": 42.480000000000004,
                "downArm_B8": 51.96,
                "downArm_B9": 47.8,
                "downArm_B10": 49.03,
                "downArm_B11": 48.129999999999995,
                "downArm_B12": 33.89,
                "downArm_B13": 42.83,
                "downArm_B14": 35.46,
                "downArm_B15": 52.04,
                "downArm_B16": 47.47,
                "downArm_B17": 33.4,
                "downArm_B18": 53.64,
                "downArm_B19": 45.5,
                "downArm_B20": 42.16
            },
            {
                "time": "14:15",
                "downArm_B1": 49.2,
                "downArm_B2": 40.72,
                "downArm_B3": 50.989999999999995,
                "downArm_B4": 48.72,
                "downArm_B5": 38.769999999999996,
                "downArm_B6": 37.53,
                "downArm_B7": 42.43,
                "downArm_B8": 35.12,
                "downArm_B9": 52.69,
                "downArm_B10": 50.85,
                "downArm_B11": 52.8,
                "downArm_B12": 31.36,
                "downArm_B13": 43.769999999999996,
                "downArm_B14": 40.92,
                "downArm_B15": 42.03,
                "downArm_B16": 51.39,
                "downArm_B17": 51.05,
                "downArm_B18": 30.91,
                "downArm_B19": 32.79,
                "downArm_B20": 49.730000000000004
            },
            {
                "time": "14:30",
                "downArm_B1": 40.83,
                "downArm_B2": 46.480000000000004,
                "downArm_B3": 48.92,
                "downArm_B4": 44.79,
                "downArm_B5": 50.58,
                "downArm_B6": 54.09,
                "downArm_B7": 53.53,
                "downArm_B8": 38.74,
                "downArm_B9": 33.8,
                "downArm_B10": 31.97,
                "downArm_B11": 54.47,
                "downArm_B12": 32.82,
                "downArm_B13": 47.239999999999995,
                "downArm_B14": 34.4,
                "downArm_B15": 54.34,
                "downArm_B16": 39.93,
                "downArm_B17": 33.3,
                "downArm_B18": 36.95,
                "downArm_B19": 47.43,
                "downArm_B20": 31.08
            },
            {
                "time": "14:45",
                "downArm_B1": 54.79,
                "downArm_B2": 51.28,
                "downArm_B3": 44.65,
                "downArm_B4": 38.17,
                "downArm_B5": 46.45,
                "downArm_B6": 53.84,
                "downArm_B7": 31.44,
                "downArm_B8": 47.129999999999995,
                "downArm_B9": 43.85,
                "downArm_B10": 31.58,
                "downArm_B11": 31.43,
                "downArm_B12": 51.75,
                "downArm_B13": 51.989999999999995,
                "downArm_B14": 41.51,
                "downArm_B15": 51.83,
                "downArm_B16": 47.47,
                "downArm_B17": 34.29,
                "downArm_B18": 31.28,
                "downArm_B19": 35.480000000000004,
                "downArm_B20": 49.69
            },
            {
                "time": "15:00",
                "downArm_B1": 43.730000000000004,
                "downArm_B2": 44.63,
                "downArm_B3": 36.44,
                "downArm_B4": 37.93,
                "downArm_B5": 42.41,
                "downArm_B6": 38.58,
                "downArm_B7": 49.22,
                "downArm_B8": 35.01,
                "downArm_B9": 54.56,
                "downArm_B10": 52.8,
                "downArm_B11": 42.79,
                "downArm_B12": 32.46,
                "downArm_B13": 51.18,
                "downArm_B14": 32.57,
                "downArm_B15": 33.58,
                "downArm_B16": 49.56,
                "downArm_B17": 51.22,
                "downArm_B18": 39.9,
                "downArm_B19": 52.870000000000005,
                "downArm_B20": 30.17
            },
            {
                "time": "15:15",
                "downArm_B1": 30.95,
                "downArm_B2": 32.32,
                "downArm_B3": 42.39,
                "downArm_B4": 52.2,
                "downArm_B5": 51.519999999999996,
                "downArm_B6": 48.21,
                "downArm_B7": 42.24,
                "downArm_B8": 43.29,
                "downArm_B9": 45.64,
                "downArm_B10": 40.72,
                "downArm_B11": 50.32,
                "downArm_B12": 41.3,
                "downArm_B13": 44.79,
                "downArm_B14": 52.69,
                "downArm_B15": 37.26,
                "downArm_B16": 32.32,
                "downArm_B17": 31.33,
                "downArm_B18": 34.63,
                "downArm_B19": 52.75,
                "downArm_B20": 54.96
            },
            {
                "time": "15:30",
                "downArm_B1": 39.75,
                "downArm_B2": 45.34,
                "downArm_B3": 45.01,
                "downArm_B4": 45.53,
                "downArm_B5": 48.06,
                "downArm_B6": 36.93,
                "downArm_B7": 43.26,
                "downArm_B8": 36.09,
                "downArm_B9": 35.32,
                "downArm_B10": 32.46,
                "downArm_B11": 45.53,
                "downArm_B12": 45.54,
                "downArm_B13": 31.13,
                "downArm_B14": 36.25,
                "downArm_B15": 52.760000000000005,
                "downArm_B16": 39.19,
                "downArm_B17": 41.47,
                "downArm_B18": 44.14,
                "downArm_B19": 33.6,
                "downArm_B20": 37.87
            },
            {
                "time": "15:45",
                "downArm_B1": 45.38,
                "downArm_B2": 50.519999999999996,
                "downArm_B3": 39.37,
                "downArm_B4": 52.85,
                "downArm_B5": 44.05,
                "downArm_B6": 50.54,
                "downArm_B7": 36.230000000000004,
                "downArm_B8": 53.16,
                "downArm_B9": 51.18,
                "downArm_B10": 37.96,
                "downArm_B11": 31.72,
                "downArm_B12": 32.89,
                "downArm_B13": 41.97,
                "downArm_B14": 39.33,
                "downArm_B15": 47.8,
                "downArm_B16": 48.64,
                "downArm_B17": 31.25,
                "downArm_B18": 45.65,
                "downArm_B19": 31.25,
                "downArm_B20": 48.57
            },
            {
                "time": "16:00",
                "downArm_B1": 51.81,
                "downArm_B2": 36.89,
                "downArm_B3": 44.44,
                "downArm_B4": 38.75,
                "downArm_B5": 41.59,
                "downArm_B6": 32.14,
                "downArm_B7": 43.12,
                "downArm_B8": 40.79,
                "downArm_B9": 49.31,
                "downArm_B10": 41.46,
                "downArm_B11": 49.989999999999995,
                "downArm_B12": 50.010000000000005,
                "downArm_B13": 53.739999999999995,
                "downArm_B14": 51.519999999999996,
                "downArm_B15": 37.64,
                "downArm_B16": 32.31,
                "downArm_B17": 30.83,
                "downArm_B18": 34.93,
                "downArm_B19": 54.22,
                "downArm_B20": 37.38
            },
            {
                "time": "16:15",
                "downArm_B1": 32.27,
                "downArm_B2": 50.6,
                "downArm_B3": 51.53,
                "downArm_B4": 45.07,
                "downArm_B5": 34.28,
                "downArm_B6": 31.43,
                "downArm_B7": 30.12,
                "downArm_B8": 49.21,
                "downArm_B9": 53.22,
                "downArm_B10": 31.15,
                "downArm_B11": 52.260000000000005,
                "downArm_B12": 40.53,
                "downArm_B13": 31.91,
                "downArm_B14": 51.91,
                "downArm_B15": 42.42,
                "downArm_B16": 35.05,
                "downArm_B17": 41.54,
                "downArm_B18": 45.63,
                "downArm_B19": 48.07,
                "downArm_B20": 30.4
            }
        ],
    }
    getOption = () => {

        var list = this.state.downArm_B

        var time = new Array();
        var downArm_B1 = new Array();
        var downArm_B2 = new Array();
        var downArm_B3 = new Array();
        var downArm_B4 = new Array();
        var downArm_B5 = new Array();
        var downArm_B6 = new Array();
        var downArm_B7 = new Array();
        var downArm_B8 = new Array();
        var downArm_B9 = new Array();
        var downArm_B10 = new Array();
        var downArm_B11 = new Array();
        var downArm_B12 = new Array();
        var downArm_B13 = new Array();
        var downArm_B14 = new Array();
        var downArm_B15 = new Array();
        var downArm_B16 = new Array();
        var downArm_B17 = new Array();
        var downArm_B18 = new Array();
        var downArm_B19 = new Array();
        var downArm_B20 = new Array();

        for (var i = 0; i < list.length; i++) {
            time[i] = list[i].time;
            downArm_B1[i] = list[i].downArm_B1;
            downArm_B2[i] = list[i].downArm_B2;
            downArm_B3[i] = list[i].downArm_B3;
            downArm_B4[i] = list[i].downArm_B4;
            downArm_B5[i] = list[i].downArm_B5;
            downArm_B6[i] = list[i].downArm_B6;
            downArm_B7[i] = list[i].downArm_B7;
            downArm_B8[i] = list[i].downArm_B8;
            downArm_B9[i] = list[i].downArm_B9;
            downArm_B10[i] = list[i].downArm_B10;
            downArm_B11[i] = list[i].downArm_B11;
            downArm_B12[i] = list[i].downArm_B12;
            downArm_B13[i] = list[i].downArm_B13;
            downArm_B14[i] = list[i].downArm_B14;
            downArm_B15[i] = list[i].downArm_B15;
            downArm_B16[i] = list[i].downArm_B16;
            downArm_B17[i] = list[i].downArm_B17;
            downArm_B18[i] = list[i].downArm_B18;
            downArm_B19[i] = list[i].downArm_B19;
            downArm_B20[i] = list[i].downArm_B20;

        }

        return {
            title: {
                text: '无线测温下臂B相折线图',
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
                    data: downArm_B1,
                    itemStyle: {
                        color: '#027db4'
                    },
                }, {
                    name: '海凤3731',
                    type: 'line',
                    data: downArm_B2,
                    // smooth : true,

                }, {
                    name: '#3电容器',
                    type: 'line',
                    data: downArm_B3,
                    // smooth : true,

                }, {
                    name: '#1所用变',
                    type: 'line',
                    data: downArm_B4,
                    // smooth : true,

                }, {
                    name: '35kVI段母线避雷器',
                    type: 'line',
                    data: downArm_B5,
                    // smooth : true,

                }, {
                    name: '海洪3734',
                    type: 'line',
                    data: downArm_B6,
                    // smooth : true,

                }, {
                    name: '35kVI段母线压变插件',
                    type: 'line',
                    data: downArm_B7,
                    // smooth : true,

                }, {
                    name: '#1主变35kV',
                    type: 'line',
                    data: downArm_B8,
                    // smooth : true,

                }, {
                    name: '海变3733',
                    type: 'line',
                    data: downArm_B9,
                    // smooth : true,

                }, {
                    name: '35kV母分开关',
                    type: 'line',
                    data: downArm_B10,
                    itemStyle: {
                        color: '#027db4'
                    },
                }, {
                    name: '35kV母分插件',
                    type: 'line',
                    data: downArm_B11,
                }, {
                    name: '备用3572开关',
                    type: 'line',
                    data: downArm_B12,
                }, {
                    name: '#2主变35kV开关',
                    type: 'line',
                    data: downArm_B13,
                }, {
                    name: '35kVII段母线避雷器',
                    type: 'line',
                    data: downArm_B14,
                }, {
                    name: '海牌3735开关',
                    type: 'line',
                    data: downArm_B15,
                }, {
                    name: '35kVII段母线压变插件',
                    type: 'line',
                    data: downArm_B16,
                }, {
                    name: '#2电容器开关',
                    type: 'line',
                    data: downArm_B17,
                }, {
                    name: '#2所用变开关',
                    type: 'line',
                    data: downArm_B18,
                }, {
                    name: '#2电抗器开关',
                    type: 'line',
                    data: downArm_B19,
                }, {
                    name: '海时3738开关',
                    type: 'line',
                    data: downArm_B20,
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