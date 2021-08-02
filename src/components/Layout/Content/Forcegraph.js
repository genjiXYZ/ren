/*
 * @Author: your name
 * @Date: 2021-07-30 01:26:44
 * @LastEditTime: 2021-08-03 01:20:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /temporal/src/components/Layout/Header/index.js
 */
import React, {useEffect } from "react";


import {renderForcegraph  } from '../../G6Setting/g6Forcegraph'



import {ContentDateStore} from "./index"



export default function Forcegraph() {
    let {state,setState} = ContentDateStore()
    useEffect(()=>{
        renderForcegraph({id:"Forcegraph",cb:setState})
    },[])
    return (
        <div id="Forcegraph" className="Forcegraph col-span-2 bg-gray-400  ">
             
        </div>
    )
}


