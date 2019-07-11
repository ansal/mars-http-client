

function removeHistoryReducer(history={}, action) {
    
    if(action.type === "REMOVE_COLLECTION"){
        return {};
    }
    
      
    return history;
}

export default removeHistoryReducer;