import {store} from '../store.js';


function listCollectionReducer(collection=[], action) {
    
    if(action.type === "FETCH_COLLECTION"){
        return collection;
    }

    if(action.type === "DELETE_COLLECTION"){
        
    return [];
    }

    if(action.type === "COLLECTION_DELETED")
    {
        return true;
    }
    
    return collection;
}

export default listCollectionReducer;