import React from 'react';
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

        )
    }
}

export default App; 