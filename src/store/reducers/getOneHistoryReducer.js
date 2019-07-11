function getOneHistoryReducer(history={}, action) {
    
    if(action.type === "GET_ONE_HISTORY"){
        return history;
    }
    
    if(action.type === "HISTORY_ITEM_CREATED"){
        
        return history;
    }  
     
    return history;
}

export default getOneHistoryReducer;