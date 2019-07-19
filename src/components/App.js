import React from 'react';
<<<<<<< HEAD
import {Link} from "react-router-dom";

class App extends React.Component {
    render() {
        return (

            <div className="container">
                <div className="row">
                <div className="col-md-3">
                <ul className="list-group">
                    <li className="list-group-item active">Menu</li>
                    <li className="list-group-item">
                    <Link to="/"> Home </Link>
                    </li>
                    <li className="list-group-item">
                    <Link to="/list"> Collections List </Link>
                    </li>
                    <li className="list-group-item">
                    <Link to="/create"> Create Collection </Link>
                    </li>
                    <li className="list-group-item">
                    <Link to="/edit"> Edit Collection </Link>
                    </li>
                 </ul>

                </div>
                </div>

            

            </div>

=======
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
>>>>>>> aaff1a7df2860b272fd2446e8484bef572e18282
        )
    }
}

export default App; 