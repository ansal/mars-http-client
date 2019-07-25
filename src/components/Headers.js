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

        this.state = {
            headers: [
                {
                key: "",
                value: "",
                description: ""
                }
            ]
        };
    }

    render() {

        return(
            <div>

                <div className="row">

                    <div className="col-md-9">
                        
                        <br/>
                        <p><strong>Headers</strong></p>
                        <form onSubmit={this.props.headerHandleSubmit}>

                        
                        <div className="table-responsive">
                            <table className="table table-hover col-md-6" id="headerTable">
                                <thead className="thead-dark">
                                    <tr>
                                    <th scope="col">Key</th>
                                    <th scope="col">Value</th>
                                    <th scope="col">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="tableRow">
                                        <td><input type="text" name="key" className="headerInputBox" onChange={this.props.headerInputOnChange} /></td>
                                        <td><input type="text" name="value" className="headerInputBox" onChange={this.props.headerInputOnChange} /></td>
                                        <td><input type="text" name="description" className="headerInputBox" onChange={this.props.headerInputOnChange} /></td>
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

let Headers = connect(stateMapper)(HeadersComponent);

export default Headers;