import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {stateMapper} from '../store/store.js';

import SaveToCollection from './SaveToCollection.js';
import Headers from './Headers.js';
import Params from './Params.js';
import FormData from './FormData.js';
import Json from './Json.js';

const uuidv4 = require('uuid/v4');

class RequestComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
            method: "GET",
            url: "",
            params: [],
            headers: [],
            formData: [],
            jsonBody: "",
            send: false
        }

        this.updateRequestType = this.updateRequestType.bind(this);



        // Old handlers

        this.inputText = this.inputText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.saveButton = this.saveButton.bind(this);
        this.saveChanges = this.saveChanges.bind(this);

        this.modal = React.createRef();

        //Collections
        this.buttonSaveCollection = this.buttonSaveCollection.bind(this);

        //Headers
        this.headerHandleSubmit = this.headerHandleSubmit.bind(this);
        this.headerInputOnChange = this.headerInputOnChange.bind(this);

        //Params
        this.paramHandleSubmit = this.paramHandleSubmit.bind(this);
        this.paramInputOnChange = this.paramInputOnChange.bind(this);
    }

    updateRequestType(event) {
        this.setState({method: event.target.value});
    }

    //Params Functions

    paramInputOnChange(event) {

        var params = {...this.state.params}
        params.key = event.target.value;
        this.setState({params:params})
    }

    paramHandleSubmit(event) {
        event.preventDefault();
        this.props.dispatch({
            type: "QUERY_PARAMS",
            requestData: this.state
        })
    }

    //Headers Functions

    headerInputOnChange(event) {
        
        this.setState({
        
        headers: {
            [event.target.name]: event.target.value
        }
        });

    }

    headerHandleSubmit(event) {
        event.preventDefault();
        this.props.dispatch({
            type: "HEADERS",
            requestData: this.state.headers
        })
    }

    //Headers functions end

    buttonSaveCollection(e) {
        e.preventDefault();
        let $ = window.$;
        let modal = this.modal.current;
        $(modal).modal();

        this.props.dispatch({
            type: "REQUEST_&_HISTORY",
            requestData: this.state
        })
    }

    saveChanges() {
        let $ = window.$;
        let modal = this.modal.current;
        $(modal).modal("hide");
    }

    inputText(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.dispatch({
            type: "REQUEST_&_HISTORY",
            requestData: this.state
        })
    }

    saveButton(event) {
        event.preventDefault();

        this.props.dispatch({
            type: "SAVE_TO_COLLECTION",
            requestData: this.state
        })
    }

    render() {
        return(
            <div>
                <SaveToCollection modal={this.modal} saveChanges={this.saveChanges} />
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group row col-md-12">
                        <select name="type" onChange={this.updateRequestType} className="form-control col-md-1 bg-dark text-white">
                            <option value="GET">GET</option>
                            <option value="POST">POST</option>
                            <option value="PUT">PUT</option>
                            <option value="DELETE">DELETE</option>
                        </select>

                        <input className="col-md-8" name="url" onChange={this.inputText} type="text" />
                        
                        <div className="btn-group offset-md-1" role="group" aria-label="Button group with nested dropdown">
                            <button type="submit" className="btn btn-success">Send</button>

                            <div className="btn-group" role="group">
                                <button id="btnGroupDrop1" type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                </button>
                                <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                    <a href="#" className="nav-link" onClick={this.buttonSaveCollection}>Save to collection</a>
                                    <Link className="dropdown-item" to="#">Cancel</Link>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </form>
                <br/> <br/>

                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Params</a>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Headers</a>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Form-Data</a>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link" id="json-tab" data-toggle="tab" href="#json" role="tab" aria-controls="json" aria-selected="false">JSON</a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"><Params
                    paramButtonClick={this.paramButtonClick}
                    paramButtonDelete={this.paramButtonDelete}
                    paramHandleSubmit={this.paramHandleSubmit}
                    paramInputOnChange={this.paramInputOnChange}
                    paramIsChecked={this.paramIsChecked}
                    /></div>

                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"><Headers 
                    headerButtonClick={this.headerButtonClick}
                    headerButtonDelete={this.headerButtonDelete}
                    headerHandleSubmit={this.headerHandleSubmit}
                    headerInputOnChange={this.headerInputOnChange}
                    headerIsChecked={this.headerIsChecked} /></div>

                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"><FormData
                    
                    /></div>

                    <div className="tab-pane fade" id="json" role="tabpanel" aria-labelledby="json-tab"><Json /></div>
                </div>
                
            </div>            
            
        );
    }
}

let Request = connect(stateMapper)(RequestComponent);

export default Request;