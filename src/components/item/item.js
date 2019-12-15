import React, {Fragment} from "react";
import './item.css'

const Item = ({starship, onAddedToCart})=>{
    const {id ,name, model, costInCredits } = starship;
    let price = costInCredits;
    if(price > 1000000) price = price/1000000 + "M CRED"
    else if(price === "unknown") price = "not available";
    else price = costInCredits + " CRED";
    return (
        <Fragment>
                <div className="jumbotron item-wrap">
                    <div className="item-img">
                        <img src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} alt=""/>
                    </div>
                    <div className="item-title">
                        <h3 className="item-name">{name}</h3>
                        <div className="item-model">{model}</div>
                        <div className="item-price text-danger">{price}</div>
                    </div>
                    <div className="btn-block">
                        <button className="btn btn-outline-success">Info</button>
                        <button className="btn btn-outline-success"
                                onClick={onAddedToCart}>
                            Buy</button>
                    </div>

                </div>
        </Fragment>
    )
};

export default Item;