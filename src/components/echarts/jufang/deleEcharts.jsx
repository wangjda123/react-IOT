import React, {Component} from "react";
import {Card} from 'antd'
import ReactEcharts from 'echarts-for-react'


export default class DeleEcharts extends Component {

    state = {
        geoelectricWave: [
            {
                "time": "14:00",
                "geoelectricWave1": 1,
                "geoelectricWave2": 19,
                "geoelectricWave3": 2,
                "geoelectricWave4": 0,
                "geoelectricWave5": 9,
                "geoelectricWave6": 19,
                "geoelectricWave7": 3,
                "geoelectricWave8": 2,
                "geoelectricWave9": 14,
                "geoelectricWave10": 3,
                "geoelectricWave11": 14,
                "geoelectricWave12": 3,
                "geoelectricWave13": 2,
                "geoelectricWave14": 17,
                "geoelectricWave15": 10,
                "geoelectricWave16": 9,
                "geoelectricWave17": 16,
                "geoelectricWave18": 17,
                "geoelectricWave19": 16,
                "geoelectricWave20": 16
            },
            {
                "time": "14:15",
                "geoelectricWave1": 16,
                "geoelectricWave2": 9,
                "geoelectricWave3": 18,
                "geoelectricWave4": 3,
                "geoelectricWave5": 14,
                "geoelectricWave6": 11,
                "geoelectricWave7": 13,
                "geoelectricWave8": 0,
                "geoelectricWave9": 18,
                "geoelectricWave10": 2,
                "geoelectricWave11": 0,
                "geoelectricWave12": 19,
                "geoelectricWave13": 6,
                "geoelectricWave14": 10,
                "geoelectricWave15": 4,
                "geoelectricWave16": 14,
                "geoelectricWave17": 1,
                "geoelectricWave18": 7,
                "geoelectricWave19": 19,
                "geoelectricWave20": 6
            },
            {
                "time": "14:30",
                "geoelectricWave1": 12,
                "geoelectricWave2": 6,
                "geoelectricWave3": 15,
                "geoelectricWave4": 19,
                "geoelectricWave5": 12,
                "geoelectricWave6": 16,
                "geoelectricWave7": 12,
                "geoelectricWave8": 7,
                "geoelectricWave9": 7,
                "geoelectricWave10": 19,
                "geoelectricWave11": 20,
                "geoelectricWave12": 1,
                "geoelectricWave13": 19,
                "geoelectricWave14": 12,
                "geoelectricWave15": 17,
                "geoelectricWave16": 15,
                "geoelectricWave17": 7,
                "geoelectricWave18": 1,
                "geoelectricWave19": 3,
                "geoelectricWave20": 2
            },
            {
                "time": "14:45",
                "geoelectricWave1": 5,
                "geoelectricWave2": 16,
                "geoelectricWave3": 16,
                "geoelectricWave4": 11,
                "geoelectricWave5": 15,
                "geoelectricWave6": 0,
                "geoelectricWave7": 14,
                "geoelectricWave8": 7,
                "geoelectricWave9": 15,
                "geoelectricWave10": 18,
                "geoelectricWave11": 7,
                "geoelectricWave12": 12,
                "geoelectricWave13": 4,
                "geoelectricWave14": 5,
                "geoelectricWave15": 8,
                "geoelectricWave16": 5,
                "geoelectricWave17": 13,
                "geoelectricWave18": 10,
                "geoelectricWave19": 1,
                "geoelectricWave20": 19
            },
            {
                "time": "15:00",
                "geoelectricWave1": 18,
                "geoelectricWave2": 12,
                "geoelectricWave3": 18,
                "geoelectricWave4": 12,
                "geoelectricWave5": 2,
                "geoelectricWave6": 6,
                "geoelectricWave7": 16,
                "geoelectricWave8": 8,
                "geoelectricWave9": 13,
                "geoelectricWave10": 7,
                "geoelectricWave11": 11,
                "geoelectricWave12": 20,
                "geoelectricWave13": 0,
                "geoelectricWave14": 8,
                "geoelectricWave15": 6,
                "geoelectricWave16": 12,
                "geoelectricWave17": 4,
                "geoelectricWave18": 9,
                "geoelectricWave19": 4,
                "geoelectricWave20": 18
            },
            {
                "time": "15:15",
                "geoelectricWave1": 13,
                "geoelectricWave2": 3,
                "geoelectricWave3": 2,
                "geoelectricWave4": 9,
                "geoelectricWave5": 6,
                "geoelectricWave6": 2,
                "geoelectricWave7": 13,
                "geoelectricWave8": 7,
                "geoelectricWave9": 14,
                "geoelectricWave10": 5,
                "geoelectricWave11": 10,
                "geoelectricWave12": 13,
                "geoelectricWave13": 6,
                "geoelectricWave14": 15,
                "geoelectricWave15": 10,
                "geoelectricWave16": 3,
                "geoelectricWave17": 15,
                "geoelectricWave18": 15,
                "geoelectricWave19": 2,
                "geoelectricWave20": 15
            },
            {
                "time": "15:30",
                "geoelectricWave1": 13,
                "geoelectricWave2": 10,
                "geoelectricWave3": 12,
                "geoelectricWave4": 8,
                "geoelectricWave5": 13,
                "geoelectricWave6": 10,
                "geoelectricWave7": 2,
                "geoelectricWave8": 11,
                "geoelectricWave9": 20,
                "geoelectricWave10": 11,
                "geoelectricWave11": 8,
                "geoelectricWave12": 17,
                "geoelectricWave13": 7,
                "geoelectricWave14": 17,
                "geoelectricWave15": 9,
                "geoelectricWave16": 10,
                "geoelectricWave17": 7,
                "geoelectricWave18": 17,
                "geoelectricWave19": 8,
                "geoelectricWave20": 2
            },
            {
                "time": "15:45",
                "geoelectricWave1": 5,
                "geoelectricWave2": 17,
                "geoelectricWave3": 12,
                "geoelectricWave4": 8,
                "geoelectricWave5": 19,
                "geoelectricWave6": 17,
                "geoelectricWave7": 19,
                "geoelectricWave8": 12,
                "geoelectricWave9": 3,
                "geoelectricWave10": 12,
                "geoelectricWave11": 3,
                "geoelectricWave12": 13,
                "geoelectricWave13": 2,
                "geoelectricWave14": 7,
                "geoelectricWave15": 11,
                "geoelectricWave16": 18,
                "geoelectricWave17": 11,
                "geoelectricWave18": 5,
                "geoelectricWave19": 3,
                "geoelectricWave20": 7
            },
            {
                "time": "16:00",
                "geoelectricWave1": 7,
                "geoelectricWave2": 6,
                "geoelectricWave3": 2,
                "geoelectricWave4": 20,
                "geoelectricWave5": 9,
                "geoelectricWave6": 18,
                "geoelectricWave7": 13,
                "geoelectricWave8": 13,
                "geoelectricWave9": 11,
                "geoelectricWave10": 13,
                "geoelectricWave11": 11,
                "geoelectricWave12": 11,
                "geoelectricWave13": 16,
                "geoelectricWave14": 6,
                "geoelectricWave15": 4,
                "geoelectricWave16": 1,
                "geoelectricWave17": 14,
                "geoelectricWave18": 11,
                "geoelectricWave19": 17,
                "geoelectricWave20": 7
            },
            {
                "time": "16:15",
                "geoelectricWave1": 6,
                "geoelectricWave2": 16,
                "geoelectricWave3": 0,
                "geoelectricWave4": 6,
                "geoelectricWave5": 3,
                "geoelectricWave6": 19,
                "geoelectricWave7": 0,
                "geoelectricWave8": 7,
                "geoelectricWave9": 6,
                "geoelectricWave10": 8,
                "geoelectricWave11": 4,
                "geoelectricWave12": 3,
                "geoelectricWave13": 7,
                "geoelectricWave14": 16,
                "geoelectricWave15": 16,
                "geoelectricWave16": 6,
                "geoelectricWave17": 19,
                "geoelectricWave18": 18,
                "geoelectricWave19": 9,
                "geoelectricWave20": 8
            }
        ],
    }
    getOption = () => {

        var list = this.state.geoelectricWave

        var time = new Array();
        var geoelectricWave1 = new Array();
        var geoelectricWave2 = new Array();
        var geoelectricWave3 = new Array();
        var geoelectricWave4 = new Array();
        var geoelectricWave5 = new Array();
        var geoelectricWave6 = new Array();
        var geoelectricWave7 = new Array();
        var geoelectricWave8 = new Array();
        var geoelectricWave9 = new Array();
        var geoelectricWave10 = new Array();
        var geoelectricWave11 = new Array();
        var geoelectricWave12 = new Array();
        var geoelectricWave13 = new Array();
        var geoelectricWave14 = new Array();
        var geoelectricWave15 = new Array();
        var geoelectricWave16 = new Array();
        var geoelectricWave17 = new Array();
        var geoelectricWave18 = new Array();
        var geoelectricWave19 = new Array();
        var geoelectricWave20 = new Array();

        for (var i = 0; i < list.length; i++) {
            time[i] = list[i].time;
            geoelectricWave1[i] = list[i].geoelectricWave1;
            geoelectricWave2[i] = list[i].geoelectricWave2;
            geoelectricWave3[i] = list[i].geoelectricWave3;
            geoelectricWave4[i] = list[i].geoelectricWave4;
            geoelectricWave5[i] = list[i].geoelectricWave5;
            geoelectricWave6[i] = list[i].geoelectricWave6;
            geoelectricWave7[i] = list[i].geoelectricWave7;
            geoelectricWave8[i] = list[i].geoelectricWave8;
            geoelectricWave9[i] = list[i].geoelectricWave9;
            geoelectricWave10[i] = list[i].geoelectricWave10;
            geoelectricWave11[i] = list[i].geoelectricWave11;
            geoelectricWave12[i] = list[i].geoelectricWave12;
            geoelectricWave13[i] = list[i].geoelectricWave13;
            geoelectricWave14[i] = list[i].geoelectricWave14;
            geoelectricWave15[i] = list[i].geoelectricWave15;
            geoelectricWave16[i] = list[i].geoelectricWave16;
            geoelectricWave17[i] = list[i].geoelectricWave17;
            geoelectricWave18[i] = list[i].geoelectricWave18;
            geoelectricWave19[i] = list[i].geoelectricWave19;
            geoelectricWave20[i] = list[i].geoelectricWave20;

        }

        return {
            title: {
                text: '局部放电地电波折线图',
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
                    data: geoelectricWave1,
                    itemStyle: {
                        color: '#027db4'
                    },
                }, {
                    name: '海凤3731',
                    type: 'line',
                    data: geoelectricWave2,
                    // smooth : true,

                }, {
                    name: '#3电容器',
                    type: 'line',
                    data: geoelectricWave3,
                    // smooth : true,

                }, {
                    name: '#1所用变',
                    type: 'line',
                    data: geoelectricWave4,
                    // smooth : true,

                }, {
                    name: '35kVI段母线避雷器',
                    type: 'line',
                    data: geoelectricWave5,
                    // smooth : true,

                }, {
                    name: '海洪3734',
                    type: 'line',
                    data: geoelectricWave6,
                    // smooth : true,

                }, {
                    name: '35kVI段母线压变插件',
                    type: 'line',
                    data: geoelectricWave7,
                    // smooth : true,

                }, {
                    name: '#1主变35kV',
                    type: 'line',
                    data: geoelectricWave8,
                    // smooth : true,

                }, {
                    name: '海变3733',
                    type: 'line',
                    data: geoelectricWave9,
                    // smooth : true,

                }, {
                    name: '35kV母分开关',
                    type: 'line',
                    data: geoelectricWave10,
                    itemStyle: {
                        color: '#027db4'
                    },
                }, {
                    name: '35kV母分插件',
                    type: 'line',
                    data: geoelectricWave11,
                }, {
                    name: '备用3572开关',
                    type: 'line',
                    data: geoelectricWave12,
                }, {
                    name: '#2主变35kV开关',
                    type: 'line',
                    data: geoelectricWave13,
                }, {
                    name: '35kVII段母线避雷器',
                    type: 'line',
                    data: geoelectricWave14,
                }, {
                    name: '海牌3735开关',
                    type: 'line',
                    data: geoelectricWave15,
                }, {
                    name: '35kVII段母线压变插件',
                    type: 'line',
                    data: geoelectricWave16,
                }, {
                    name: '#2电容器开关',
                    type: 'line',
                    data: geoelectricWave17,
                }, {
                    name: '#2所用变开关',
                    type: 'line',
                    data: geoelectricWave18,
                }, {
                    name: '#2电抗器开关',
                    type: 'line',
                    data: geoelectricWave19,
                }, {
                    name: '海时3738开关',
                    type: 'line',
                    data: geoelectricWave20,
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