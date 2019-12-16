import React from "react";
import "./item-details.css"

const ItemDetails = ({manufacturer, length, passengers})=>{
    return (
        <div className="jumbotron item-details">
            <span>Manufacturer: {manufacturer}</span>
            <span>Length: {length}</span>
            <span>Passengers: {passengers}</span>
        </div>
    )
};

export default ItemDetails;