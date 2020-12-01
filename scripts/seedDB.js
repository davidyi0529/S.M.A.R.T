const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/Stocks"
);

const stockSeed = [
    {
        symbol: "AAPL ",
        name: "Apple Inc.",
        exchange: "NASDAQ",
        date: new Date(Date.now())
    },
    {
        symbol: "GOOG",
        name: "Alphabet Inc",
        exchange: "NASDAQ/NGS (GLOBAL SELECT MARKET)",
        date: new Date(Date.now())
    }
];

db.Stock
    .remove({})
    .then(() => db.Stock.collection.insertMany(stockSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });