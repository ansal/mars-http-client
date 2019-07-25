import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {stateMapper} from '../store/store.js';

class ParamsComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            params: [
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
                <div>
                    <br />
                    <p><strong>Query Params</strong></p>
                    <form onSubmit={this.props.paramHandleSubmit}>

                    
                    <div className="table-responsive">
                        <table className="table table-hover col-md-6" id="table">
                            <thead className="thead-dark">
                                <tr>
                                <th scope="col">Key</th>
                                <th scope="col">Value</th>
                                <th scope="col">Description</th>
                                <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="paramTableRow" id="paramRowId">
                                    <td><input type="text" name="key" className="inputBox" onChange={this.props.paramInputOnChange} /></td>
                                    <td><input type="text" name="value" className="inputBox" onChange={this.props.paramInputOnChange} /></td>
                                    <td><input type="text" name="description" className="inputBox" onChange={this.props.paramInputOnChange} /></td>
                                    <td>
                                        <button className="btn btn-danger btn-sm">X</button>
                                    </td>
                                </tr>   
                            </tbody>
                        </table>
                        <button className="btn btn-success btn-sm">Add Row</button>
                    </div>
                    </form>
                </div>
            </div>
        );
    }
}

let Params = connect(stateMapper)(ParamsComponent);

export default Params;