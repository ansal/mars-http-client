import React from 'react';
import {Link} from 'react-router-dom';

import CreateCollection from './createCollection.js';

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.modal = React.createRef();
        this.buttonClicked = this.buttonClicked.bind(this);
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

    render() {
        return(
            <div>
                <CreateCollection modal={this.modal} saveChanges={this.saveChanges} />
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
                            
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Menu;