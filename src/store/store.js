import { createStore } from "redux";
import { combineReducers } from "redux";

import createCollectionReducer from "./reducers/createCollectionReducer.js";
import importCollectionsReducer from "./reducers/importCollectionsReducer.js";
import isUrlLoadingReducer from "./reducers/isUrlLoadingReducer.js";
import requestResponseReducer from "./reducers/requestResponseReducer.js";
import saveHistoryReducer from "./reducers/saveHistoryReducer.js";
import requestReducer from "./reducers/requestReducer.js";
import paramsReducer from "./reducers/paramsReducer.js";
import headersReducer from "./reducers/headersReducer.js";
import bodyReducer from "./reducers/bodyReducer.js";

let reducer = combineReducers({
    
    // createCollection: createCollectionReducer,
    // importCollections: importCollectionsReducer,
    // isUrlLoading: isUrlLoadingReducer,
    request: requestReducer,
    params: paramsReducer,
    headers: headersReducer,
    body: bodyReducer
    // requestResponse: requestResponseReducer,
    // saveHistory: saveHistoryReducer
})

let store = createStore(reducer);

store.subscribe(function(){
    console.log("store dispatch ==>", store.getState());
});

function stateMapper(state) {
    return state;
}

export { store, stateMapper };