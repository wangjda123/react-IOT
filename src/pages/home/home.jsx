import React,{Component} from "react";
import Button from "antd/es/button";

import Model from "../model/model";
import ModelPC from '../modelPC/model'

import './home.less'

/*
    首页路由
 */
export default class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            appear: false,
            class: false,
        }
    }
    requestFullScreen(element) {
        var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
        console.log('requestMethod', requestMethod)
        if (requestMethod) {
            requestMethod.call(element);
        }
    }
    render() {
        let contentDom = document.querySelector('.contentDom')

        return (
            <div className={'home'}>
                {this.state.appear ?
                    (this.state.class ? <Model /> : <ModelPC />)
                    :
                    <div className={'kong'}>
                        <Button className={'xpxt'} onClick={() => {

                            this.requestFullScreen(contentDom)
                            this.setState({
                                appear: true,
                                class: true,
                            })
                        }}>pad</Button>
                        <Button className={'xpxt'} onClick={() => {

                            this.requestFullScreen(contentDom)
                            this.setState({
                                appear: true,
                                class: false,
                            })
                        }}>pc</Button>
                    </div>
                }

            </div>
        )
    }

}