import {store} from '../store.js';


function requestResponseReducer(urlData= {}, action) {
    
    if(action.type === "URL_REQUEST_SEND"){
        return {};
    }
    
    if(action.type === "URL_RESPONSE_RECEIVED"){
        return urlData;
    }
       
    return urlData;
}

export default requestResponseReducer;