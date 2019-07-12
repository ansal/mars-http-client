import { createStore } from "redux";
import { combineReducers } from "redux";

import createCollectionReducer from "./reducers/createCollectionReducer.js";
import importCollectionsReducer from "./reducers/importCollectionsReducer.js";
import isUrlLoadingReducer from "./reducers/isUrlLoadingReducer.js";
import requestResponseReducer from "./reducers/requestResponseReducer.js";
import saveHistoryReducer from "./reducers/saveHistoryReducer.js";
<<<<<<< HEAD
import editCollectionReducer from "./reducers/editCollectionReducer.js";
import listCollectionReducer from "./reducers/listCollectionReducer.js";
import createHistoryReducer from "./reducers/createHistoryReducer.js";
import fetchHistoryReducer from "./reducers/fetchHistoryReducer.js";
import getOneHistoryReducer from "./reducers/getOneHistoryReducer.js";


let reducer = combineReducers({
    listCollection: listCollectionReducer,
=======
import requestReducer from "./reducers/requestReducer.js";
import paramsReducer from "./reducers/paramsReducer.js";
import headersReducer from "./reducers/headersReducer.js";
import bodyReducer from "./reducers/bodyReducer.js";

let reducer = combineReducers({ 
>>>>>>> aaff1a7df2860b272fd2446e8484bef572e18282
    createCollection: createCollectionReducer,
    editCollection: editCollectionReducer,
    importCollections: importCollectionsReducer,
    isUrlLoading: isUrlLoadingReducer,
    requestResponse: requestResponseReducer,
    saveHistory: saveHistoryReducer,
<<<<<<< HEAD
    createHistory: createHistoryReducer,
    fetchHistory: fetchHistoryReducer,
    getOneHistory: getOneHistoryReducer,
    saveHistory: saveHistoryReducer
=======
    request: requestReducer,
    params: paramsReducer,
    headers: headersReducer,
    body: bodyReducer
>>>>>>> aaff1a7df2860b272fd2446e8484bef572e18282
})


let store = createStore(reducer);

store.subscribe(() => {
    console.log("store dispatch ==>", store.getState());
});

function stateMapper(state) {
    return state;
}

export { store, stateMapper };