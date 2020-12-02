import React, { Component } from "react";
// import React from 'react';
// import axios from "axios"
// import Table from "../Components/Table";
import TableBody from "../TableBody";
// import List from "../Components/List";
import "bootstrap/dist/css/bootstrap.min.css";

class Table extends Component {

    render() {
        return (
            <div className="Home">
                <div className="Container my-5">
                    <table className="table my-5">
                        <thead>
                            <tr>
                                <th >Symbol</th>
                                <th >Close</th>
                                <th >Date</th>
                                <th >Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <TableBody ticker="AAPL" />
                            <TableBody ticker="GOOG" />
                            <TableBody ticker="MSFT" />
                            <TableBody ticker="TSLA" />
                        </tbody>
                    </table>
                </div>
            </div >
        );
    }
}


    export default Table;