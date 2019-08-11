function fetchUrlData(store, action) {
  var httpOptions = {};
  if (action.params.length > 0 && action.params[0].key != "") {
    var paramString = "";
    action.params.map(p => {
      paramString += `${p.key}=${p.value}&`;
    });
  }

  action.url = `${action.url}?${encodeURI(paramString)}`;

  if (action.headers.length > 0 && action.headers[0].key != "") {
    let key = [];
    let value = [];
    var headers = {};

    for (var i = 0; i < action.headers.length; i++) {
      key.push(action.headers[i].key);
      value.push(action.headers[i].value);
    }

    key.forEach((key, i) => {
      headers[key] = value[i];
    });

    httpOptions.headers = headers;
  }

  if (action.method != "GET") {
    httpOptions.method = action.method;
  }

  if (action.jsonBody) {
    httpOptions.body = action.jsonBody;
  }

  console.log("http", httpOptions);

  fetch(action.url, httpOptions)
    .then(function(response) {
      console.log(response);
      return response.json();
    })

    .then(function(data) {
      console.log("RESPONSE FROM API>JS", data);
      store.dispatch({
        type: "FETCH_DATA_SUCCESS",
        response: data
      });
    })
    .catch(function(err) {
      console.log("fetch error", err);
      store.dispatch({
        type: "FETCH_ERROR",
        response: { status: "failed" }
      });
    });
}

export { fetchUrlData };
