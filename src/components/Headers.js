import React from 'react';
import {connect} from 'react-redux';

import {stateMapper} from '../store/store.js';
import Request from './Request.js';
import Response from './Response.js';
import Menu from './Menu.js';
import SideNav from './SideNav.js';

class HeadersComponent extends React.Component {
    constructor(props) {
        super(props);
        this.deleteClicked = this.deleteClicked.bind(this);
        this.inputChanged = this.inputChanged.bind(this);
    }

    deleteClicked(event) {
        this.props.removeHeadersRow(0);
    }

    inputChanged(event) {
        let name = event.target.name,
            index = parseInt(event.target.getAttribute("data-index")),
            value = event.target.value;

        this.props.updateHeaders(index, name, value);
    }

    render() {

        return(
            <div>
                <div>
                    <br />
                    <p><strong>Headers</strong></p>
                    <div className="table-responsive">
                        <table className="table table-hover col-md-9" id="table">
                            <thead className="thead-dark">
                                <tr>
                                <th scope="col">Key</th>
                                <th scope="col">Value</th>
                                <th scope="col">Description</th>
                                <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.headers.map((h, i) => {
                                        return (
                                            <tr key={i} className="headerTableRow" id="headerRowId">
                                                <td><input data-index={i} onChange={this.inputChanged} type="text" name="key" className="inputBox" /></td>
                                                <td><input data-index={i} onChange={this.inputChanged} type="text" name="value" className="inputBox" /></td>
                                                <td><input data-index={i} onChange={this.inputChanged} type="text" name="description" className="inputBox" /></td>
                                                <td>
                                                    <button onClick={this.deleteClicked} className="btn btn-danger btn-sm"><span class="oi oi-trash"></span></button>
                                                </td>
                                            </tr>   
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                        <button onClick={this.props.addHeadersRow} className="btn btn-success btn-sm offset-md-4"><span class="oi oi-plus"></span></button>
                    </div>
                </div>
                </div>  
        );
    }
}

let Headers = connect(stateMapper)(HeadersComponent);

export default Headers;