import React, {Component} from "react";
import {Card} from 'antd'
import ReactEcharts from 'echarts-for-react'


export default class ChunengEcharts extends Component {
    state = {
        chunengCurrenterature: [
            {
                "time": "14:00",
                "chunengCurrent1": 4.09,
                "chunengCurrent2": 0.49,
                "chunengCurrent3": 4.81,
                "chunengCurrent4": 4.74,
                "chunengCurrent5": 0.33,
                "chunengCurrent6": 2.31,
                "chunengCurrent7": 4.85,
                "chunengCurrent8": 2.14,
                "chunengCurrent9": 0.23,
                "chunengCurrent10": 2.64,
                "chunengCurrent11": 1.87,
                "chunengCurrent12": 4.09,
                "chunengCurrent13": 4.98,
                "chunengCurrent14": 4.92,
                "chunengCurrent15": 0.01,
                "chunengCurrent16": 3.3,
                "chunengCurrent17": 0.93,
                "chunengCurrent18": 0.87,
                "chunengCurrent19": 3.37,
                "chunengCurrent20": 0.22
            },
            {
                "time": "14:15",
                "chunengCurrent1": 4.61,
                "chunengCurrent2": 4.33,
                "chunengCurrent3": 4.44,
                "chunengCurrent4": 1.42,
                "chunengCurrent5": 4.56,
                "chunengCurrent6": 2.83,
                "chunengCurrent7": 1.94,
                "chunengCurrent8": 3.62,
                "chunengCurrent9": 2.85,
                "chunengCurrent10": 1.94,
                "chunengCurrent11": 1.26,
                "chunengCurrent12": 4.95,
                "chunengCurrent13": 0.25,
                "chunengCurrent14": 2.55,
                "chunengCurrent15": 1.55,
                "chunengCurrent16": 0.27,
                "chunengCurrent17": 0.73,
                "chunengCurrent18": 4.06,
                "chunengCurrent19": 4.02,
                "chunengCurrent20": 1.76
            },
            {
                "time": "14:30",
                "chunengCurrent1": 0.22,
                "chunengCurrent2": 1.09,
                "chunengCurrent3": 1.99,
                "chunengCurrent4": 2.58,
                "chunengCurrent5": 4.08,
                "chunengCurrent6": 2.94,
                "chunengCurrent7": 3.03,
                "chunengCurrent8": 0.61,
                "chunengCurrent9": 1.28,
                "chunengCurrent10": 3.79,
                "chunengCurrent11": 4.29,
                "chunengCurrent12": 2.81,
                "chunengCurrent13": 4.63,
                "chunengCurrent14": 1.73,
                "chunengCurrent15": 1.65,
                "chunengCurrent16": 1.88,
                "chunengCurrent17": 0.92,
                "chunengCurrent18": 0.4,
                "chunengCurrent19": 3.71,
                "chunengCurrent20": 2.92
            },
            {
                "time": "14:45",
                "chunengCurrent1": 1.74,
                "chunengCurrent2": 0.01,
                "chunengCurrent3": 2.77,
                "chunengCurrent4": 3.76,
                "chunengCurrent5": 4.39,
                "chunengCurrent6": 4.53,
                "chunengCurrent7": 3.63,
                "chunengCurrent8": 3.84,
                "chunengCurrent9": 0.26,
                "chunengCurrent10": 0.48,
                "chunengCurrent11": 1.56,
                "chunengCurrent12": 4.87,
                "chunengCurrent13": 4.84,
                "chunengCurrent14": 3.45,
                "chunengCurrent15": 1.32,
                "chunengCurrent16": 4.17,
                "chunengCurrent17": 1.91,
                "chunengCurrent18": 1.19,
                "chunengCurrent19": 4.15,
                "chunengCurrent20": 3.06
            },
            {
                "time": "15:00",
                "chunengCurrent1": 0.62,
                "chunengCurrent2": 4.44,
                "chunengCurrent3": 3.04,
                "chunengCurrent4": 0.65,
                "chunengCurrent5": 4.21,
                "chunengCurrent6": 2.34,
                "chunengCurrent7": 2.4,
                "chunengCurrent8": 0.74,
                "chunengCurrent9": 2.08,
                "chunengCurrent10": 4.03,
                "chunengCurrent11": 2.35,
                "chunengCurrent12": 3.32,
                "chunengCurrent13": 0.36,
                "chunengCurrent14": 3.04,
                "chunengCurrent15": 2.6,
                "chunengCurrent16": 1.82,
                "chunengCurrent17": 0.7,
                "chunengCurrent18": 4.26,
                "chunengCurrent19": 3.08,
                "chunengCurrent20": 2.56
            },
            {
                "time": "15:15",
                "chunengCurrent1": 0.66,
                "chunengCurrent2": 3.83,
                "chunengCurrent3": 4.35,
                "chunengCurrent4": 1.11,
                "chunengCurrent5": 1.14,
                "chunengCurrent6": 1.38,
                "chunengCurrent7": 2.46,
                "chunengCurrent8": 4.85,
                "chunengCurrent9": 2.86,
                "chunengCurrent10": 0.88,
                "chunengCurrent11": 0.1,
                "chunengCurrent12": 3.37,
                "chunengCurrent13": 0.05,
                "chunengCurrent14": 2.07,
                "chunengCurrent15": 4.36,
                "chunengCurrent16": 1.09,
                "chunengCurrent17": 2.3,
                "chunengCurrent18": 1.03,
                "chunengCurrent19": 0.75,
                "chunengCurrent20": 2.9
            },
            {
                "time": "15:30",
                "chunengCurrent1": 2.44,
                "chunengCurrent2": 3.23,
                "chunengCurrent3": 2.11,
                "chunengCurrent4": 1.79,
                "chunengCurrent5": 0.86,
                "chunengCurrent6": 2.15,
                "chunengCurrent7": 3.86,
                "chunengCurrent8": 0.53,
                "chunengCurrent9": 0.85,
                "chunengCurrent10": 0.1,
                "chunengCurrent11": 3.66,
                "chunengCurrent12": 2.9,
                "chunengCurrent13": 3.73,
                "chunengCurrent14": 0.9,
                "chunengCurrent15": 0.95,
                "chunengCurrent16": 2.27,
                "chunengCurrent17": 1.3,
                "chunengCurrent18": 3.66,
                "chunengCurrent19": 3.56,
                "chunengCurrent20": 0.12
            },
            {
                "time": "15:45",
                "chunengCurrent1": 2.92,
                "chunengCurrent2": 0.38,
                "chunengCurrent3": 1.01,
                "chunengCurrent4": 4.48,
                "chunengCurrent5": 1.75,
                "chunengCurrent6": 3.23,
                "chunengCurrent7": 1.05,
                "chunengCurrent8": 0.14,
                "chunengCurrent9": 1.29,
                "chunengCurrent10": 0.36,
                "chunengCurrent11": 1.35,
                "chunengCurrent12": 4.59,
                "chunengCurrent13": 4.89,
                "chunengCurrent14": 1.57,
                "chunengCurrent15": 4.38,
                "chunengCurrent16": 4.44,
                "chunengCurrent17": 4.04,
                "chunengCurrent18": 2.37,
                "chunengCurrent19": 1.59,
                "chunengCurrent20": 2.5
            },
            {
                "time": "16:00",
                "chunengCurrent1": 4.31,
                "chunengCurrent2": 4.46,
                "chunengCurrent3": 0.53,
                "chunengCurrent4": 0.23,
                "chunengCurrent5": 2.76,
                "chunengCurrent6": 2.99,
                "chunengCurrent7": 3.8,
                "chunengCurrent8": 0.65,
                "chunengCurrent9": 2.09,
                "chunengCurrent10": 3.18,
                "chunengCurrent11": 4.58,
                "chunengCurrent12": 1.74,
                "chunengCurrent13": 1.68,
                "chunengCurrent14": 1.89,
                "chunengCurrent15": 0.98,
                "chunengCurrent16": 0.69,
                "chunengCurrent17": 2.63,
                "chunengCurrent18": 1.59,
                "chunengCurrent19": 2.2,
                "chunengCurrent20": 4.47
            },
            {
                "time": "16:15",
                "chunengCurrent1": 3.89,
                "chunengCurrent2": 1.96,
                "chunengCurrent3": 1.39,
                "chunengCurrent4": 3.38,
                "chunengCurrent5": 1.01,
                "chunengCurrent6": 4.84,
                "chunengCurrent7": 2.12,
                "chunengCurrent8": 2.35,
                "chunengCurrent9": 4.86,
                "chunengCurrent10": 3,
                "chunengCurrent11": 1.25,
                "chunengCurrent12": 3.06,
                "chunengCurrent13": 0.87,
                "chunengCurrent14": 0.09,
                "chunengCurrent15": 2.34,
                "chunengCurrent16": 1.87,
                "chunengCurrent17": 3.01,
                "chunengCurrent18": 0.21,
                "chunengCurrent19": 0.32,
                "chunengCurrent20": 3.85
            }
        ],
    }
    getOption = () => {
        var list = this.state.chunengCurrenterature

        var time = new Array();
        var chunengCurrent1 = new Array();
        var chunengCurrent2 = new Array();
        var chunengCurrent3 = new Array();
        var chunengCurrent4 = new Array();
        var chunengCurrent5 = new Array();
        var chunengCurrent6 = new Array();
        var chunengCurrent7 = new Array();
        var chunengCurrent8 = new Array();
        var chunengCurrent9 = new Array();
        var chunengCurrent10 = new Array();
        var chunengCurrent11 = new Array();
        var chunengCurrent12 = new Array();
        var chunengCurrent13 = new Array();
        var chunengCurrent14 = new Array();
        var chunengCurrent15 = new Array();
        var chunengCurrent16 = new Array();
        var chunengCurrent17 = new Array();
        var chunengCurrent18 = new Array();
        var chunengCurrent19 = new Array();
        var chunengCurrent20 = new Array();

        for (var i = 0; i < list.length; i++) {
            time[i] = list[i].time;
            chunengCurrent1[i] = list[i].chunengCurrent1;
            chunengCurrent2[i] = list[i].chunengCurrent2;
            chunengCurrent3[i] = list[i].chunengCurrent3;
            chunengCurrent4[i] = list[i].chunengCurrent4;
            chunengCurrent5[i] = list[i].chunengCurrent5;
            chunengCurrent6[i] = list[i].chunengCurrent6;
            chunengCurrent7[i] = list[i].chunengCurrent7;
            chunengCurrent8[i] = list[i].chunengCurrent8;
            chunengCurrent9[i] = list[i].chunengCurrent9;
            chunengCurrent10[i] = list[i].chunengCurrent10;
            chunengCurrent11[i] = list[i].chunengCurrent11;
            chunengCurrent12[i] = list[i].chunengCurrent12;
            chunengCurrent13[i] = list[i].chunengCurrent13;
            chunengCurrent14[i] = list[i].chunengCurrent14;
            chunengCurrent15[i] = list[i].chunengCurrent15;
            chunengCurrent16[i] = list[i].chunengCurrent16;
            chunengCurrent17[i] = list[i].chunengCurrent17;
            chunengCurrent18[i] = list[i].chunengCurrent18;
            chunengCurrent19[i] = list[i].chunengCurrent19;
            chunengCurrent20[i] = list[i].chunengCurrent20;

        }

        return {
            title: {
                text: '机械特性储能电流',
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
                    data: chunengCurrent1,
                    itemStyle: {
                        color: '#027db4'
                    },
                }, {
                    name: '海凤3731',
                    type: 'line',
                    data: chunengCurrent2,
                    // smooth : true,

                }, {
                    name: '#3电容器',
                    type: 'line',
                    data: chunengCurrent3,
                    // smooth : true,

                }, {
                    name: '#1所用变',
                    type: 'line',
                    data: chunengCurrent4,
                    // smooth : true,

                }, {
                    name: '35kVI段母线避雷器',
                    type: 'line',
                    data: chunengCurrent5,
                    // smooth : true,

                }, {
                    name: '海洪3734',
                    type: 'line',
                    data: chunengCurrent6,
                    // smooth : true,

                }, {
                    name: '35kVI段母线压变插件',
                    type: 'line',
                    data: chunengCurrent7,
                    // smooth : true,

                }, {
                    name: '#1主变35kV',
                    type: 'line',
                    data: chunengCurrent8,
                    // smooth : true,

                }, {
                    name: '海变3733',
                    type: 'line',
                    data: chunengCurrent9,
                    // smooth : true,

                }, {
                    name: '35kV母分开关',
                    type: 'line',
                    data: chunengCurrent10,
                    itemStyle: {
                        color: '#027db4'
                    },
                }, {
                    name: '35kV母分插件',
                    type: 'line',
                    data: chunengCurrent11,
                }, {
                    name: '备用3572开关',
                    type: 'line',
                    data: chunengCurrent12,
                }, {
                    name: '#2主变35kV开关',
                    type: 'line',
                    data: chunengCurrent13,
                }, {
                    name: '35kVII段母线避雷器',
                    type: 'line',
                    data: chunengCurrent14,
                }, {
                    name: '海牌3735开关',
                    type: 'line',
                    data: chunengCurrent15,
                }, {
                    name: '35kVII段母线压变插件',
                    type: 'line',
                    data: chunengCurrent16,
                }, {
                    name: '#2电容器开关',
                    type: 'line',
                    data: chunengCurrent17,
                }, {
                    name: '#2所用变开关',
                    type: 'line',
                    data: chunengCurrent18,
                }, {
                    name: '#2电抗器开关',
                    type: 'line',
                    data: chunengCurrent19,
                }, {
                    name: '海时3738开关',
                    type: 'line',
                    data: chunengCurrent20,
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