import {createItem, removeOneItem, getAllItems} from "../api/localStorage.js";

function createHistoryReducer(history=[], action) {
    if(action.type === "HISTORY"){
        delete action["type"];
        createItem("fetchHistory", action);
        return action;
    }

    if(action.type === "CREATE_HISTORY"){
        createItem("fetchHistory", action);
        return action.formData;
    }

    if(action.type === "HISTORY_CREATED"){
        return history;
    }

    if(action.type === "DELETE_HISTORY"){
        console.log(action);
        removeOneItem(action.name, action.id);
        return action;
    }

    return history;
}

export default createHistoryReducer;