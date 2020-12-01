import React, { useState, useEffect } from "react";
// import Graph from "../Components/Graph"
// import React from 'react';
// import axios from "axios"
// import Table from "../Components/Table";
import API from '../utils/API'
// import Table from "../Components/Table";
import SearchForm from "../Components/SearchForm";
import Results from "../Components/Results";
// import "bootstrap/dist/css/bootstrap.min.css";

function Home() {

  const [searchState, setSearchState] = useState("");
  const [stocks, setStocks] = useState([]);
  const [ids, setIds] = useState([]);

  useEffect(() => {
  }, []);

  const handleFormSubmit = (e) => {
    const { value } = e.target
    setSearchState(value)
  };

  const searchStocks = async () => {
    let holder = [];
    holder.length = 0;
    let newStocks = await API.getStocks(searchState)
      .then((res) => {
        return res.data.items;
      });
    setStocks(newStocks);

    API.getDbStock()
      .then(res => {
        for (let i = 0; i < res.data.length; i++) {
          holder.push(res.data[i].id);
        }
        console.log("savestock response: ", res)
      })
    console.log("holder: ", holder);
    setIds(holder);
  };

  const saveStock = (stock) => {
    var image;
    if (stock.logo === undefined) {
      image = ""
    } else {
      image = stock.logo
    };

    const data = {
      name: stock.name,
      exchange: stock.exchange,
      currency: stock.currency,
      image: image,
      link: stock.weburl,
      symbol: stock.ticker
    };

    API.addStock(data).then(res => {
      console.log("saved", res)

    }).then(err => {
      console.log("error", err);

    });
  };

  return (
    <div className="Home">
      <div className="Container">
        <SearchForm
          handleFormSubmit={handleFormSubmit}
          searchStocks={searchStocks} />
        <Results
          data={stocks}
          saveStock={saveStock}
        />
        {/* <Table /> */}
      </div>
      {/* <Graph /> */}
    </div >
  );
};


export default Home;