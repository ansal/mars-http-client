import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './store/store.js';

import Headers from './components/Headers.js';
import FormData from './components/FormData.js';
import Json from './components/Json.js';
import FileUpload from './components/FileUpload.js';

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
            </Provider>
        )
    }
}

ReactDOM.render(<HOME/>, document.getElementById('root'));