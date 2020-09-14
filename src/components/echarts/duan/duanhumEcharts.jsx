import React, {Component} from "react";
import {Card} from 'antd'
import ReactEcharts from 'echarts-for-react'


export default class DuanhumEcharts extends Component {

    state = {
        humidity: [
            {'time': '10:00', 'hum1': '67.2', 'hum2': '65.3', 'hum3': '64.2', 'hum4': '61.3', 'hum5': '65.4', 'hum6': '67.2', 'hum7': '69.3', 'hunm8': '61.6', 'hum9': '68.3', 'hum10': '63.3', 'hum11': '69.3', 'hum12': '65.3', 'hum13': '66.3', 'hum14': '62.3', 'hum15': '68.3', 'hum16': '67.2', 'hum17': '65.3', 'hum18': '65.2', 'hum19': '63.6', 'hum20': '67.8'},
            {'time': '10:15', 'hum1': '63.6', 'hum2': '61.9', 'hum3': '63.2', 'hum4': '66.3', 'hum5': '63.2', 'hum6': '61.2', 'hum7': '66.3', 'hunm8': '67.2', 'hum9': '65.3', 'hum10': '65.2', 'hum11': '62.4', 'hum12': '66.9', 'hum13': '69.3', 'hum14': '64.5', 'hum15': '63.0', 'hum16': '64.0', 'hum17': '61.2', 'hum18': '64.2', 'hum19': '65.2', 'hum20': '66.2'},
            {'time': '10:30', 'hum1': '65.9', 'hum2': '63.2', 'hum3': '68.2', 'hum4': '62.5', 'hum5': '67.8', 'hum6': '66.3', 'hum7': '62.3', 'hunm8': '63.6', 'hum9': '66.5', 'hum10': '67.2', 'hum11': '62.1', 'hum12': '66.3', 'hum13': '65.4', 'hum14': '69.3', 'hum15': '66.5', 'hum16': '65.6', 'hum17': '64.9', 'hum18': '69.3', 'hum19': '61.7', 'hum20': '64.2'},
            {'time': '10:45', 'hum1': '62.7', 'hum2': '66.3', 'hum3': '66.3', 'hum4': '64.6', 'hum5': '66.3', 'hum6': '64.2', 'hum7': '63.9', 'hunm8': '67.3', 'hum9': '63.9', 'hum10': '66.3', 'hum11': '63.9', 'hum12': '62.1', 'hum13': '65.9', 'hum14': '64.9', 'hum15': '67.8', 'hum16': '68.7', 'hum17': '64.3', 'hum18': '64.2', 'hum19': '66.3', 'hum20': '65.2'},
            {'time': '11:00', 'hum1': '68.6', 'hum2': '68.9', 'hum3': '65.1', 'hum4': '64.3', 'hum5': '69.2', 'hum6': '68.3', 'hum7': '65.2', 'hunm8': '64.9', 'hum9': '64.5', 'hum10': '67.2', 'hum11': '64.8', 'hum12': '63.7', 'hum13': '69.1', 'hum14': '65.2', 'hum15': '64.1', 'hum16': '61.4', 'hum17': '68.1', 'hum18': '63.2', 'hum19': '64.1', 'hum20': '68.7'},
            {'time': '11:15', 'hum1': '64.8', 'hum2': '65.1', 'hum3': '67.9', 'hum4': '63.1', 'hum5': '64.2', 'hum6': '62.7', 'hum7': '67.8', 'hunm8': '63.7', 'hum9': '67.2', 'hum10': '67.2', 'hum11': '61.5', 'hum12': '64.2', 'hum13': '67.2', 'hum14': '63.3', 'hum15': '65.3', 'hum16': '63.5', 'hum17': '62.0', 'hum18': '68.9', 'hum19': '66.3', 'hum20': '67.2'},
            {'time': '11:30', 'hum1': '68.6', 'hum2': '65.6', 'hum3': '66.3', 'hum4': '64.2', 'hum5': '67.6', 'hum6': '64.3', 'hum7': '62.1', 'hunm8': '64.3', 'hum9': '68.1', 'hum10': '63.3', 'hum11': '67.3', 'hum12': '66.3', 'hum13': '62.3', 'hum14': '65.3', 'hum15': '64.9', 'hum16': '69.4', 'hum17': '65.3', 'hum18': '61.3', 'hum19': '64.3', 'hum20': '65.1'},
            {'time': '11:45', 'hum1': '66.7', 'hum2': '62.7', 'hum3': '69.1', 'hum4': '65.3', 'hum5': '65.5', 'hum6': '66.6', 'hum7': '65.3', 'hunm8': '67.3', 'hum9': '62.1', 'hum10': '67.4', 'hum11': '64.4', 'hum12': '63.8', 'hum13': '64.9', 'hum14': '64.7', 'hum15': '67.8', 'hum16': '68.7', 'hum17': '64.1', 'hum18': '64.2', 'hum19': '68.1', 'hum20': '66.3'},
            {'time': '12:00', 'hum1': '63.5', 'hum2': '64.9', 'hum3': '65.2', 'hum4': '66.3', 'hum5': '63.3', 'hum6': '68.8', 'hum7': '65.2', 'hunm8': '65.1', 'hum9': '69.6', 'hum10': '64.3', 'hum11': '64.1', 'hum12': '65.2', 'hum13': '65.7', 'hum14': '67.9', 'hum15': '61.2', 'hum16': '62.1', 'hum17': '69.0', 'hum18': '63.5', 'hum19': '64.0', 'hum20': '64.1'},
            {'time': '12:15', 'hum1': '68.6', 'hum2': '66.3', 'hum3': '63.7', 'hum4': '61.2', 'hum5': '64.2', 'hum6': '65.5', 'hum7': '66.6', 'hunm8': '66.3', 'hum9': '62.0', 'hum10': '67.3', 'hum11': '69.3', 'hum12': '63.7', 'hum13': '63.3', 'hum14': '67.3', 'hum15': '64.9', 'hum16': '69.4', 'hum17': '65.1', 'hum18': '64.2', 'hum19': '66.3', 'hum20': '65.2'},
            {'time': '12:30', 'hum1': '64.3', 'hum2': '64.7', 'hum3': '66.2', 'hum4': '67.6', 'hum5': '61.6', 'hum6': '66.3', 'hum7': '63.2', 'hunm8': '67.2', 'hum9': '64.3', 'hum10': '67.1', 'hum11': '62.8', 'hum12': '64.3', 'hum13': '64.8', 'hum14': '65.2', 'hum15': '65.1', 'hum16': '66.3', 'hum17': '64.9', 'hum18': '65.8', 'hum19': '62.0', 'hum20': '69.1'},
            {'time': '12:45', 'hum1': '66.3', 'hum2': '63.8', 'hum3': '65.8', 'hum4': '64.3', 'hum5': '66.8', 'hum6': '68.5', 'hum7': '62.5', 'hunm8': '66.6', 'hum9': '69.3', 'hum10': '65.8', 'hum11': '64.9', 'hum12': '64.7', 'hum13': '69.6', 'hum14': '63.7', 'hum15': '62.1', 'hum16': '61.2', 'hum17': '64.2', 'hum18': '68.3', 'hum19': '64.1', 'hum20': '64.9'},
            {'time': '13:00', 'hum1': '65.4', 'hum2': '64.1', 'hum3': '63.9', 'hum4': '61.9', 'hum5': '63.3', 'hum6': '63.6', 'hum7': '69.3', 'hunm8': '65.7', 'hum9': '67.2', 'hum10': '66.3', 'hum11': '61.8', 'hum12': '65.9', 'hum13': '64.2', 'hum14': '66.3', 'hum15': '63.5', 'hum16': '65.3', 'hum17': '67.2', 'hum18': '67.2', 'hum19': '66.3', 'hum20': '65.3'},
            {'time': '13:15', 'hum1': '64.1', 'hum2': '63.2', 'hum3': '67.2', 'hum4': '66.3', 'hum5': '67.1', 'hum6': '61.7', 'hum7': '65.2', 'hunm8': '66.3', 'hum9': '69.6', 'hum10': '67.1', 'hum11': '65.1', 'hum12': '63.7', 'hum13': '65.0', 'hum14': '67.2', 'hum15': '64.1', 'hum16': '61.4', 'hum17': '68.0', 'hum18': '69.3', 'hum19': '68.2', 'hum20': '68.1'},
            {'time': '13:30', 'hum1': '63.6', 'hum2': '65.8', 'hum3': '69.3', 'hum4': '67.2', 'hum5': '62.5', 'hum6': '66.5', 'hum7': '67.6', 'hunm8': '64.3', 'hum9': '66.3', 'hum10': '63.7', 'hum11': '62.8', 'hum12': '64.9', 'hum13': '63.0', 'hum14': '61.9', 'hum15': '67.2', 'hum16': '66.5', 'hum17': '66.3', 'hum18': '65.1', 'hum19': '64.6', 'hum20': '62.0'},
            {'time': '13:45', 'hum1': '68.1', 'hum2': '66.3', 'hum3': '66.2', 'hum4': '68.4', 'hum5': '63.9', 'hum6': '69.3', 'hum7': '62.3', 'hunm8': '68.5', 'hum9': '65.2', 'hum10': '65.3', 'hum11': '67.2', 'hum12': '67.1', 'hum13': '65.4', 'hum14': '64.3', 'hum15': '64.2', 'hum16': '62.4', 'hum17': '67.2', 'hum18': '66.3', 'hum19': '68.6', 'hum20': '68.6'},
            {'time': '14:00', 'hum1': '65.3', 'hum2': '67.1', 'hum3': '67.1', 'hum4': '63.5', 'hum5': '65.7', 'hum6': '67.5', 'hum7': '65.4', 'hunm8': '63.6', 'hum9': '68.3', 'hum10': '62.7', 'hum11': '67.9', 'hum12': '66.8', 'hum13': '62.7', 'hum14': '64.7', 'hum15': '69.1', 'hum16': '61.9', 'hum17': '61.3', 'hum18': '68.1', 'hum19': '64.3', 'hum20': '65.6'},
            {'time': '14:15', 'hum1': '66.3', 'hum2': '62.3', 'hum3': '62.6', 'hum4': '66.3', 'hum5': '61.3', 'hum6': '63.1', 'hum7': '69.3', 'hunm8': '64.7', 'hum9': '63.3', 'hum10': '68.1', 'hum11': '66.1', 'hum12': '61.0', 'hum13': '61.9', 'hum14': '65.2', 'hum15': '68.2', 'hum16': '62.8', 'hum17': '68.0', 'hum18': '69.3', 'hum19': '69.6', 'hum20': '63.9'},
            {'time': '14:30', 'hum1': '62.5', 'hum2': '66.3', 'hum3': '63.6', 'hum4': '64.3', 'hum5': '62.8', 'hum6': '68.2', 'hum7': '62.0', 'hunm8': '65.3', 'hum9': '67.9', 'hum10': '64.6', 'hum11': '66.5', 'hum12': '64.2', 'hum13': '62.6', 'hum14': '66.3', 'hum15': '67.2', 'hum16': '62.7', 'hum17': '65.1', 'hum18': '65.5', 'hum19': '67.3', 'hum20': '67.4'},
            {'time': '14:45', 'hum1': '65.8', 'hum2': '63.5', 'hum3': '64.1', 'hum4': '65.3', 'hum5': '63.5', 'hum6': '65.3', 'hum7': '66.6', 'hunm8': '63.2', 'hum9': '64.1', 'hum10': '64.7', 'hum11': '63.9', 'hum12': '65.7', 'hum13': '65.7', 'hum14': '67.2', 'hum15': '66.1', 'hum16': '61.6', 'hum17': '66.3', 'hum18': '66.6', 'hum19': '65.3', 'hum20': '65.3'},
        ],
    }
    getOption = () => {
        var list = this.state.humidity

        var time = new Array();
        var hum1 = new Array();
        var hum2 = new Array();
        var hum3 = new Array();
        var hum4 = new Array();
        var hum5 = new Array();
        var hum6 = new Array();
        var hum7 = new Array();
        var hum8 = new Array();
        var hum9 = new Array();
        var hum10 = new Array();
        var hum11 = new Array();
        var hum12 = new Array();
        var hum13 = new Array();
        var hum14 = new Array();
        var hum15 = new Array();
        var hum16 = new Array();
        var hum17 = new Array();
        var hum18 = new Array();
        var hum19 = new Array();
        var hum20 = new Array();

        for (var i = 0; i < list.length; i++) {
            time[i] = list[i].time;
            hum1[i] = list[i].hum1;
            hum2[i] = list[i].hum2;
            hum3[i] = list[i].hum3;
            hum4[i] = list[i].hum4;
            hum5[i] = list[i].hum5;
            hum6[i] = list[i].hum6;
            hum7[i] = list[i].hum7;
            hum8[i] = list[i].hum8;
            hum9[i] = list[i].hum9;
            hum10[i] = list[i].hum10;
            hum11[i] = list[i].hum11;
            hum12[i] = list[i].hum12;
            hum13[i] = list[i].hum13;
            hum14[i] = list[i].hum14;
            hum15[i] = list[i].hum15;
            hum16[i] = list[i].hum16;
            hum17[i] = list[i].hum17;
            hum18[i] = list[i].hum18;
            hum19[i] = list[i].hum19;
            hum20[i] = list[i].hum20;
        }

        return {
            title: {
                text: '端子箱除湿机湿度图',
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
                        title: '全不选'
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
                min: 60,
                axisLabel: {
                    formatter: '{value} %'
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
                    data: hum1,
                    itemStyle: {
                        color: '#027db4'
                    },
                }, {
                    name: '海凤3731',
                    type: 'line',
                    data: hum2,
                    // smooth : true,

                }, {
                    name: '#3电容器',
                    type: 'line',
                    data: hum3,
                    // smooth : true,

                }, {
                    name: '#1所用变',
                    type: 'line',
                    data: hum4,
                    // smooth : true,

                }, {
                    name: '35kVI段母线避雷器',
                    type: 'line',
                    data: hum5,
                    // smooth : true,

                }, {
                    name: '海洪3734',
                    type: 'line',
                    data: hum6,
                    // smooth : true,

                }, {
                    name: '35kVI段母线压变插件',
                    type: 'line',
                    data: hum7,
                    // smooth : true,

                }, {
                    name: '#1主变35kV',
                    type: 'line',
                    data: hum8,
                    // smooth : true,

                }, {
                    name: '海变3733',
                    type: 'line',
                    data: hum9,
                    // smooth : true,

                }, {
                    name: '35kV母分开关',
                    type: 'line',
                    data: hum10,
                    itemStyle: {
                        color: '#027db4'
                    },
                }, {
                    name: '35kV母分插件',
                    type: 'line',
                    data: hum11,
                }, {
                    name: '备用3572开关',
                    type: 'line',
                    data: hum12,
                }, {
                    name: '#2主变35kV开关',
                    type: 'line',
                    data: hum13,
                }, {
                    name: '35kVII段母线避雷器',
                    type: 'line',
                    data: hum14,
                }, {
                    name: '海牌3735开关',
                    type: 'line',
                    data: hum15,
                }, {
                    name: '35kVII段母线压变插件',
                    type: 'line',
                    data: hum16,
                }, {
                    name: '#2电容器开关',
                    type: 'line',
                    data: hum17,
                }, {
                    name: '#2所用变开关',
                    type: 'line',
                    data: hum18,
                }, {
                    name: '#2电抗器开关',
                    type: 'line',
                    data: hum19,
                }, {
                    name: '海时3738开关',
                    type: 'line',
                    data: hum20,
                },]
        }
    }

    render() {
        return (
            <div className='table'>
                <Card>
                    <ReactEcharts option={this.getOption()} style={{height: ((window.innerHeight - 200) * 0.6 )}}/>
                </Card>

            </div>
        )
    }
}