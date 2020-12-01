import React from "react";
// import "./style.css";

function Results(props) {
    const stocks = props.data

return (
    <>
        {stocks !== undefined ? (
            stocks.map((stock, i) => {

return (
    <div key={stock.ticker + i} className="container">
        <div className="card result">
            <div className="row mb-4 mt-3">
                <div className="col-lg-4 bookImage">
                    {stock.logo ? (
                        <img
                            className="img-fluid mx-5"
                            src={stock.logo}
                            alt={stock.name}
                        />
                    ):(
                        <img
                            src=""
                            alt="title"
                            className="img-fluid logo"
                        />
                    )}
                </div>
                <div className="col-lg-8 mainContent">
                    <h2>{stock.name}</h2>
                        <p>
                            {stock.exchange !== undefined
                            ? stock.exchange.join(" & ")
                            : stock.exchange}
                        </p>
                            <p className="mr-4">{stock.currency}</p>
                            <a
                                className="btn btn-primary"
                                target="_blank"
                                rel="noreferrer"
                                href={stock.weburl}
                            >
                                View
                            </a>
                                <button
                                    className="ml-3 btn btn-primary"
                                    onClick={() => {
                                        props.saveStock(stock);
                                    }}
                                >
                                    Save Stock
                                </button>
                </div>
            </div>
        </div>
    </div>
);
})
    ):(
        <div className="container mb-5">
            <div className="card result">
                <h2 className="p-5">
                    No Matching results.
                </h2>
            </div>
        </div>
    )}
        </>
);
};

export default Results;