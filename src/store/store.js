import { createStore } from "redux";
import { combineReducers } from "redux";

import createCollectionReducer from "./reducers/createCollectionReducer.js";
import importCollectionsReducer from "./reducers/importCollectionsReducer.js";
import isUrlLoadingReducer from "./reducers/isUrlLoadingReducer.js";
import requestResponseReducer from "./reducers/requestResponseReducer.js";
import saveHistoryReducer from "./reducers/saveHistoryReducer.js";
import editCollectionReducer from "./reducers/editCollectionReducer.js";
import listCollectionReducer from "./reducers/listCollectionReducer.js";
import createHistoryReducer from "./reducers/createHistoryReducer.js";
import fetchHistoryReducer from "./reducers/fetchHistoryReducer.js";
import getOneHistoryReducer from "./reducers/getOneHistoryReducer.js";
import saveHistoryReducer from "./reducers/saveHistoryReducer.js";

let reducer = combineReducers({
    listCollection: listCollectionReducer,
    createCollection: createCollectionReducer,
    editCollection: editCollectionReducer,
    importCollections: importCollectionsReducer,
    isUrlLoading: isUrlLoadingReducer,
    requestResponse: requestResponseReducer,
    saveHistory: saveHistoryReducer,
    createHistory: createHistoryReducer,
    fetchHistory: fetchHistoryReducer,
    getOneHistory: getOneHistoryReducer,
    saveHistory: saveHistoryReducer
})


let store = createStore(reducer);

store.subscribe(() => {
    console.log("store dispatch ==>", store.getState());
});

function stateMapper(state) {
    return state;
}

export { store, stateMapper };