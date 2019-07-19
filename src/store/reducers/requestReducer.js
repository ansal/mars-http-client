import {store} from '../store.js';

import {sendRequest} from '../api/index.js';

function requestReducer(urlData = {}, action) {

    // console.log("Entered request reducer");

    if(action.type === "REQUEST"){
        // console.log("Entered request reducer get");
        // // sendRequest(store, action);
        // console.log(action);
        return action.requestData;
    }

    // if(action.type === "POST") {
    //     // console.log("Entered request reducer post");
    //     // // sendRequest(store, action);
    //     // console.log(action);
    //     return action.formData;
    // }

    // if(action.type === "PUT") {
    //     // console.log("Entered request reducer put");
    //     // // sendRequest(store, action);
    //     // console.log(action);
    //     return action.urlData;
    // }

    // if(action.type === "DELETE") {
    //     // console.log("Entered request reducer delete");
    //     // // sendRequest(store, action);
    //     // console.log(action);
    //     return action.urlData;
    // }

    return urlData;
}

export default requestReducer;