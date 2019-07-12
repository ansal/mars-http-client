import {store} from '../store.js';

function headersReducer(headers = [], action) {
    
    if(action.type === "HEADERS"){
        return action.requestData;
    }

    if(action.type === "HEADERS_REMOVE") {
        return action.requestData;
    }
       
    return headers;
}

export default headersReducer;