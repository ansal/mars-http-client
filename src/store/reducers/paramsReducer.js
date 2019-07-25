import {store} from '../store.js';

function paramsReducer(params = [], action) {
    
    if(action.type === "QUERY_PARAMS") {
        // var params = Array.from(params);
        // params.push(action.requestData);
        console.log(action.requestData);
        return action;
    }

    if(action.type === "QUERY_REMOVE") {
        // console.log(params);
        // console.log(action.requestData);
        return null;
    }
       
    return params;
}

export default paramsReducer;