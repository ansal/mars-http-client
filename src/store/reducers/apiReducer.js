import {store} from '../store.js';
import { fetchUrlData } from '../api.js';

function fetchUrlReducer(data={}, action) {
    let url //= "https://www.googleapis.com/youtube/v3/videos?"
    console.log(action)

    if(action.type === "FETCH_URL"){
        fetchUrlData(store, action)
       return data;
    }

    if(action.type === "FETCH_DATA_SUCCESS"){
        return action.response;
    }

    if(action.type === "FETCH_ERROR"){
        return action.response;
    }

    return data;
}

export default fetchUrlReducer;