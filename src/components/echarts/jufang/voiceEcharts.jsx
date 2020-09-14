import React, {Component} from "react";
import {Card} from 'antd'
import ReactEcharts from 'echarts-for-react'


export default class VoiceEcharts extends Component {

    state = {
        ultrasonicWave: [
            {
                "time": "14:00",
                "ultrasonicWave1": 1,
                "ultrasonicWave2": 2,
                "ultrasonicWave3": 15,
                "ultrasonicWave4": 18,
                "ultrasonicWave5": 2,
                "ultrasonicWave6": 0,
                "ultrasonicWave7": 0,
                "ultrasonicWave8": 9,
                "ultrasonicWave9": 14,
                "ultrasonicWave10": 19,
                "ultrasonicWave11": 15,
                "ultrasonicWave12": 4,
                "ultrasonicWave13": 10,
                "ultrasonicWave14": 10,
                "ultrasonicWave15": 9,
                "ultrasonicWave16": 14,
                "ultrasonicWave17": 4,
                "ultrasonicWave18": 18,
                "ultrasonicWave19": 7,
                "ultrasonicWave20": 19
            },
            {
                "time": "14:15",
                "ultrasonicWave1": 6,
                "ultrasonicWave2": 4,
                "ultrasonicWave3": 17,
                "ultrasonicWave4": 18,
                "ultrasonicWave5": 1,
                "ultrasonicWave6": 3,
                "ultrasonicWave7": 1,
                "ultrasonicWave8": 14,
                "ultrasonicWave9": 20,
                "ultrasonicWave10": 3,
                "ultrasonicWave11": 9,
                "ultrasonicWave12": 19,
                "ultrasonicWave13": 7,
                "ultrasonicWave14": 1,
                "ultrasonicWave15": 14,
                "ultrasonicWave16": 7,
                "ultrasonicWave17": 10,
                "ultrasonicWave18": 17,
                "ultrasonicWave19": 8,
                "ultrasonicWave20": 20
            },
            {
                "time": "14:30",
                "ultrasonicWave1": 14,
                "ultrasonicWave2": 20,
                "ultrasonicWave3": 4,
                "ultrasonicWave4": 19,
                "ultrasonicWave5": 18,
                "ultrasonicWave6": 19,
                "ultrasonicWave7": 5,
                "ultrasonicWave8": 16,
                "ultrasonicWave9": 16,
                "ultrasonicWave10": 8,
                "ultrasonicWave11": 14,
                "ultrasonicWave12": 1,
                "ultrasonicWave13": 8,
                "ultrasonicWave14": 10,
                "ultrasonicWave15": 7,
                "ultrasonicWave16": 6,
                "ultrasonicWave17": 20,
                "ultrasonicWave18": 19,
                "ultrasonicWave19": 20,
                "ultrasonicWave20": 13
            },
            {
                "time": "14:45",
                "ultrasonicWave1": 7,
                "ultrasonicWave2": 13,
                "ultrasonicWave3": 4,
                "ultrasonicWave4": 9,
                "ultrasonicWave5": 8,
                "ultrasonicWave6": 13,
                "ultrasonicWave7": 19,
                "ultrasonicWave8": 1,
                "ultrasonicWave9": 15,
                "ultrasonicWave10": 1,
                "ultrasonicWave11": 6,
                "ultrasonicWave12": 14,
                "ultrasonicWave13": 20,
                "ultrasonicWave14": 2,
                "ultrasonicWave15": 5,
                "ultrasonicWave16": 7,
                "ultrasonicWave17": 13,
                "ultrasonicWave18": 7,
                "ultrasonicWave19": 9,
                "ultrasonicWave20": 6
            },
            {
                "time": "15:00",
                "ultrasonicWave1": 4,
                "ultrasonicWave2": 6,
                "ultrasonicWave3": 3,
                "ultrasonicWave4": 17,
                "ultrasonicWave5": 8,
                "ultrasonicWave6": 12,
                "ultrasonicWave7": 10,
                "ultrasonicWave8": 18,
                "ultrasonicWave9": 3,
                "ultrasonicWave10": 5,
                "ultrasonicWave11": 6,
                "ultrasonicWave12": 1,
                "ultrasonicWave13": 18,
                "ultrasonicWave14": 11,
                "ultrasonicWave15": 8,
                "ultrasonicWave16": 10,
                "ultrasonicWave17": 11,
                "ultrasonicWave18": 19,
                "ultrasonicWave19": 11,
                "ultrasonicWave20": 1
            },
            {
                "time": "15:15",
                "ultrasonicWave1": 10,
                "ultrasonicWave2": 0,
                "ultrasonicWave3": 11,
                "ultrasonicWave4": 11,
                "ultrasonicWave5": 18,
                "ultrasonicWave6": 14,
                "ultrasonicWave7": 8,
                "ultrasonicWave8": 20,
                "ultrasonicWave9": 8,
                "ultrasonicWave10": 9,
                "ultrasonicWave11": 13,
                "ultrasonicWave12": 19,
                "ultrasonicWave13": 16,
                "ultrasonicWave14": 19,
                "ultrasonicWave15": 5,
                "ultrasonicWave16": 19,
                "ultrasonicWave17": 12,
                "ultrasonicWave18": 13,
                "ultrasonicWave19": 18,
                "ultrasonicWave20": 2
            },
            {
                "time": "15:30",
                "ultrasonicWave1": 2,
                "ultrasonicWave2": 2,
                "ultrasonicWave3": 7,
                "ultrasonicWave4": 3,
                "ultrasonicWave5": 7,
                "ultrasonicWave6": 7,
                "ultrasonicWave7": 9,
                "ultrasonicWave8": 8,
                "ultrasonicWave9": 20,
                "ultrasonicWave10": 5,
                "ultrasonicWave11": 14,
                "ultrasonicWave12": 2,
                "ultrasonicWave13": 6,
                "ultrasonicWave14": 13,
                "ultrasonicWave15": 5,
                "ultrasonicWave16": 11,
                "ultrasonicWave17": 4,
                "ultrasonicWave18": 11,
                "ultrasonicWave19": 18,
                "ultrasonicWave20": 13
            },
            {
                "time": "15:45",
                "ultrasonicWave1": 8,
                "ultrasonicWave2": 12,
                "ultrasonicWave3": 2,
                "ultrasonicWave4": 15,
                "ultrasonicWave5": 19,
                "ultrasonicWave6": 19,
                "ultrasonicWave7": 16,
                "ultrasonicWave8": 13,
                "ultrasonicWave9": 18,
                "ultrasonicWave10": 1,
                "ultrasonicWave11": 5,
                "ultrasonicWave12": 11,
                "ultrasonicWave13": 20,
                "ultrasonicWave14": 8,
                "ultrasonicWave15": 2,
                "ultrasonicWave16": 3,
                "ultrasonicWave17": 15,
                "ultrasonicWave18": 16,
                "ultrasonicWave19": 7,
                "ultrasonicWave20": 11
            },
            {
                "time": "16:00",
                "ultrasonicWave1": 11,
                "ultrasonicWave2": 19,
                "ultrasonicWave3": 10,
                "ultrasonicWave4": 7,
                "ultrasonicWave5": 3,
                "ultrasonicWave6": 10,
                "ultrasonicWave7": 18,
                "ultrasonicWave8": 11,
                "ultrasonicWave9": 4,
                "ultrasonicWave10": 7,
                "ultrasonicWave11": 17,
                "ultrasonicWave12": 12,
                "ultrasonicWave13": 11,
                "ultrasonicWave14": 0,
                "ultrasonicWave15": 11,
                "ultrasonicWave16": 9,
                "ultrasonicWave17": 6,
                "ultrasonicWave18": 19,
                "ultrasonicWave19": 6,
                "ultrasonicWave20": 20
            },
            {
                "time": "16:15",
                "ultrasonicWave1": 0,
                "ultrasonicWave2": 2,
                "ultrasonicWave3": 4,
                "ultrasonicWave4": 5,
                "ultrasonicWave5": 13,
                "ultrasonicWave6": 19,
                "ultrasonicWave7": 13,
                "ultrasonicWave8": 17,
                "ultrasonicWave9": 11,
                "ultrasonicWave10": 8,
                "ultrasonicWave11": 3,
                "ultrasonicWave12": 19,
                "ultrasonicWave13": 8,
                "ultrasonicWave14": 6,
                "ultrasonicWave15": 2,
                "ultrasonicWave16": 12,
                "ultrasonicWave17": 18,
                "ultrasonicWave18": 3,
                "ultrasonicWave19": 17,
                "ultrasonicWave20": 5
            }
        ],
    }
    getOption = () => {

        var list = this.state.ultrasonicWave

        var time = new Array();
        var ultrasonicWave1 = new Array();
        var ultrasonicWave2 = new Array();
        var ultrasonicWave3 = new Array();
        var ultrasonicWave4 = new Array();
        var ultrasonicWave5 = new Array();
        var ultrasonicWave6 = new Array();
        var ultrasonicWave7 = new Array();
        var ultrasonicWave8 = new Array();
        var ultrasonicWave9 = new Array();
        var ultrasonicWave10 = new Array();
        var ultrasonicWave11 = new Array();
        var ultrasonicWave12 = new Array();
        var ultrasonicWave13 = new Array();
        var ultrasonicWave14 = new Array();
        var ultrasonicWave15 = new Array();
        var ultrasonicWave16 = new Array();
        var ultrasonicWave17 = new Array();
        var ultrasonicWave18 = new Array();
        var ultrasonicWave19 = new Array();
        var ultrasonicWave20 = new Array();

        for (var i = 0; i < list.length; i++) {
            time[i] = list[i].time;
            ultrasonicWave1[i] = list[i].ultrasonicWave1;
            ultrasonicWave2[i] = list[i].ultrasonicWave2;
            ultrasonicWave3[i] = list[i].ultrasonicWave3;
            ultrasonicWave4[i] = list[i].ultrasonicWave4;
            ultrasonicWave5[i] = list[i].ultrasonicWave5;
            ultrasonicWave6[i] = list[i].ultrasonicWave6;
            ultrasonicWave7[i] = list[i].ultrasonicWave7;
            ultrasonicWave8[i] = list[i].ultrasonicWave8;
            ultrasonicWave9[i] = list[i].ultrasonicWave9;
            ultrasonicWave10[i] = list[i].ultrasonicWave10;
            ultrasonicWave11[i] = list[i].ultrasonicWave11;
            ultrasonicWave12[i] = list[i].ultrasonicWave12;
            ultrasonicWave13[i] = list[i].ultrasonicWave13;
            ultrasonicWave14[i] = list[i].ultrasonicWave14;
            ultrasonicWave15[i] = list[i].ultrasonicWave15;
            ultrasonicWave16[i] = list[i].ultrasonicWave16;
            ultrasonicWave17[i] = list[i].ultrasonicWave17;
            ultrasonicWave18[i] = list[i].ultrasonicWave18;
            ultrasonicWave19[i] = list[i].ultrasonicWave19;
            ultrasonicWave20[i] = list[i].ultrasonicWave20;

        }

        return {
            title: {
                text: '局部放电超声波折线图',
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
                min: 0,
                axisLabel: {
                    formatter: '{value} dBmV'
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
                    data: ultrasonicWave1,
                    itemStyle: {
                        color: '#027db4'
                    },
                }, {
                    name: '海凤3731',
                    type: 'line',
                    data: ultrasonicWave2,
                    // smooth : true,

                }, {
                    name: '#3电容器',
                    type: 'line',
                    data: ultrasonicWave3,
                    // smooth : true,

                }, {
                    name: '#1所用变',
                    type: 'line',
                    data: ultrasonicWave4,
                    // smooth : true,

                }, {
                    name: '35kVI段母线避雷器',
                    type: 'line',
                    data: ultrasonicWave5,
                    // smooth : true,

                }, {
                    name: '海洪3734',
                    type: 'line',
                    data: ultrasonicWave6,
                    // smooth : true,

                }, {
                    name: '35kVI段母线压变插件',
                    type: 'line',
                    data: ultrasonicWave7,
                    // smooth : true,

                }, {
                    name: '#1主变35kV',
                    type: 'line',
                    data: ultrasonicWave8,
                    // smooth : true,

                }, {
                    name: '海变3733',
                    type: 'line',
                    data: ultrasonicWave9,
                    // smooth : true,

                }, {
                    name: '35kV母分开关',
                    type: 'line',
                    data: ultrasonicWave10,
                    itemStyle: {
                        color: '#027db4'
                    },
                }, {
                    name: '35kV母分插件',
                    type: 'line',
                    data: ultrasonicWave11,
                }, {
                    name: '备用3572开关',
                    type: 'line',
                    data: ultrasonicWave12,
                }, {
                    name: '#2主变35kV开关',
                    type: 'line',
                    data: ultrasonicWave13,
                }, {
                    name: '35kVII段母线避雷器',
                    type: 'line',
                    data: ultrasonicWave14,
                }, {
                    name: '海牌3735开关',
                    type: 'line',
                    data: ultrasonicWave15,
                }, {
                    name: '35kVII段母线压变插件',
                    type: 'line',
                    data: ultrasonicWave16,
                }, {
                    name: '#2电容器开关',
                    type: 'line',
                    data: ultrasonicWave17,
                }, {
                    name: '#2所用变开关',
                    type: 'line',
                    data: ultrasonicWave18,
                }, {
                    name: '#2电抗器开关',
                    type: 'line',
                    data: ultrasonicWave19,
                }, {
                    name: '海时3738开关',
                    type: 'line',
                    data: ultrasonicWave20,
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