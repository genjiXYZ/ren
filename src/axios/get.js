/*
 * @Author: your name
 * @Date: 2021-07-30 00:50:12
 * @LastEditTime: 2021-08-03 01:45:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /temporal/src/axios/get.js
 */

//引入 axios  实例
import http from "./axios";
import base from '../server/base.js';

const {baseUrl,basePrefix} = base

 async function GetApi (props){
      console.log(`发送get 请求 请求的  的地址 是 : ${baseUrl}/${props}`)

       let res = await  http.get(`${props}`)
       console.log(`得到的结果是`, res.data)
      
       return res
}


export default  GetApi