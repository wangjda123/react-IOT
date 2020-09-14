import React, {Component} from "react";
import {Card} from 'antd'
import ReactEcharts from 'echarts-for-react'


export default class UparmcEcharts extends Component {

    state = {
        upArm_C: [
            {
                "time": "14:00",
                "upArm_C1": 35.41,
                "upArm_C2": 31.64,
                "upArm_C3": 43.06,
                "upArm_C4": 48.769999999999996,
                "upArm_C5": 31.04,
                "upArm_C6": 46.65,
                "upArm_C7": 34.22,
                "upArm_C8": 33.77,
                "upArm_C9": 31.44,
                "upArm_C10": 50.760000000000005,
                "upArm_C11": 38.480000000000004,
                "upArm_C12": 40.230000000000004,
                "upArm_C13": 54.86,
                "upArm_C14": 45.66,
                "upArm_C15": 31.69,
                "upArm_C16": 37.83,
                "upArm_C17": 48.129999999999995,
                "upArm_C18": 45.74,
                "upArm_C19": 47.5,
                "upArm_C20": 39.67
            },
            {
                "time": "14:15",
                "upArm_C1": 52.11,
                "upArm_C2": 39.92,
                "upArm_C3": 50.79,
                "upArm_C4": 42.29,
                "upArm_C5": 36.019999999999996,
                "upArm_C6": 52.78,
                "upArm_C7": 35.82,
                "upArm_C8": 54.3,
                "upArm_C9": 40.39,
                "upArm_C10": 39.59,
                "upArm_C11": 48.32,
                "upArm_C12": 37.12,
                "upArm_C13": 49.72,
                "upArm_C14": 36.07,
                "upArm_C15": 35.01,
                "upArm_C16": 33.56,
                "upArm_C17": 45.1,
                "upArm_C18": 33.97,
                "upArm_C19": 32.57,
                "upArm_C20": 52.18
            },
            {
                "time": "14:30",
                "upArm_C1": 47.56,
                "upArm_C2": 35.82,
                "upArm_C3": 32.87,
                "upArm_C4": 36.64,
                "upArm_C5": 36.06,
                "upArm_C6": 43.43,
                "upArm_C7": 42.07,
                "upArm_C8": 34.15,
                "upArm_C9": 32.3,
                "upArm_C10": 53.55,
                "upArm_C11": 45.79,
                "upArm_C12": 42.69,
                "upArm_C13": 48.760000000000005,
                "upArm_C14": 52.19,
                "upArm_C15": 30.08,
                "upArm_C16": 43.480000000000004,
                "upArm_C17": 31.65,
                "upArm_C18": 31.74,
                "upArm_C19": 41.31,
                "upArm_C20": 45.38
            },
            {
                "time": "14:45",
                "upArm_C1": 42.19,
                "upArm_C2": 30.14,
                "upArm_C3": 47.47,
                "upArm_C4": 41.24,
                "upArm_C5": 34.51,
                "upArm_C6": 47.480000000000004,
                "upArm_C7": 35.06,
                "upArm_C8": 44.14,
                "upArm_C9": 41.65,
                "upArm_C10": 54.61,
                "upArm_C11": 46.57,
                "upArm_C12": 40.51,
                "upArm_C13": 42.14,
                "upArm_C14": 32.94,
                "upArm_C15": 53.59,
                "upArm_C16": 53.629999999999995,
                "upArm_C17": 36.9,
                "upArm_C18": 42.5,
                "upArm_C19": 46.06,
                "upArm_C20": 33.71
            },
            {
                "time": "15:00",
                "upArm_C1": 51.64,
                "upArm_C2": 40.31,
                "upArm_C3": 42.57,
                "upArm_C4": 36.28,
                "upArm_C5": 35.9,
                "upArm_C6": 52.71,
                "upArm_C7": 44.6,
                "upArm_C8": 51.86,
                "upArm_C9": 45.54,
                "upArm_C10": 38.59,
                "upArm_C11": 31.46,
                "upArm_C12": 39.45,
                "upArm_C13": 49.519999999999996,
                "upArm_C14": 38.37,
                "upArm_C15": 41.05,
                "upArm_C16": 52.230000000000004,
                "upArm_C17": 46.84,
                "upArm_C18": 33.64,
                "upArm_C19": 39.29,
                "upArm_C20": 50.379999999999995
            },
            {
                "time": "15:15",
                "upArm_C1": 40.95,
                "upArm_C2": 30.89,
                "upArm_C3": 49.11,
                "upArm_C4": 45.1,
                "upArm_C5": 48.83,
                "upArm_C6": 53.9,
                "upArm_C7": 31.14,
                "upArm_C8": 33.4,
                "upArm_C9": 52.17,
                "upArm_C10": 41.22,
                "upArm_C11": 37.43,
                "upArm_C12": 41.96,
                "upArm_C13": 43.57,
                "upArm_C14": 52.67,
                "upArm_C15": 50.67,
                "upArm_C16": 35.95,
                "upArm_C17": 33.83,
                "upArm_C18": 52.730000000000004,
                "upArm_C19": 35.730000000000004,
                "upArm_C20": 30.92
            },
            {
                "time": "15:30",
                "upArm_C1": 53.9,
                "upArm_C2": 41.64,
                "upArm_C3": 30.38,
                "upArm_C4": 49.54,
                "upArm_C5": 51.870000000000005,
                "upArm_C6": 31.33,
                "upArm_C7": 51.120000000000005,
                "upArm_C8": 39.8,
                "upArm_C9": 53.019999999999996,
                "upArm_C10": 30.34,
                "upArm_C11": 54.03,
                "upArm_C12": 46.45,
                "upArm_C13": 38.79,
                "upArm_C14": 40.67,
                "upArm_C15": 30.99,
                "upArm_C16": 35.15,
                "upArm_C17": 43.58,
                "upArm_C18": 31.46,
                "upArm_C19": 41.35,
                "upArm_C20": 36.31
            },
            {
                "time": "15:45",
                "upArm_C1": 39.6,
                "upArm_C2": 37.31,
                "upArm_C3": 54.61,
                "upArm_C4": 47.3,
                "upArm_C5": 33.13,
                "upArm_C6": 52.33,
                "upArm_C7": 45.68,
                "upArm_C8": 44.81,
                "upArm_C9": 46.760000000000005,
                "upArm_C10": 38.9,
                "upArm_C11": 35.95,
                "upArm_C12": 32.36,
                "upArm_C13": 42.42,
                "upArm_C14": 31.34,
                "upArm_C15": 53.739999999999995,
                "upArm_C16": 31.03,
                "upArm_C17": 52.41,
                "upArm_C18": 37.519999999999996,
                "upArm_C19": 46.94,
                "upArm_C20": 32.79
            },
            {
                "time": "16:00",
                "upArm_C1": 33.12,
                "upArm_C2": 42.72,
                "upArm_C3": 51.58,
                "upArm_C4": 54.57,
                "upArm_C5": 30.82,
                "upArm_C6": 30.67,
                "upArm_C7": 30.03,
                "upArm_C8": 33.82,
                "upArm_C9": 35.35,
                "upArm_C10": 40.54,
                "upArm_C11": 53.28,
                "upArm_C12": 40.44,
                "upArm_C13": 46.010000000000005,
                "upArm_C14": 49.61,
                "upArm_C15": 39.68,
                "upArm_C16": 35.21,
                "upArm_C17": 41.019999999999996,
                "upArm_C18": 34.89,
                "upArm_C19": 52.07,
                "upArm_C20": 50.22
            },
            {
                "time": "16:15",
                "upArm_C1": 40.15,
                "upArm_C2": 34.42,
                "upArm_C3": 41.64,
                "upArm_C4": 46.22,
                "upArm_C5": 53.71,
                "upArm_C6": 33.83,
                "upArm_C7": 48.04,
                "upArm_C8": 45.31,
                "upArm_C9": 39.53,
                "upArm_C10": 33.21,
                "upArm_C11": 40.69,
                "upArm_C12": 54.29,
                "upArm_C13": 40.62,
                "upArm_C14": 51.89,
                "upArm_C15": 36.91,
                "upArm_C16": 37.35,
                "upArm_C17": 50.07,
                "upArm_C18": 39.03,
                "upArm_C19": 33.26,
                "upArm_C20": 49.120000000000005
            }
        ],
    }
    getOption = () => {

        var list = this.state.upArm_C

        var time = new Array();
        var upArm_C1 = new Array();
        var upArm_C2 = new Array();
        var upArm_C3 = new Array();
        var upArm_C4 = new Array();
        var upArm_C5 = new Array();
        var upArm_C6 = new Array();
        var upArm_C7 = new Array();
        var upArm_C8 = new Array();
        var upArm_C9 = new Array();
        var upArm_C10 = new Array();
        var upArm_C11 = new Array();
        var upArm_C12 = new Array();
        var upArm_C13 = new Array();
        var upArm_C14 = new Array();
        var upArm_C15 = new Array();
        var upArm_C16 = new Array();
        var upArm_C17 = new Array();
        var upArm_C18 = new Array();
        var upArm_C19 = new Array();
        var upArm_C20 = new Array();

        for (var i = 0; i < list.length; i++) {
            time[i] = list[i].time;
            upArm_C1[i] = list[i].upArm_C1;
            upArm_C2[i] = list[i].upArm_C2;
            upArm_C3[i] = list[i].upArm_C3;
            upArm_C4[i] = list[i].upArm_C4;
            upArm_C5[i] = list[i].upArm_C5;
            upArm_C6[i] = list[i].upArm_C6;
            upArm_C7[i] = list[i].upArm_C7;
            upArm_C8[i] = list[i].upArm_C8;
            upArm_C9[i] = list[i].upArm_C9;
            upArm_C10[i] = list[i].upArm_C10;
            upArm_C11[i] = list[i].upArm_C11;
            upArm_C12[i] = list[i].upArm_C12;
            upArm_C13[i] = list[i].upArm_C13;
            upArm_C14[i] = list[i].upArm_C14;
            upArm_C15[i] = list[i].upArm_C15;
            upArm_C16[i] = list[i].upArm_C16;
            upArm_C17[i] = list[i].upArm_C17;
            upArm_C18[i] = list[i].upArm_C18;
            upArm_C19[i] = list[i].upArm_C19;
            upArm_C20[i] = list[i].upArm_C20;

        }

        return {
            title: {
                text: '无线测温上臂C相折线图',
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
                    data: upArm_C1,
                    itemStyle: {
                        color: '#027db4'
                    },
                }, {
                    name: '海凤3731',
                    type: 'line',
                    data: upArm_C2,
                    // smooth : true,

                }, {
                    name: '#3电容器',
                    type: 'line',
                    data: upArm_C3,
                    // smooth : true,

                }, {
                    name: '#1所用变',
                    type: 'line',
                    data: upArm_C4,
                    // smooth : true,

                }, {
                    name: '35kVI段母线避雷器',
                    type: 'line',
                    data: upArm_C5,
                    // smooth : true,

                }, {
                    name: '海洪3734',
                    type: 'line',
                    data: upArm_C6,
                    // smooth : true,

                }, {
                    name: '35kVI段母线压变插件',
                    type: 'line',
                    data: upArm_C7,
                    // smooth : true,

                }, {
                    name: '#1主变35kV',
                    type: 'line',
                    data: upArm_C8,
                    // smooth : true,

                }, {
                    name: '海变3733',
                    type: 'line',
                    data: upArm_C9,
                    // smooth : true,

                }, {
                    name: '35kV母分开关',
                    type: 'line',
                    data: upArm_C10,
                    itemStyle: {
                        color: '#027db4'
                    },
                }, {
                    name: '35kV母分插件',
                    type: 'line',
                    data: upArm_C11,
                }, {
                    name: '备用3572开关',
                    type: 'line',
                    data: upArm_C12,
                }, {
                    name: '#2主变35kV开关',
                    type: 'line',
                    data: upArm_C13,
                }, {
                    name: '35kVII段母线避雷器',
                    type: 'line',
                    data: upArm_C14,
                }, {
                    name: '海牌3735开关',
                    type: 'line',
                    data: upArm_C15,
                }, {
                    name: '35kVII段母线压变插件',
                    type: 'line',
                    data: upArm_C16,
                }, {
                    name: '#2电容器开关',
                    type: 'line',
                    data: upArm_C17,
                }, {
                    name: '#2所用变开关',
                    type: 'line',
                    data: upArm_C18,
                }, {
                    name: '#2电抗器开关',
                    type: 'line',
                    data: upArm_C19,
                }, {
                    name: '海时3738开关',
                    type: 'line',
                    data: upArm_C20,
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