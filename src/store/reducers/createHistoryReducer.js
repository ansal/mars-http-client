import {createItem} from "../api/localStorage.js"

function createHistoryReducer(history=[], action) {
    if(action.type === "CREATE_HISTORY"){
        //ToDo;
        createItem("fetchHistory", history);
        return history;
    }

    if(action.type === "HISTORY_CREATED"){
        return history;
    }

    return history;
}

export default createHistoryReducer;