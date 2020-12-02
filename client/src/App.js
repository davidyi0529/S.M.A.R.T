import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import WatchList from "./pages/watchList";
import MyInvestments from "./pages/myInvestments";
// import axios from "axios"
// import Card from "./Components/Card";
// import List from "./Components/List";
import Navbar from "./Components/NavBar"
import Footer from "./Components/Footer"


// after successful log in
function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/myInvestments" component={MyInvestments} />
            <Route exact path="/WatchList" component={WatchList} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;