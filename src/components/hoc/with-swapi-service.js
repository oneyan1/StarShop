import React from "react";
import { SwapiServiceConsumer} from "../swapi-sevice-contex";

const WithSwapiService = () => (Wrapper) =>{
    return (props) =>{
        return(
            <SwapiServiceConsumer>
                {
                    (swapiService)=> {
                        return (
                            <Wrapper {...props} swapiService = {swapiService}/>
                        )
                    }
                }
            </SwapiServiceConsumer>
        )
    }
};

export default WithSwapiService;