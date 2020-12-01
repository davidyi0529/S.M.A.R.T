import React from "react";
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
             <div className="col-md-3 mx-5 align-self-center">
                <div className="card text-dark bg-warning mb-3" styles="max-width: 18rem;">
                 <div className="card-header">name of stock goes here<button type="button" class="btn btn-outline-danger ml-5">Remove</button></div>
                  <div className="card-body">
                   <h5 className="card-title">Stock attribute goes here</h5>
                   <p className="card-text">this room will be for the stock performances</p>
                   <button type="button" class="btn btn-dark">Add Watchlist</button>
                  </div>
                </div>
             </div>
           </div>
           <div className="row my-5">
              <div className="col-md-3 offset-md-3">
              <div className="card text-dark border-warning mb-3" styles="max-width: 18rem;">
                 <div className="card-header">name of stock goes here<button type="button" class="btn btn-outline-danger ml-5">Remove</button>
                 </div>
                  <div className="card-body">
                   <h5 className="card-title">Stock attribute goes here</h5>
                   <p className="card-text">this room will be for the stock performances</p>
                   <button type="button" class="btn btn-dark">Add Watchlist</button>
                  </div>
                </div>
              </div>
           </div>
        </div>

        


    );

}

export default MyInvestments;