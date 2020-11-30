// import React from "react";
// // import "./style.css";

// function Saved({ stocks, deleteStocks }) {
//   return (
//     stocks.map(symbol => {
//       return (
//         <div key={symbol.id} className="container">
//           <div className="card bg-warning">
//             <div className="row mb-4 mt-3">
//               <div className="col-lg-4 bookImage">
//               </div>
//               <div className="col-lg-8 savedContent">
//                 <h2>{symbol.companyName}</h2>
//                 <p>{symbol.exchange}</p>
//                 <p className="mr-4">{symbol.description}</p>
//                 <a className="viewBtn btn btn-primary" target="_blank" rel="noreferrer" href={symbol.website}>View</a>
//                 <button onClick={() => deleteStocks(symbol.id)} className=" deleteBtn btn ml-3">Remove</button> 
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//     })
//   );
// };

// export default Saved;