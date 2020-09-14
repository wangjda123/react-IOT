import React, {Component} from "react";
import {Card} from 'antd'
import ReactEcharts from 'echarts-for-react'


export default class MupaicEcharts extends Component {

    state = {
        mupai_C: [
            {
                "time": "14:00",
                "mupai_C1": 30.29,
                "mupai_C2": 46.39,
                "mupai_C3": 52.41,
                "mupai_C4": 53.879999999999995,
                "mupai_C5": 42.87,
                "mupai_C6": 31.34,
                "mupai_C7": 45.86,
                "mupai_C8": 30.78,
                "mupai_C9": 32.92,
                "mupai_C10": 42.28,
                "mupai_C11": 35.67,
                "mupai_C12": 43.05,
                "mupai_C13": 36.83,
                "mupai_C14": 45.62,
                "mupai_C15": 38.16,
                "mupai_C16": 38.72,
                "mupai_C17": 51.519999999999996,
                "mupai_C18": 47.379999999999995,
                "mupai_C19": 47.95,
                "mupai_C20": 35.72
            },
            {
                "time": "14:15",
                "mupai_C1": 30.01,
                "mupai_C2": 52.93,
                "mupai_C3": 48.519999999999996,
                "mupai_C4": 35.56,
                "mupai_C5": 51.81,
                "mupai_C6": 50.14,
                "mupai_C7": 45.63,
                "mupai_C8": 39.1,
                "mupai_C9": 42.42,
                "mupai_C10": 31.88,
                "mupai_C11": 39.519999999999996,
                "mupai_C12": 50.79,
                "mupai_C13": 42.63,
                "mupai_C14": 45.19,
                "mupai_C15": 32.55,
                "mupai_C16": 45.95,
                "mupai_C17": 36.2,
                "mupai_C18": 52.94,
                "mupai_C19": 31.34,
                "mupai_C20": 54.55
            },
            {
                "time": "14:30",
                "mupai_C1": 42.63,
                "mupai_C2": 35.87,
                "mupai_C3": 48.870000000000005,
                "mupai_C4": 44.730000000000004,
                "mupai_C5": 50.61,
                "mupai_C6": 46.96,
                "mupai_C7": 40.019999999999996,
                "mupai_C8": 31.2,
                "mupai_C9": 46.16,
                "mupai_C10": 43.44,
                "mupai_C11": 35.71,
                "mupai_C12": 52.11,
                "mupai_C13": 37.83,
                "mupai_C14": 44.69,
                "mupai_C15": 50.480000000000004,
                "mupai_C16": 38.769999999999996,
                "mupai_C17": 43.04,
                "mupai_C18": 38.74,
                "mupai_C19": 35.85,
                "mupai_C20": 46.4
            },
            {
                "time": "14:45",
                "mupai_C1": 47.82,
                "mupai_C2": 31.74,
                "mupai_C3": 40.68,
                "mupai_C4": 49.35,
                "mupai_C5": 32.74,
                "mupai_C6": 51.260000000000005,
                "mupai_C7": 51.35,
                "mupai_C8": 49.5,
                "mupai_C9": 47.36,
                "mupai_C10": 40.04,
                "mupai_C11": 52.55,
                "mupai_C12": 34.89,
                "mupai_C13": 50.55,
                "mupai_C14": 40.83,
                "mupai_C15": 48.3,
                "mupai_C16": 32.34,
                "mupai_C17": 43.41,
                "mupai_C18": 53.64,
                "mupai_C19": 31.39,
                "mupai_C20": 42.79
            },
            {
                "time": "15:00",
                "mupai_C1": 45.2,
                "mupai_C2": 54.91,
                "mupai_C3": 53.32,
                "mupai_C4": 40.67,
                "mupai_C5": 31.81,
                "mupai_C6": 36.41,
                "mupai_C7": 42.08,
                "mupai_C8": 40.82,
                "mupai_C9": 52.17,
                "mupai_C10": 48.629999999999995,
                "mupai_C11": 39.56,
                "mupai_C12": 54.57,
                "mupai_C13": 49.06,
                "mupai_C14": 35.51,
                "mupai_C15": 42.3,
                "mupai_C16": 48.260000000000005,
                "mupai_C17": 32.96,
                "mupai_C18": 30.3,
                "mupai_C19": 46.44,
                "mupai_C20": 38.39
            },
            {
                "time": "15:15",
                "mupai_C1": 54.519999999999996,
                "mupai_C2": 47.89,
                "mupai_C3": 30.22,
                "mupai_C4": 47.39,
                "mupai_C5": 30.74,
                "mupai_C6": 35.46,
                "mupai_C7": 41.57,
                "mupai_C8": 47.96,
                "mupai_C9": 39.14,
                "mupai_C10": 32.03,
                "mupai_C11": 30.01,
                "mupai_C12": 53.269999999999996,
                "mupai_C13": 34.83,
                "mupai_C14": 50.67,
                "mupai_C15": 41.35,
                "mupai_C16": 50.28,
                "mupai_C17": 53.59,
                "mupai_C18": 30.32,
                "mupai_C19": 43.81,
                "mupai_C20": 45.03
            },
            {
                "time": "15:30",
                "mupai_C1": 40.06,
                "mupai_C2": 44.26,
                "mupai_C3": 44.37,
                "mupai_C4": 48.08,
                "mupai_C5": 46.58,
                "mupai_C6": 44.75,
                "mupai_C7": 37.61,
                "mupai_C8": 35.019999999999996,
                "mupai_C9": 43.03,
                "mupai_C10": 37.35,
                "mupai_C11": 36.28,
                "mupai_C12": 40.59,
                "mupai_C13": 52.06,
                "mupai_C14": 33.69,
                "mupai_C15": 41.22,
                "mupai_C16": 40.94,
                "mupai_C17": 46,
                "mupai_C18": 30.08,
                "mupai_C19": 39.56,
                "mupai_C20": 49.17
            },
            {
                "time": "15:45",
                "mupai_C1": 44.33,
                "mupai_C2": 54.84,
                "mupai_C3": 34.53,
                "mupai_C4": 49.510000000000005,
                "mupai_C5": 39.4,
                "mupai_C6": 52.58,
                "mupai_C7": 49.08,
                "mupai_C8": 36.19,
                "mupai_C9": 54.370000000000005,
                "mupai_C10": 50.879999999999995,
                "mupai_C11": 40.94,
                "mupai_C12": 37.54,
                "mupai_C13": 45.22,
                "mupai_C14": 37.32,
                "mupai_C15": 42.59,
                "mupai_C16": 32.36,
                "mupai_C17": 31.15,
                "mupai_C18": 52.15,
                "mupai_C19": 34.79,
                "mupai_C20": 53.71
            },
            {
                "time": "16:00",
                "mupai_C1": 50.36,
                "mupai_C2": 48.21,
                "mupai_C3": 48.97,
                "mupai_C4": 52.89,
                "mupai_C5": 52.879999999999995,
                "mupai_C6": 32.63,
                "mupai_C7": 48.019999999999996,
                "mupai_C8": 44.42,
                "mupai_C9": 41.65,
                "mupai_C10": 46.3,
                "mupai_C11": 31.76,
                "mupai_C12": 50.46,
                "mupai_C13": 46.67,
                "mupai_C14": 40.99,
                "mupai_C15": 35.51,
                "mupai_C16": 38.7,
                "mupai_C17": 38.03,
                "mupai_C18": 40.66,
                "mupai_C19": 36.93,
                "mupai_C20": 49.629999999999995
            },
            {
                "time": "16:15",
                "mupai_C1": 40.53,
                "mupai_C2": 36.22,
                "mupai_C3": 45.519999999999996,
                "mupai_C4": 53.47,
                "mupai_C5": 39.18,
                "mupai_C6": 52.31,
                "mupai_C7": 43.04,
                "mupai_C8": 52.760000000000005,
                "mupai_C9": 32.24,
                "mupai_C10": 31.33,
                "mupai_C11": 34.39,
                "mupai_C12": 34,
                "mupai_C13": 41.68,
                "mupai_C14": 34.3,
                "mupai_C15": 50.239999999999995,
                "mupai_C16": 40.69,
                "mupai_C17": 47.17,
                "mupai_C18": 48.08,
                "mupai_C19": 40.78,
                "mupai_C20": 34.08
            }
        ],
    }
    getOption = () => {

        var list = this.state.mupai_C

        var time = new Array();
        var mupai_C1 = new Array();
        var mupai_C2 = new Array();
        var mupai_C3 = new Array();
        var mupai_C4 = new Array();
        var mupai_C5 = new Array();
        var mupai_C6 = new Array();
        var mupai_C7 = new Array();
        var mupai_C8 = new Array();
        var mupai_C9 = new Array();
        var mupai_C10 = new Array();
        var mupai_C11 = new Array();
        var mupai_C12 = new Array();
        var mupai_C13 = new Array();
        var mupai_C14 = new Array();
        var mupai_C15 = new Array();
        var mupai_C16 = new Array();
        var mupai_C17 = new Array();
        var mupai_C18 = new Array();
        var mupai_C19 = new Array();
        var mupai_C20 = new Array();

        for (var i = 0; i < list.length; i++) {
            time[i] = list[i].time;
            mupai_C1[i] = list[i].mupai_C1;
            mupai_C2[i] = list[i].mupai_C2;
            mupai_C3[i] = list[i].mupai_C3;
            mupai_C4[i] = list[i].mupai_C4;
            mupai_C5[i] = list[i].mupai_C5;
            mupai_C6[i] = list[i].mupai_C6;
            mupai_C7[i] = list[i].mupai_C7;
            mupai_C8[i] = list[i].mupai_C8;
            mupai_C9[i] = list[i].mupai_C9;
            mupai_C10[i] = list[i].mupai_C10;
            mupai_C11[i] = list[i].mupai_C11;
            mupai_C12[i] = list[i].mupai_C12;
            mupai_C13[i] = list[i].mupai_C13;
            mupai_C14[i] = list[i].mupai_C14;
            mupai_C15[i] = list[i].mupai_C15;
            mupai_C16[i] = list[i].mupai_C16;
            mupai_C17[i] = list[i].mupai_C17;
            mupai_C18[i] = list[i].mupai_C18;
            mupai_C19[i] = list[i].mupai_C19;
            mupai_C20[i] = list[i].mupai_C20;

        }

        return {
            title: {
                text: '无线测温母排C相折线图',
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
                    data: mupai_C1,
                    itemStyle: {
                        color: '#027db4'
                    },
                }, {
                    name: '海凤3731',
                    type: 'line',
                    data: mupai_C2,
                    // smooth : true,

                }, {
                    name: '#3电容器',
                    type: 'line',
                    data: mupai_C3,
                    // smooth : true,

                }, {
                    name: '#1所用变',
                    type: 'line',
                    data: mupai_C4,
                    // smooth : true,

                }, {
                    name: '35kVI段母线避雷器',
                    type: 'line',
                    data: mupai_C5,
                    // smooth : true,

                }, {
                    name: '海洪3734',
                    type: 'line',
                    data: mupai_C6,
                    // smooth : true,

                }, {
                    name: '35kVI段母线压变插件',
                    type: 'line',
                    data: mupai_C7,
                    // smooth : true,

                }, {
                    name: '#1主变35kV',
                    type: 'line',
                    data: mupai_C8,
                    // smooth : true,

                }, {
                    name: '海变3733',
                    type: 'line',
                    data: mupai_C9,
                    // smooth : true,

                }, {
                    name: '35kV母分开关',
                    type: 'line',
                    data: mupai_C10,
                    itemStyle: {
                        color: '#027db4'
                    },
                }, {
                    name: '35kV母分插件',
                    type: 'line',
                    data: mupai_C11,
                }, {
                    name: '备用3572开关',
                    type: 'line',
                    data: mupai_C12,
                }, {
                    name: '#2主变35kV开关',
                    type: 'line',
                    data: mupai_C13,
                }, {
                    name: '35kVII段母线避雷器',
                    type: 'line',
                    data: mupai_C14,
                }, {
                    name: '海牌3735开关',
                    type: 'line',
                    data: mupai_C15,
                }, {
                    name: '35kVII段母线压变插件',
                    type: 'line',
                    data: mupai_C16,
                }, {
                    name: '#2电容器开关',
                    type: 'line',
                    data: mupai_C17,
                }, {
                    name: '#2所用变开关',
                    type: 'line',
                    data: mupai_C18,
                }, {
                    name: '#2电抗器开关',
                    type: 'line',
                    data: mupai_C19,
                }, {
                    name: '海时3738开关',
                    type: 'line',
                    data: mupai_C20,
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