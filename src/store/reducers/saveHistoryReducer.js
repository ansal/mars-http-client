function saveHistoryReducer(url=[], action) {
    if(action.type === "CLEAR_URL_HISTORY"){
        return [];
    }

    if(action.type === "FETCH_URL_HISTORY"){
        //ToDo;
    }

    if(action.type === "URL_HISTORY_SAVED"){
        return action.url;
    }
    return url;
}

export default saveHistoryReducer;