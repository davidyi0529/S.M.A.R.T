const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const stocksSchema = new Schema({
  symbol: { type: String, required: true },
  companyName: String,
  exchange: { type: String, required: true },
  date: { type: Date, default: Date.now },
  label: Date,
  close: String
});
const Stocks = mongoose.model("Stocks", stocksSchema);
module.exports = Stocks;