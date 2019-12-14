import React from "react";
import './app.css';
import Header from "../header";
import Spiner from "../spiner";
import ErrorIndicator from "../error-indicator";
import { Route, Switch } from 'react-router-dom';
import {HomePage, CartPage} from "../pages";



const App = ()=>{
    return(
            <div className="container">
                <Header></Header>
                <Switch>
                    <Route path="/"
                           component = {HomePage}
                           exact/>

                    <Route path="/cart"
                           component = {CartPage}
                            />
                </Switch>
            </div>
    )
};

export default App;