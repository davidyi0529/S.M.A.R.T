import React from "react";
import "./style.css";

function Jumbotron({ children }) {
    return(
        <div className = "jumbotron jumbotron-fluid">
            <div class = "container">
                {{children}}
            </div>
        </div>
    )
}

export default Jumbotron; 