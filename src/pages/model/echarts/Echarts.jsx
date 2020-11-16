import React, {Component} from "react";
import {Card} from 'antd'
import ReactEcharts from 'echarts-for-react'


export default class Echarts extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        humidity: [
            {'time': '10:00', 'hum1': '27.2', 'hum2': '65.3'},
            {'time': '10:15', 'hum1': '23.6', 'hum2': '61.9'},
            {'time': '10:30', 'hum1': '25.9', 'hum2': '63.2'},
            {'time': '10:45', 'hum1': '22.7', 'hum2': '66.3'},
            {'time': '11:00', 'hum1': '28.6', 'hum2': '68.9'},
            {'time': '11:15', 'hum1': '24.8', 'hum2': '65.1'},
            {'time': '11:30', 'hum1': '28.6', 'hum2': '65.6'},
            {'time': '11:45', 'hum1': '26.7', 'hum2': '62.7'},
            {'time': '12:00', 'hum1': '23.5', 'hum2': '64.9'},
        ],
        // humidity: this.props.data,
    }
    getOption = () => {
        var list = this.state.humidity
        let keys = new Array()
        let times = []
        let key1 = []
        let key2 = []
        let key3 = []
        let keysName = [key1, key2, key3]
        for (let i = 0; i < list.length; i++) {
            let obj = list[i]
            if( i === 0) {
                for (let key in obj) {
                    if(key !== 'time') {
                        keys.push(key)
                    }
                }
            }

            for (let j = 0; j < keys.length; j++) {
                let keyName = keys[j]
                keysName[j].push(obj[keyName])
            }
            times.push(obj.time)
        }

        // let keysNum = keysName.length

        let fanyi = { hum1: '温度',hum2: '湿度'}

        let series = []
        for (let i = 0; i < keysName.length; i++) {
            let obj = {}

            obj.name = fanyi[keysName[i]]
            obj.type = 'line'
            obj.data = keysName[i]

            series.push(obj)
        }
        // series: [
        //     {
        //         name: '温度',
        //         type: 'line',
        //         data: key1,
        //
        //     }, {
        //         name: '湿度',
        //         type: 'line',
        //         data: key2,
        //     }]
        // var time = new Array();
        // var hum1 = new Array();
        // var hum2 = new Array();
        //
        // for (var i = 0; i < list.length; i++) {
        //     time[i] = list[i].time;
        //     hum1[i] = list[i].hum1;
        //     hum2[i] = list[i].hum2;
        // }



        return {
            title: {
                text: this.props.name,
                left: 'left',
                textStyle: {
                    // color: '#fff'
                }
            },

            grid: {
                // right: '150px',
                // width: '900px',
                left: '0%',
                right: '0%',
                bottom: '10%',
            },

            type: 'category',

            xAxis: {

                data: times,
                // name: '时间',
                nameLocation: 'center',
                nameTextStyle: {
                    lineHeight: 50,
                    fontSize: 20,
                    fontWeight: 'bold'
                },
                axisLine: {
                    lineStyle: {
                        // color: '#fff'
                    }
                },
            },

            yAxis: [{
                type: 'value',
                axisLabel: {
                    show: true,
                    formatter: '{value} °C',
                },
                axisLine: {
                    lineStyle: {
                        // color: '#fff'
                    }
                },
            },],

            tooltip: {
                // axisPointer: {
                // 	trigger : 'axis',
                // 	// type : 'line',
                // 	// snap : true
                // }，
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        // color: '#000000',
                        // backgroundColor: 'rgba(255,255,255,0.5)'
                    },
                }
            },

            series: series,
            // [{
            //     name: '温度',
            //     type: 'line',
            //     data: key1,
            //
            // }, {
            //     name: '湿度',
            //     type: 'line',
            //     data: key2,
            // }]
        }
    }

    render() {

        return (
            <div className='table'>
                <ReactEcharts option={this.getOption()} style={{height: '250px'}}/>

            </div>
        )
    }
}