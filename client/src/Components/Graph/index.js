import React, { useState, useEffect } from "react";
import CanvasJSreact from "./canvasjs.react";
import { iex } from "../../utils/iex.js";
import axios from "axios";
// import GraphPartial from "../GraphPartial"
var CanvasJS = CanvasJSreact.CanvasJS;
var CanvasJSChart = CanvasJSreact.CanvasJSChart;
//https://canvasjs.com/react-charts/multiseries-chart/
// we would want to map data
function Graph() {
  const queryURL = `${iex.base_url}/stock/AAPL/chart/5d?token=${iex.api_token}`;
  console.log(queryURL)
  const [stockInfo, setStockInfo] = useState({})
  useEffect(() => {
    gatherInfo();
  }, []);

  function gatherInfo() {
    console.log("in gatherInfo");
    // create a list of results,
    // props.firstItem for "AAPL"
    // push aaplResults to list
    // var stockList = ["AAPL","TSLA"];
    // var resList = [];
    //  for (var i = 0; i < stockList.length; i++){
    //    console.log(stockList[i]);
    //    let name = stockList[i];
    // queryByHistorical(stockList[i]).then(res=>{
    // resList.push({name : name, data:res.data});
    // console.log(resList);
    // })
    // }
    // formatData(resList);
    queryByHistorical("AAPL").then(aaplResults => {
      console.log(aaplResults);
      // props.secondItem
      queryByHistorical("TSLA").then(tslaResults =>{
        formatData([
          {
          name: "appl",
          data: aaplResults.data
        },
          {
            name: "tsla",
            data: tslaResults.data
          }
        ])
      })
    });
    // console.log(dataset1);
    const dataset2 = queryByHistorical("TSLA");
  }

  function queryByHistorical(symbol) {
    console.log("query by history");
    return axios.get(
      `${iex.base_url}/stock/` + symbol + `/chart/5d?token=${iex.api_token}`
    )
  }

  function formatData(stockArr) {
    console.log("format data");
    console.log(stockArr);
    const options = {
      animationEnabled: true,	
      title:{
        text: "Stocks"
      },
      axisY : {
        title: "Value of stock"
      },
      toolTip: {
        shared: true
      },
      data: []
  }
  console.log(options);
  let dataSet;
  // not going through the below function
  stockArr.forEach(symbolResultsObj => {
    console.log(symbolResultsObj);
    dataSet =  {
      type: "spline",
      name: symbolResultsObj.name,
      showInLegend: true,
      dataPoints: []   
     }
    symbolResultsObj.data.forEach(stockSnapshot =>{
      console.log(stockSnapshot);
      dataSet.dataPoints.push(
        {
          y : stockSnapshot.close,
          label : stockSnapshot.date
        }
      )
    })
    options.data.push(dataSet);
  });
  // console.log("dataSet:",options);
  setStockInfo(options);
  }

  return (
    <>
      <CanvasJSChart options={stockInfo} />
    </>
  );
}

export default Graph;