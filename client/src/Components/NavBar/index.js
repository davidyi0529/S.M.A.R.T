import React from "react";
import "./style.css";
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <h1 className="p-2 mb-2 ml-3">
                    <a className="navbar-brand pl-3 px-1" href="/">Stock Watcher
                    </a>
                </h1>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-md-auto ">
                    <li className="nav-item">
                        <Link to="/home">Current Stocks</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/watchlist">My Watch List</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/myinvestments">My Stocks</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="watchlist">Stock Watchlist</Link>
                    </li>
                    <li>Log Out</li>
                </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navbar; 