import React, {Component} from "react";
import {Card} from 'antd'
import ReactEcharts from 'echarts-for-react'


export default class HezhaEcharts extends Component {
    state = {
        hezhaCurrenterature: [
            {
                "time": "14:00",
                "hezhaCurrent1": 3.75,
                "hezhaCurrent2": 4.07,
                "hezhaCurrent3": 3.78,
                "hezhaCurrent4": 1.24,
                "hezhaCurrent5": 2.27,
                "hezhaCurrent6": 4.9,
                "hezhaCurrent7": 4.61,
                "hezhaCurrent8": 0.24,
                "hezhaCurrent9": 4.05,
                "hezhaCurrent10": 3.08,
                "hezhaCurrent11": 3.05,
                "hezhaCurrent12": 2.01,
                "hezhaCurrent13": 2.91,
                "hezhaCurrent14": 0.01,
                "hezhaCurrent15": 3.68,
                "hezhaCurrent16": 3.91,
                "hezhaCurrent17": 1.96,
                "hezhaCurrent18": 3.11,
                "hezhaCurrent19": 1.13,
                "hezhaCurrent20": 4.19
            },
            {
                "time": "14:15",
                "hezhaCurrent1": 0.81,
                "hezhaCurrent2": 1.42,
                "hezhaCurrent3": 1.24,
                "hezhaCurrent4": 2.65,
                "hezhaCurrent5": 4.55,
                "hezhaCurrent6": 4.69,
                "hezhaCurrent7": 3.86,
                "hezhaCurrent8": 1.35,
                "hezhaCurrent9": 4.54,
                "hezhaCurrent10": 2.29,
                "hezhaCurrent11": 2.23,
                "hezhaCurrent12": 1.33,
                "hezhaCurrent13": 2.59,
                "hezhaCurrent14": 4.5,
                "hezhaCurrent15": 0.37,
                "hezhaCurrent16": 0.04,
                "hezhaCurrent17": 4.19,
                "hezhaCurrent18": 1.74,
                "hezhaCurrent19": 4.98,
                "hezhaCurrent20": 3.41
            },
            {
                "time": "14:30",
                "hezhaCurrent1": 0.81,
                "hezhaCurrent2": 1.76,
                "hezhaCurrent3": 4.06,
                "hezhaCurrent4": 4.26,
                "hezhaCurrent5": 0.28,
                "hezhaCurrent6": 3.13,
                "hezhaCurrent7": 0,
                "hezhaCurrent8": 0,
                "hezhaCurrent9": 2.24,
                "hezhaCurrent10": 3.67,
                "hezhaCurrent11": 4.7,
                "hezhaCurrent12": 0.23,
                "hezhaCurrent13": 3.3,
                "hezhaCurrent14": 0.98,
                "hezhaCurrent15": 1.12,
                "hezhaCurrent16": 3.33,
                "hezhaCurrent17": 4.73,
                "hezhaCurrent18": 3.71,
                "hezhaCurrent19": 1.62,
                "hezhaCurrent20": 1.76
            },
            {
                "time": "14:45",
                "hezhaCurrent1": 1.63,
                "hezhaCurrent2": 3.5,
                "hezhaCurrent3": 3.97,
                "hezhaCurrent4": 2.65,
                "hezhaCurrent5": 2.4,
                "hezhaCurrent6": 2.41,
                "hezhaCurrent7": 3.93,
                "hezhaCurrent8": 0.09,
                "hezhaCurrent9": 0.73,
                "hezhaCurrent10": 4.57,
                "hezhaCurrent11": 0.03,
                "hezhaCurrent12": 3.93,
                "hezhaCurrent13": 4.3,
                "hezhaCurrent14": 0.51,
                "hezhaCurrent15": 3.6,
                "hezhaCurrent16": 0.65,
                "hezhaCurrent17": 3.4,
                "hezhaCurrent18": 3.27,
                "hezhaCurrent19": 4.52,
                "hezhaCurrent20": 4.51
            },
            {
                "time": "15:00",
                "hezhaCurrent1": 3.93,
                "hezhaCurrent2": 1.46,
                "hezhaCurrent3": 4.07,
                "hezhaCurrent4": 4,
                "hezhaCurrent5": 2.41,
                "hezhaCurrent6": 3.43,
                "hezhaCurrent7": 1.71,
                "hezhaCurrent8": 2.59,
                "hezhaCurrent9": 1.59,
                "hezhaCurrent10": 2.59,
                "hezhaCurrent11": 3.73,
                "hezhaCurrent12": 2.95,
                "hezhaCurrent13": 2.04,
                "hezhaCurrent14": 4.9,
                "hezhaCurrent15": 4.36,
                "hezhaCurrent16": 4.46,
                "hezhaCurrent17": 4.24,
                "hezhaCurrent18": 0.11,
                "hezhaCurrent19": 2.05,
                "hezhaCurrent20": 2.16
            },
            {
                "time": "15:15",
                "hezhaCurrent1": 4.4,
                "hezhaCurrent2": 4.64,
                "hezhaCurrent3": 4.9,
                "hezhaCurrent4": 0.8,
                "hezhaCurrent5": 4.55,
                "hezhaCurrent6": 3.11,
                "hezhaCurrent7": 2.26,
                "hezhaCurrent8": 0.78,
                "hezhaCurrent9": 0.89,
                "hezhaCurrent10": 0.14,
                "hezhaCurrent11": 3.75,
                "hezhaCurrent12": 3.79,
                "hezhaCurrent13": 1.59,
                "hezhaCurrent14": 0.83,
                "hezhaCurrent15": 0.71,
                "hezhaCurrent16": 4.66,
                "hezhaCurrent17": 4.7,
                "hezhaCurrent18": 2.98,
                "hezhaCurrent19": 1.94,
                "hezhaCurrent20": 1.97
            },
            {
                "time": "15:30",
                "hezhaCurrent1": 1.15,
                "hezhaCurrent2": 1.25,
                "hezhaCurrent3": 3.39,
                "hezhaCurrent4": 4.63,
                "hezhaCurrent5": 4.99,
                "hezhaCurrent6": 3.09,
                "hezhaCurrent7": 1.9,
                "hezhaCurrent8": 3.16,
                "hezhaCurrent9": 2.77,
                "hezhaCurrent10": 0.02,
                "hezhaCurrent11": 4.74,
                "hezhaCurrent12": 1.16,
                "hezhaCurrent13": 2.85,
                "hezhaCurrent14": 4.15,
                "hezhaCurrent15": 0.74,
                "hezhaCurrent16": 1.6,
                "hezhaCurrent17": 1.62,
                "hezhaCurrent18": 4.39,
                "hezhaCurrent19": 0.09,
                "hezhaCurrent20": 1.25
            },
            {
                "time": "15:45",
                "hezhaCurrent1": 1.75,
                "hezhaCurrent2": 2.14,
                "hezhaCurrent3": 3.26,
                "hezhaCurrent4": 3.49,
                "hezhaCurrent5": 4.88,
                "hezhaCurrent6": 1.24,
                "hezhaCurrent7": 1.34,
                "hezhaCurrent8": 2.6,
                "hezhaCurrent9": 0.02,
                "hezhaCurrent10": 4.38,
                "hezhaCurrent11": 2.61,
                "hezhaCurrent12": 3.78,
                "hezhaCurrent13": 1.38,
                "hezhaCurrent14": 1.59,
                "hezhaCurrent15": 2.95,
                "hezhaCurrent16": 2.89,
                "hezhaCurrent17": 3.22,
                "hezhaCurrent18": 4.49,
                "hezhaCurrent19": 4.97,
                "hezhaCurrent20": 1.23
            },
            {
                "time": "16:00",
                "hezhaCurrent1": 3.96,
                "hezhaCurrent2": 0.43,
                "hezhaCurrent3": 0.38,
                "hezhaCurrent4": 2.49,
                "hezhaCurrent5": 2.12,
                "hezhaCurrent6": 0.78,
                "hezhaCurrent7": 0.92,
                "hezhaCurrent8": 3.62,
                "hezhaCurrent9": 0.33,
                "hezhaCurrent10": 2.78,
                "hezhaCurrent11": 2.16,
                "hezhaCurrent12": 4.53,
                "hezhaCurrent13": 2.23,
                "hezhaCurrent14": 4.91,
                "hezhaCurrent15": 0.53,
                "hezhaCurrent16": 0.54,
                "hezhaCurrent17": 1.41,
                "hezhaCurrent18": 2.37,
                "hezhaCurrent19": 4.02,
                "hezhaCurrent20": 3.55
            },
            {
                "time": "16:15",
                "hezhaCurrent1": 0.3,
                "hezhaCurrent2": 2.11,
                "hezhaCurrent3": 0.22,
                "hezhaCurrent4": 2.19,
                "hezhaCurrent5": 3.3,
                "hezhaCurrent6": 1.57,
                "hezhaCurrent7": 0.41,
                "hezhaCurrent8": 1.85,
                "hezhaCurrent9": 4.46,
                "hezhaCurrent10": 2.41,
                "hezhaCurrent11": 3.22,
                "hezhaCurrent12": 3.08,
                "hezhaCurrent13": 3.22,
                "hezhaCurrent14": 4.14,
                "hezhaCurrent15": 2.03,
                "hezhaCurrent16": 1.36,
                "hezhaCurrent17": 4.65,
                "hezhaCurrent18": 0.29,
                "hezhaCurrent19": 4.48,
                "hezhaCurrent20": 4.26
            }
        ],
    }
    getOption = () => {
        var list = this.state.hezhaCurrenterature

        var time = new Array();
        var hezhaCurrent1 = new Array();
        var hezhaCurrent2 = new Array();
        var hezhaCurrent3 = new Array();
        var hezhaCurrent4 = new Array();
        var hezhaCurrent5 = new Array();
        var hezhaCurrent6 = new Array();
        var hezhaCurrent7 = new Array();
        var hezhaCurrent8 = new Array();
        var hezhaCurrent9 = new Array();
        var hezhaCurrent10 = new Array();
        var hezhaCurrent11 = new Array();
        var hezhaCurrent12 = new Array();
        var hezhaCurrent13 = new Array();
        var hezhaCurrent14 = new Array();
        var hezhaCurrent15 = new Array();
        var hezhaCurrent16 = new Array();
        var hezhaCurrent17 = new Array();
        var hezhaCurrent18 = new Array();
        var hezhaCurrent19 = new Array();
        var hezhaCurrent20 = new Array();

        for (var i = 0; i < list.length; i++) {
            time[i] = list[i].time;
            hezhaCurrent1[i] = list[i].hezhaCurrent1;
            hezhaCurrent2[i] = list[i].hezhaCurrent2;
            hezhaCurrent3[i] = list[i].hezhaCurrent3;
            hezhaCurrent4[i] = list[i].hezhaCurrent4;
            hezhaCurrent5[i] = list[i].hezhaCurrent5;
            hezhaCurrent6[i] = list[i].hezhaCurrent6;
            hezhaCurrent7[i] = list[i].hezhaCurrent7;
            hezhaCurrent8[i] = list[i].hezhaCurrent8;
            hezhaCurrent9[i] = list[i].hezhaCurrent9;
            hezhaCurrent10[i] = list[i].hezhaCurrent10;
            hezhaCurrent11[i] = list[i].hezhaCurrent11;
            hezhaCurrent12[i] = list[i].hezhaCurrent12;
            hezhaCurrent13[i] = list[i].hezhaCurrent13;
            hezhaCurrent14[i] = list[i].hezhaCurrent14;
            hezhaCurrent15[i] = list[i].hezhaCurrent15;
            hezhaCurrent16[i] = list[i].hezhaCurrent16;
            hezhaCurrent17[i] = list[i].hezhaCurrent17;
            hezhaCurrent18[i] = list[i].hezhaCurrent18;
            hezhaCurrent19[i] = list[i].hezhaCurrent19;
            hezhaCurrent20[i] = list[i].hezhaCurrent20;

        }

        return {
            title: {
                text: '机械特性合闸电流',
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
                    data: hezhaCurrent1,
                    // itemStyle: {
                    //     color: '#027db4'
                    // },
                }, {
                    name: '海凤3731',
                    type: 'line',
                    data: hezhaCurrent2,
                    // smooth : true,

                }, {
                    name: '#3电容器',
                    type: 'line',
                    data: hezhaCurrent3,
                    // smooth : true,

                }, {
                    name: '#1所用变',
                    type: 'line',
                    data: hezhaCurrent4,
                    // smooth : true,

                }, {
                    name: '35kVI段母线避雷器',
                    type: 'line',
                    data: hezhaCurrent5,
                    // smooth : true,

                }, {
                    name: '海洪3734',
                    type: 'line',
                    data: hezhaCurrent6,
                    // smooth : true,

                }, {
                    name: '35kVI段母线压变插件',
                    type: 'line',
                    data: hezhaCurrent7,
                    // smooth : true,

                }, {
                    name: '#1主变35kV',
                    type: 'line',
                    data: hezhaCurrent8,
                    // smooth : true,

                }, {
                    name: '海变3733',
                    type: 'line',
                    data: hezhaCurrent9,
                    // smooth : true,

                }, {
                    name: '35kV母分开关',
                    type: 'line',
                    data: hezhaCurrent10,
                    itemStyle: {
                        color: '#027db4'
                    },
                }, {
                    name: '35kV母分插件',
                    type: 'line',
                    data: hezhaCurrent11,
                }, {
                    name: '备用3572开关',
                    type: 'line',
                    data: hezhaCurrent12,
                }, {
                    name: '#2主变35kV开关',
                    type: 'line',
                    data: hezhaCurrent13,
                }, {
                    name: '35kVII段母线避雷器',
                    type: 'line',
                    data: hezhaCurrent14,
                }, {
                    name: '海牌3735开关',
                    type: 'line',
                    data: hezhaCurrent15,
                }, {
                    name: '35kVII段母线压变插件',
                    type: 'line',
                    data: hezhaCurrent16,
                }, {
                    name: '#2电容器开关',
                    type: 'line',
                    data: hezhaCurrent17,
                }, {
                    name: '#2所用变开关',
                    type: 'line',
                    data: hezhaCurrent18,
                }, {
                    name: '#2电抗器开关',
                    type: 'line',
                    data: hezhaCurrent19,
                }, {
                    name: '海时3738开关',
                    type: 'line',
                    data: hezhaCurrent20,
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