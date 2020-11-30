import React, { useState, useEffect } from "react";
import CanvasJSreact from "./canvasjs.react";
import { iex } from "../../utils/iex.js";
import axios from "axios";
import { apihelper } from "../../utils/apiHelper.js"
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
    queryByHistorical("AAPL").then(aaplResults => {
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
        text: "Number of New Customers"
      },
      axisY : {
        title: "Number of Customers"
      },
      toolTip: {
        shared: true
      },
      data: []
  }
  let dataSet;
  stockArr.forEach(symbolResultsObj => {
    dataSet =  {
      type: "spline",
      name: symbolResultsObj.name,
      showInLegend: true,
      dataPoints: []   
     }
    symbolResultsObj.data.forEach(stockSnapshot =>{
      dataSet.dataPoints.push(
        {
          y : stockSnapshot.close,
          label : stockSnapshot.date
        }
      )
    })
    options.data.push(dataSet);
  });
  console.log("dataSet:",options);
  setStockInfo(options);
  }

  // call on apihelper from utils


  // 1. move api calls to apihelper within utils
  // 2. create and call on the gatherInfo function within use effect
  // 3. within gather info have multiple api calss gather info (queryByHistorical)
  // 4. call formatData within useEffect then setStockInfo

  // const dataPoints = { y: stockInfo.price, label: stockInfo.date }


  return (
    <>
      <CanvasJSChart options={stockInfo} />
    </>
  );
}

export default Graph;