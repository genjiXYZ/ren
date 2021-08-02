/*
 * @Author: your name
 * @Date: 2021-07-29 23:13:06
 * @LastEditTime: 2021-08-03 01:07:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /temporal/server/base.js
 */
//环境
const nodeEnv = process.env.NODE_ENV || 'development';


let basePrefix = '';
let baseUrl
let PORT = 8092

if (nodeEnv === 'production') {
    baseUrl = 'http://xxx.com/api';
    basePrefix = 'api';
} else if (nodeEnv === 'development') {
    baseUrl = `http://localhost:${PORT}`;
    basePrefix = 'api';
}


const base = { baseUrl, basePrefix,PORT };



export default   base

