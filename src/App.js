import React,{Component} from "react"
import { Button, message } from 'antd'
import {BrowserRouter, HashRouter, Route, Switch} from 'react-router-dom'

import Login from './pages/login/login'
import Admin from './pages/admin/admin'
import Aa from './pages/login/aa'

/*
应用的跟组件
 */

export default class App extends Component{


    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path='/aa' component={Aa} exact></Route>
                    <Route path='/login' component={Login} exact></Route>
                    <Route path='/' component={Admin}></Route>
                </Switch>
            </HashRouter>
        )
    }
}