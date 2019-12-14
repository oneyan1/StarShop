
const initialState = {
    starships: []
}

const reducer = (state = initialState, action) =>{

    switch(action.type){
        case "TRANSPORTS_LOADED":
            return {
                starships: action.payload
            };
        default:
            return state;
    }
};

export default  reducer;