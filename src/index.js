import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "./store/store.js";

import ListCollection from './components/listCollections.js';
import EditCollection from './components/editCollection.js';
import CreateCollection from './components/createCollection.js';


import App from './components/App.js';

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
            </Provider>
        )
    }
}

ReactDOM.render(<HOME />, document.getElementById('root'));