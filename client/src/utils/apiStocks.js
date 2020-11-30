import axios from "axios";
import { iex } from "./iex.js";

const API = {

  getStocks: function(symbol) {
    return axios.get(`${iex.base_url}/stock/${symbol}/company?&token=${iex.api_token}`)
  },
  // Gets all books
  getDbStock: function() {
    return axios.get("/api/stocks");
  },
  // Gets the book with the given id
  findStock: function(id) {
    return axios.get("/api/search");
  },
  // Deletes the book with the given id
  deleteStock: function(id) {
    return axios.delete("/api/stocks/" + id);
  },
  // Saves a book to the database
  addStock: function(symbolData) {
    return axios.post("/api/books", symbolData);
  },
//google api itself
  findStocks: function(symbol) {
    return axios.get(`${iex.base_url}/stock/${symbol}/company?&token=${iex.api_token}`)
  }
};

export default API;
