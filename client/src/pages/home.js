import React from "react";
import Graph from "../Components/Graph";
import Jumbotron from "../Components/Jumbotron"
import Table from "../Components/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function Home () {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Jumbotron />
          </div>
        </div>
        <div className="row my-5 justify-content-around">
          <div className="col-6 bg-warning">
            <Table />
          </div>
          <div className="col-6">
            <Graph />
          </div>
        </div>
      </div>
    );
}

export default Home;