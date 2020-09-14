import React, {Component} from "react";
import {Card} from 'antd'
import ReactEcharts from 'echarts-for-react'


export default class MupaibEcharts extends Component {

    state = {
        mupai_B: [
            {
                "time": "14:00",
                "mupai_B1": 54.480000000000004,
                "mupai_B2": 31.83,
                "mupai_B3": 54.870000000000005,
                "mupai_B4": 40.49,
                "mupai_B5": 43.46,
                "mupai_B6": 51.870000000000005,
                "mupai_B7": 38.58,
                "mupai_B8": 37.25,
                "mupai_B9": 50.5,
                "mupai_B10": 52.85,
                "mupai_B11": 35.31,
                "mupai_B12": 41.64,
                "mupai_B13": 35.22,
                "mupai_B14": 31.41,
                "mupai_B15": 40.66,
                "mupai_B16": 34.46,
                "mupai_B17": 54.42,
                "mupai_B18": 38.86,
                "mupai_B19": 41.03,
                "mupai_B20": 43.980000000000004
            },
            {
                "time": "14:15",
                "mupai_B1": 31.05,
                "mupai_B2": 53.14,
                "mupai_B3": 50.75,
                "mupai_B4": 42.42,
                "mupai_B5": 33.41,
                "mupai_B6": 50.489999999999995,
                "mupai_B7": 46.9,
                "mupai_B8": 51.129999999999995,
                "mupai_B9": 45.55,
                "mupai_B10": 31.22,
                "mupai_B11": 41.32,
                "mupai_B12": 43.67,
                "mupai_B13": 50.66,
                "mupai_B14": 54.79,
                "mupai_B15": 39.07,
                "mupai_B16": 54.35,
                "mupai_B17": 34.05,
                "mupai_B18": 50.41,
                "mupai_B19": 43.269999999999996,
                "mupai_B20": 35.14
            },
            {
                "time": "14:30",
                "mupai_B1": 44.38,
                "mupai_B2": 32.57,
                "mupai_B3": 39.64,
                "mupai_B4": 31.61,
                "mupai_B5": 40.67,
                "mupai_B6": 33.56,
                "mupai_B7": 41.26,
                "mupai_B8": 52.68,
                "mupai_B9": 31.36,
                "mupai_B10": 36.82,
                "mupai_B11": 30.3,
                "mupai_B12": 48.4,
                "mupai_B13": 39.08,
                "mupai_B14": 42.71,
                "mupai_B15": 38.980000000000004,
                "mupai_B16": 41.7,
                "mupai_B17": 44.769999999999996,
                "mupai_B18": 50.97,
                "mupai_B19": 53.739999999999995,
                "mupai_B20": 31.44
            },
            {
                "time": "14:45",
                "mupai_B1": 30.72,
                "mupai_B2": 36.42,
                "mupai_B3": 36.08,
                "mupai_B4": 34.11,
                "mupai_B5": 42.22,
                "mupai_B6": 42.18,
                "mupai_B7": 49.45,
                "mupai_B8": 49.11,
                "mupai_B9": 33.98,
                "mupai_B10": 51.15,
                "mupai_B11": 40.56,
                "mupai_B12": 47.629999999999995,
                "mupai_B13": 41.64,
                "mupai_B14": 40.63,
                "mupai_B15": 31.68,
                "mupai_B16": 53.75,
                "mupai_B17": 39.86,
                "mupai_B18": 51.010000000000005,
                "mupai_B19": 38.96,
                "mupai_B20": 32.71
            },
            {
                "time": "15:00",
                "mupai_B1": 31.76,
                "mupai_B2": 47.78,
                "mupai_B3": 36.11,
                "mupai_B4": 35.78,
                "mupai_B5": 35.55,
                "mupai_B6": 51.629999999999995,
                "mupai_B7": 49.64,
                "mupai_B8": 48.93,
                "mupai_B9": 39.59,
                "mupai_B10": 49.03,
                "mupai_B11": 32.86,
                "mupai_B12": 53.94,
                "mupai_B13": 50.08,
                "mupai_B14": 37.54,
                "mupai_B15": 52.489999999999995,
                "mupai_B16": 39.56,
                "mupai_B17": 36.06,
                "mupai_B18": 33.33,
                "mupai_B19": 53.39,
                "mupai_B20": 33.35
            },
            {
                "time": "15:15",
                "mupai_B1": 47.239999999999995,
                "mupai_B2": 44.07,
                "mupai_B3": 52.95,
                "mupai_B4": 33.27,
                "mupai_B5": 38.67,
                "mupai_B6": 36.24,
                "mupai_B7": 40.65,
                "mupai_B8": 32.8,
                "mupai_B9": 31.54,
                "mupai_B10": 43.41,
                "mupai_B11": 33.08,
                "mupai_B12": 46.8,
                "mupai_B13": 52.7,
                "mupai_B14": 42.45,
                "mupai_B15": 34.94,
                "mupai_B16": 54.58,
                "mupai_B17": 30.37,
                "mupai_B18": 53.269999999999996,
                "mupai_B19": 42.7,
                "mupai_B20": 50.120000000000005
            },
            {
                "time": "15:30",
                "mupai_B1": 42.79,
                "mupai_B2": 32.9,
                "mupai_B3": 37.99,
                "mupai_B4": 48.11,
                "mupai_B5": 33.95,
                "mupai_B6": 40.91,
                "mupai_B7": 41.09,
                "mupai_B8": 52.14,
                "mupai_B9": 51.379999999999995,
                "mupai_B10": 50.1,
                "mupai_B11": 36.56,
                "mupai_B12": 34.84,
                "mupai_B13": 33.48,
                "mupai_B14": 43.31,
                "mupai_B15": 39.8,
                "mupai_B16": 49.92,
                "mupai_B17": 47.58,
                "mupai_B18": 36.86,
                "mupai_B19": 51.91,
                "mupai_B20": 42.07
            },
            {
                "time": "15:45",
                "mupai_B1": 31.25,
                "mupai_B2": 32.68,
                "mupai_B3": 54.53,
                "mupai_B4": 52.379999999999995,
                "mupai_B5": 47.35,
                "mupai_B6": 50.56,
                "mupai_B7": 48.84,
                "mupai_B8": 37.36,
                "mupai_B9": 52.81,
                "mupai_B10": 37.76,
                "mupai_B11": 40.04,
                "mupai_B12": 36.17,
                "mupai_B13": 54.35,
                "mupai_B14": 37.79,
                "mupai_B15": 44.66,
                "mupai_B16": 46.96,
                "mupai_B17": 37.01,
                "mupai_B18": 50.31,
                "mupai_B19": 44.480000000000004,
                "mupai_B20": 30.37
            },
            {
                "time": "16:00",
                "mupai_B1": 46.89,
                "mupai_B2": 36.03,
                "mupai_B3": 41.5,
                "mupai_B4": 34.16,
                "mupai_B5": 31.55,
                "mupai_B6": 35.56,
                "mupai_B7": 52.32,
                "mupai_B8": 45.45,
                "mupai_B9": 47.760000000000005,
                "mupai_B10": 47.769999999999996,
                "mupai_B11": 53.989999999999995,
                "mupai_B12": 35.55,
                "mupai_B13": 36.24,
                "mupai_B14": 44.43,
                "mupai_B15": 32.65,
                "mupai_B16": 50.71,
                "mupai_B17": 39.46,
                "mupai_B18": 48.379999999999995,
                "mupai_B19": 53.480000000000004,
                "mupai_B20": 48.04
            },
            {
                "time": "16:15",
                "mupai_B1": 33.96,
                "mupai_B2": 44.47,
                "mupai_B3": 32.62,
                "mupai_B4": 46.379999999999995,
                "mupai_B5": 47.989999999999995,
                "mupai_B6": 40.28,
                "mupai_B7": 42.65,
                "mupai_B8": 42.44,
                "mupai_B9": 39.41,
                "mupai_B10": 32.57,
                "mupai_B11": 35.59,
                "mupai_B12": 40.31,
                "mupai_B13": 31.01,
                "mupai_B14": 45.88,
                "mupai_B15": 49.260000000000005,
                "mupai_B16": 31.8,
                "mupai_B17": 53.81,
                "mupai_B18": 51.260000000000005,
                "mupai_B19": 44.93,
                "mupai_B20": 48.34
            }
        ],
    }
    getOption = () => {

        var list = this.state.mupai_B

        var time = new Array();
        var mupai_B1 = new Array();
        var mupai_B2 = new Array();
        var mupai_B3 = new Array();
        var mupai_B4 = new Array();
        var mupai_B5 = new Array();
        var mupai_B6 = new Array();
        var mupai_B7 = new Array();
        var mupai_B8 = new Array();
        var mupai_B9 = new Array();
        var mupai_B10 = new Array();
        var mupai_B11 = new Array();
        var mupai_B12 = new Array();
        var mupai_B13 = new Array();
        var mupai_B14 = new Array();
        var mupai_B15 = new Array();
        var mupai_B16 = new Array();
        var mupai_B17 = new Array();
        var mupai_B18 = new Array();
        var mupai_B19 = new Array();
        var mupai_B20 = new Array();

        for (var i = 0; i < list.length; i++) {
            time[i] = list[i].time;
            mupai_B1[i] = list[i].mupai_B1;
            mupai_B2[i] = list[i].mupai_B2;
            mupai_B3[i] = list[i].mupai_B3;
            mupai_B4[i] = list[i].mupai_B4;
            mupai_B5[i] = list[i].mupai_B5;
            mupai_B6[i] = list[i].mupai_B6;
            mupai_B7[i] = list[i].mupai_B7;
            mupai_B8[i] = list[i].mupai_B8;
            mupai_B9[i] = list[i].mupai_B9;
            mupai_B10[i] = list[i].mupai_B10;
            mupai_B11[i] = list[i].mupai_B11;
            mupai_B12[i] = list[i].mupai_B12;
            mupai_B13[i] = list[i].mupai_B13;
            mupai_B14[i] = list[i].mupai_B14;
            mupai_B15[i] = list[i].mupai_B15;
            mupai_B16[i] = list[i].mupai_B16;
            mupai_B17[i] = list[i].mupai_B17;
            mupai_B18[i] = list[i].mupai_B18;
            mupai_B19[i] = list[i].mupai_B19;
            mupai_B20[i] = list[i].mupai_B20;

        }

        return {
            title: {
                text: '无线测温母排B相折线图',
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
                    data: mupai_B1,
                    itemStyle: {
                        color: '#027db4'
                    },
                }, {
                    name: '海凤3731',
                    type: 'line',
                    data: mupai_B2,
                    // smooth : true,

                }, {
                    name: '#3电容器',
                    type: 'line',
                    data: mupai_B3,
                    // smooth : true,

                }, {
                    name: '#1所用变',
                    type: 'line',
                    data: mupai_B4,
                    // smooth : true,

                }, {
                    name: '35kVI段母线避雷器',
                    type: 'line',
                    data: mupai_B5,
                    // smooth : true,

                }, {
                    name: '海洪3734',
                    type: 'line',
                    data: mupai_B6,
                    // smooth : true,

                }, {
                    name: '35kVI段母线压变插件',
                    type: 'line',
                    data: mupai_B7,
                    // smooth : true,

                }, {
                    name: '#1主变35kV',
                    type: 'line',
                    data: mupai_B8,
                    // smooth : true,

                }, {
                    name: '海变3733',
                    type: 'line',
                    data: mupai_B9,
                    // smooth : true,

                }, {
                    name: '35kV母分开关',
                    type: 'line',
                    data: mupai_B10,
                    itemStyle: {
                        color: '#027db4'
                    },
                }, {
                    name: '35kV母分插件',
                    type: 'line',
                    data: mupai_B11,
                }, {
                    name: '备用3572开关',
                    type: 'line',
                    data: mupai_B12,
                }, {
                    name: '#2主变35kV开关',
                    type: 'line',
                    data: mupai_B13,
                }, {
                    name: '35kVII段母线避雷器',
                    type: 'line',
                    data: mupai_B14,
                }, {
                    name: '海牌3735开关',
                    type: 'line',
                    data: mupai_B15,
                }, {
                    name: '35kVII段母线压变插件',
                    type: 'line',
                    data: mupai_B16,
                }, {
                    name: '#2电容器开关',
                    type: 'line',
                    data: mupai_B17,
                }, {
                    name: '#2所用变开关',
                    type: 'line',
                    data: mupai_B18,
                }, {
                    name: '#2电抗器开关',
                    type: 'line',
                    data: mupai_B19,
                }, {
                    name: '海时3738开关',
                    type: 'line',
                    data: mupai_B20,
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