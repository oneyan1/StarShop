import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = ()=>{
    return(
        <div className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/">
                <div className="navbar-logo navbar-brand" href="#">StarShop</div>
            </Link>
            <input className="search-input form-control form-control-lg" type="text" placeholder="Search"></input>
            <Link to="/cart">
                <button className="btn-cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></button>
            </Link>
        </div>
    )
}

export default Header;