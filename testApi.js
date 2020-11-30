var access_key = 'ebba84a884a1cc6930e977d244cd9027';
// symbols should draw from csv files on matching equity
var queryURL = 'http://api.marketstack.com/v1/intraday?access_key=' + access_key + '&symbols=?'
$.ajax({
    url : queryURL,
    method: "GET"
}).then(function (response) {
    // create new row
    // .data.[open,high,low,last,close,volume,date,symbol,exchange]
});