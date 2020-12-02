import { iex } from "./iex.js";

export const stock = {

    latestPrice: (ticker, callback) => {
        fetch(stock.latestPriceURL(ticker))
            .then((response) => response.json())
            .then((data) => callback(stock.formatPriceData(data)))
            },

    latestPriceURL: (ticker) => {
        return `${iex.base_url}/stock/${ticker}/intraday-prices?chartLast=1&token=${iex.api_token}`
    },

    formatPriceData: (data) => {
        const stockData = data[data.length - 1]
                const formattedData = {}
                formattedData.close = stockData.close.toFixed(2)
                formattedData.change = (stockData.close - stockData.open).toFixed(2)
                formattedData.volume = stockData.volume
                return formattedData
    }

}