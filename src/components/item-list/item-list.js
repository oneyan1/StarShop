import React, {Component} from "react";

import { WithSwapiService } from "../hoc";
import { connect } from 'react-redux';
import {fetchTransport, transportAddedToCart} from '../../actions'
import {compose} from "../../utils";

import Spiner from "../spiner";
import Item from "../item";

import "./item-list.css"
import ErrorIndicator from "../error-indicator";

const ItemList = ({starships, onAddedToCart})=>{
    return(
        <div className="row">
            {
                starships.map((starship)=>{
                    return(
                        <div className="col-4" key = {starship.id}>
                            <Item starship ={starship}
                                onAddedToCart={()=>onAddedToCart(starship.id)}/>
                        </div>
                    )
                })
            }
        </div>
    )
};

class ItemListContainer extends Component{

    componentDidMount() {
       this.props.fetchTransport();
    };

    render(){
        const { starships, loading, error, onAddedToCart } = this.props;

        if(loading){
            return <Spiner/>;
        }
        if(error){
            return <ErrorIndicator/>
        }
        return <ItemList starships={starships} onAddedToCart={onAddedToCart}/>
    }
}



const mapStateToProps = ({starships, loading, error}) =>{
    return{
        starships,
        loading,
        error
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { swapiService} = ownProps;
    return {
        fetchTransport: fetchTransport(dispatch, swapiService),
        onAddedToCart: (id)=> dispatch(transportAddedToCart(id))
    }
};


export default compose(
    WithSwapiService(),
    connect(mapStateToProps, mapDispatchToProps))(ItemListContainer)