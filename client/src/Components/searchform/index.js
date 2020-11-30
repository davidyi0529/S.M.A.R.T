import React from "react";
import "./style.css";

export function SearchForm(props) {
  return (
    <div className="container bg-warning">
      <div className="card bg-warning">
         <input type="text" className="bar form-control text-center mt-3" placeholder="Input Stock Symbol?" onChange={props.handleFormSubmit} />
      </div>
      <button className="btn btn-primary my-4" id="searchBtn" onClick={props.searchStocks}>Search Stocks</button>
    </div>
  );
};

export default SearchForm;