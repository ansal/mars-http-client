import { createStore } from "redux";
import { combineReducers } from "redux";

import requestReducer from "./reducers/requestReducer.js";
import collectionReducer from "./reducers/collectionReducer.js";
import historyReducer from "./reducers/historyReducer.js";
import responseReducer from "./reducers/responseReducer.js";

let reducer = combineReducers({
    request: requestReducer,
    collections: collectionReducer,
    history: historyReducer,
    response: responseReducer
})

let store = createStore(reducer);

store.subscribe(function(){
    console.log("store dispatch ==>", store.getState());
});

function stateMapper(state) {
    return state;
}

export { store, stateMapper };