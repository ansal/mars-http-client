
function editCollectionReducer(collection={}, action) {
    
    if(action.type === "EDIT_COLLECTION"){
        return action.formData;
    }
   
    return collection;
}

export default editCollectionReducer;