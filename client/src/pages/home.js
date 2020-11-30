import React from 'react';
import Graph from "../Components/Graph"
// import React from 'react';
// import axios from "axios"
// import Table from "../Components/Table";
import TableBody from "../Components/TableBody";
// import List from "../Components/List";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <div className="Home">
      <div className="Container">
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
      <Graph /> 
    </div >
    /* <ul>
      {data.Open.map((item, index) =>
        <li key={index}>{JSON.stringify(item)}</li>
      )};
    </ul> */
    /* <Table />
    <List>
      {data.Open.map(data => (
        <TableBody key={data._id} item={data}/>  
      ))}
    </List> */
  );
}


export default Home;