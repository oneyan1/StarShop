
const initialState = {
    starships: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 0
};

const updateCartItems = (cartItems, item, idx)=>{

    if(item.count === 0){
       return [
           ...cartItems.slice(0, idx),
           ...cartItems.slice(idx+1)
       ];
    }

    if(idx === -1){
        return [
            ...cartItems,
            item
        ];
    }

    return[
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx+1)
    ];
};

const updateCartItem = (transport, item, quantity)=>{

    if(item){
        return {
            ...item,
            count: item.count + quantity,
            total: +item.total + quantity * +transport.costInCredits
        };
    }else{
        return {
            id: transport.id,
            name: transport.name,
            count: 1,
            total: transport.costInCredits
        };
    }
};

const updateOrder = (state, transportId, quantity, bool) =>{
    const {starships, cartItems} = state;
    const transport = starships.find(({id})=> id === transportId);
    const itemIndex = cartItems.findIndex(({id})=> id === transportId);
    const item = cartItems[itemIndex];
    const newItem = updateCartItem(transport, item, quantity);
    let totalPrice = 0;
    if(bool){
        totalPrice = state.orderTotal + +transport.costInCredits
    }
    else{
        totalPrice = state.orderTotal - +transport.costInCredits
    }
    return{
        ...state,
        cartItems: updateCartItems(cartItems, newItem, itemIndex),
        orderTotal: totalPrice
    };
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
            return updateOrder(state, action.payload, 1, true);
        case "TRANSPORT_REMOVED_FROM_CART":
            return updateOrder(state, action.payload, -1, false);
        case "ALL_TRANSPORTS_REMOVED_FROM_CART":
            const item = state.cartItems.find(({id})=> id === action.payload);
            return updateOrder(state, action.payload, -item.count);

        default:
            return state;
    }
};

export default  reducer;