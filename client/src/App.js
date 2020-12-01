import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import WatchList from "./pages/watchList";
import MyInvestments from "./pages/myInvestments";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          <Route exact path="/myInvestments">
            <MyInvestments />
          </Route>
          <Route exact path="/watchList">
            <WatchList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;