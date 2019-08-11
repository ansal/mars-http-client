import {fetchUrlData} from '../api.js';

function headersReducer(headers = [], action) {
    
    if(action.type === "HEADERS"){
        fetchUrlData();
        return action.requestData;
    }

    if(action.type === "HEADERS_REMOVE") {
        return action.requestData;
    }
       
    return headers;
}

export default headersReducer;