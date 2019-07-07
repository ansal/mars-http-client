import {store} from '../store.js';


function createCollectionReducer(newCollection=[], action) {
    
    if(action.type === "CLEAR_COLLECTION_CREATED"){
        return [];
    }
    
    if(action.type === "CREATE_COLLECTION"){
        //Todo;
        return newCollection;
    }
    
    if(action.type === "COLLECTION_CREATED"){
        return action.newCollection;
    }
    
    return newCollection;
}

export default createCollectionReducer;