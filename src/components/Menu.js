import React from 'react';
import {Link} from 'react-router-dom';

import CreateCollection from './createCollection.js';
import EditCollection from './editCollection.js';

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.modal = React.createRef();
        // this.model = React.createRef();
        this.buttonClicked = this.buttonClicked.bind(this);
        // this.buttonClick = this.buttonClick.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
    }

    buttonClicked(e) {
        e.preventDefault();
        let $ = window.$;
        let modal = this.modal.current;
        $(modal).modal();
    }

    saveChanges() {
        let $ = window.$;
        let modal = this.modal.current;
        $(modal).modal("hide");
    }

    // buttonClick(e) {
    //     e.preventDefault();
    //     let $ = window.$;
    //     let modal = this.model.current;
    //     $(modal).modal();
    // }

    render() {
        return(
            <div>
                <CreateCollection modal={this.modal} saveChanges={this.saveChanges} />
                {/* <EditCollection modal={this.model} /> */}
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark col-md-12">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link text-white">Home</Link>
                            </li>

                            <li className="nav-item">
                                <a href="#" className="nav-link text-white" onClick={this.buttonClicked}>Create Collection</a>
                            </li>

                            {/* <li className="nav-item">
                                <a href="#" className="nav-link text-white" onClick={this.buttonClick}>Edit Collection</a>
                            </li> */}

                            <li className="nav-item">
                                <Link to="/" className="nav-link text-white">Import</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link to="/" className="nav-link text-white">Export</Link>
                            </li>
                        </ul>
                    </div>
                </nav>





                {/* <ul className="list-group">
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
                    <li className="list-group-item">
                    <Link to="/history"> History </Link>
                    </li>                        
                </ul> */}
            </div>
        );
    }
}

export default Menu;