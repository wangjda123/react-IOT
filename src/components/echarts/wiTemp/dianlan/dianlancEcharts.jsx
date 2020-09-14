import React, {Component} from "react";
import {Card} from 'antd'
import ReactEcharts from 'echarts-for-react'


export default class DianlancEcharts extends Component {

    state = {
        dianlan_C: [
            {
                "time": "14:00",
                "dianlan_C1": 37.07,
                "dianlan_C2": 40.33,
                "dianlan_C3": 48.17,
                "dianlan_C4": 40.04,
                "dianlan_C5": 54.54,
                "dianlan_C6": 43.69,
                "dianlan_C7": 38.25,
                "dianlan_C8": 50.71,
                "dianlan_C9": 41.32,
                "dianlan_C10": 50.85,
                "dianlan_C11": 41.42,
                "dianlan_C12": 34.62,
                "dianlan_C13": 35.65,
                "dianlan_C14": 47.6,
                "dianlan_C15": 45.95,
                "dianlan_C16": 52.78,
                "dianlan_C17": 41.36,
                "dianlan_C18": 46.06,
                "dianlan_C19": 37.16,
                "dianlan_C20": 39.18
            },
            {
                "time": "14:15",
                "dianlan_C1": 45.3,
                "dianlan_C2": 47.78,
                "dianlan_C3": 47.730000000000004,
                "dianlan_C4": 37.05,
                "dianlan_C5": 34.480000000000004,
                "dianlan_C6": 47.55,
                "dianlan_C7": 39.38,
                "dianlan_C8": 53.97,
                "dianlan_C9": 32.95,
                "dianlan_C10": 46.84,
                "dianlan_C11": 34.69,
                "dianlan_C12": 50.31,
                "dianlan_C13": 51.28,
                "dianlan_C14": 47.41,
                "dianlan_C15": 50.83,
                "dianlan_C16": 46.2,
                "dianlan_C17": 48.730000000000004,
                "dianlan_C18": 43.09,
                "dianlan_C19": 44.11,
                "dianlan_C20": 41.480000000000004
            },
            {
                "time": "14:30",
                "dianlan_C1": 37.29,
                "dianlan_C2": 52.55,
                "dianlan_C3": 40.08,
                "dianlan_C4": 41.9,
                "dianlan_C5": 40.1,
                "dianlan_C6": 44.7,
                "dianlan_C7": 41.63,
                "dianlan_C8": 37.43,
                "dianlan_C9": 53.9,
                "dianlan_C10": 51.379999999999995,
                "dianlan_C11": 41.03,
                "dianlan_C12": 50.47,
                "dianlan_C13": 32.12,
                "dianlan_C14": 46.85,
                "dianlan_C15": 40.7,
                "dianlan_C16": 46.36,
                "dianlan_C17": 41.71,
                "dianlan_C18": 30.31,
                "dianlan_C19": 43.41,
                "dianlan_C20": 39.519999999999996
            },
            {
                "time": "14:45",
                "dianlan_C1": 48.05,
                "dianlan_C2": 43.5,
                "dianlan_C3": 40.58,
                "dianlan_C4": 52.61,
                "dianlan_C5": 52.58,
                "dianlan_C6": 45.45,
                "dianlan_C7": 42.54,
                "dianlan_C8": 50.17,
                "dianlan_C9": 42.43,
                "dianlan_C10": 51.66,
                "dianlan_C11": 54.71,
                "dianlan_C12": 30.91,
                "dianlan_C13": 35.03,
                "dianlan_C14": 46.67,
                "dianlan_C15": 46.980000000000004,
                "dianlan_C16": 32.73,
                "dianlan_C17": 37.61,
                "dianlan_C18": 33.54,
                "dianlan_C19": 52.43,
                "dianlan_C20": 47.519999999999996
            },
            {
                "time": "15:00",
                "dianlan_C1": 45.63,
                "dianlan_C2": 38.4,
                "dianlan_C3": 42.980000000000004,
                "dianlan_C4": 38,
                "dianlan_C5": 32.85,
                "dianlan_C6": 30.19,
                "dianlan_C7": 33.41,
                "dianlan_C8": 52.28,
                "dianlan_C9": 52.760000000000005,
                "dianlan_C10": 54.04,
                "dianlan_C11": 54.21,
                "dianlan_C12": 52.33,
                "dianlan_C13": 46.75,
                "dianlan_C14": 38.79,
                "dianlan_C15": 49.75,
                "dianlan_C16": 37.29,
                "dianlan_C17": 34.9,
                "dianlan_C18": 40.019999999999996,
                "dianlan_C19": 34.33,
                "dianlan_C20": 31.03
            },
            {
                "time": "15:15",
                "dianlan_C1": 36.78,
                "dianlan_C2": 50.89,
                "dianlan_C3": 42.47,
                "dianlan_C4": 54.65,
                "dianlan_C5": 41.09,
                "dianlan_C6": 37.96,
                "dianlan_C7": 30.81,
                "dianlan_C8": 33.81,
                "dianlan_C9": 50.84,
                "dianlan_C10": 35.91,
                "dianlan_C11": 30.72,
                "dianlan_C12": 40.44,
                "dianlan_C13": 42.43,
                "dianlan_C14": 49.93,
                "dianlan_C15": 49.16,
                "dianlan_C16": 51.17,
                "dianlan_C17": 49.95,
                "dianlan_C18": 36.33,
                "dianlan_C19": 48.92,
                "dianlan_C20": 54.11
            },
            {
                "time": "15:30",
                "dianlan_C1": 41.769999999999996,
                "dianlan_C2": 48.31,
                "dianlan_C3": 37.13,
                "dianlan_C4": 31.51,
                "dianlan_C5": 50.14,
                "dianlan_C6": 44.49,
                "dianlan_C7": 42.36,
                "dianlan_C8": 42.94,
                "dianlan_C9": 47.22,
                "dianlan_C10": 33.91,
                "dianlan_C11": 51.879999999999995,
                "dianlan_C12": 46.97,
                "dianlan_C13": 45.019999999999996,
                "dianlan_C14": 44.63,
                "dianlan_C15": 41.49,
                "dianlan_C16": 31.99,
                "dianlan_C17": 46.14,
                "dianlan_C18": 49.010000000000005,
                "dianlan_C19": 49.69,
                "dianlan_C20": 52.71
            },
            {
                "time": "15:45",
                "dianlan_C1": 48.129999999999995,
                "dianlan_C2": 54.370000000000005,
                "dianlan_C3": 49.91,
                "dianlan_C4": 39.76,
                "dianlan_C5": 43.24,
                "dianlan_C6": 48.519999999999996,
                "dianlan_C7": 42.45,
                "dianlan_C8": 33.12,
                "dianlan_C9": 46.14,
                "dianlan_C10": 47.69,
                "dianlan_C11": 48.71,
                "dianlan_C12": 46.95,
                "dianlan_C13": 41.6,
                "dianlan_C14": 46.25,
                "dianlan_C15": 40.89,
                "dianlan_C16": 40.17,
                "dianlan_C17": 41.769999999999996,
                "dianlan_C18": 30,
                "dianlan_C19": 53.42,
                "dianlan_C20": 45.75
            },
            {
                "time": "16:00",
                "dianlan_C1": 38.26,
                "dianlan_C2": 52.35,
                "dianlan_C3": 49.28,
                "dianlan_C4": 44.92,
                "dianlan_C5": 34.7,
                "dianlan_C6": 52.65,
                "dianlan_C7": 44.96,
                "dianlan_C8": 54.8,
                "dianlan_C9": 42.769999999999996,
                "dianlan_C10": 45.99,
                "dianlan_C11": 34.19,
                "dianlan_C12": 30.12,
                "dianlan_C13": 54.81,
                "dianlan_C14": 31.03,
                "dianlan_C15": 39.65,
                "dianlan_C16": 54.07,
                "dianlan_C17": 40.83,
                "dianlan_C18": 40.78,
                "dianlan_C19": 37.96,
                "dianlan_C20": 52.06
            },
            {
                "time": "16:15",
                "dianlan_C1": 54.989999999999995,
                "dianlan_C2": 30.61,
                "dianlan_C3": 41.84,
                "dianlan_C4": 32.4,
                "dianlan_C5": 47.379999999999995,
                "dianlan_C6": 42.71,
                "dianlan_C7": 41.35,
                "dianlan_C8": 32.62,
                "dianlan_C9": 33.64,
                "dianlan_C10": 54.47,
                "dianlan_C11": 41.79,
                "dianlan_C12": 44.230000000000004,
                "dianlan_C13": 34.14,
                "dianlan_C14": 38.36,
                "dianlan_C15": 53.760000000000005,
                "dianlan_C16": 36.65,
                "dianlan_C17": 39.78,
                "dianlan_C18": 34.59,
                "dianlan_C19": 34.59,
                "dianlan_C20": 51.85
            }
        ],
    }
    getOption = () => {

        var list = this.state.dianlan_C

        var time = new Array();
        var dianlan_C1 = new Array();
        var dianlan_C2 = new Array();
        var dianlan_C3 = new Array();
        var dianlan_C4 = new Array();
        var dianlan_C5 = new Array();
        var dianlan_C6 = new Array();
        var dianlan_C7 = new Array();
        var dianlan_C8 = new Array();
        var dianlan_C9 = new Array();
        var dianlan_C10 = new Array();
        var dianlan_C11 = new Array();
        var dianlan_C12 = new Array();
        var dianlan_C13 = new Array();
        var dianlan_C14 = new Array();
        var dianlan_C15 = new Array();
        var dianlan_C16 = new Array();
        var dianlan_C17 = new Array();
        var dianlan_C18 = new Array();
        var dianlan_C19 = new Array();
        var dianlan_C20 = new Array();

        for (var i = 0; i < list.length; i++) {
            time[i] = list[i].time;
            dianlan_C1[i] = list[i].dianlan_C1;
            dianlan_C2[i] = list[i].dianlan_C2;
            dianlan_C3[i] = list[i].dianlan_C3;
            dianlan_C4[i] = list[i].dianlan_C4;
            dianlan_C5[i] = list[i].dianlan_C5;
            dianlan_C6[i] = list[i].dianlan_C6;
            dianlan_C7[i] = list[i].dianlan_C7;
            dianlan_C8[i] = list[i].dianlan_C8;
            dianlan_C9[i] = list[i].dianlan_C9;
            dianlan_C10[i] = list[i].dianlan_C10;
            dianlan_C11[i] = list[i].dianlan_C11;
            dianlan_C12[i] = list[i].dianlan_C12;
            dianlan_C13[i] = list[i].dianlan_C13;
            dianlan_C14[i] = list[i].dianlan_C14;
            dianlan_C15[i] = list[i].dianlan_C15;
            dianlan_C16[i] = list[i].dianlan_C16;
            dianlan_C17[i] = list[i].dianlan_C17;
            dianlan_C18[i] = list[i].dianlan_C18;
            dianlan_C19[i] = list[i].dianlan_C19;
            dianlan_C20[i] = list[i].dianlan_C20;

        }

        return {
            title: {
                text: '无线测温电缆C相折线图',
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
                    data: dianlan_C1,
                    itemStyle: {
                        color: '#027db4'
                    },
                }, {
                    name: '海凤3731',
                    type: 'line',
                    data: dianlan_C2,
                    // smooth : true,

                }, {
                    name: '#3电容器',
                    type: 'line',
                    data: dianlan_C3,
                    // smooth : true,

                }, {
                    name: '#1所用变',
                    type: 'line',
                    data: dianlan_C4,
                    // smooth : true,

                }, {
                    name: '35kVI段母线避雷器',
                    type: 'line',
                    data: dianlan_C5,
                    // smooth : true,

                }, {
                    name: '海洪3734',
                    type: 'line',
                    data: dianlan_C6,
                    // smooth : true,

                }, {
                    name: '35kVI段母线压变插件',
                    type: 'line',
                    data: dianlan_C7,
                    // smooth : true,

                }, {
                    name: '#1主变35kV',
                    type: 'line',
                    data: dianlan_C8,
                    // smooth : true,

                }, {
                    name: '海变3733',
                    type: 'line',
                    data: dianlan_C9,
                    // smooth : true,

                }, {
                    name: '35kV母分开关',
                    type: 'line',
                    data: dianlan_C10,
                    itemStyle: {
                        color: '#027db4'
                    },
                }, {
                    name: '35kV母分插件',
                    type: 'line',
                    data: dianlan_C11,
                }, {
                    name: '备用3572开关',
                    type: 'line',
                    data: dianlan_C12,
                }, {
                    name: '#2主变35kV开关',
                    type: 'line',
                    data: dianlan_C13,
                }, {
                    name: '35kVII段母线避雷器',
                    type: 'line',
                    data: dianlan_C14,
                }, {
                    name: '海牌3735开关',
                    type: 'line',
                    data: dianlan_C15,
                }, {
                    name: '35kVII段母线压变插件',
                    type: 'line',
                    data: dianlan_C16,
                }, {
                    name: '#2电容器开关',
                    type: 'line',
                    data: dianlan_C17,
                }, {
                    name: '#2所用变开关',
                    type: 'line',
                    data: dianlan_C18,
                }, {
                    name: '#2电抗器开关',
                    type: 'line',
                    data: dianlan_C19,
                }, {
                    name: '海时3738开关',
                    type: 'line',
                    data: dianlan_C20,
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