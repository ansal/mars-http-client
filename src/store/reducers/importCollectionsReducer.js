import {store} from '../store.js';
import {importCollection} from '../api/index.js';

function importCollectionsReducer(collections=[], action) {
    if(action.type === "IMPORT_COLLECTION"){
        importCollection(store, action);
        return collections;
    }

    if(action.type === "COLLECTION_IMPORTED"){
      return collections
    }

    if(action.type === "DELETE_IMPORTED_COLLECTIONS"){
        return collections;
    }

    return collections;
}

export default importCollectionsReducer;