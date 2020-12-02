import React, { Component } from "react";
import Graph from "../Components/Graph";
import DeleteBtn from "../Components/DeleteBtn";
import Jumbotron from "../Components/Jumbotron"
import API from "../utils/API";
import Table from "../Components/Table";
import { Link } from "react-router-dom";
import { List, ListItem } from "../Components/List";
import { Input, FormBtn } from "../Components/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

class Home extends Component {
  state = {
    stocks: [],
    symbol: ""
  };

  componentDidMount() {
    this.loadStocks();
  }

  loadStocks = () => {
    API.getStocks()
      .then(res =>
        this.setState({ stocks: res.data, symbol: "" })
      )
      .catch(err => console.log(err));
  };

  deleteStock = id => {
    API.deleteStock(id)
      .then(res => this.loadStocks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.symbol) {
      API.saveStock({
        symbol: this.state.symbol,

      })
        .then(res => this.loadStocks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Jumbotron />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <form>
              <Input
                value={this.state.symbol}
                onChange={this.handleInputChange}
                name="symbol"
                placeholder="symbol (required)"
              />
              <FormBtn
                disabled={!(this.state.symbol)}
                onClick={this.handleFormSubmit}
              >
                Submit Stock
              </FormBtn>
            </form>
          </div>
        </div>
          <div className="row">
        {this.state.stocks.length ? (
          <List>
            {this.state.stocks.map(stock => (
              <ListItem key={stock._id}>
                <Link to={"/stocks/" + stock._id}>
                  <strong>
                    {stock.symbol}
                  </strong>
                </Link>
                <DeleteBtn onClick={() => this.deleteStock(stock._id)} />
              </ListItem>
            ))}
          </List>
        ) : (
            <h3>No Results to Display</h3>
          )}
          </div>
      
        <div className="row justify-content-around">
          <div className="col-6 bg-success">
            <Table />
          </div>
          <div className="col-6">
            <Graph />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;