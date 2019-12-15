import React from "react";
import './shoping-cart.css'


const ShopingCart = ()=>{
    return(
        <div className="shopping-cart jumbotron">
            <h2>Your Order</h2>
            <table className="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td>1</td>
                    <td>Site Reliability Engine</td>
                    <td>2</td>
                    <td>40</td>
                    <td>
                        <button className="btn btn-outline-danger">
                            <i className="fa fa-trash-o"/>
                        </button>
                        <button className="btn btn-outline-success">
                            <i className="fa fa-plus-circle"/>
                        </button>
                        <button className="btn btn-outline-warning">
                            <i className="fa fa-minus-circle"/>
                        </button>
                    </td>
                </tr>

                </tbody>
            </table>
            <div className="total-price">
                <span>TOTAL:</span>
                <span>200000 CRED</span>
            </div>
        </div>
    )
}

export default ShopingCart;