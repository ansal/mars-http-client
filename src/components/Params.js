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
                                <th scope="col"></th>
                                <th scope="col">Key</th>
                                <th scope="col">Value</th>
                                <th scope="col">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="paramTableRow" id="paramRowId">
                                <td><input type="checkbox" name="check" className="checked" onClick={this.props.paramIsChecked} /></td>
                                <td><input type="text" name="key" className="inputBox" onChange={this.props.paramInputText} /></td>
                                <td><input type="text" name="value" className="inputBox" onChange={this.props.paramInputText} /></td>
                                <td><input type="text" name="description" className="inputBox" onChange={this.props.paramInputText} /></td>
                                <td><button type="submit" className="btn btn-danger delete oi oi-trash" onClick={this.props.paramButtonDelete} /></td>
                                </tr>   
                            </tbody>
                        </table>
                    </div>
                    {/* <button type="submit" className="btn btn-success offset-md-5">Send</button> */}
                    </form>
                    <button type="submit" onClick={this.props.paramButtonClick} className="offset-md-3 btn btn-success oi oi-plus btn-lg" id="button" />
                </div>
            </div>
        );
    }
}

let Params = connect(stateMapper)(ParamsComponent);

export default Params;