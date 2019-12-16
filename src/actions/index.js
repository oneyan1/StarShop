
const transportLoaded = (newTransport) => {
    return {
        type:'FETCH_TRANSPORTS_SUCCESS',
        payload : newTransport
    };
};

const transportRequested = ()=>{
    return {
        type: 'FETCH_TRANSPORTS_REQUESTED'
    }
};

const transportError = (error) =>{
    return {
        type: 'FETCH_TRANSPORT_FAILURE',
        payload:error
    }
};

export const transportAddedToCart = (transportId) =>{
  return{
      type:"TRANSPORT_ADDED_TO_CART",
      payload: transportId
  }
};

export const transportRemovedFromCart = (transportId) =>{
    return{
        type:"TRANSPORT_REMOVED_FROM_CART",
        payload: transportId
    }
};

export const allTransportsRemovedFromCart = (transportId) =>{
    return{
        type:"ALL_TRANSPORTS_REMOVED_FROM_CART",
        payload: transportId
    }
};


const fetchTransport = (dispatch, swapiService) => ()=>{
    dispatch(transportRequested());
    swapiService.getAllStarships()
        .then((starship)=>{ dispatch(transportLoaded(starship));})
        .catch((err) =>{ dispatch(transportError(err))});
}

export {
    fetchTransport
};