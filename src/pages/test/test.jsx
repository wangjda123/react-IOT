import React,{Component} from "react";
import { Select, Button,Modal } from "antd";

import './test.less'


const { Option } = Select;



/*
    采集测试路由
 */
export default class Test extends Component{

    constructor() {



        super();
        this.state = {
            optionValue: [
                { name: "#1电容器开关", id: 0 },
                { name: "海凤3731开关", id: 1 },
                { name: "#3电容器开关", id: 2 },
                { name: "#1所用变开关", id: 3 },
                { name: "35kVI段母线避雷器", id: 4 },
                { name: "海洪3734开关", id: 5 },
                { name: "35kVI段母线压变插件", id: 6 },
                { name: "#1主变35kV开关", id: 7 },
                { name: "海界3733开关", id: 8 },
                { name: "35kV母分开关", id: 9 },
                { name: "35kV母分插件", id: 10 },
                { name: "备用3572开关", id: 11 },
                { name: "#2主变35kV开关", id: 12 },
                { name: "35kVII段母线避雷器", id: 13 },
                { name: "海牌3735开关", id: 14 },
                { name: "35kVII段母线压变插件", id: 15 },
                { name: "#2电容器开关", id: 16 },
                { name: "#2所用变开关", id: 17 },
                { name: "#2电抗器开关", id: 18 },
                { name: "海时3738开关", id: 19 },
            ],
            machineVisible: false,
            witempVisible: false,
            partVisible: false,
            switchVisible: false,
            duanVisible: false,
            machineValue: "#1电容器开关",
            witempValue: "#1电容器开关",
            partValue: "#1电容器开关",
            switchValue: "#1电容器开关",
            duanValue: "#1电容器开关",
        }

    }

    // 机械特性
    machineClick() {

        const machineValue = document.getElementsByClassName("machine-select")[0].innerText + ":"

        this.setState({
            machineVisible: true,
            machineValue,
        });

    }

    machineOk = e => {
        console.log(e);
        this.setState({
            machineVisible: false,
        });
    }

    machineCancel = e => {
        console.log(e);
        this.setState({
            machineVisible: false,
        })
    }

    // 无线测温
    witempClick() {
        const witempValue = document.getElementsByClassName("witemp-select")[0].innerText + ":"

        this.setState({
            witempVisible: true,
            witempValue,
        });
    }

    witempOk = e => {
        console.log(e);
        this.setState({
            witempVisible: false,
        });
    }

    witempCancel = e => {
        console.log(e);
        this.setState({
            witempVisible: false,
        })
    }

    // 局部放电
    partClick() {
        const partValue = document.getElementsByClassName("part-select")[0].innerText + ":"

        this.setState({
            partVisible: true,
            partValue,
        });
    }

    partOk = e => {
        console.log(e);
        this.setState({
            partVisible: false,
        });
    }

    partCancel = e => {
        console.log(e);
        this.setState({
            partVisible: false,
        })
    }

    // 开关柜除湿机
    switchClick() {
        const switchValue = document.getElementsByClassName("switch-select")[0].innerText + ":"

        this.setState({
            switchVisible: true,
            switchValue,
        });
    }

    switchOk = e => {
        console.log(e);
        this.setState({
            switchVisible: false,
        });
    }

    switchCancel = e => {
        console.log(e);
        this.setState({
            switchVisible: false,
        })
    }

    // 端子箱除湿机
    duanClick() {
        const duanValue = document.getElementsByClassName("duan-select")[0].innerText + ":"

        this.setState({
            duanVisible: true,
            duanValue,
        });
    }

    duanOk = e => {
        console.log(e);
        this.setState({
            duanVisible: false,
        });
    }

    duanCancel = e => {
        console.log(e);
        this.setState({
            duanVisible: false,
        })
    }


    render() {
        let date = new Date()
        let myDate = date.toLocaleString()
        return (
            <div className="page-test">
                <div className={'test-header'}>
                    <div>采集测试</div>

                </div>
                <div className={'test-content'}>
                    {/*机械特性*/}
                    <div className="com-test">
                        <div className="com-name">机械特性:</div>
                        <div className="com-select">
                            <Select  defaultValue="#1电容器开关" className="machine-select">

                                {
                                    this.state.optionValue.map((item, i) => {
                                        return (
                                            <Option value={item.name} key={item.id}>{item.name}</Option>
                                        )
                                    })
                                }

                            </Select>
                        </div>

                        <div className="com-button">
                            <Button type="primary" className="machine-button" onClick={this.machineClick.bind(this)}>采集</Button>
                        </div>

                    </div>

                    {/*机械特性-弹框*/}
                    <Modal
                        title="采集结果"
                        visible={this.state.machineVisible}
                        onOk={this.machineOk.bind(this)}
                        onCancel={this.machineCancel.bind(this)}
                    >
                        <div>{this.state.machineValue}&emsp;&emsp;合闸电流：16A</div>
                        <div>{this.state.machineValue}&emsp;&emsp;分闸电流：16A</div>
                        <div>{this.state.machineValue}&emsp;&emsp;储能电流：15A</div>
                        <div>{this.state.machineValue}&emsp;&emsp;合闸电压：30V</div>
                        <div>{this.state.machineValue}&emsp;&emsp;分闸电压：31V</div>
                        <div>{this.state.machineValue}&emsp;&emsp;储能电压：31V</div>

                        <div>采集时间：{myDate}</div>
                    </Modal>

                    {/*无线测温*/}
                    <div className="com-test">
                        <div className="com-name">无线测温:</div>
                        <div className="com-select">
                            <Select  defaultValue="#1电容器开关" className="witemp-select">

                                {
                                    this.state.optionValue.map((item, i) => {
                                        return (
                                            <Option value={item.name} key={item.id}>{item.name}</Option>
                                        )
                                    })
                                }

                            </Select>
                        </div>

                        <div className="com-button">
                            <Button type="primary" onClick={this.witempClick.bind(this)}>采集</Button>
                        </div>
                    </div>

                    {/*无线测温-弹框*/}
                    <Modal
                        title="采集结果"
                        visible={this.state.witempVisible}
                        onOk={this.witempOk.bind(this)}
                        onCancel={this.witempCancel.bind(this)}
                    >
                        <div>{this.state.witempValue}&emsp;&emsp;上臂A相：25°C</div>
                        <div>{this.state.witempValue}&emsp;&emsp;上臂B相：25°C</div>
                        <div>{this.state.witempValue}&emsp;&emsp;上臂C相：25°C</div>
                        <div>{this.state.witempValue}&emsp;&emsp;下臂A相：25°C</div>
                        <div>{this.state.witempValue}&emsp;&emsp;下臂B相：25°C</div>
                        <div>{this.state.witempValue}&emsp;&emsp;下臂C相：25°C</div>
                        <div>{this.state.witempValue}&emsp;&emsp;母排A相：25°C</div>
                        <div>{this.state.witempValue}&emsp;&emsp;母排B相：25°C</div>
                        <div>{this.state.witempValue}&emsp;&emsp;母排C相：25°C</div>
                        <div>{this.state.witempValue}&emsp;&emsp;电缆A相：25°C</div>
                        <div>{this.state.witempValue}&emsp;&emsp;电缆B相：25°C</div>
                        <div>{this.state.witempValue}&emsp;&emsp;电缆C相：25°C</div>

                        <div>采集时间：{myDate}</div>
                    </Modal>


                    {/*局部放电*/}
                    <div className="com-test">
                        <div className="com-name">局部放电:</div>
                        <div className="com-select">
                            <Select  defaultValue="#1电容器开关" className="part-select">

                                {
                                    this.state.optionValue.map((item, i) => {
                                        return (
                                            <Option value={item.name} key={item.id}>{item.name}</Option>
                                        )
                                    })
                                }

                            </Select>
                        </div>

                        <div className="com-button">
                            <Button type="primary" onClick={this.partClick.bind(this)}>采集</Button>
                        </div>
                    </div>

                    {/*局部放电-弹框*/}
                    <Modal
                        title="采集结果"
                        visible={this.state.partVisible}
                        onOk={this.partOk.bind(this)}
                        onCancel={this.partCancel.bind(this)}
                    >
                        <div>{this.state.partValue}&emsp;&emsp;超声波：12dBmV</div>
                        <div>{this.state.partValue}&emsp;&emsp;地电波：13dBmV</div>

                        <div>采集时间：{myDate}</div>
                    </Modal>


                    {/*开关柜除湿机*/}
                    <div className="com-test">
                        <div className="com-name">开关柜除湿机:</div>
                        <div className="com-select">
                            <Select  defaultValue="#1电容器开关" className="switch-select">

                                {
                                    this.state.optionValue.map((item, i) => {
                                        return (
                                            <Option value={item.name} key={item.id}>{item.name}</Option>
                                        )
                                    })
                                }

                            </Select>
                        </div>

                        <div className="com-button">
                            <Button type="primary" onClick={this.switchClick.bind(this)}>采集</Button>
                        </div>
                    </div>

                    {/*开关柜除湿机-弹框*/}
                    <Modal
                        title="采集结果"
                        visible={this.state.switchVisible}
                        onOk={this.switchOk.bind(this)}
                        onCancel={this.switchCancel.bind(this)}
                    >
                        <div>{this.state.switchValue}&emsp;&emsp;温度：35°C</div>
                        <div>{this.state.switchValue}&emsp;&emsp;湿度：65%</div>

                        <div>采集时间：{myDate}</div>
                    </Modal>

                    {/*端子箱除湿机*/}
                    <div className="com-test">
                        <div className="com-name">端子箱除湿机:</div>
                        <div className="com-select">
                            <Select  defaultValue="#1电容器开关" className="duan-select">

                                {
                                    this.state.optionValue.map((item, i) => {
                                        return (
                                            <Option value={item.name} key={item.id}>{item.name}</Option>
                                        )
                                    })
                                }

                            </Select>
                        </div>

                        <div className="com-button">
                            <Button type="primary" onClick={this.duanClick.bind(this)}>采集</Button>
                        </div>
                    </div>

                    {/*端子箱除湿机-弹框*/}
                    <Modal
                        title="采集结果"
                        visible={this.state.duanVisible}
                        onOk={this.duanOk.bind(this)}
                        onCancel={this.duanCancel.bind(this)}
                    >
                        <div>{this.state.duanValue}&emsp;&emsp;温度：35°C</div>
                        <div>{this.state.duanValue}&emsp;&emsp;湿度：65%</div>

                        <div>采集时间：{myDate}</div>
                    </Modal>
                </div>

            </div>
        )
    }

}