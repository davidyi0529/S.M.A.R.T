import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import WatchList from "./pages/watchList";
import MyInvestments from "./pages/myInvestments";
// import axios from "axios"
// import Card from "./Components/Card";
// import List from "./Components/List";
import Navbar from "./Components/NavBar"
import Jumbotron from './Components/Jumbotron';
import Footer from "./Components/Footer"


// after successful log in
function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Switch>

            <Route exact path={["/", "/home"]}>
              <Home />
            </Route>

            <Route exact path="/myInvestments">
              <MyInvestments />
            </Route>

            <Route exact path="watchList">
              <WatchList />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;