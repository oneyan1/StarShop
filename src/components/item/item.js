import React, {Fragment, ReactFragment} from "react";
import './item.css'

const Item = ({starship})=>{
    const {name, model } = starship;
    return (
        <Fragment>
            <span>{name}</span>
            <span>{model}</span>
        </Fragment>
    )
};

export default Item;