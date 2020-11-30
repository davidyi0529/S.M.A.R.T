import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import "./style.css";
import { stock } from "../../utils/stock.js";

class TableBody extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: {}
        }
    }

    applyData(data) {
        this.setState({
            data: data
        })
        console.log(data);
    }

    componentDidMount() {
        stock.latestPrice(this.props.ticker, this.applyData.bind(this))
    }

    render() {
        return (
            <tr>
                <td>{this.props.ticker}</td>
                <td>{this.state.data.price}</td>
                <td>{this.state.data.date}</td>
                <td>{this.state.data.time}</td>

            </tr >
        )
    }
}

export default TableBody;