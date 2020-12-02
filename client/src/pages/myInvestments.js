import React, { Component } from "react";
import Card from "../Components/Card"
import DeleteBtn from "../Components/DeleteBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { List, ListItem } from "../Components/List";
import { Input, FormBtn } from "../Components/Form";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";


class MyInvestments extends Component {
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
             
      <div className="container mw-100 my-5">
      <div className="row">
         <div className="col-4 mx-5 text-white align-self-center bg-secondary">
            <h1>My Investments</h1>
             <p>This page keeps track of stocks you have invested.
                You can always remove or add it to the watchlist to keep track and away from your investments
             </p>
         </div>
      </div>
      <div className="row justify-content-center">
          <div className="col-4 bg-dark">
            <form className="mt-4">
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
       <div className="row row justify-content-center">
         <div className="col-md-3 bg-warning">
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
          </div>
          <div className="row my-5">
         <div className="col-md-3 offset-md-3">
 
         </div>
         <Card />
         <Card />
         <Card />
         <Card />
         <Card />
         <Card />
         <Card />
      </div> 
       </div> 

    );
  }
}

export default MyInvestments;