/*
 * @Author: your name
 * @Date: 2021-07-29 23:20:16
 * @LastEditTime: 2021-08-03 02:46:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /temporal/mock/server.js
 */

const express = require("express");
const Mock = require("mockjs");
const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use("/test", (req, res) => {
  res.json(
    Mock.mock({
      status: 200,
      "data|1-9": [
        {
          caption: () => Mock.mock("@guid"),
          "value|1-100": 100,
        },
      ],
    })
  );
});

app.use("/category", (req, res) => {
  res.send(200, {
    nodes: [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
    ],
    label: "Category",
  });
});

app.use("/item", (req, res) => {
  res.send(200, {
    nodes: ["0", "1", "2", "3", "4", "5"],
    label: "item",
  });
});

app.use("/user", (req, res) => {
  res.send(200, {
    nodes: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    label: "user",
  });
});

app.use("/addtocart", (req, res) => {
  res.send(200, {
    sourceLabel: "User",
    edges: [
      { source: "1268778", target: "15" },
      { source: "1124964", target: "15" },
      { source: "325833", target: "19" },
      { source: "456617", target: "25" },
      { source: "1141285", target: "25" },
      { source: "825710", target: "25" },
      { source: "575295", target: "25" },
      { source: "41702", target: "42" },
      { source: "432404", target: "42" },
      { source: "1294980", target: "66" },
      { source: "1279815", target: "102" },
      { source: "726888", target: "147" },
      { source: "582525", target: "147" },
      { source: "152963", target: "168" },
      { source: "387037", target: "199" },
      { source: "434252", target: "199" },
      { source: "1233979", target: "212" },
    ],
    targetLabel: "Item",
    label: "Addtocart",
  });
});

app.use("/belongto", (req, res) => {
  res.send(200, {
    sourceLabel: "Item",
    edges: [
      { source: "98949", target: "1016" },
      { source: "97200", target: "1016" },
      { source: "90376", target: "1016" },
      { source: "85538", target: "1016" },
      { source: "36918", target: "1016" },
      { source: "209439", target: "1016" },
      { source: "46702", target: "1016" },
      { source: "42743", target: "1016" },
      { source: "201154", target: "1016" },
      { source: "464482", target: "1016" },
      { source: "463226", target: "1016" },
      { source: "29689", target: "1016" },
      { source: "462004", target: "1016" },
      { source: "459471", target: "1016" },
      { source: "195160", target: "1016" },
      { source: "75877", target: "1016" },
      { source: "190569", target: "1016" },
      { source: "73730", target: "1016" },
      { source: "187263", target: "1016" },
      { source: "186663", target: "1016" },
      { source: "455076", target: "1016" },
    ],
    targetLabel: "Category",
    label: "Belongto",
  });
});

app.use("/subcategory", (req, res) => {
  res.send(200, {
    sourceLabel: "Category",
    edges: [
      { source: "1016", target: "213" },
      { source: "809", target: "169" },
      { source: "570", target: "9" },
      { source: "1691", target: "885" },
      { source: "536", target: "1691" },
      { source: "542", target: "378" },
      { source: "1146", target: "542" },
      { source: "1140", target: "542" },
      { source: "1479", target: "1537" },
      { source: "83", target: "1621" },
      { source: "688", target: "893" },
      { source: "257", target: "312" },
      { source: "1640", target: "622" },
      { source: "963", target: "1281" },
      { source: "412", target: "1110" },
      { source: "948", target: "1110" },
      { source: "934", target: "1110" },
      { source: "148", target: "1110" },
      { source: "12", target: "1110" },
      { source: "1459", target: "1604" },
      { source: "1039", target: "1604" },
    ],
    targetLabel: "Category",
    label: "Subcategory",
  });
});

app.use("/transaction", (req, res) => {
  res.send(200, {
    sourceLabel: "User",
    edges: [
      { source: "1124964", target: "15" },
      { source: "325833", target: "19" },
      { source: "456617", target: "25" },
      { source: "575295", target: "25" },
      { source: "432404", target: "42" },
      { source: "582525", target: "147" },
      { source: "152963", target: "168" },
      { source: "387037", target: "199" },
      { source: "1233979", target: "212" },
      { source: "899857", target: "233" },
      { source: "1104446", target: "304" },
      { source: "76757", target: "320" },
      { source: "152963", target: "387" },
      { source: "76757", target: "403" },
      { source: "557470", target: "496" },
      { source: "371604", target: "496" },
      { source: "801091", target: "546" },
      { source: "861299", target: "546" },
    ],
    targetLabel: "Item",
    label: "Transaction",
  });
});
app.use("/view", (req, res) => {
  res.send(200, {
    sourceLabel: "User",
    edges: [
      { source: "0", target: "67045" },
      { source: "0", target: "357564" },
      { source: "0", target: "285930" },
      { source: "1", target: "72028" },
      { source: "2", target: "216305" },
      { source: "2", target: "325215" },
      { source: "2", target: "342816" },
      { source: "2", target: "259884" },
      { source: "3", target: "385090" },
      { source: "5", target: "61396" },
      { source: "6", target: "344723" },
      { source: "6", target: "253615" },
      { source: "7", target: "226353" },
      { source: "7", target: "164941" },
    ],
    targetLabel: "Item",
    label: "View",
  });
});
app.listen(`8092`, (res, req) => {
  console.log(`mock server start: http://localhost:8092`);
});
