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
                <div className="Container">
                    <table className="table mt-5">
                        <thead>
                            <tr>
                                <th >SYMBOL</th>
                                <th >NAME</th>
                                <th >LAST</th>
                                <th >CHANGE</th>
                                <th >SHARE VOLUME</th>
                            </tr>
                        </thead>
                        <tbody>
                            <TableBody ticker="AAPL" companyName="Apple Inc" />
                            <TableBody ticker="GOOG" companyName="Alphabet Inc" />
                            <TableBody ticker="MSFT" companyName="Microsoft Corporation" />
                            <TableBody ticker="TSLA" companyName="Tesla Inc" />
                            <TableBody ticker="AMZN" companyName="Amazon.com Inc." />
                            <TableBody ticker="MRNA" companyName="Moderna Inc" />
                        </tbody>
                    </table>
                </div>
            </div >
        );
    }
}


    export default Table;