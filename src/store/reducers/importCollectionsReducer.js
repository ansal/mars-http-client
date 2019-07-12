import {store} from '../store.js';
import {fetchPlaylists} from '../api/youtube.js';

function importCollectionsReducer(collections=[], action) {
    if(action.type === "IMPORT_COLLECTIONS"){
        //ToDo;
    }

    if(action.type === "DELETE_IMPORTED_COLLECTIONS"){
        return collections;
    }

    return collections;
}

export default importCollectionsReducer;