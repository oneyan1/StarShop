import React from "react";
import './shoping-cart.css'
import {connect} from "react-redux";


const ShopingCart = ({items, total, onIncrease, onDecrease, onDelete})=>{

    const renderRow = (item, idx)=>{
        const { id, name, count, total } = item;
        return (
            <tr key = {id}>
                <td>{idx+1}</td>
                <td>{name}</td>
                <td>{count}</td>
                <td>{total} CRED</td>
                <td>
                    <button className="btn btn-outline-danger"
                            onClick={()=> onDelete(id)}>
                        <i className="fa fa-trash-o"/>
                    </button>
                    <button className="btn btn-outline-success"
                            onClick={()=>  onIncrease(id)}>
                        <i className="fa fa-plus-circle"/>
                    </button>
                    <button className="btn btn-outline-warning"
                            onClick={()=> onDecrease(id)}>
                        <i className="fa fa-minus-circle"/>
                    </button>
                </td>
            </tr>
        )
    };

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
                {
                 items.map(renderRow)
                }
                </tbody>
            </table>
            <div className="total-price">
                <span>TOTAL:</span>
                <span>{total} CRED</span>
            </div>
        </div>
    )
};

const mapStateToProps = ({cartItems, orderTotal}) =>{
  return {
      items:cartItems,
      total: orderTotal
  }
};

const mapDispatchToProps = ()=>{
  return{
      onIncrease: (id)=>{console.log("Increase "+id)},
      onDecrease: (id)=>{console.log("Decrease "+id)},
      onDelete: (id)=>{console.log("Delete "+id)}
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopingCart);