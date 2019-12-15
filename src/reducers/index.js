import {transportAddedToCart} from "../actions";

const initialState = {
    starships: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 550000
};

const reducer = (state = initialState, action) =>{



    switch(action.type){
        case "FETCH_TRANSPORTS_REQUESTED":
            return{
                ...state,
                starships: [],
                loading: true,
                error: null
            };
        case "FETCH_TRANSPORTS_SUCCESS":
            return {
                ...state,
                starships: action.payload,
                loading: false,
                error: null
            };
        case "FETCH_TRANSPORT_FAILURE":
            return{
                ...state,
                starships: [],
                loading: false,
                error: action.payload
            };
        case "TRANSPORT_ADDED_TO_CART":
            const transportId = action.payload;
            const transport = state.starships.find((starship)=> starship.id===transportId);
            const itemIndex = state.cartItems.findIndex(({id})=> id === transportId);
            const item = state.cartItems[itemIndex];
            let newItem
            if(item){
                newItem = {
                    ...item,
                    count: item.count+1,
                    total: item.total + transport.costInCredits
                };
            }else{
                newItem = {
                    id: transport.id,
                    name: transport.name,
                    count: 1,
                    total: transport.costInCredits
                };
            }

            if(itemIndex <0){
                return{
                    ...state,
                    cartItems: [
                        ...state.cartItems,
                        newItem
                    ]
                };
            }else{
                return{
                    ...state,
                    cartItems: [
                        ...state.cartItems.slice(0,itemIndex),
                        newItem,
                        ...state.cartItems.slice(itemIndex+1)
                    ]
                };
            }

        default:
            return state;
    }
};

export default  reducer;