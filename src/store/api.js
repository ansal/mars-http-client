function fetchUrlData(store, action){
   let url = action.data.url
   let params = action.data.params

    let httpOptions = {
        methods: action.data.method,
        headers: action.data.headers
    };

    if(action.data.method !== "GET") {
        httpOptions.body = action.data.body;
    
        if(typeof httpOptions.body !== "string") {
            httpOptions.body = JSON.stringify(httpOptions.body);
        }
    }

    if(params){ 
      encodeURI(params)
      url = url.concat(params)
    }

    // TODO: Convert params to url encoded form here
    // encodeURI - use this function
    // you have to check for params in the action.data
    // if present, you have convert action.data.url to urlencoded from

    fetch (url, httpOptions)
        .then(function(response){
            console.log(response)
            return response.json();
        })
        
        .then(function(data){
            console.log("RESPONSE FROM API>JS", data)
            store.dispatch({
                type:"FETCH_DATA_SUCCESS",
                response: data
            })
        })
        .catch(function(err){
            console.log("fetch error", err);
            // dispatch FETCH_DATA_ERROR
            store.dispatch({
                type:"FETCH_ERROR",
                response: {"status": "failed"}
            })
        })
    
}

export {fetchUrlData}
