import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {stateMapper} from '../store/store.js';

class ParamsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.deleteClicked = this.deleteClicked.bind(this);
        this.inputChanged = this.inputChanged.bind(this);
    }

    deleteClicked(event) {
        this.props.removeParamsRow(0);
    }

    inputChanged(event) {
        let name = event.target.name,
            index = parseInt(event.target.getAttribute("data-index")),
            value = event.target.value;

        this.props.updateParams(index, name, value);
    }

    render() {
        return(
            <div>
                <div>
                    <br />
                    <p><strong>Query Params</strong></p>
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
                                {
                                    this.props.params.map((p, i) => {
                                        return (
                                            <tr key={i} className="paramTableRow" id="paramRowId">
                                                <td><input data-index={i} onChange={this.inputChanged} type="text" name="key" className="inputBox" /></td>
                                                <td><input data-index={i} onChange={this.inputChanged} type="text" name="value" className="inputBox" /></td>
                                                <td><input data-index={i} onChange={this.inputChanged} type="text" name="description" className="inputBox" /></td>
                                                <td>
                                                    <button onClick={this.deleteClicked} className="btn btn-danger btn-sm">X</button>
                                                </td>
                                            </tr>   
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                        <button onClick={this.props.addParamsRow} className="btn btn-success btn-sm">Add Row</button>
                    </div>
                </div>
            </div>
        );
    }
}

let Params = connect(stateMapper)(ParamsComponent);

export default Params;