
function createCollectionReducer(newCollection=[], action) {
    
    if(action.type === "CLEAR_COLLECTION_CREATED"){
        return [];
    }
    
    if(action.type === "CREATE_COLLECTION"){
        
        return action.formData;
    }
    
    if(action.type === "COLLECTION_CREATED"){
        return action.newCollection;
    }
    
    return newCollection;
}

export default createCollectionReducer;