/*
 * @Author: your name
 * @Date: 2021-07-29 23:09:02
 * @LastEditTime: 2021-08-03 01:20:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /temporal/utils/axios.js
 */
import axios from 'axios';

//默认url  和前缀
import base from '../server/base.js';

const {baseUrl} = base
// 错误代码
// const codeMessage = {
//     200: '服务器成功返回请求的数据。',
//     201: '新建或修改数据成功。',
//     202: '一个请求已经进入后台排队（异步任务）。',
//     204: '删除数据成功。',
//     400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
//     401: '用户没有权限（令牌、用户名、密码错误）。',
//     403: '用户得到授权，但是访问是被禁止的。',
//     404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
//     406: '请求的格式不可得。',
//     410: '请求的资源被永久删除，且不会再得到的。',
//     422: '当创建一个对象时，发生一个验证错误。',
//     500: '服务器发生错误，请检查服务器。',
//     502: '网关错误。',
//     503: '服务不可用，服务器暂时过载或维护。',
//     504: '网关超时。',
// };




//axios  默认配置
const axiosConfig = {
    baseURL: baseUrl,
    // transformRequest: [data => data],
    // transformResponse: [data => data],
    /* 设置超时时间 */
    // timeout: 3000,
    /* 携带凭证 */
    // withCredentials: false,
};

const http = axios.create(axiosConfig)


export default http