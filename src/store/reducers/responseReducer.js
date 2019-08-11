function responseReducer(data = {}, action) {

    if(action.type === "FETCH_DATA_SUCCESS"){
        console.log(action.response);
        return action.response;
    }

    return data;
}

export default responseReducer;