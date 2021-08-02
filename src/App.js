/*
 * @Author: your name
 * @Date: 2021-07-29 23:30:35
 * @LastEditTime: 2021-08-03 01:23:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /temporal/src/app.js
 */
/*
 * @Author: your name
 * @Date: 2021-07-29 23:30:35
 * @LastEditTime: 2021-07-30 00:49:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /temporal/src/app.js
 */

import React from "react";

//引入 axios  实例  (api)

import GetApi from "./axios/get";

import  base from "./server/base"


import { Footer, Header, Content } from "./components/Layout/index";
import "./App.css";





export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: null,
      listData:null
    };
  
  

  }

  componentDidMount() {

    //测试 get 
    GetApi("test").then((res) => {

      this.setState({ message: res });
      console.log(`您已经获取到 端口${base.baseUrl} 的数据 数据为 ${JSON.stringify(res)}`)
    });
  }
  render() {
    return (
 
      <div className="App h-screen container m-auto">
        <div className="flex flex-col h-full">
          <Header></Header>
          <Content></Content>
          <Footer></Footer>
        </div>
      </div>
    
    );
  }
}
