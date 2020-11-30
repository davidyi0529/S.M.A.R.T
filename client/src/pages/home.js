import React, { useState, useEffect } from "react";
import Graph from "../Components/Graph"
// import React from 'react';
// import axios from "axios"
// import Table from "../Components/Table";
import Table from "../Components/Table";
// import Results from "../Components/Results";
import SearchForm from "../Components/SearchForm";
// import Saved from "../Components/Saved"
import apiStocks from '../utils/apiStocks'
import "bootstrap/dist/css/bootstrap.min.css";

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
      let newStocks = await apiStocks.getStocks(searchState)
          .then((res) => {
              return res.data.items;
          });
          setStocks(newStocks);

          apiStocks.getDbStock()
          .then(res => {
              for (let i = 0; i < res.data.length; i++) {
                  holder.push(res.data[i].id);
              }
              console.log("savestock response: ", res)
          })
      console.log("holder: ", holder);
      setIds(holder);
  };

//   const saveStock = (symbol) => {
//       const data = {
//           title: symbol.companyName,
//           exchange: symbol.exchange,
//           description: symbol.description,
//           link: symbol.website,
//           id: symbol.id
//       };

//       apiStocks.addStock(data).then(res => {
//           console.log("saved", res)

//       }).then(err => {
//           console.log("error", err);

//       });
//   };

  return (
    <div className="home">
      <div className="Container">
        <SearchForm 
        handleFormSubmit={handleFormSubmit}
        searchStocks={searchStocks}
        />
         {/* <Saved
                data={stocks}
                saveStock={saveStock}
            /> */}
        <Table />
      </div>
      <Graph /> 
    </div >
  );
};



export default Home;