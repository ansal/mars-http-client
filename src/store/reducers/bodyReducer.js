import {store} from '../store.js';

function bodyReducer(body = [], action) {
    
    if(action.type === "FORM_DATA"){
        return action.requestData;
    }

    if(action.type === "FORM_DATA_REMOVE") {
        return action.requestData;
    }
       
    return body;
}

export default bodyReducer;