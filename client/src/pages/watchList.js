import React, { Component } from "react";
import Card from "../Components/Card"
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";


class WatchList extends Component {
 
   render() {
    return (
             
      <div className="container mw-100 my-5">
      <div className="row">
         <div className="col-4 mx-5 text-white align-self-center bg-secondary">
            <h1>My Watchlist</h1>
             <p>This page keeps track of stocks you are watching.
                You can always remove or add it from the watchlist.
             </p>
         </div>
      </div>
      
      <div className="row my-5">
         <div className="col-md-3 offset-md-3">
 
         </div>
         <Card />
         <Card />
         <Card />
         <Card />
         <Card />
         <Card />
         <Card />
      </div> 
      </div> 
    );
  }
}

export default WatchList;