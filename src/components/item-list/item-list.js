import React, {Component} from "react";
import "./item-list.css"
import Item from "../item";
import { connect } from 'react-redux';

class ItemList extends Component{
    render(){
        const { starships } = this.props;
        return(
            <ul>
                {
                    starships.map((starship)=>{
                        return(
                            <li key = {starship.id}>
                                <Item starship ={starship}/>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = ({starships}) =>{
    return{
        starships
    }
};

export default connect(mapStateToProps)(ItemList);