import React,{Component} from "react";

import Table from "antd/es/table";
import Select from "antd/es/select";
import {Button, DatePicker, Space} from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
import locale from 'antd/lib/date-picker/locale/zh_CN'
import Search from "antd/es/input/Search";
moment.locale('zh-cn');

const { RangePicker } = DatePicker;
const { Option } = Select;
export default class UpArmbTable extends Component{
    constructor() {
        super();
        this.search = this.search.bind(this)
        this.state = {
            columns: [
                {
                    title:'电压等级',
                    dataIndex:'dwya',
                    sorter:(a, b) => a.dwya - b.dwya,
                    width: 150,
                },
                {
                    title:'间隔名称',
                    dataIndex:'jwge',
                    width: 240,
                },
                {
                    title:'设备名称',
                    dataIndex:'vebq',
                    width: 270,
                },
                {
                    title:'传感器名称',
                    dataIndex:'epgj',
                    width: 200,
                },
                {
                    title:'数据名称',
                    dataIndex:'vuju',
                    width: 200,
                },
                {
                    title:'时间',
                    dataIndex:'time',
                    sorter: (a, b) => (new Date(a.time)).getTime() - (new Date(b.time)).getTime(),
                    sortDirections: ['descend', 'ascend'],
                    width: 240,
                },
                {
                    title:'数据',
                    dataIndex:'data',
                    sorter:(a, b) => a.data - b.data,
                    width: 220,
                },

            ],

            names: ['#1电容器','海凤3731','#3电容器','#1所用变','35kVI段母线避雷器','海洪3734',
                '35kVI段母线压变插件','#1主变35kV','海变3733','35kV母分开关','35kV母分插件',
                '备用3572开关','#2主变35kV开关','35kVII段母线避雷器','海牌3735开关','35kVII段母线压变插件',
                '#2电容器开关','#2所用变开关','#2电抗器开关','海时3738开关'],
            selector:[],

            data:[],



        }
    }


    componentWillMount() {
        let selectors =[]

        let names = this.state.names
        // console.log('names',names)
        for (let i = 0; i < names.length; i++) {
            selectors.push(<Option key={i}>{names[i]}</Option>)
        }
        // console.log('selectors', selectors)


        let data1 = []
        for (let i = 0; i < 3; i++) {
            let a = 15 * (i+1)
            let time = '10:'+a+':00'
            for (let j = 0; j < names.length; j++) {
                let num = i * 20 + j
                let name = names[j]
                let b = parseFloat((Math.random() * 20).toFixed(0)) + 10
                data1.push({
                    key: num,
                    dwya: '35Kv',
                    jwge: name + '开关',
                    vebq: name + '开关柜',
                    epgj: '无线测温',
                    vuju: '上臂/B相温度',
                    time: '2020/08/10 '+ time,
                    data: b + ' °C',

                })
            }
        }
        // console.log('data1', data1)
        this.setState({
            selector: selectors,
            data: data1,
            all: data1,
        })

    }

    handleChange(value) {
        console.log(`selected ${value}`);
    }

    timeChange(dates, dateStrings) {
        // console.log('From: ', dates[0], ', to: ', dates[1]);
        console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
    }

    search(value) {
        console.log('dwl',value)
        let all = this.state.all
        if (!value) {
            this.setState({
                data: all
            })
        } else {
            let data = this.state.all
            let arr = []
            for (let i = 0; i < data.length; i++) {
                let name = data[i].vebq
                if (name.indexOf(value) >= 0) {
                    arr.push(data[i])
                }
            }
            this.setState({
                data: arr
            })
        }
    }
    render() {
        // console.log('selector', this.state.selector)
        // console.log('data', this.state.data)
        return (
            <div className={'table'}>
                <div className={'tableHeader'}>
                    <Select
                        mode="multiple"
                        style={{ width: '300px', marginLeft:'15px' }}
                        placeholder="===请选择==="
                        onChange={this.handleChange}
                    >
                        {this.state.selector}
                    </Select>
                    <Space direction="vertical" size={12} style={{marginLeft:'20px'}}>
                        <RangePicker
                            locale={locale}
                            placeholder={['开始时间','结束时间']}
                            ranges={{
                                Today: [moment(), moment()],
                                'This Month': [moment().startOf('month'), moment().endOf('month')],
                            }}
                            showTime
                            format="YYYY/MM/DD HH:mm:ss"
                            onChange={this.timeChange}
                        />
                    </Space>
                    <Search placeholder="请输入设备名称进行搜索"
                            style={{ width: 300,marginLeft:'20px'}}
                            onSearch={value => this.search(value)}
                            enterButton
                    />

                    <Button type='primary' style={{float:"right",marginRight: '30px'}}>导出</Button>
                </div>

                <Table columns={this.state.columns} dataSource={this.state.data} pagination={{pageSize:this.state.data.length,hideOnSinglePage: true}} scroll={{y:240}}/>


            </div>
        );
    }
}