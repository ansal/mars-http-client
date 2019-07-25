import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Request from './Request.js';
import Headers from './Headers.js';
import Params from './Params.js';
import FormData from './FormData.js';
import Json from './Json.js';
import FileUpload from './FileUpload.js';
import Response from './Response.js';
import Menu from './Menu.js';
import HistoryComponent from './history.js';
import ListCollections from './listCollections.js';
import SideNav from './SideNav.js';

class App extends React.Component{
    render(){
        return(

            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Menu />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-3">
                        {/* <HistoryComponent /> */}
                        {/* <ListCollections /> */}
                        <SideNav />
                    </div>

                    <div className="col-md-9">
                        <Request />
                        <br />
                        <Response />
                    </div>
                </div>
            </div>



            // <div className="container-fluid offset-md-3">
            //     <Request />
            //     <br/>
            //     <Route path="/" exact={true} component={Params} /> 
            // </div>
        )
    }
}

export default App; 