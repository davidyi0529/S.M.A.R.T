const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const investedStockSchema = new Schema({
  symbol: { type: String, required: false },
  companyname: { type: String, required: false },
  exchange: { type: String, required: false },
  date: { type: Date, default: Date.now },
  label: { type: Date, default: Date.now },
  close: { type: String, required: false }
});

const investedStock = mongoose.model("investedStock", investedStockSchema);
module.exports = investedStock;