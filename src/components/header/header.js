import React from "react";
import "./header.css";

const Header = ()=>{
    return(
        <div className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-logo navbar-brand" href="#">StarShop</a>
            <input className="search-input form-control form-control-lg" type="text" placeholder="Search"></input>
            <div className="category-btn d-flex">
                <button className="btn btn-outline-primary">Starship</button>
                <button className="btn btn-outline-primary">Vehicle</button>
            </div>

        </div>
    )
}

export default Header;