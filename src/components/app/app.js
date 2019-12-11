import React from "react";
import './app.css';
import Header from "../header";
import Spiner from "../spiner";
import ErrorIndicator from "../error-indicator";


const App = ()=>{
    return(
            <div className="container">
                <Header></Header>
                <Spiner></Spiner>
                <ErrorIndicator/>
            </div>
    )
};

export default App;