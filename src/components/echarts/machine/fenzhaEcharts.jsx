import React, {Component} from "react";
import {Card} from 'antd'
import ReactEcharts from 'echarts-for-react'


export default class FenzhaEcharts extends Component {
    state = {
        fenzhaCurrenterature: [
            {
                "time": "14:00",
                "fenzhaCurrent1": 2.18,
                "fenzhaCurrent2": 3.87,
                "fenzhaCurrent3": 0.35,
                "fenzhaCurrent4": 0.15,
                "fenzhaCurrent5": 2.31,
                "fenzhaCurrent6": 3.49,
                "fenzhaCurrent7": 1.09,
                "fenzhaCurrent8": 3.95,
                "fenzhaCurrent9": 1.62,
                "fenzhaCurrent10": 1.3,
                "fenzhaCurrent11": 4.04,
                "fenzhaCurrent12": 0.01,
                "fenzhaCurrent13": 1.47,
                "fenzhaCurrent14": 3.39,
                "fenzhaCurrent15": 4.36,
                "fenzhaCurrent16": 3.03,
                "fenzhaCurrent17": 2.52,
                "fenzhaCurrent18": 1.02,
                "fenzhaCurrent19": 4.65,
                "fenzhaCurrent20": 0.69
            },
            {
                "time": "14:15",
                "fenzhaCurrent1": 4.63,
                "fenzhaCurrent2": 3.39,
                "fenzhaCurrent3": 3.96,
                "fenzhaCurrent4": 1.44,
                "fenzhaCurrent5": 2.45,
                "fenzhaCurrent6": 0.51,
                "fenzhaCurrent7": 4.96,
                "fenzhaCurrent8": 2.52,
                "fenzhaCurrent9": 3.75,
                "fenzhaCurrent10": 1.7,
                "fenzhaCurrent11": 3.77,
                "fenzhaCurrent12": 1.74,
                "fenzhaCurrent13": 3.17,
                "fenzhaCurrent14": 4.28,
                "fenzhaCurrent15": 1.62,
                "fenzhaCurrent16": 2.73,
                "fenzhaCurrent17": 1.02,
                "fenzhaCurrent18": 4.18,
                "fenzhaCurrent19": 1.28,
                "fenzhaCurrent20": 3.21
            },
            {
                "time": "14:30",
                "fenzhaCurrent1": 4.33,
                "fenzhaCurrent2": 2.12,
                "fenzhaCurrent3": 1.41,
                "fenzhaCurrent4": 2.35,
                "fenzhaCurrent5": 4.49,
                "fenzhaCurrent6": 0.83,
                "fenzhaCurrent7": 1.36,
                "fenzhaCurrent8": 0.6,
                "fenzhaCurrent9": 1.39,
                "fenzhaCurrent10": 4.18,
                "fenzhaCurrent11": 0.48,
                "fenzhaCurrent12": 4.69,
                "fenzhaCurrent13": 4.88,
                "fenzhaCurrent14": 1.77,
                "fenzhaCurrent15": 0.64,
                "fenzhaCurrent16": 0.15,
                "fenzhaCurrent17": 1.56,
                "fenzhaCurrent18": 4.29,
                "fenzhaCurrent19": 1.53,
                "fenzhaCurrent20": 0.16
            },
            {
                "time": "14:45",
                "fenzhaCurrent1": 3.02,
                "fenzhaCurrent2": 2.15,
                "fenzhaCurrent3": 4.57,
                "fenzhaCurrent4": 3.26,
                "fenzhaCurrent5": 3.71,
                "fenzhaCurrent6": 2.67,
                "fenzhaCurrent7": 2.12,
                "fenzhaCurrent8": 1,
                "fenzhaCurrent9": 1.45,
                "fenzhaCurrent10": 3.53,
                "fenzhaCurrent11": 3.95,
                "fenzhaCurrent12": 1.13,
                "fenzhaCurrent13": 0.6,
                "fenzhaCurrent14": 4.45,
                "fenzhaCurrent15": 4.91,
                "fenzhaCurrent16": 2.33,
                "fenzhaCurrent17": 1.98,
                "fenzhaCurrent18": 2.71,
                "fenzhaCurrent19": 2.36,
                "fenzhaCurrent20": 0.24
            },
            {
                "time": "15:00",
                "fenzhaCurrent1": 3.93,
                "fenzhaCurrent2": 1.8,
                "fenzhaCurrent3": 2.3,
                "fenzhaCurrent4": 4.11,
                "fenzhaCurrent5": 0.76,
                "fenzhaCurrent6": 3.84,
                "fenzhaCurrent7": 1.87,
                "fenzhaCurrent8": 1.64,
                "fenzhaCurrent9": 2.82,
                "fenzhaCurrent10": 4.63,
                "fenzhaCurrent11": 3.85,
                "fenzhaCurrent12": 0.87,
                "fenzhaCurrent13": 3.18,
                "fenzhaCurrent14": 5,
                "fenzhaCurrent15": 1.01,
                "fenzhaCurrent16": 2.05,
                "fenzhaCurrent17": 0.92,
                "fenzhaCurrent18": 1.1,
                "fenzhaCurrent19": 0.58,
                "fenzhaCurrent20": 1.3
            },
            {
                "time": "15:15",
                "fenzhaCurrent1": 1.31,
                "fenzhaCurrent2": 0.01,
                "fenzhaCurrent3": 2.77,
                "fenzhaCurrent4": 4.21,
                "fenzhaCurrent5": 3.05,
                "fenzhaCurrent6": 2.45,
                "fenzhaCurrent7": 2.99,
                "fenzhaCurrent8": 2.86,
                "fenzhaCurrent9": 1.6,
                "fenzhaCurrent10": 4.78,
                "fenzhaCurrent11": 4.1,
                "fenzhaCurrent12": 1.35,
                "fenzhaCurrent13": 0.75,
                "fenzhaCurrent14": 2.96,
                "fenzhaCurrent15": 4.26,
                "fenzhaCurrent16": 2.5,
                "fenzhaCurrent17": 3.73,
                "fenzhaCurrent18": 0.99,
                "fenzhaCurrent19": 0.86,
                "fenzhaCurrent20": 0.95
            },
            {
                "time": "15:30",
                "fenzhaCurrent1": 1.8,
                "fenzhaCurrent2": 0.16,
                "fenzhaCurrent3": 2.36,
                "fenzhaCurrent4": 2.09,
                "fenzhaCurrent5": 4.95,
                "fenzhaCurrent6": 2.83,
                "fenzhaCurrent7": 4.06,
                "fenzhaCurrent8": 1.42,
                "fenzhaCurrent9": 2.8,
                "fenzhaCurrent10": 0.07,
                "fenzhaCurrent11": 3.34,
                "fenzhaCurrent12": 2.81,
                "fenzhaCurrent13": 4.73,
                "fenzhaCurrent14": 4.65,
                "fenzhaCurrent15": 0.01,
                "fenzhaCurrent16": 0.57,
                "fenzhaCurrent17": 4.28,
                "fenzhaCurrent18": 1.35,
                "fenzhaCurrent19": 4.28,
                "fenzhaCurrent20": 3.99
            },
            {
                "time": "15:45",
                "fenzhaCurrent1": 4.94,
                "fenzhaCurrent2": 2.8,
                "fenzhaCurrent3": 1.14,
                "fenzhaCurrent4": 4.87,
                "fenzhaCurrent5": 3.94,
                "fenzhaCurrent6": 4.64,
                "fenzhaCurrent7": 0.2,
                "fenzhaCurrent8": 1.9,
                "fenzhaCurrent9": 4.23,
                "fenzhaCurrent10": 2.28,
                "fenzhaCurrent11": 0.71,
                "fenzhaCurrent12": 2.95,
                "fenzhaCurrent13": 1.42,
                "fenzhaCurrent14": 1.51,
                "fenzhaCurrent15": 2.26,
                "fenzhaCurrent16": 2.54,
                "fenzhaCurrent17": 2.05,
                "fenzhaCurrent18": 0.54,
                "fenzhaCurrent19": 4.78,
                "fenzhaCurrent20": 0.04
            },
            {
                "time": "16:00",
                "fenzhaCurrent1": 0.44,
                "fenzhaCurrent2": 2.83,
                "fenzhaCurrent3": 2.03,
                "fenzhaCurrent4": 2.83,
                "fenzhaCurrent5": 1.92,
                "fenzhaCurrent6": 4.39,
                "fenzhaCurrent7": 0.97,
                "fenzhaCurrent8": 0.82,
                "fenzhaCurrent9": 4.69,
                "fenzhaCurrent10": 3.25,
                "fenzhaCurrent11": 3.27,
                "fenzhaCurrent12": 0.72,
                "fenzhaCurrent13": 2.25,
                "fenzhaCurrent14": 0.08,
                "fenzhaCurrent15": 2.24,
                "fenzhaCurrent16": 3.89,
                "fenzhaCurrent17": 3.37,
                "fenzhaCurrent18": 4.25,
                "fenzhaCurrent19": 4.76,
                "fenzhaCurrent20": 0.55
            },
            {
                "time": "16:15",
                "fenzhaCurrent1": 1.95,
                "fenzhaCurrent2": 4.5,
                "fenzhaCurrent3": 4.84,
                "fenzhaCurrent4": 2.15,
                "fenzhaCurrent5": 0.74,
                "fenzhaCurrent6": 2.87,
                "fenzhaCurrent7": 2.58,
                "fenzhaCurrent8": 0.01,
                "fenzhaCurrent9": 2.99,
                "fenzhaCurrent10": 0.51,
                "fenzhaCurrent11": 4.27,
                "fenzhaCurrent12": 2.24,
                "fenzhaCurrent13": 2.64,
                "fenzhaCurrent14": 3.05,
                "fenzhaCurrent15": 1.36,
                "fenzhaCurrent16": 0.96,
                "fenzhaCurrent17": 0.38,
                "fenzhaCurrent18": 1.35,
                "fenzhaCurrent19": 1.38,
                "fenzhaCurrent20": 3.86
            }
        ],
    }
    getOption = () => {
        var list = this.state.fenzhaCurrenterature

        var time = new Array();
        var fenzhaCurrent1 = new Array();
        var fenzhaCurrent2 = new Array();
        var fenzhaCurrent3 = new Array();
        var fenzhaCurrent4 = new Array();
        var fenzhaCurrent5 = new Array();
        var fenzhaCurrent6 = new Array();
        var fenzhaCurrent7 = new Array();
        var fenzhaCurrent8 = new Array();
        var fenzhaCurrent9 = new Array();
        var fenzhaCurrent10 = new Array();
        var fenzhaCurrent11 = new Array();
        var fenzhaCurrent12 = new Array();
        var fenzhaCurrent13 = new Array();
        var fenzhaCurrent14 = new Array();
        var fenzhaCurrent15 = new Array();
        var fenzhaCurrent16 = new Array();
        var fenzhaCurrent17 = new Array();
        var fenzhaCurrent18 = new Array();
        var fenzhaCurrent19 = new Array();
        var fenzhaCurrent20 = new Array();

        for (var i = 0; i < list.length; i++) {
            time[i] = list[i].time;
            fenzhaCurrent1[i] = list[i].fenzhaCurrent1;
            fenzhaCurrent2[i] = list[i].fenzhaCurrent2;
            fenzhaCurrent3[i] = list[i].fenzhaCurrent3;
            fenzhaCurrent4[i] = list[i].fenzhaCurrent4;
            fenzhaCurrent5[i] = list[i].fenzhaCurrent5;
            fenzhaCurrent6[i] = list[i].fenzhaCurrent6;
            fenzhaCurrent7[i] = list[i].fenzhaCurrent7;
            fenzhaCurrent8[i] = list[i].fenzhaCurrent8;
            fenzhaCurrent9[i] = list[i].fenzhaCurrent9;
            fenzhaCurrent10[i] = list[i].fenzhaCurrent10;
            fenzhaCurrent11[i] = list[i].fenzhaCurrent11;
            fenzhaCurrent12[i] = list[i].fenzhaCurrent12;
            fenzhaCurrent13[i] = list[i].fenzhaCurrent13;
            fenzhaCurrent14[i] = list[i].fenzhaCurrent14;
            fenzhaCurrent15[i] = list[i].fenzhaCurrent15;
            fenzhaCurrent16[i] = list[i].fenzhaCurrent16;
            fenzhaCurrent17[i] = list[i].fenzhaCurrent17;
            fenzhaCurrent18[i] = list[i].fenzhaCurrent18;
            fenzhaCurrent19[i] = list[i].fenzhaCurrent19;
            fenzhaCurrent20[i] = list[i].fenzhaCurrent20;

        }

        return {
            title: {
                text: '机械特性分闸电流',
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
                    // {
                    //     type: 'none',
                    //     title: '全不选'
                    // },
                    {
                        type: 'inverse',
                        title: '反选'
                    },

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
                min: 0,
                axisLabel: {
                    formatter: '{value} A'
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
                    data: fenzhaCurrent1,
                    itemStyle: {
                        color: '#027db4'
                    },
                }, {
                    name: '海凤3731',
                    type: 'line',
                    data: fenzhaCurrent2,
                    // smooth : true,

                }, {
                    name: '#3电容器',
                    type: 'line',
                    data: fenzhaCurrent3,
                    // smooth : true,

                }, {
                    name: '#1所用变',
                    type: 'line',
                    data: fenzhaCurrent4,
                    // smooth : true,

                }, {
                    name: '35kVI段母线避雷器',
                    type: 'line',
                    data: fenzhaCurrent5,
                    // smooth : true,

                }, {
                    name: '海洪3734',
                    type: 'line',
                    data: fenzhaCurrent6,
                    // smooth : true,

                }, {
                    name: '35kVI段母线压变插件',
                    type: 'line',
                    data: fenzhaCurrent7,
                    // smooth : true,

                }, {
                    name: '#1主变35kV',
                    type: 'line',
                    data: fenzhaCurrent8,
                    // smooth : true,

                }, {
                    name: '海变3733',
                    type: 'line',
                    data: fenzhaCurrent9,
                    // smooth : true,

                }, {
                    name: '35kV母分开关',
                    type: 'line',
                    data: fenzhaCurrent10,
                    itemStyle: {
                        color: '#027db4'
                    },
                }, {
                    name: '35kV母分插件',
                    type: 'line',
                    data: fenzhaCurrent11,
                }, {
                    name: '备用3572开关',
                    type: 'line',
                    data: fenzhaCurrent12,
                }, {
                    name: '#2主变35kV开关',
                    type: 'line',
                    data: fenzhaCurrent13,
                }, {
                    name: '35kVII段母线避雷器',
                    type: 'line',
                    data: fenzhaCurrent14,
                }, {
                    name: '海牌3735开关',
                    type: 'line',
                    data: fenzhaCurrent15,
                }, {
                    name: '35kVII段母线压变插件',
                    type: 'line',
                    data: fenzhaCurrent16,
                }, {
                    name: '#2电容器开关',
                    type: 'line',
                    data: fenzhaCurrent17,
                }, {
                    name: '#2所用变开关',
                    type: 'line',
                    data: fenzhaCurrent18,
                }, {
                    name: '#2电抗器开关',
                    type: 'line',
                    data: fenzhaCurrent19,
                }, {
                    name: '海时3738开关',
                    type: 'line',
                    data: fenzhaCurrent20,
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