import React, { Component } from "react";
import './setValue.less'

export default class SetValue extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="set-div">
                <div className="tit-name">{this.props.name}</div>
                <div className="set-block">
                    {/*预警值*/}
                    <div className="com-block">
                        <div className="set-name">预警值：</div>
                        <input className="set-input" type="text"/>
                        <div>{this.props.unit}</div>
                    </div>
                    {/*报警值*/}
                    <div  className="com-block">
                        <div className="set-name">报警值：</div>
                        <input className="set-input" type="text"/>
                        <div>{this.props.unit}</div>
                    </div>

                </div>
                <div>

                </div>
            </div>
        )
    }
}