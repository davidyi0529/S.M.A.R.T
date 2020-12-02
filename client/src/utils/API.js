import axios from "axios";

const API = {
  // Gets all posts
  getStocks: function() {
    return axios.get("/api/stocks");
  },
  // Gets the post with the given id
  getStock: function(id) {
    return axios.get("/api/stocks/" + id);
  },
  // Deletes the post with the given id
  deleteStock: function(id) {
    return axios.delete("/api/stocks/" + id);
  },
  // Saves a post to the database
  saveStock: function(stockData) {
    return axios.post("/api/stocks", stockData);
  }
};

export default API;
