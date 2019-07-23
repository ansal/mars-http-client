import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {stateMapper} from '../store/store.js';

import SaveToCollection from './SaveToCollection.js';
import Headers from './Headers.js';

class RequestComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
            method: "GET",
            url: "",
            params: [
                {
                key: "",
                value: "",
                description: ""
                }
            ],
            headers: [
                {
                key: "",
                value: "",
                description: ""
                }
            ],
            formData: [
                {
                key: "",
                value: "",
                description: ""
                }
            ],
            jsonBody: "",
            send: false
        }

        this.inputText = this.inputText.bind(this);
        // this.selectRequest = this.selectRequest.bind(this);
        // this.buttonClicked = this.buttonClicked.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.saveButton = this.saveButton.bind(this);
        this.buttonClicked = this.buttonClicked.bind(this);
        this.saveChanges = this.saveChanges.bind(this);

        this.modal = React.createRef();

        //Headers
        this.headerButtonClick = this.headerButtonClick.bind(this);
        this.headerButtonDelete = this.headerButtonDelete.bind(this);
        this.headerHandleSubmit = this.headerHandleSubmit.bind(this);
        this.headerInputText = this.headerInputText.bind(this);
        this.headerIsChecked = this.headerIsChecked.bind(this);
    }

    //Headers Functions

    headerButtonDelete(event) {
        var buttons = document.getElementsByClassName("delete");
        for(var i=0; i<buttons.length; i++) {
            if(buttons[i] === event.target) {
                var row = buttons[i].parentNode.parentNode;
                row.parentNode.removeChild(row);
                this.setState({
                    headers:[{
                        key: "",
                        value: "",
                        description: ""
                    }
                    ]
                });
                this.props.dispatch({
                    type: "HEADERS_REMOVE",
                    requestData: this.state.headers
                })
            }
        }
    }

    headerButtonClick() {
        var table = document.getElementById("table");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.onclick = this.isChecked;
        checkbox.className = "checked";
        var input1 = document.createElement("input");
        input1.type = "text";
        input1.name = "key";
        input1.onchange = this.headerInputText;
        input1.className = "inputBox";
        var input2 = document.createElement("input");
        input2.type = "text";
        input2.name = "value";
        input2.onchange = this.headerInputText;
        input2.className = "inputBox";
        var input3 = document.createElement("input");
        input3.type = "text";
        input3.name = "description";
        input3.onchange = this.headerInputText;
        input3.className = "inputBox";
        var deleteBtn = document.createElement("button");
        deleteBtn.className = "btn btn-danger delete oi oi-trash";
        deleteBtn.type = "submit";
        deleteBtn.onclick = this.headerButtonDelete;
        var row = table.insertRow();
        row.className = "tableRow";
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        var cell3 = row.insertCell();
        var cell4 = row.insertCell();
        var cell5 = row.insertCell();
        cell1.appendChild(checkbox);
        cell2.appendChild(input1);
        cell3.appendChild(input2)
        cell4.appendChild(input3);
        cell5.appendChild(deleteBtn);
    }

    headerIsChecked(event) {
        var checked = document.getElementsByClassName("checked");
        for(var i=0; i<checked.length; i++) {
            if(checked[i] === event.target) {
                this.props.dispatch({
                    type: "HEADERS",
                    requestData: this.state.headers
                })
            }
        }
    }

    headerInputText(event) {
        // let updatedState = [];
        // let name = event.target.name;
        // updatedState[name] = event.target.value;
        
        // this.setState(updatedState);
        
        // this.setState({
        //     [event.target.name]: event.target.value,
        // })

        

        const item = {
            key: "",
            value: "",
            description: ""
          };
          this.setState({
            [event.target.name]: event.target.value,
            headers: [...this.state.headers, item]
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

    buttonClicked(e) {
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
            type: "REQUEST_&_HISTORY",
            requestData: this.state
        })

        // this.props.dispatch({
        //     type: "SAVE_URL",
        //     requestData: this.state
        // })
    }

    saveButton(event) {
        event.preventDefault();

        this.props.dispatch({
            type: "SAVE_TO_COLLECTION",
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
                <SaveToCollection modal={this.modal} saveChanges={this.saveChanges} />
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group row col-md-12">
                        <select name="type" onChange={this.inputText} className="form-control col-md-1 bg-dark text-white">
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
                                    <a href="#" className="nav-link" onClick={this.buttonClicked}>Save to collection</a>
                                    <Link className="dropdown-item" to="#">Cancel</Link>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </form>
                <br/>
                <nav className="navbar navbar-expand-lg navbar-light bg-light col-md-8">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li  className="nav-item">
                                <Link to="/" className="nav-link">Params</Link>
                            </li>
                            <li  className="nav-item">
                                <Link to="/headers" className="nav-link">Headers</Link>
                            </li>
                            <li  className="nav-item">
                                <Link to="/formData" className="nav-link">Form-Data</Link>
                            </li>
                            <li  className="nav-item">
                                <Link to="/json" className="nav-link">JSON</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/fileUpload" className="nav-link">File Upload</Link>
                            </li>
                        </ul>
                    </div>
                    {/* <Headers
                    headerButtonDelete={this.headerButtonDelete}
                    headerHandleSubmit={this.headerHandleSubmit}
                    headerInputText={this.headerInputText}
                    headerIsChecked={this.headerIsChecked}
                 /> */}
                </nav>
            </div>
        );
    }
}

let Request = connect(stateMapper)(RequestComponent);

export default Request;