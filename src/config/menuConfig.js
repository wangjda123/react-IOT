import React from "react";
import {
    LineChartOutlined,
    TeamOutlined,
    DesktopOutlined,
    EyeOutlined,
    AlertOutlined
} from '@ant-design/icons';

const menuList = [
    {
        title: '可视化',     // 菜单栏名称
        key: '/model',         // 对应的path
        icon: <EyeOutlined />,   // 图标名称
    },

    {
        title: '数据查询',     // 菜单栏名称
        key: '/charts',         // 对应的path
        icon: <LineChartOutlined />,   // 图标名称
        children: [             //子菜单列表
            {
                title: '机械特性',     // 菜单栏名称
                key: '/charts/machineCharts', // 对应的path
            },
            {
                title: '局部放电',     // 菜单栏名称
                key: '/charts/partCharts', // 对应的path
            },
            {
                title: '无线测温',     // 菜单栏名称
                key: '/charts/wiTempCharts', // 对应的path
            },
            {
                title: '开关柜除湿机',     // 菜单栏名称
                key: '/charts/switchCharts', // 对应的path
            },
            {
                title: '端子箱除湿机',     // 菜单栏名称
                key: '/charts/duanCharts', // 对应的path
            },
        ]
    },

    {
        title: '告警',     // 菜单栏名称
        key: '/error',         // 对应的path
        icon: <AlertOutlined />,   // 图标名称
        children: [
            {
                title: '告警信息',     // 菜单栏名称
                key: '/error/errorData',         // 对应的path
            },
            {
                title: '告警设置',     // 菜单栏名称
                key: '/error/errorSet',         // 对应的path
            },
        ]
    },

    {
        title: '采集测试',     // 菜单栏名称
        key: '/test',         // 对应的path
        icon: <DesktopOutlined />,   // 图标名称
    },

    {
        title: '用户管理',     // 菜单栏名称
        key: '/user',         // 对应的path
        icon: <TeamOutlined />,   // 图标名称
        children: [
            {
                title: '用户列表',     // 菜单栏名称
                key: '/user/userList',         // 对应的path
            },
            {
                title: '用户组',     // 菜单栏名称
                key: '/user/role',         // 对应的path
            },
        ]
    },
]

export default menuList