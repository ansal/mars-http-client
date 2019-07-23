import {createItem, removeOneItem, getAllItems} from "../api/localStorage.js";

function createHistoryReducer(history=[], action) {
    if(action.type === "REQUEST_&_HISTORY"){
        //ToDo;
        createItem("fetchHistory", action.requestData);
        return action.requestData;
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
        // return newCollection;
        // return action.newCollection;
        return action;
    }

    return history;
}

export default createHistoryReducer;