import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { stock } from "../../utils/stock";

function Card(props) {
    return (
             <div className="col-md-3 mx-5 align-self-center">
                <div className="card text-dark bg-warning mb-3" styles="max-width: 18rem;">
                 <div className="card-header">{props.symbol}<button type="button" className="btn btn-outline-danger ml-5">Remove</button></div>
                  <div className="card-body">
                   <h5 className="card-title"></h5>
                   <p className="card-text"></p>
                   <button type="button" className="btn btn-dark">Add Watchlist</button>
                  </div>
                </div>
             </div>
    )
}

export default Card;