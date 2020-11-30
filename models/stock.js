const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stocksSchema = new Schema({
  symbol: { type: String, required: true },
  exchange: { type: String, required: true },
  date: { type: Date, default: Date.now },
  open: String,
  low: String,
  close: String,
  volume: String,
  adj_high: String,
  adj_low: String,
  adj_close: String,
  adj_open: String,
  adj_volume: String
});

const Stocks = mongoose.model("Stocks", stockSchema);

module.exports = Stocks;
