const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stocksSchema = new Schema({
  symbol: String,
 
});

const Stock = mongoose.model("Stock", stocksSchema);

module.exports = Stock;