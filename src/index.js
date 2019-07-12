import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "./store/store.js";

import ListCollection from './components/listCollections.js';
import EditCollection from './components/editCollection.js';
import CreateCollection from './components/createCollection.js';

=======
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './store/store.js';
>>>>>>> aaff1a7df2860b272fd2446e8484bef572e18282

import Headers from './components/Headers.js';
import FormData from './components/FormData.js';
import Json from './components/Json.js';
import FileUpload from './components/FileUpload.js';

<<<<<<< HEAD
class HOME extends React.Component {
    render() {
        return (

            <Provider store={store}>
                <Router>
                    <div>
                        <Route path="/" exact={true} component={App} />
                        <Route path="/list" component={ListCollection} />
                        <Route path="/edit" component={EditCollection} />
                        <Route path="/create" component={CreateCollection} />
                    </div>
                </Router>
=======
import App from './components/App.js';

class HOME extends React.Component{
    render(){
        return(
            <Provider store={store}>
           <Router> 
             <div>
                <Route path="/" exact={true} component={App}/>
                <Route path="/headers" component={Headers} />
                <Route path="/formData" component={FormData} />
                <Route path="/json" component={Json} /> 
                <Route path="/fileUpload" component={FileUpload} />
             </div>
            </Router>
>>>>>>> aaff1a7df2860b272fd2446e8484bef572e18282
            </Provider>
        )
    }
}

ReactDOM.render(<HOME />, document.getElementById('root'));