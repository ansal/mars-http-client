import {store} from '../store.js';

import {fetchUrlData} from '../api.js';

function requestReducer(urlData = {}, action) {

    if(action.type === "REQUEST"){
        console.log(action.data.url);
        fetchUrlData(store, action.data)
        return action.data;
    }

    if(action.type === "FETCH_DATA_SUCCESS"){
        console.log(action.response);
        return action.response;
    }

    return urlData;
}

export default requestReducer;