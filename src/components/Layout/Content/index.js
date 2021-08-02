/*
 * @Author: your name
 * @Date: 2021-07-30 01:26:31
 * @LastEditTime: 2021-08-03 02:42:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /temporal/src/components/Layout/Footer/index.js
 */
import React ,{createContext , useContext,useState}from "react";

import Forcegraph from "./Forcegraph"
import Tableau from "./Tableau"

import Combograph from "./Combograph"


//content  数据 context
export const dataContext = createContext()
export const ContentDateStore = ()=> useContext(dataContext) 


 


function Content() {
    const [state, setState] = useState(null)
  return (

    //传一个 值 , 和 callback
    <dataContext.Provider value={ {state,setState}}>
    <div className="context py-4 border w-full h-full flex justify-center items-center overflow-hidden">
      <div className="grid   grid-gap-16 grid-cols-3 grid-rows-2 w-full h-full ">
    
        <Forcegraph  />
        <Tableau  />
        <Combograph  />

      </div>
    </div>
    </dataContext.Provider>
  );
}

export default Content;
