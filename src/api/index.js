/*包含 n 个接口请求函数的模块 每个函数返回 promise */
import ajax from './ajax'

// 展示用户
export const reqShowUser = () =>
    ajax('/API/user/list', {},'GET')
// export const reqShowUser = () => {
//     ajax('/user/list',{},'GET')
// }

// 登陆
export const reqLogin = (name, password) =>
    ajax('/API/user/login', {name, password}, 'POST')

// 添加用户
export const reqAddRole = (role) =>
    ajax('/API/user/add',role, 'POST')

// 删除用户
export const reqDeleteUser = (userId) =>
    ajax('/API/user/delete', {userId}, 'POST')

// 修改用户信息
export const reqUpdateUser = (user) =>
    ajax('/API/user/update',user,'POST')
