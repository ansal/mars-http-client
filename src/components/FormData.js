import React from 'react';
import {connect} from 'react-redux';

import {stateMapper} from '../store/store.js';
import Request from './Request.js';
import Response from './Response.js';
import Menu from './Menu.js';
import SideNav from './SideNav.js';

class FormDataComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            key: "",
            value: "",
            description: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.inputText = this.inputText.bind(this);
    }

    inputText(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.dispatch({
            type: "FORM_DATA",
            requestData: this.state
        })
    }

    render() {
        return(
            <div>
                <div className="row">
                    
                    <div className="col-md-9">
                        
                        <br/>
                        <p><strong>Form-Data</strong></p>
                        <form onSubmit={this.handleSubmit}>

                        
                        <div className="table-responsive">
                            <table className="table table-hover col-md-6" id="table">
                                <thead className="thead-dark">
                                    <tr>
                                    <th scope="col">Key</th>
                                    <th scope="col">Value</th>
                                    <th scope="col">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="tableRow">
                                        <td><input type="text" name="key" className="inputBox" onChange={this.inputText} /></td>
                                        <td><input type="text" name="value" className="inputBox" onChange={this.inputText} /></td>
                                        <td><input type="text" name="description" className="inputBox" onChange={this.inputText} /></td>
                                    </tr>   
                                </tbody>
                            </table>
                        </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        );
    }
}

let FormData = connect(stateMapper)(FormDataComponent);

export default FormData;