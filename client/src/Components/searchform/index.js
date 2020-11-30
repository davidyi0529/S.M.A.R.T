import React from "react";
import "./style.css";

function searchform(props) {
    return (
        <form className="search">
            <div className="form-search">
                <label htmlFor="language">Search Stock:</label>
                <input
                    value={props.search}
                />
            </div>
        </form>
    );
}

export default searchform;