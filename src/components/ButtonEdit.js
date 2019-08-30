import React from 'react';
import { connect } from "react-redux";
import { stateMapper } from '../store/store.js';

import EditCollection from './editCollection.js';

class ButtonEditComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.buttonClick = this.buttonClick.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
        this.modal = React.createRef();
    }

    buttonClick(e) {
        e.preventDefault();
        let $ = window.$;
        let modal = this.modal.current;
        $(modal).modal();
        console.log(this.props);
    }

    saveChanges() {
        let $ = window.$;
        let modal = this.modal.current;
        $(modal).modal("hide");
    }

    render() {
        return(
            <div>
                <EditCollection modal={this.modal} saveChanges={this.saveChanges} posts={this.props.postData}/>
                <button type="button" className="btn btn-success btn-sm" onClick={this.buttonClick}><span class="oi oi-wrench"></span></button>
            </div>
        );
    }
}


let ButtonEdit = connect(stateMapper)(ButtonEditComponent);

export default ButtonEdit;