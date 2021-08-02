/*
 * @Author: your name
 * @Date: 2021-07-30 02:16:59
 * @LastEditTime: 2021-08-03 02:05:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /temporal/src/components/G6Setting/g6Forcegraph.js
 */
import G6 from "@antv/g6";

import GetApi from "../../axios/get";

function renderForcegraph({ id, cb }) {
  const container = document.getElementById(id);
  const width = container.scrollWidth;
  const height = container.scrollHeight || 500;

  const graph = new G6.Graph({
    container: id,
    width,
    height,
    layout: {
      type: "force",
    },
    defaultNode: {
      type: "circle",
      size: 50,
      style: {
        // fill: '#steelblue',
        //stroke: 'red',
        //lineDash: [2, 2],
        lineWidth: 0.5,
      },
    },
    modes: {
      default: ["drag-node"],
    },
  });

  const forceData = {
    nodes: [
      {
        id: "01",
        x: 50,
        y: 120,
        label: "User",
      },
      {
        id: "02",
        x: 400,
        y: 150,
        label: "Item",
        type: "circle",
      },
      {
        id: "03",
        x: 250,
        y: 100,
        label: "Category",
      },
    ],
    edges: [
      {
        source: "01",
        target: "02",
        label: "addtocart",
      },
      {
        source: "02",
        target: "03",
        label: "belongto",
      },
      {
        source: "03",
        target: "03",
        label: "subCategory",
        type: "loop",
      },
      {
        source: "01",
        target: "02",
        label: "view",
      },
      {
        source: "01",
        target: "02",
        label: "transaction",
      },
    ],
  };

  //设置两点 多线
  G6.Util.processParallelEdges(forceData.edges);

  graph.data({
    nodes: forceData.nodes,
    edges: forceData.edges.map(function (edge, i) {
      edge.id = "edge" + i;
      return Object.assign({}, edge);
    }),
  });
  graph.render();

  //点击执行 callback   父组件 setDate 更新数据
  graph.on("node:mousedown", function (event) {
    GetApi(event.item._cfg.model.label.toLowerCase()).then((res) => {
      //执行 setdate callback
      cb(res.data);
      console.log("执行 contentDateStore  setDate()");
    });
  });

  graph.on("edge:mousedown", function (event) {
  
    GetApi(event.item._cfg.model.label.toLowerCase()).then((res) => {
      //执行 setdate callback
      cb(res.data);
      console.log("执行 contentDateStore  setDate()");
    });
  });

  graph.on("node:dragstart", function (e) {
    graph.layout();
    refreshDragedNodePosition(e);
  });
  graph.on("node:drag", function (e) {
    const forceLayout = graph.get("layoutController").layoutMethods[0];
    forceLayout.execute();
    refreshDragedNodePosition(e);
  });

  //拖拽结束后是否回弹
  graph.on("node:dragend", function (e) {
    // e.item.get("model").fx = null;
    // e.item.get("model").fy = null;
  });

  if (typeof window !== "undefined")
    window.onresize = () => {
      if (!graph || graph.get("destroyed")) return;
      if (!container || !container.scrollWidth || !container.scrollHeight)
        return;
      graph.changeSize(container.scrollWidth, container.scrollHeight);
    };
}

function refreshDragedNodePosition(e) {
  const model = e.item.get("model");
  model.fx = e.x;
  model.fy = e.y;
}

export { renderForcegraph, refreshDragedNodePosition };
