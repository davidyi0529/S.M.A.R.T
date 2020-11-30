import React from 'react';
import Graph from "../Components/Graph"
// import React from 'react';
// import axios from "axios"
// import Table from "../Components/Table";
import TableBody from "../Components/TableBody";
// import List from "../Components/List";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from '../Components/Jumbotron';
import "./style.css";

// const Home = () => {
//   const [data, setData] = useState({
//     Open: []
//   })

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios(
//         "http://api.marketstack.com/v1/tickers?access_key=7e8a2f03ce451eead64e19f08a165245&limit=2",
//       );
//       console.log(result.data.data)

//       setData({ Open: result.data.data });
//     };
//     fetchData();
//   }, []);
function Home() {
  return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Jumbotron />
          </div>
        </div>
        <div className="row bg-white">
          <div className="col">
             <table className="table mt-5">
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
           <div className="col">
             <Graph />
           </div>
        </div>
       <div/>
    </div >
   
  );
}


export default Home;