
const transportLoaded = (newTransport) => {
    return {
        type:'TRANSPORTS_LOADED',
        payload : newTransport
    };
};

export {
    transportLoaded
};