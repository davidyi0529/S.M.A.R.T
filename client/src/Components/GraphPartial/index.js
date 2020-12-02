// function GraphPartial(item){
//     var arr = []
//     for (var i = 0; i<5 ; i++){
//         arr.push({ y: item.open, label: item.date});
//     }
//     return arr;
// }
import { iex } from "../../utils/iex.js";

`${iex.base_url}/stock/AAPL/chart/5d?token=${iex.api_token}`

function GraphPartial(item){
    console.log("in partial");
    var arr = [];
    for (var i = 0; i<5 ; i++){
        arr.push({ y: item.open, label: item.date});
    }
    return (
        { type: "spline", name : item.symbol, showInLegend : true, dataPoints: arr }
    );
}

export default GraphPartial;