import React, { useState, useEffect } from "react";
import Graph from "../Components/Graph"
// import React from 'react';
// import axios from "axios"
import Table from "../Components/Table";
// import Results from "../Components/Results";
import SearchForm from "../Components/searchform";
import Jumbotron from "../Components/Jumbotron"
// import Saved from "../Components/Saved"
import apiStocks from '../utils/apiStocks'
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

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
    <div className="container">
    <div className="row">
      <div className="col">
        <Jumbotron />
      </div>
    </div>
    <div className="row">
      <div className="col">
       <SearchForm 
        handleFormSubmit={handleFormSubmit}
        searchStocks={searchStocks}
        />
      </div>
    </div>
    <div className="row justify-content-around">
      <div className="col-6 bg-success">
        <Table />
       </div>
       <div className="col-6">
         <Graph />
       </div>
    </div>
   <div/>
</div >
  );
};



export default Home;