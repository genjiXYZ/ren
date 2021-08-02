/*
 * @Author: your name
 * @Date: 2021-07-30 02:09:43
 * @LastEditTime: 2021-08-03 02:46:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /temporal/src/components/Layout/Content/tableau.js
 */
/*
 * @Author: your name
 * @Date: 2021-07-30 01:26:44
 * @LastEditTime: 2021-07-30 02:12:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /temporal/src/components/Layout/Header/index.js
 */
import React from "react";

import { ContentDateStore } from "./index";

export default function Tableau(props) {
  let { state, setState } = ContentDateStore();

  function ISNode() {
    return (
      <div>
        <p> {`label: ${[state.label]}`}</p>
        <p> {`label: ${[state.nodes]}`}</p>
      </div>
    );
  }

  function IsEdge(params) {
    return (
      <div>
        <p className=" break-words">
          {`sourceLabel: ${state.sourceLabel}`}
        </p>
        <p> {`label: ${state.label}`}</p>


        <p className=" break-words">{`node: ${JSON.stringify(state.edges)}`}</p>
      </div>
    );
  }

  return (
    <div className="Tableau  bg-gray-600 overflow-y-scroll  ">
      {state && state.nodes && <ISNode /> }
      {state && state.edges && <IsEdge /> }

    </div>
  );
}
