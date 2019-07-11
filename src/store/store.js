import { createStore } from "redux";
import { combineReducers } from "redux";

import requestReducer from "./reducers/requestReducer.js";
import paramsReducer from "./reducers/paramsReducer.js";
import headersReducer from "./reducers/headersReducer.js";
import bodyReducer from "./reducers/bodyReducer.js";

let reducer = combineReducers({
    request: requestReducer,
    params: paramsReducer,
    headers: headersReducer,
    body: bodyReducer
})

let store = createStore(reducer);

store.subscribe(function(){
    console.log("store dispatch ==>", store.getState());
});

function stateMapper(state) {
    return state;
}

export { store, stateMapper };