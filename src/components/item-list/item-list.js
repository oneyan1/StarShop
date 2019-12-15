import React, {Component} from "react";

import { WithSwapiService } from "../hoc";
import { connect } from 'react-redux';
import {transportLoaded, transportRequested, transportError} from '../../actions'
import {compose} from "../../utils";

import Spiner from "../spiner";
import Item from "../item";

import "./item-list.css"
import ErrorIndicator from "../error-indicator";

class ItemList extends Component{

    componentDidMount() {
        const { swapiService, transportLoaded, transportRequested, transportError } = this.props;
        transportRequested();
        swapiService.getAllStarships()
            .then((starship)=>{ transportLoaded(starship);})
            .catch((err) =>{ transportError(err)});
    };

    render(){
        const { starships, loading, error } = this.props;

        if(loading){
            return <Spiner/>;
        }

        if(error){
            return <ErrorIndicator/>
        }

        return(
            <div className="row">
                {
                    starships.map((starship)=>{
                        return(
                            <div className="col-4" key = {starship.id}>
                                <Item starship ={starship}/>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = ({starships, loading, error}) =>{
    return{
        starships,
        loading,
        error
    }
};

const mapDispatchToProps = {
    transportLoaded,
    transportRequested,
    transportError
};


export default compose(
    WithSwapiService(),
    connect(mapStateToProps, mapDispatchToProps))(ItemList)