import React,{Component} from "react";
import { Cascader } from 'antd';

export default class WirelessCader extends Component{
    constructor(props) {
        super(props);
        this.state = {
            options: [
                {
                    value: 'uparm',
                    label: '上臂',
                    children: [
                        {
                            value: 'A',
                            label: 'A相',
                        },
                        {
                            value: 'B',
                            label: 'B相',
                        },
                        {
                            value: 'C',
                            label: 'C相',
                        },
                    ],
                },
                {
                    value: 'downarm',
                    label: '下臂',
                    children: [
                        {
                            value: 'A',
                            label: 'A相',
                        },
                        {
                            value: 'B',
                            label: 'B相',
                        },
                        {
                            value: 'C',
                            label: 'C相',
                        },
                    ],
                },
                {
                    value: 'mupai',
                    label: '母排',
                    children: [
                        {
                            value: 'A',
                            label: 'A相',
                        },
                        {
                            value: 'B',
                            label: 'B相',
                        },
                        {
                            value: 'C',
                            label: 'C相',
                        },
                    ],
                },
                {
                    value: 'dianlan',
                    label: '电缆',
                    children: [
                        {
                            value: 'A',
                            label: 'A相',
                        },
                        {
                            value: 'B',
                            label: 'B相',
                        },
                        {
                            value: 'C',
                            label: 'C相',
                        },
                    ],
                },
            ],
        }
    }

    handleChange(values) {
        console.log(values)
        this.props.getValues(values)
        // return values
    }

    render() {
        return (
            <Cascader
                defaultValue={['uparm', 'A']}
                options={this.state.options}
                onChange={this.handleChange.bind(this)}

            />
        )
    }
}