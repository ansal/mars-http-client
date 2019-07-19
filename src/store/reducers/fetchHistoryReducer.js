
function fetchHistoryReducer(history=[], action) {
    if(action.type === "FETCH_HISTORY"){
        //ToDo;
        return history;
    }

    if(action.type === "HISTORY_FETCHED"){
        return history;
    }

    return history;
}

export default fetchHistoryReducer;