import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import App from './components/App.js';

class HOME extends React.Component{
    render(){
        return(
           <Router> 
             <div>
                   <Route exact path="/" Component={App}/>
             </div>
            </Router>
        )
    }
}

ReactDOM.render(<HOME/>, document.getElementById('root'));