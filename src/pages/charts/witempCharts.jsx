import React,{Component} from "react";
import WirelessCader from "./wirelessCader";

import UparmaEcharts from "../../components/echarts/wiTemp/upArm/uparmaEcharts";
import UparmbEcharts from "../../components/echarts/wiTemp/upArm/uparmbEcharts";
import UparmcEcharts from "../../components/echarts/wiTemp/upArm/uparmcEcharts";

import DownarmaEcharts from "../../components/echarts/wiTemp/downArm/downarmaEcharts";
import DownarmbEcharts from "../../components/echarts/wiTemp/downArm/downarmbEcharts";
import DownarmcEcharts from "../../components/echarts/wiTemp/downArm/downarmcEcharts";

import MupaiaEcharts from "../../components/echarts/wiTemp/mupai/mupaiaEcharts";
import MupaibEcharts from "../../components/echarts/wiTemp/mupai/mupaibEcharts";
import MupaicEcharts from "../../components/echarts/wiTemp/mupai/mupaicEcharts";

import DianlanaEcharts from "../../components/echarts/wiTemp/dianlan/dianlanaEcharts";
import DianlanbEcharts from "../../components/echarts/wiTemp/dianlan/dianlanbEcharts";
import DianlancEcharts from "../../components/echarts/wiTemp/dianlan/dianlancEcharts";


import DianlanaTable from "../../components/tables/wiTemp/dianlan/dianlanaTable";
import DianlanbTable from "../../components/tables/wiTemp/dianlan/dianlanbTable";
import DianlancTable from "../../components/tables/wiTemp/dianlan/dianlancTable";

import DownArmaTable from "../../components/tables/wiTemp/downArm/downArmaTable";
import DownArmbTable from "../../components/tables/wiTemp/downArm/downArmbTable";
import DownArmcTable from "../../components/tables/wiTemp/downArm/downArmcTable";

import MupaiaTable from "../../components/tables/wiTemp/mupai/mupaiaTable";
import MupaibTable from "../../components/tables/wiTemp/mupai/mupaibTable";
import MupaicTable from "../../components/tables/wiTemp/mupai/mupaicTable";

import UpArmaTable from "../../components/tables/wiTemp/upArm/upArmaTable";
import UpArmbTable from "../../components/tables/wiTemp/upArm/upArmbTable";
import UpArmcTable from "../../components/tables/wiTemp/upArm/upArmcTable";


import './index.less'
/*
    无线测温路由
 */
export default class WitempCharts extends Component{
    constructor(props) {
        super(props)
        // 添加图表判定的值
        this.state = {
            visibledianlana: false,
            visibledianlanb: false,
            visibledianlanc: false,

            visiblemupaia: false,
            visiblemupaib: false,
            visiblemupaic: false,

            visibleuparma: true,
            visibleuparmb: false,
            visibleuparmc: false,

            visibledownarma: false,
            visibledownarmb: false,
            visibledownarmc: false,
        }
    }


    getValues(values) {
        let addresses = ['uparm', 'downarm', 'mupai', 'dianlan']
        let zus = ['A', 'B', 'C']
        // console.log('values in index',values)
        let address = values[0]
        let zu = values[1]
        this.setState({
            visibleModule: address + zu,
        })
        const allFalse = (boolean) => {
            if (!boolean) {
                this.setState({
                    visibledianlana: false,
                    visibledianlanb: false,
                    visibledianlanc: false,

                    visiblemupaia: false,
                    visiblemupaib: false,
                    visiblemupaic: false,

                    visibleuparma: false,
                    visibleuparmb: false,
                    visibleuparmc: false,

                    visibledownarma: false,
                    visibledownarmb: false,
                    visibledownarmc: false,
                })
            }
        }

        if (address === addresses[0]) {
            if (zu === zus[0]) {
                allFalse(false)
                this.setState({
                    visibleuparma: true,
                })
            }
            if (zu === zus[1]) {
                allFalse(false)
                this.setState({
                    visibleuparmb: true,
                })
            }
            if (zu === zus[2]) {
                allFalse(false)
                this.setState({
                    visibleuparmc: true,
                })
            }
        }
        if (address === addresses[1]) {
            if (zu === zus[0]) {
                allFalse(false)
                this.setState({
                    visibledownarma: true,
                })
            }
            if (zu === zus[1]) {
                allFalse(false)
                this.setState({
                    visibledownarmb: true,
                })
            }
            if (zu === zus[2]) {
                allFalse(false)
                this.setState({
                    visibledownarmc: true,
                })
            }
        }
        if (address === addresses[2]) {
            if (zu === zus[0]) {
                allFalse(false)
                this.setState({
                    visiblemupaia: true,
                })
            }
            if (zu === zus[1]) {
                allFalse(false)
                this.setState({
                    visiblemupaib: true,
                })
            }
            if (zu === zus[2]) {
                allFalse(false)
                this.setState({
                    visiblemupaic: true,
                })
            }
        }
        if (address === addresses[3]) {
            if (zu === zus[0]) {
                allFalse(false)
                this.setState({
                    visibledianlana: true,
                })
            }
            if (zu === zus[1]) {
                allFalse(false)
                this.setState({
                    visibledianlanb: true,
                })
            }
            if (zu === zus[2]) {
                allFalse(false)
                this.setState({
                    visibledianlanc: true,
                })
            }
        }

    }





    render() {
        return (
            <div>
                <div className='content'>
                    <ul className = 'contentUl' onClick = {this.ClickStyle}>

                        <WirelessCader getValues = {this.getValues.bind(this)} />

                    </ul>

                    {/*无线测温*/}
                    {/*电缆*/}
                    {this.state.visibledianlana ? (
                        <DianlanaEcharts/>
                    ) :null
                    }
                    {this.state.visibledianlanb ? (
                        <DianlanbEcharts/>
                    ) :null
                    }
                    {this.state.visibledianlanc ? (
                        <DianlancEcharts/>
                    ) :null
                    }


                    {this.state.visibledianlana ? (
                        <DianlanaTable/>
                    ) :null
                    }
                    {this.state.visibledianlanb ? (
                        <DianlanbTable/>
                    ) :null
                    }
                    {this.state.visibledianlanc ? (
                        <DianlancTable/>
                    ) :null
                    }


                    {/*母排*/}
                    {this.state.visiblemupaia ? (
                        <MupaiaEcharts/>
                    ) :null
                    }
                    {this.state.visiblemupaib ? (
                        <MupaibEcharts/>

                    ) :null
                    }
                    {this.state.visiblemupaic ? (
                        <MupaicEcharts/>

                    ) :null
                    }


                    {this.state.visiblemupaia ? (
                        <MupaiaTable/>
                    ) :null
                    }
                    {this.state.visiblemupaib ? (
                        <MupaibTable/>

                    ) :null
                    }
                    {this.state.visiblemupaic ? (
                        <MupaicTable/>

                    ) :null
                    }


                    {/*上臂*/}
                    {this.state.visibleuparma ? (
                        <UparmaEcharts/>
                    ) :null
                    }
                    {this.state.visibleuparmb ? (
                        <UparmbEcharts/>
                    ) :null
                    }
                    {this.state.visibleuparmc ? (
                        <UparmcEcharts/>
                    ) :null
                    }


                    {this.state.visibleuparma ? (
                        <UpArmaTable/>
                    ) :null
                    }
                    {this.state.visibleuparmb ? (
                        <UpArmbTable/>
                    ) :null
                    }
                    {this.state.visibleuparmc ? (
                        <UpArmcTable/>
                    ) :null
                    }



                    {/*下臂*/}
                    {this.state.visibledownarma ? (
                        <DownarmaEcharts/>
                    ) :null
                    }
                    {this.state.visibledownarmb ? (
                        <DownarmbEcharts/>
                    ) :null
                    }
                    {this.state.visibledownarmc ? (
                        <DownarmcEcharts/>
                    ) :null
                    }


                    {this.state.visibledownarma ? (
                        <DownArmaTable/>
                    ) :null
                    }
                    {this.state.visibledownarmb ? (
                        <DownArmbTable/>
                    ) :null
                    }
                    {this.state.visibledownarmc ? (
                        <DownArmcTable/>
                    ) :null
                    }




                </div>
            </div>
        )
    }

}