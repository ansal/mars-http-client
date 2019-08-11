
function importCollectionsReducer(collections=[], action) {
    if(action.type === "IMPORT_COLLECTIONS"){
        //ToDo;
        return collections;
    }

    if(action.type === "DELETE_IMPORTED_COLLECTIONS"){
        return collections;
    }

    return collections;
}

export default importCollectionsReducer;