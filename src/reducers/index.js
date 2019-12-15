
const initialState = {
    starships: [],
    loading: true,
    error: null
};

const reducer = (state = initialState, action) =>{

    switch(action.type){
        case "TRANSPORTS_REQUESTED":
            return{
                starships: [],
                loading: true,
                error: null
            };
        case "TRANSPORTS_LOADED":
            return {
                starships: action.payload,
                loading: false,
                error: null
            };
        case "TRANSPORT_ERROR":
            return{
                starships: [],
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default  reducer;