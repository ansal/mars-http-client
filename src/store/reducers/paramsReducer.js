function paramsReducer(params = [], action) {
    
    if(action.type === "QUERY_PARAMS") {
        console.log(action.requestData);
        return action;
    }

    if(action.type === "QUERY_REMOVE") {
        return null;
    }
       
    return params;
}

export default paramsReducer;