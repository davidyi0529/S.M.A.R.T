import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Card() {
    return (
             <div className="col-md-3 mx-5 align-self-center">
                <div className="card text-dark bg-warning mb-3" styles="max-width: 18rem;">
                 <div className="card-header">name of stock goes here<button type="button" className="btn btn-outline-danger ml-5">Remove</button></div>
                  <div className="card-body">
                   <h5 className="card-title">Stock attribute goes here</h5>
                   <p className="card-text">this room will be for the stock performances</p>
                   <button type="button" className="btn btn-dark">Add Watchlist</button>
                  </div>
                </div>
             </div>
    )
}

export default Card;