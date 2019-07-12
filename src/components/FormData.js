import React from 'react';
import {connect} from 'react-redux';

import {stateMapper} from '../store/store.js';
import Request from './Request.js';

class FormDataComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            key: "",
            value: "",
            description: ""
        };

        this.buttonClick = this.buttonClick.bind(this);
        this.buttonDelete = this.buttonDelete.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.inputText = this.inputText.bind(this);
        this.isChecked = this.isChecked.bind(this);
    }

    buttonDelete(event) {
        var buttons = document.getElementsByClassName("delete");
        for(var i=0; i<buttons.length; i++) {
            if(buttons[i] === event.target) {
                var row = buttons[i].parentNode.parentNode;
                row.parentNode.removeChild(row);
                this.setState({
                    key: "",
                    value: "",
                    description: ""
                });
                this.props.dispatch({
                    type: "FORM_DATA_REMOVE",
                    requestData: this.state
                })
            }
        }
    }

    buttonClick() {
        var table = document.getElementById("table");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.onclick = this.isChecked;
        checkbox.className = "checked";
        var input1 = document.createElement("input");
        input1.type = "text";
        input1.name = "key";
        input1.onchange = this.inputText;
        input1.className = "inputBox";
        var input2 = document.createElement("input");
        input2.type = "text";
        input2.name = "value";
        input2.onchange = this.inputText;
        input2.className = "inputBox";
        var input3 = document.createElement("input");
        input3.type = "text";
        input3.name = "description";
        input3.onchange = this.inputText;
        input3.className = "inputBox";
        var deleteBtn = document.createElement("button");
        deleteBtn.className = "btn btn-danger delete oi oi-trash";
        deleteBtn.type = "submit";
        deleteBtn.onclick = this.buttonDelete;
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

    isChecked(event) {
        var checked = document.getElementsByClassName("checked");
        for(var i=0; i<checked.length; i++) {
            if(checked[i] === event.target) {
                this.props.dispatch({
                    type: "FORM_DATA",
                    requestData: this.state
                })
            }
        }
    }

    inputText(event) {
        // let updatedState = [];
        // let name = event.target.name;
        // updatedState[name] = event.target.value;
        
        // this.setState(updatedState);
        
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
                <div className="container-fluid offset-md-3">
                    <Request />
                    <br/>
                    <p><strong>Form-Data</strong></p>
                    <form onSubmit={this.handleSubmit}>

                    
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
                                <tr className="tableRow">
                                <td><input type="checkbox" name="check" className="checked" onClick={this.isChecked} /></td>
                                <td><input type="text" name="key" className="inputBox" onChange={this.inputText} /></td>
                                <td><input type="text" name="value" className="inputBox" onChange={this.inputText} /></td>
                                <td><input type="text" name="description" className="inputBox" onChange={this.inputText} /></td>
                                <td><button type="submit" className="btn btn-danger delete oi oi-trash" onClick={this.buttonDelete} /></td>
                                </tr>   
                            </tbody>
                        </table>
                    </div>
                    <button type="submit" className="btn btn-success offset-md-5">Send</button>
                    </form>
                    <button type="submit" onClick={this.buttonClick} className="offset-md-3 btn btn-success oi oi-plus btn-lg" id="button" />
                </div>
            </div>
        );
    }
}

let FormData = connect(stateMapper)(FormDataComponent);

export default FormData;