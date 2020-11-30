// import React from "react";
// // import "./style.css";

// function Results(props) {
//     const stocks = props.data

// return (
//     <>
//         {stocks !== undefined ? (
//             stocks.map((symbol, i) => {

// return (
//     <div key={symbol.id + i} className="container">
//         <div className="card result">
//             <div className="row mb-4 mt-3">
//                 <div className="col-lg-4 bookImage">
//                 </div>
//                 <div className="col-lg-8 mainContent">
//                     <h2>{symbol.companyName}</h2>
//                         <p>
//                             {symbol.exchange !== undefined
//                             ? symbol.exchange.join(" & ")
//                             : symbol.exchange}
//                         </p>
//                             <p className="mr-4">{symbol.description}</p>
//                             <a
//                                 className="btn btn-primary"
//                                 target="_blank"
//                                 rel="noreferrer"
//                                 href={symbol.website}
//                             >
//                                 View
//                             </a>
//                                 <button
//                                     className="ml-3 btn btn-primary"
//                                     onClick={() => {
//                                         props.saveStock(symbol);
//                                     }}
//                                 >
//                                     Save Stock
//                                 </button>
//                 </div>
//             </div>
//         </div>
//     </div>
// );
// })
//     ):(
//         <div className="container mb-5">
//             <div className="card result">
//                 <h2 className="p-5">
//                     No Matching results.
//                 </h2>
//             </div>
//         </div>
//     )}
//         </>
// );
// };

// export default Results;