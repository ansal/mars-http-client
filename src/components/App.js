import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Request from './Request.js';
import Headers from './Headers.js';
import Params from './Params.js';
import FormData from './FormData.js';
import Json from './Json.js';
import FileUpload from './FileUpload.js';
import Response from './Response.js';

class App extends React.Component{
    render(){
        return(
            <div className="container-fluid offset-md-3">
                <Request />
                <br/>
                <Route path="/" exact={true} component={Params} /> 
            </div>
        )
    }
}

export default App; 