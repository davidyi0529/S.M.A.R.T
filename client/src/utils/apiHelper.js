import axios from "axios"
function apiHelper(){
axios.get(
    `${iex.base_url}/stock/` + symbol + `/chart/5d?token=${iex.api_token}`
  ).then((results) => {
    console.log(results.data);
    return results.data;
  })
}
export default apiHelper;