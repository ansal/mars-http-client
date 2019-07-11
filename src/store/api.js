function fetchUrlData(store, url, action){
  
    let url = `${url}`
    
    // Specify method
    // Specify headers if present
    // Specify params
    // Specify body

    fetch (url, {
        "methods" : action.method,
        "headers" : `${headers}`,
        "params" : `${params}`,
        "body" : JSON.stringify`${body}`
    })


   .then(function(response){
        console.log(response)
        return response.json();
    })
    
    .then(function(data){
        console.log(data)
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
            response:data
        })
    })
    
    }

    export {fetchUrlData}