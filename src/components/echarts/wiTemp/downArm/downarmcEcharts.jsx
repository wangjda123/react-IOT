import React, {Component} from "react";
import {Card} from 'antd'
import ReactEcharts from 'echarts-for-react'


export default class DownarmcEcharts extends Component {

    state = {
        downArm_C: [
            {
                "time": "14:00",
                "downArm_C1": 47.47,
                "downArm_C2": 32.33,
                "downArm_C3": 48.66,
                "downArm_C4": 31.33,
                "downArm_C5": 48.35,
                "downArm_C6": 32.54,
                "downArm_C7": 32.38,
                "downArm_C8": 54.19,
                "downArm_C9": 50.94,
                "downArm_C10": 34.86,
                "downArm_C11": 38,
                "downArm_C12": 52.7,
                "downArm_C13": 34.93,
                "downArm_C14": 35.5,
                "downArm_C15": 33.32,
                "downArm_C16": 40.51,
                "downArm_C17": 33.9,
                "downArm_C18": 46.57,
                "downArm_C19": 43.69,
                "downArm_C20": 41.32
            },
            {
                "time": "14:15",
                "downArm_C1": 49.35,
                "downArm_C2": 37.99,
                "downArm_C3": 32.17,
                "downArm_C4": 30.08,
                "downArm_C5": 35.07,
                "downArm_C6": 40.7,
                "downArm_C7": 39.55,
                "downArm_C8": 38.78,
                "downArm_C9": 40.34,
                "downArm_C10": 39.9,
                "downArm_C11": 38.22,
                "downArm_C12": 47.17,
                "downArm_C13": 42.89,
                "downArm_C14": 35.59,
                "downArm_C15": 35.08,
                "downArm_C16": 51.42,
                "downArm_C17": 40.71,
                "downArm_C18": 33.13,
                "downArm_C19": 40.13,
                "downArm_C20": 31.84
            },
            {
                "time": "14:30",
                "downArm_C1": 32.3,
                "downArm_C2": 47.1,
                "downArm_C3": 49.760000000000005,
                "downArm_C4": 51.81,
                "downArm_C5": 52.79,
                "downArm_C6": 36.28,
                "downArm_C7": 39.3,
                "downArm_C8": 46.85,
                "downArm_C9": 38.34,
                "downArm_C10": 53.620000000000005,
                "downArm_C11": 33.86,
                "downArm_C12": 43.769999999999996,
                "downArm_C13": 42.3,
                "downArm_C14": 32.89,
                "downArm_C15": 31.38,
                "downArm_C16": 41,
                "downArm_C17": 47.66,
                "downArm_C18": 48.769999999999996,
                "downArm_C19": 30.96,
                "downArm_C20": 54.18
            },
            {
                "time": "14:45",
                "downArm_C1": 47.69,
                "downArm_C2": 34.29,
                "downArm_C3": 48.42,
                "downArm_C4": 30.34,
                "downArm_C5": 42.55,
                "downArm_C6": 40.89,
                "downArm_C7": 43.68,
                "downArm_C8": 37.31,
                "downArm_C9": 43.21,
                "downArm_C10": 42.269999999999996,
                "downArm_C11": 41.01,
                "downArm_C12": 36.56,
                "downArm_C13": 47.019999999999996,
                "downArm_C14": 51.19,
                "downArm_C15": 44.33,
                "downArm_C16": 40.59,
                "downArm_C17": 50.2,
                "downArm_C18": 41.97,
                "downArm_C19": 39.87,
                "downArm_C20": 35.71
            },
            {
                "time": "15:00",
                "downArm_C1": 43.36,
                "downArm_C2": 51.21,
                "downArm_C3": 46.41,
                "downArm_C4": 34.93,
                "downArm_C5": 54.58,
                "downArm_C6": 41.25,
                "downArm_C7": 49.44,
                "downArm_C8": 49.3,
                "downArm_C9": 48.86,
                "downArm_C10": 53.78,
                "downArm_C11": 43.96,
                "downArm_C12": 52.07,
                "downArm_C13": 31.81,
                "downArm_C14": 46.7,
                "downArm_C15": 45.82,
                "downArm_C16": 38.22,
                "downArm_C17": 40.38,
                "downArm_C18": 40.71,
                "downArm_C19": 53.28,
                "downArm_C20": 33.14
            },
            {
                "time": "15:15",
                "downArm_C1": 40.22,
                "downArm_C2": 49.75,
                "downArm_C3": 34.71,
                "downArm_C4": 30.91,
                "downArm_C5": 42.06,
                "downArm_C6": 38.33,
                "downArm_C7": 54.629999999999995,
                "downArm_C8": 49.32,
                "downArm_C9": 32.37,
                "downArm_C10": 48.83,
                "downArm_C11": 51.58,
                "downArm_C12": 43.54,
                "downArm_C13": 52.06,
                "downArm_C14": 45.06,
                "downArm_C15": 36.05,
                "downArm_C16": 30.8,
                "downArm_C17": 52.35,
                "downArm_C18": 53.489999999999995,
                "downArm_C19": 46.34,
                "downArm_C20": 31.81
            },
            {
                "time": "15:30",
                "downArm_C1": 42.26,
                "downArm_C2": 40.96,
                "downArm_C3": 45.65,
                "downArm_C4": 31.76,
                "downArm_C5": 35.43,
                "downArm_C6": 38.46,
                "downArm_C7": 35.86,
                "downArm_C8": 47.379999999999995,
                "downArm_C9": 44.92,
                "downArm_C10": 33.53,
                "downArm_C11": 39.07,
                "downArm_C12": 41.89,
                "downArm_C13": 53.97,
                "downArm_C14": 48.03,
                "downArm_C15": 50.18,
                "downArm_C16": 48.89,
                "downArm_C17": 52.46,
                "downArm_C18": 40.44,
                "downArm_C19": 50.06,
                "downArm_C20": 53.61
            },
            {
                "time": "15:45",
                "downArm_C1": 42.21,
                "downArm_C2": 40.01,
                "downArm_C3": 32.07,
                "downArm_C4": 50.81,
                "downArm_C5": 52.81,
                "downArm_C6": 43.82,
                "downArm_C7": 33.47,
                "downArm_C8": 30.99,
                "downArm_C9": 33.69,
                "downArm_C10": 33.02,
                "downArm_C11": 40.16,
                "downArm_C12": 44.83,
                "downArm_C13": 45.62,
                "downArm_C14": 46.21,
                "downArm_C15": 31.72,
                "downArm_C16": 34.69,
                "downArm_C17": 30.39,
                "downArm_C18": 46.41,
                "downArm_C19": 53.879999999999995,
                "downArm_C20": 34
            },
            {
                "time": "16:00",
                "downArm_C1": 34.01,
                "downArm_C2": 34.980000000000004,
                "downArm_C3": 42.59,
                "downArm_C4": 38.96,
                "downArm_C5": 37.3,
                "downArm_C6": 39.15,
                "downArm_C7": 44.4,
                "downArm_C8": 45.26,
                "downArm_C9": 52.67,
                "downArm_C10": 41.03,
                "downArm_C11": 54.15,
                "downArm_C12": 48.96,
                "downArm_C13": 38.5,
                "downArm_C14": 54.65,
                "downArm_C15": 31.4,
                "downArm_C16": 31.28,
                "downArm_C17": 48.239999999999995,
                "downArm_C18": 47.989999999999995,
                "downArm_C19": 44.31,
                "downArm_C20": 49.79
            },
            {
                "time": "16:15",
                "downArm_C1": 50.7,
                "downArm_C2": 52.36,
                "downArm_C3": 30.98,
                "downArm_C4": 37.26,
                "downArm_C5": 43.67,
                "downArm_C6": 50.72,
                "downArm_C7": 53.2,
                "downArm_C8": 34.94,
                "downArm_C9": 32.21,
                "downArm_C10": 36.54,
                "downArm_C11": 35.31,
                "downArm_C12": 48.67,
                "downArm_C13": 42.62,
                "downArm_C14": 45.21,
                "downArm_C15": 51.44,
                "downArm_C16": 42.019999999999996,
                "downArm_C17": 54.36,
                "downArm_C18": 45.769999999999996,
                "downArm_C19": 46.81,
                "downArm_C20": 33.83
            }
        ],
    }
    getOption = () => {

        var list = this.state.downArm_C

        var time = new Array();
        var downArm_C1 = new Array();
        var downArm_C2 = new Array();
        var downArm_C3 = new Array();
        var downArm_C4 = new Array();
        var downArm_C5 = new Array();
        var downArm_C6 = new Array();
        var downArm_C7 = new Array();
        var downArm_C8 = new Array();
        var downArm_C9 = new Array();
        var downArm_C10 = new Array();
        var downArm_C11 = new Array();
        var downArm_C12 = new Array();
        var downArm_C13 = new Array();
        var downArm_C14 = new Array();
        var downArm_C15 = new Array();
        var downArm_C16 = new Array();
        var downArm_C17 = new Array();
        var downArm_C18 = new Array();
        var downArm_C19 = new Array();
        var downArm_C20 = new Array();

        for (var i = 0; i < list.length; i++) {
            time[i] = list[i].time;
            downArm_C1[i] = list[i].downArm_C1;
            downArm_C2[i] = list[i].downArm_C2;
            downArm_C3[i] = list[i].downArm_C3;
            downArm_C4[i] = list[i].downArm_C4;
            downArm_C5[i] = list[i].downArm_C5;
            downArm_C6[i] = list[i].downArm_C6;
            downArm_C7[i] = list[i].downArm_C7;
            downArm_C8[i] = list[i].downArm_C8;
            downArm_C9[i] = list[i].downArm_C9;
            downArm_C10[i] = list[i].downArm_C10;
            downArm_C11[i] = list[i].downArm_C11;
            downArm_C12[i] = list[i].downArm_C12;
            downArm_C13[i] = list[i].downArm_C13;
            downArm_C14[i] = list[i].downArm_C14;
            downArm_C15[i] = list[i].downArm_C15;
            downArm_C16[i] = list[i].downArm_C16;
            downArm_C17[i] = list[i].downArm_C17;
            downArm_C18[i] = list[i].downArm_C18;
            downArm_C19[i] = list[i].downArm_C19;
            downArm_C20[i] = list[i].downArm_C20;

        }

        return {
            title: {
                text: '无线测温下臂C相折线图',
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
                    data: downArm_C1,
                    itemStyle: {
                        color: '#027db4'
                    },
                }, {
                    name: '海凤3731',
                    type: 'line',
                    data: downArm_C2,
                    // smooth : true,

                }, {
                    name: '#3电容器',
                    type: 'line',
                    data: downArm_C3,
                    // smooth : true,

                }, {
                    name: '#1所用变',
                    type: 'line',
                    data: downArm_C4,
                    // smooth : true,

                }, {
                    name: '35kVI段母线避雷器',
                    type: 'line',
                    data: downArm_C5,
                    // smooth : true,

                }, {
                    name: '海洪3734',
                    type: 'line',
                    data: downArm_C6,
                    // smooth : true,

                }, {
                    name: '35kVI段母线压变插件',
                    type: 'line',
                    data: downArm_C7,
                    // smooth : true,

                }, {
                    name: '#1主变35kV',
                    type: 'line',
                    data: downArm_C8,
                    // smooth : true,

                }, {
                    name: '海变3733',
                    type: 'line',
                    data: downArm_C9,
                    // smooth : true,

                }, {
                    name: '35kV母分开关',
                    type: 'line',
                    data: downArm_C10,
                    itemStyle: {
                        color: '#027db4'
                    },
                }, {
                    name: '35kV母分插件',
                    type: 'line',
                    data: downArm_C11,
                }, {
                    name: '备用3572开关',
                    type: 'line',
                    data: downArm_C12,
                }, {
                    name: '#2主变35kV开关',
                    type: 'line',
                    data: downArm_C13,
                }, {
                    name: '35kVII段母线避雷器',
                    type: 'line',
                    data: downArm_C14,
                }, {
                    name: '海牌3735开关',
                    type: 'line',
                    data: downArm_C15,
                }, {
                    name: '35kVII段母线压变插件',
                    type: 'line',
                    data: downArm_C16,
                }, {
                    name: '#2电容器开关',
                    type: 'line',
                    data: downArm_C17,
                }, {
                    name: '#2所用变开关',
                    type: 'line',
                    data: downArm_C18,
                }, {
                    name: '#2电抗器开关',
                    type: 'line',
                    data: downArm_C19,
                }, {
                    name: '海时3738开关',
                    type: 'line',
                    data: downArm_C20,
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