
const transportLoaded = (newTransport) => {
    return {
        type:'TRANSPORTS_LOADED',
        payload : newTransport
    };
};

const transportRequested = ()=>{
    return {
        type: 'TRANSPORTS_REQUESTED'
    }
};

const transportError = (error) =>{
    return {
        type: 'TRANSPORT_ERROR',
        payload:error
    }
};

export {
    transportLoaded,
    transportRequested,
    transportError
};