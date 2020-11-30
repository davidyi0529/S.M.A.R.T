import React, { useEffect, useState } from "react";
import apiStocks from "../utils/apiStocks";
import Results from "../Components/Saved";

function WatchList() {
    const [stocks, setStocks] = useState([]);

    const deleteStocks = (id) => {
        apiStocks.deleteStock(id)
            .then((res) => {
                apiStocks.getDbStock()
                    .then(response => {
                        setStocks(response.data)
                    })
            })
    };

    useEffect(() => {
        apiStocks.getDbStock()
            .then(res => setStocks(res.data))
    }, []);

    useEffect(() => {
    }, [stocks]);

    return (
        <div className="mb-5">
            <React.Fragment>
                <Results
                    stocks={stocks}
                    deleteStocks={deleteStocks} />
            </React.Fragment>
        </div>
    );
};

export default WatchList;