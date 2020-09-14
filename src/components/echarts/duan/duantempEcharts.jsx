import React, {Component} from "react";
import {Card} from 'antd'
import ReactEcharts from 'echarts-for-react'


export default class DuantempEcharts extends Component {
    state = {
        temperature: [
            {'time': '10:00', 'temp1': '25.3', 'temp2': '20.8', 'temp3': '26.2', 'temp4': '23.6', 'temp5': '26.4', 'temp6': '26.3', 'temp7': '28.4', 'temp8': '24.0', 'temp9': '27.1', 'temp10': '25.7', 'temp11': '23.9', 'temp12': '24.9', 'temp13': '27.6', 'temp14': '24.9', 'temp15': '23.5', 'temp16': '24.3', 'temp17': '28.2', 'temp18': '26.9', 'temp19': '27.9', 'temp20': '25.2'},
            {'time': '10:15', 'temp1': '26.2', 'temp2': '24.6', 'temp3': '25.4', 'temp4': '25.4', 'temp5': '25.6', 'temp6': '26.7', 'temp7': '26.4', 'temp8': '23.9', 'temp9': '26.5', 'temp10': '23.9', 'temp11': '25.7', 'temp12': '27.3', 'temp13': '23.8', 'temp14': '25.7', 'temp15': '24.9', 'temp16': '23.9', 'temp17': '27.9', 'temp18': '23.3', 'temp19': '28.3', 'temp20': '24.8'},
            {'time': '10:30', 'temp1': '23.9', 'temp2': '22.3', 'temp3': '23.2', 'temp4': '23.8', 'temp5': '28.4', 'temp6': '25.8', 'temp7': '23.6', 'temp8': '23.1', 'temp9': '24.3', 'temp10': '24.6', 'temp11': '26.9', 'temp12': '28.6', 'temp13': '25.9', 'temp14': '26.9', 'temp15': '25.1', 'temp16': '24.8', 'temp17': '25.8', 'temp18': '25.5', 'temp19': '26.8', 'temp20': '25.9'},
            {'time': '10:45', 'temp1': '27.4', 'temp2': '20.4', 'temp3': '24.6', 'temp4': '26.5', 'temp5': '26.9', 'temp6': '24.4', 'temp7': '24.2', 'temp8': '22.4', 'temp9': '25.9', 'temp10': '23.7', 'temp11': '27.1', 'temp12': '24.9', 'temp13': '26.4', 'temp14': '27.6', 'temp15': '27.6', 'temp16': '28.4', 'temp17': '24.9', 'temp18': '26.7', 'temp19': '27.1', 'temp20': '24.9'},
            {'time': '11:00', 'temp1': '25.9', 'temp2': '24.6', 'temp3': '28.0', 'temp4': '24.6', 'temp5': '25.8', 'temp6': '25.9', 'temp7': '26.9', 'temp8': '25.8', 'temp9': '25.1', 'temp10': '24.9', 'temp11': '21.9', 'temp12': '24.1', 'temp13': '25.1', 'temp14': '23.4', 'temp15': '26.7', 'temp16': '26.2', 'temp17': '26.4', 'temp18': '24.9', 'temp19': '25.8', 'temp20': '23.4'},
            {'time': '11:15', 'temp1': '24.9', 'temp2': '23.1', 'temp3': '26.3', 'temp4': '25.2', 'temp5': '21.2', 'temp6': '26.2', 'temp7': '21.8', 'temp8': '26.1', 'temp9': '26.9', 'temp10': '25.4', 'temp11': '24.9', 'temp12': '23.1', 'temp13': '29.3', 'temp14': '27.9', 'temp15': '26.4', 'temp16': '24.2', 'temp17': '24.9', 'temp18': '25.8', 'temp19': '26.7', 'temp20': '28.1'},
            {'time': '11:30', 'temp1': '26.4', 'temp2': '25.2', 'temp3': '26.5', 'temp4': '26.2', 'temp5': '25.6', 'temp6': '23.4', 'temp7': '27.6', 'temp8': '26.7', 'temp9': '26.4', 'temp10': '23.2', 'temp11': '29.6', 'temp12': '22.7', 'temp13': '24.6', 'temp14': '26.4', 'temp15': '28.1', 'temp16': '28.4', 'temp17': '25.3', 'temp18': '27.2', 'temp19': '24.9', 'temp20': '28.6'},
            {'time': '11:45', 'temp1': '29.1', 'temp2': '22.3', 'temp3': '27.9', 'temp4': '27.2', 'temp5': '24.6', 'temp6': '24.6', 'temp7': '24.2', 'temp8': '26.3', 'temp9': '25.7', 'temp10': '26.9', 'temp11': '27.1', 'temp12': '24.9', 'temp13': '24.8', 'temp14': '23.3', 'temp15': '27.4', 'temp16': '29.6', 'temp17': '27.9', 'temp18': '25.6', 'temp19': '25.8', 'temp20': '25.8'},
            {'time': '12:00', 'temp1': '23.4', 'temp2': '28.6', 'temp3': '29.2', 'temp4': '26.5', 'temp5': '27.6', 'temp6': '26.9', 'temp7': '26.4', 'temp8': '29.4', 'temp9': '24.9', 'temp10': '24.8', 'temp11': '23.9', 'temp12': '22.4', 'temp13': '29.3', 'temp14': '24.4', 'temp15': '25.9', 'temp16': '23.8', 'temp17': '27.8', 'temp18': '28.2', 'temp19': '24.9', 'temp20': '24.8'},
            {'time': '12:15', 'temp1': '27.9', 'temp2': '24.8', 'temp3': '28.4', 'temp4': '23.9', 'temp5': '26.7', 'temp6': '27.3', 'temp7': '23.5', 'temp8': '24.3', 'temp9': '23.4', 'temp10': '23.1', 'temp11': '24.1', 'temp12': '23.8', 'temp13': '24.6', 'temp14': '23.9', 'temp15': '26.5', 'temp16': '24.6', 'temp17': '26.9', 'temp18': '22.8', 'temp19': '27.6', 'temp20': '27.3'},
            {'time': '12:30', 'temp1': '26.4', 'temp2': '24.8', 'temp3': '26.2', 'temp4': '26.9', 'temp5': '24.6', 'temp6': '23.2', 'temp7': '29.4', 'temp8': '25.4', 'temp9': '21.7', 'temp10': '27.5', 'temp11': '24.9', 'temp12': '27.6', 'temp13': '27.5', 'temp14': '25.5', 'temp15': '27.4', 'temp16': '26.9', 'temp17': '25.8', 'temp18': '26.2', 'temp19': '28.3', 'temp20': '28.3'},
            {'time': '12:45', 'temp1': '25.1', 'temp2': '22.4', 'temp3': '25.4', 'temp4': '24.5', 'temp5': '26.5', 'temp6': '27.6', 'temp7': '25.3', 'temp8': '29.3', 'temp9': '25.6', 'temp10': '26.3', 'temp11': '27.6', 'temp12': '26.4', 'temp13': '26.7', 'temp14': '27.2', 'temp15': '26.3', 'temp16': '23.2', 'temp17': '24.9', 'temp18': '27.8', 'temp19': '26.8', 'temp20': '24.9'},
            {'time': '13:00', 'temp1': '26.1', 'temp2': '22.3', 'temp3': '23.2', 'temp4': '28.3', 'temp5': '24.8', 'temp6': '28.5', 'temp7': '24.6', 'temp8': '21.3', 'temp9': '24.9', 'temp10': '26.4', 'temp11': '24.9', 'temp12': '28.7', 'temp13': '23.9', 'temp14': '26.7', 'temp15': '27.5', 'temp16': '29.5', 'temp17': '23.2', 'temp18': '24.9', 'temp19': '24.5', 'temp20': '25.5'},
            {'time': '13:15', 'temp1': '24.7', 'temp2': '29.6', 'temp3': '24.6', 'temp4': '23.6', 'temp5': '26.1', 'temp6': '28.1', 'temp7': '22.4', 'temp8': '24.2', 'temp9': '29.5', 'temp10': '27.3', 'temp11': '27.6', 'temp12': '26.7', 'temp13': '24.2', 'temp14': '25.6', 'temp15': '23.2', 'temp16': '24.6', 'temp17': '26.5', 'temp18': '28.4', 'temp19': '29.6', 'temp20': '29.8'},
            {'time': '13:30', 'temp1': '25.2', 'temp2': '25.6', 'temp3': '28.8', 'temp4': '24.9', 'temp5': '24.6', 'temp6': '29.5', 'temp7': '29.6', 'temp8': '28.5', 'temp9': '21.5', 'temp10': '29.4', 'temp11': '22.8', 'temp12': '25.1', 'temp13': '27.6', 'temp14': '23.9', 'temp15': '25.6', 'temp16': '28.1', 'temp17': '24.3', 'temp18': '26.3', 'temp19': '24.8', 'temp20': '23.7'},
            {'time': '13:45', 'temp1': '24.9', 'temp2': '23.1', 'temp3': '26.3', 'temp4': '26.5', 'temp5': '26.4', 'temp6': '22.6', 'temp7': '28.1', 'temp8': '21.6', 'temp9': '28.6', 'temp10': '24.5', 'temp11': '24.3', 'temp12': '26.7', 'temp13': '25.8', 'temp14': '26.4', 'temp15': '27.9', 'temp16': '26.2', 'temp17': '28.3', 'temp18': '25.4', 'temp19': '28.6', 'temp20': '27.3'},
            {'time': '14:00', 'temp1': '24.8', 'temp2': '25.2', 'temp3': '26.5', 'temp4': '26.9', 'temp5': '24.8', 'temp6': '24.6', 'temp7': '26.7', 'temp8': '27.6', 'temp9': '24.6', 'temp10': '22.3', 'temp11': '27.5', 'temp12': '24.9', 'temp13': '23.2', 'temp14': '29.8', 'temp15': '24.7', 'temp16': '27.2', 'temp17': '27.8', 'temp18': '21.2', 'temp19': '25.4', 'temp20': '26.4'},
            {'time': '14:15', 'temp1': '24.1', 'temp2': '22.3', 'temp3': '24.3', 'temp4': '22.7', 'temp5': '29.6', 'temp6': '26.4', 'temp7': '22.4', 'temp8': '26.3', 'temp9': '27.5', 'temp10': '29.6', 'temp11': '25.6', 'temp12': '21.9', 'temp13': '24.9', 'temp14': '26.7', 'temp15': '26.8', 'temp16': '22.9', 'temp17': '24.3', 'temp18': '23.9', 'temp19': '26.7', 'temp20': '24.8'},
            {'time': '14:30', 'temp1': '23.9', 'temp2': '24.6', 'temp3': '22.9', 'temp4': '25.6', 'temp5': '27.1', 'temp6': '29.6', 'temp7': '26.4', 'temp8': '29.4', 'temp9': '29.4', 'temp10': '28.4', 'temp11': '23.5', 'temp12': '23.5', 'temp13': '26.8', 'temp14': '24.6', 'temp15': '24.3', 'temp16': '23.2', 'temp17': '26.7', 'temp18': '26.8', 'temp19': '23.8', 'temp20': '22.8'},
            {'time': '14:45', 'temp1': '26.9', 'temp2': '27.8', 'temp3': '24.8', 'temp4': '29.3', 'temp5': '29.4', 'temp6': '27.3', 'temp7': '23.5', 'temp8': '24.3', 'temp9': '24.3', 'temp10': '21.3', 'temp11': '26.3', 'temp12': '24.7', 'temp13': '24.9', 'temp14': '28.5', 'temp15': '25.6', 'temp16': '24.2', 'temp17': '25.9', 'temp18': '24.3', 'temp19': '28.4', 'temp20': '29.2'},
        ],
    }
    getOption = () => {
        var list = this.state.temperature

        var time = new Array();
        var temp1 = new Array();
        var temp2 = new Array();
        var temp3 = new Array();
        var temp4 = new Array();
        var temp5 = new Array();
        var temp6 = new Array();
        var temp7 = new Array();
        var temp8 = new Array();
        var temp9 = new Array();
        var temp10 = new Array();
        var temp11 = new Array();
        var temp12 = new Array();
        var temp13 = new Array();
        var temp14 = new Array();
        var temp15 = new Array();
        var temp16 = new Array();
        var temp17 = new Array();
        var temp18 = new Array();
        var temp19 = new Array();
        var temp20 = new Array();

        for (var i = 0; i < list.length; i++) {
            time[i] = list[i].time;
            temp1[i] = list[i].temp1;
            temp2[i] = list[i].temp2;
            temp3[i] = list[i].temp3;
            temp4[i] = list[i].temp4;
            temp5[i] = list[i].temp5;
            temp6[i] = list[i].temp6;
            temp7[i] = list[i].temp7;
            temp8[i] = list[i].temp8;
            temp9[i] = list[i].temp9;
            temp10[i] = list[i].temp10;
            temp11[i] = list[i].temp11;
            temp12[i] = list[i].temp12;
            temp13[i] = list[i].temp13;
            temp14[i] = list[i].temp14;
            temp15[i] = list[i].temp15;
            temp16[i] = list[i].temp16;
            temp17[i] = list[i].temp17;
            temp18[i] = list[i].temp18;
            temp19[i] = list[i].temp19;
            temp20[i] = list[i].temp20;

        }

        return {
            title: {
                text: '端子箱除湿机温度图',
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
                min: 20,
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
                    data: temp1,
                    itemStyle: {
                        color: '#027db4'
                    },
                }, {
                    name: '海凤3731',
                    type: 'line',
                    data: temp2,
                    // smooth : true,

                }, {
                    name: '#3电容器',
                    type: 'line',
                    data: temp3,
                    // smooth : true,

                }, {
                    name: '#1所用变',
                    type: 'line',
                    data: temp4,
                    // smooth : true,

                }, {
                    name: '35kVI段母线避雷器',
                    type: 'line',
                    data: temp5,
                    // smooth : true,

                }, {
                    name: '海洪3734',
                    type: 'line',
                    data: temp6,
                    // smooth : true,

                }, {
                    name: '35kVI段母线压变插件',
                    type: 'line',
                    data: temp7,
                    // smooth : true,

                }, {
                    name: '#1主变35kV',
                    type: 'line',
                    data: temp8,
                    // smooth : true,

                }, {
                    name: '海变3733',
                    type: 'line',
                    data: temp9,
                    // smooth : true,

                }, {
                    name: '35kV母分开关',
                    type: 'line',
                    data: temp10,
                    itemStyle: {
                        color: '#027db4'
                    },
                }, {
                    name: '35kV母分插件',
                    type: 'line',
                    data: temp11,
                }, {
                    name: '备用3572开关',
                    type: 'line',
                    data: temp12,
                }, {
                    name: '#2主变35kV开关',
                    type: 'line',
                    data: temp13,
                }, {
                    name: '35kVII段母线避雷器',
                    type: 'line',
                    data: temp14,
                }, {
                    name: '海牌3735开关',
                    type: 'line',
                    data: temp15,
                }, {
                    name: '35kVII段母线压变插件',
                    type: 'line',
                    data: temp16,
                }, {
                    name: '#2电容器开关',
                    type: 'line',
                    data: temp17,
                }, {
                    name: '#2所用变开关',
                    type: 'line',
                    data: temp18,
                }, {
                    name: '#2电抗器开关',
                    type: 'line',
                    data: temp19,
                }, {
                    name: '海时3738开关',
                    type: 'line',
                    data: temp20,
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