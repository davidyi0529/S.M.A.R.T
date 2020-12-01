import React from "react";
import Card from "../Components/Card"
import "bootstrap/dist/css/bootstrap.min.css";


function MyInvestments() {


    return (
             
        <div className="container mw-100 my-5">
           <div className="row">
              <div className="col-4 mx-5 text-white align-self-center bg-secondary">
                  <titel><h2>My Investments</h2></titel>
                  <p>This page keeps track of stocks you have invested.
                     You can always remove or add it to the watchlist to keep track and away from your investments
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

export default MyInvestments;