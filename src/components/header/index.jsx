import React, {Component} from 'react'
// import EnvironmentTwoTone from "@ant-design/icons/lib/icons/EnvironmentTwoTone";
import {message, Modal} from 'antd'
import {Link} from "react-router-dom";


import memoryUtils from "../../utils/memoryUtils";
import storageUtils from "../../utils/storageUtils";

import {EnvironmentOutlined,LogoutOutlined} from "@ant-design/icons";

import './index.less'
/*头部组件 */
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.ClickAllScreen = this.ClickAllScreen.bind(this)
        this.ClickHelp = this.ClickHelp.bind(this)
        this.ClickLogOut = this.ClickLogOut.bind(this)
    }

    ClickAllScreen = () => {
        console.log('content!!!!',this.props.content)
        let contentDom = this.props.content
        this.requestFullScreen(contentDom)
    }
    requestFullScreen(element) {
        var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
        console.log('requestMethod', requestMethod)
        if (requestMethod) {
            requestMethod.call(element);
        }
    }

    ClickHelp = () => {
        message.success('帮助')
    }

    ClickLogOut = () => {
        // message.success('登出')
        Modal.confirm({
            content: '确定退出吗?',
            onOk: () => {
                console.log('OK')
                // 移除保存的 user
                storageUtils.removeUser()
                memoryUtils.user = {}
                // 跳转到 login
                console.log('history', this.props)
                window.location.href='http://121.37.130.105:8080/#/login'
                // this.props.history.replace('/login')
            },
            onCancel() {
                console.log('Cancel')
            },
        })
    }




    render() {
        console.log('header', this.props.user)
        return (
            <div className='header'>
                {/*<button onClick={this.ClickAll}>全 屏</button>*/}
                <EnvironmentOutlined className='placeIcon' style={{fontSize: '20px', color:'white'}}/>
                <div className='placeName'>台州海门变电站</div>


                <LogoutOutlined className = 'logOut right' style={{fontSize: '30px'}} onClick={this.ClickLogOut}/>

                <div className='username right'>{this.props.user.username}</div>

                <a className='help right' onClick={this.ClickHelp}>帮助</a>

                <a className='help right' onClick={this.ClickAllScreen}>全屏</a>

            </div>
        )
    }
}