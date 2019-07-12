function sendRequest(store, action) {
    if(action.type === "GET_REQUEST") {
        store.dispatch({
            type: "GET_REQUEST_FETCHED",
            urlData: "Get request sent"
        });
    } else if(action.type === "POST_REQUEST") {
        store.dispatch({
            type: "POST_REQUEST_FETCHED",
            urlData: "Post request sent"
        });
    } else if(action.type === "PUT_REQUEST") {
        store.dispatch({
            type: "PUT_REQUEST_FETCHED",
            urlData: "Put request sent"
        });
    } else if(action.type === "DELETE_REQUEST") {
        store.dispatch({
            type: "DELETE_REQUEST_FETCHED",
            urlData: "Delete request sent"
        });
    }
}

export {sendRequest};