import React,{Component} from 'react'

import './screen.less'
import Echarts from "../echarts/Echarts";
import picture from '../../../img/picture.jpg'

export default class Screen extends Component{
    constructor(props) {
        super(props);
        this.state={
            click: false,
            address: '空',
        }

    }

    // addHtml(names, className) {
    //     const appendHTML = (element, html) => element.insertAdjacentHTML("beforeend", html)
    //     let ele = document.querySelector(className)
    //
    //     for (let i = 0; i < names.length; i++) {
    //         let html = `<button>`+names[i]+`</button>`
    //         appendHTML(ele, html)
    //     }
    // }

    Left() {
        let names = ['#3主变220kV开关','台门2348开关','#2主变220kV开关','州门2341开关',
            '海升2344开关','#1主变220kV开关','220kV母联开关','海谷2349开关','待用2HMI开关',
            '外门2347开关','外海2Q32开关']
        return names.map(item => <button onClick={this.ClickTrue.bind(this, item)}>{item}</button>)
    }

    Right() {
        let names = ['海安1851开关', '门安1852开关', '海黎1853开关',
            '门椒1854开关', '#3主变110kV开关', '海群1855开关',
            '门扩1856开关', '#2主变110kV开关', '110kV旁路开关',
            '门沙1857开关', '门沙1858开关', '110kV母联开关', '#1主变110kV开关',
            '门升1842开关', '门谷1841开关',]
        return names.map(item => <button onClick={this.ClickTrue.bind(this, item)}>{item}</button>)
    }

    Bottom() {
        let names = [
            '海时3738开关', '#2电抗器开关', '#2所用变开关', '#2电容器开关',
            '35kVII段母线压变插件', '海牌3735开关', '35kVII段母线避雷器',
            '#2主变35kV开关', '备用3572开关', '35kV母分插件', '35kV母分开关',
            '海界3733开关', '#1主变35kV开关', '35kVI段母线压变插件', '海洪3734开关',
            '35kVI段母线避雷器', '#1所变用开关', '#3电容器开关', '海凤3731开关',
            '#1电容器开关',
        ]
        return names.map(item => <button onClick={this.ClickTrue.bind(this, item)}>{item}</button>)
    }



    ClickTrue(item) {

        this.setState({
            click: true,
            address: item,
        })
    }

    ClickBack() {
        this.setState({
            click: false,
        })
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if(!this.state.click) {
    //
    //     }else {
    //         let buttons =  document.querySelectorAll('button')
    //         console.log(buttons)
    //         for (let i = 0; i < buttons.length; i++) {
    //             let button = buttons[i]
    //             button.remove()
    //         }
    //     }
    // }

    componentDidMount() {

        // let activeNum = setInterval(()=> {
        //     // 对接接口 获得异常端口名称
        //     let errorName = '#3主变220kV开关'
        //
        //
        // },1000)

        if(!this.state.click) {
            // this.Left()
            // this.Right()
            // this.Bottom()

            let buttons = document.querySelectorAll('button')
            // console.log('button', buttons)
            for(let i = 0; i < buttons.length; i ++) {
                // console.log(buttons[i])
                buttons[i].addEventListener('click', (e)=> {
                    // console.log(e.target.innerText)
                    this.setState({
                        click: true,
                        address: e.target.innerText,
                    })

                    console.log(this.state.address)
                })
            }
        }




    }

    render() {

        return (
            <div className={'PC'} style={{height:'100%', width:'100%'}}>
                {
                    this.state.click ?
                        <div style={{height:'100%', width:'100%'}}>
                            <div className={'leftPart'}>
                                <div className={'title'}>{this.state.address}</div>
                                <div className={'dataPart1'}>
                                    <Echarts data={'数据接口'} name={'名称接口'}/>
                                </div>
                                <div className={'dataPart2'}>
                                    <Echarts data={'数据接口'} name={'名称接口'}/>
                                </div>
                                <div className={'dataPart3'}>
                                    <Echarts data={'数据接口'} name={'名称接口'}/>
                                </div>
                            </div>

                            <div className={'rightPart'}>
                                <div className={'back'} onClick={this.ClickBack.bind(this)}>X</div>
                                <div className={'picture'}>
                                    <img src={picture}/>
                                </div>
                                <div className={'dataPart4'}>

                                </div>
                            </div>
                        </div>
                        :
                        <div style={{height:'100%', width:'100%'}}>
                            <div className={'leftButton'} style={{width:'50%',height:'70%'}}>
                                {this.Left()}
                            </div>
                            <div className={'rightButton'} style={{width:'50%',height:'70%'}}>
                                {this.Right()}
                            </div>
                            <div className={'bottomButton'} style={{width:'95%',height:'30%'}}>
                                {this.Bottom()}
                            </div>
                        </div>
                }

            </div>

        );
    }
}