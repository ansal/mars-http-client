import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {stateMapper} from '../store/store.js';

class RequestComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "GET",
            url: ""
        }

        this.inputText = this.inputText.bind(this);
        // this.selectRequest = this.selectRequest.bind(this);
        // this.buttonClicked = this.buttonClicked.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    inputText(event) {
        // let type = event.target.name;
        // let updatedState = {};
        // updatedState[type] = event.target.value;
        
        // this.setState(updatedState);
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    // selectRequest(event) {
    //     let type = event.target.name;
    //     let updatedState = {};
    //     updatedState[type] = event.target.value;
        
    //     this.setState(updatedState);
    // }

    handleSubmit(event) {
        event.preventDefault();

        this.props.dispatch({
            type: "REQUEST",
            requestData: this.state
        })
    }


    // buttonClicked() {
    //     this.props.dispatch({
    //         type: "GET",
    //         url: this.state.url
    //     });
    // }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group row col-md-10">
                        <select name="type" onChange={this.inputText} className="form-control col-md-1 bg-dark text-white">
                            <option value="GET">GET</option>
                            <option value="POST">POST</option>
                            <option value="PUT">PUT</option>
                            <option value="DELETE">DELETE</option>
                        </select>

                        <input className="col-md-5" name="url" onChange={this.inputText} type="text" />
                        
                        <div className="btn-group offset-md-1" role="group" aria-label="Button group with nested dropdown">
                            <button type="submit" className="btn btn-success">Send</button>

                            <div className="btn-group" role="group">
                                <button id="btnGroupDrop1" type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                </button>
                                <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                    <a className="dropdown-item" href="#">Send and download</a>
                                    <a className="dropdown-item" href="#">Cancel</a>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </form>
                <br/>
                <nav className="navbar navbar-expand-lg navbar-light bg-light col-md-6">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Params</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/headers" className="nav-link">Headers</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/formData" className="nav-link">Form-Data</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/json" className="nav-link">JSON</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/fileUpload" className="nav-link">File Upload</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

let Request = connect(stateMapper)(RequestComponent);

export default Request;