import React, {Component} from 'react'
import {Card, Table} from 'antd';
import './index.less'
import ReactEcharts from "echarts-for-react";

export default class Error extends Component{

    constructor() {
        super();
        const columns = [
            {
                title: '所在位置',
                dataIndex: 'address',
                align: 'center',
                width: 170,
                filters: [
                    {
                        text: '#1电容器开关',
                        value: '#1电容器开关',
                    },
                    {
                        text: '海凤3731开关',
                        value: '海凤3731开关',
                    },
                    {
                        text: '#3电容器开关',
                        value: '#3电容器开关',
                    },
                    {
                        text: '#1所变用开关',
                        value: '#1所变用开关',
                    },
                ],
                onFilter: (value, record) => record.name.indexOf(value) === 0,
                sortDirections: ['descend'],
            },
            {
                title: '设备名称',
                dataIndex: 'name',
                align: 'center',
                width: 170,
                defaultSortOrder: 'descend',
            },
            {
                title: '异常原因',
                dataIndex: 'error',
                align: 'center',
                width: 200,
                defaultSortOrder: 'descend',
            },
            {
                title: '时间',
                dataIndex: 'time',
                align: 'center',
                width: 160,
                sorter: (a, b) => a.time - b.time,
                sortDirections: ['descend', 'ascend'],
            },
        ];

        const data = [
            {
                key: '1',
                address: '#1电容器开关',
                name:'除湿机',
                error: '采集不到数据',
                time: '2020-05-06 12:30',
            },
            {
                key: '2',
                address: '海凤3731开关',
                name:'除湿机',
                error: '采集不到数据',
                time: '2020-05-06 13:15',
            },
            {
                key: '3',
                address: '#3电容器开关',
                name:'除湿机',
                error: '采集不到数据',
                time: '2020-05-06 13:00',
            },
            {
                key: '4',
                address: '#1所变用开关',
                name:'除湿机',
                error: '采集不到数据',
                time: '2020-05-06 13:15',
            },
        ];

        this.state = {
            columns,
            data,
        }
    }



    render() {
        return (
            <div className='table'>
                <Card>
                    <Table columns={this.state.columns} dataSource={this.state.data} onChange={this.onChange} />
                </Card>

            </div>
        )
    }
}