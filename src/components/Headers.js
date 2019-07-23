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

    //     // this.headerButtonClick = this.headerButtonClick.bind(this);
    //     // this.headerButtonDelete = this.headerButtonDelete.bind(this);
    //     // this.headerHandleSubmit = this.headerHandleSubmit.bind(this);
    //     // this.headerInputText = this.headerInputText.bind(this);
    //     // this.headerIsChecked = this.headerIsChecked.bind(this);
    //     this.propsCheck = this.propsCheck.bind(this);
    }

    // propsCheck(){console.log(this.props);}

    // headerButtonDelete(event) {
    //     var buttons = document.getElementsByClassName("delete");
    //     for(var i=0; i<buttons.length; i++) {
    //         if(buttons[i] === event.target) {
    //             var row = buttons[i].parentNode.parentNode;
    //             row.parentNode.removeChild(row);
    //             this.setState({
    //                 key: "",
    //                 value: "",
    //                 description: ""
    //             });
    //             this.props.dispatch({
    //                 type: "HEADERS_REMOVE",
    //                 requestData: this.state
    //             })
    //         }
    //     }
    // }

    // headerButtonClick() {
    //     console.log(this.props);
    //     var table = document.getElementById("table");
    //     var checkbox = document.createElement("input");
    //     checkbox.type = "checkbox";
    //     checkbox.onclick = this.props.isChecked;
    //     checkbox.className = "checked";
    //     var input1 = document.createElement("input");
    //     input1.type = "text";
    //     input1.name = "key";
    //     input1.onchange = this.props.headerInputText;
    //     input1.className = "inputBox";
    //     var input2 = document.createElement("input");
    //     input2.type = "text";
    //     input2.name = "value";
    //     input2.onchange = this.props.headerInputText;
    //     input2.className = "inputBox";
    //     var input3 = document.createElement("input");
    //     input3.type = "text";
    //     input3.name = "description";
    //     input3.onchange = this.props.headerInputText;
    //     input3.className = "inputBox";
    //     var deleteBtn = document.createElement("button");
    //     deleteBtn.className = "btn btn-danger delete oi oi-trash";
    //     deleteBtn.type = "submit";
    //     deleteBtn.onclick = this.props.headerButtonDelete;
    //     var row = table.insertRow();
    //     row.className = "tableRow";
    //     var cell1 = row.insertCell();
    //     var cell2 = row.insertCell();
    //     var cell3 = row.insertCell();
    //     var cell4 = row.insertCell();
    //     var cell5 = row.insertCell();
    //     cell1.appendChild(checkbox);
    //     cell2.appendChild(input1);
    //     cell3.appendChild(input2)
    //     cell4.appendChild(input3);
    //     cell5.appendChild(deleteBtn);
    // }

    // headerIsChecked(event) {
    //     var checked = document.getElementsByClassName("checked");
    //     for(var i=0; i<checked.length; i++) {
    //         if(checked[i] === event.target) {
    //             this.props.dispatch({
    //                 type: "HEADERS",
    //                 requestData: this.state
    //             })
    //         }
    //     }
    // }

    // headerInputText(event) {
    //     // let updatedState = [];
    //     // let name = event.target.name;
    //     // updatedState[name] = event.target.value;
        
    //     // this.setState(updatedState);
        
    //     this.setState({
    //         [event.target.name]: event.target.value,
    //     })
    // }

    // headerHandleSubmit(event) {
    //     event.preventDefault();
    //     this.props.dispatch({
    //         type: "HEADERS",
    //         requestData: this.state
    //     })
    // }

    render() {

        return(
            <div>
                
                <div className="row">
                    <div className="col-md-12">
                        <Menu />
                    </div>
                </div>

                <br />

                <div className="row">
                    <div className="col-md-3">
                        <SideNav />
                    </div> 
                    <div className="col-md-9">
                        <Request />
                        <br/>
                        <p><strong>Headers</strong></p>
                        <form onSubmit={this.props.headerHandleSubmit}>

                        
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
                                    <td><input type="checkbox" name="check" className="checked" onClick={this.props.headerIsChecked} /></td>
                                    <td><input type="text" name="key" className="inputBox" onChange={this.props.headerInputText} /></td>
                                    <td><input type="text" name="value" className="inputBox" onChange={this.props.headerInputText} /></td>
                                    <td><input type="text" name="description" className="inputBox" onChange={this.props.headerInputText} /></td>
                                    <td><button type="submit" className="btn btn-danger delete oi oi-trash" onClick={this.props.headerButtonDelete} /></td>
                                    </tr>   
                                </tbody>
                            </table>
                        </div>
                        <button type="submit" className="btn btn-success offset-md-5">Send</button>
                        </form>
                        <button type="submit" onClick={this.props.headerButtonClick} className="offset-md-3 btn btn-success oi oi-plus btn-lg" id="button" />
                        <button type="submit" onClick={this.propsCheck} className="offset-md-3 btn btn-danger oi oi-plus btn-lg" id="button" />

                        <br /> <br />
                        <Response />
                    </div>
                </div>
                
            </div>
        );
    }
}

let Headers = connect(stateMapper)(HeadersComponent);

export default Headers;