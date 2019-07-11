import {store} from '../store.js';


function removeCollectionReducer(collection={}, action) {
    
    if(action.type === "REMOVE_COLLECTION"){
        return {};
    }
    
      
    return collection;
}

export default removeCollectionReducer;