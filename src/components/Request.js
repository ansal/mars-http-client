import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { stateMapper } from "../store/store.js";

import SaveToCollection from "./SaveToCollection.js";
import Headers from "./Headers.js";
import Params from "./Params.js";
import Json from "./Json.js";
import Response from "./Response.js";

var moment = require("moment");

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
    };

    this.updateRequestType = this.updateRequestType.bind(this);

    // Params related
    this.addParamsRow = this.addParamsRow.bind(this);
    this.removeParamsRow = this.removeParamsRow.bind(this);
    this.updateParams = this.updateParams.bind(this);

    // Headers related
    this.addHeadersRow = this.addHeadersRow.bind(this);
    this.removeHeadersRow = this.removeHeadersRow.bind(this);
    this.updateHeaders = this.updateHeaders.bind(this);

    this.inputText = this.inputText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.saveChanges = this.saveChanges.bind(this);

    this.modal = React.createRef();

    //Collections
    this.buttonSaveCollection = this.buttonSaveCollection.bind(this);

    //Headers
    this.headerHandleSubmit = this.headerHandleSubmit.bind(this);
    this.headerInputOnChange = this.headerInputOnChange.bind(this);

    //Params
    this.paramHandleSubmit = this.paramHandleSubmit.bind(this);
    this.paramInputOnChange = this.paramInputOnChange.bind(this);

    //Json
    this.jsonFunction = this.jsonFunction.bind(this);
  }

  updateRequestType(event) {
    this.setState({ method: event.target.value });
  }

  addParamsRow() {
    let params = this.state.params.slice();
    params.push({
      key: "",
      value: "",
      description: ""
    });
    this.setState({ params: params });
  }

  removeParamsRow(index) {
    let params = this.state.params.slice();
    params.splice(index, 1);
    this.setState({ params: params }, () => {
      console.log(this.state);
    });
  }

  updateParams(index, name, value) {
    let params = this.state.params.slice();
    params[index][name] = value;
    this.setState({ params: params });
  }

  paramInputOnChange(event) {
    var params = { ...this.state.params };
    params.key = event.target.value;
    this.setState({ params: params });
  }

  paramHandleSubmit(event) {
    event.preventDefault();
    this.props.dispatch({
      type: "QUERY_PARAMS",
      requestData: this.state
    });
  }
  addHeadersRow() {
    let headers = this.state.headers.slice();
    headers.push({
      key: "",
      value: "",
      description: ""
    });
    this.setState({ headers: headers });
  }

  removeHeadersRow(index) {
    let headers = this.state.headers.slice();
    headers.splice(index, 1);
    this.setState({ headers: headers }, () => {
      console.log(this.state);
    });
  }

  updateHeaders(index, name, value) {
    let headers = this.state.headers.slice();
    headers[index][name] = value;
    this.setState({ headers: headers });
  }

  headerInputOnChange(event) {
    this.setState({
      headers: {
        [event.target.name]: event.target.value
      }
    });
  }

  headerHandleSubmit(event) {
    event.preventDefault();
    this.props.dispatch({
      type: "HEADERS",
      requestData: this.state.headers
    });
  }

  addFormDataRow() {
    let formData = this.state.formData.slice();
    formData.push({
      key: "",
      value: "",
      description: ""
    });
    this.setState({ formData: formData });
  }

  removeFormDataRow(index) {
    let formData = this.state.formData.slice();
    formData.splice(index, 1);
    this.setState({ formData: formData }, () => {
      console.log(this.state);
    });
  }

  updateFormData(index, name, value) {
    let formData = this.state.formData.slice();
    formData[index][name] = value;
    this.setState({ formData: formData });
  }

  jsonFunction(e) {
    console.log(e.target.value);

    this.setState({
      jsonBody: e.target.value
    });
  }

  buttonSaveCollection(e) {
    e.preventDefault();
    let $ = window.$;
    let modal = this.modal.current;
    $(modal).modal();
  }

  saveChanges() {
    let $ = window.$;
    let modal = this.modal.current;
    $(modal).modal("hide");
  }

  inputText(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.dispatch({
      type: "REQUEST",
      data: this.state
    });

    this.props.dispatch({
      type: "HISTORY",
      method: this.state.method,
      url: this.state.url,
      date: moment().format("MMM Do YYYY")
    });
  }

  render() {
    return (
      <div>
        <SaveToCollection modal={this.modal} saveChanges={this.saveChanges} />
        <form onSubmit={this.handleSubmit}>
          <div className="form-group row col-md-12">
            <select
              name="type"
              onChange={this.updateRequestType}
              className="form-control col-md-1 bg-dark text-white"
            >
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PUT">PUT</option>
              <option value="DELETE">DELETE</option>
            </select>

            <input
              className="col-md-6"
              name="url"
              onChange={this.inputText}
              type="text"
            />

            <div
              className="btn-group offset-md-1"
              role="group"
              aria-label="Button group with nested dropdown"
            >
              <button type="submit" className="btn btn-success">
                Send
              </button>

              <div className="btn-group" role="group">
                <button
                  id="btnGroupDrop1"
                  type="button"
                  className="btn btn-success dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />
                <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                  <a
                    href="#"
                    className="nav-link"
                    onClick={this.buttonSaveCollection}
                  >
                    Save to collection
                  </a>
                  <Link className="dropdown-item" to="#">
                    Cancel
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
        <br /> <br />
        <ul className="nav nav-tabs col-md-9" id="myTab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="home-tab"
              data-toggle="tab"
              href="#home"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Params
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              id="profile-tab"
              data-toggle="tab"
              href="#profile"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Headers
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              id="json-tab"
              data-toggle="tab"
              href="#json"
              role="tab"
              aria-controls="json"
              aria-selected="false"
            >
              JSON
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <Params
              params={this.state.params}
              addParamsRow={this.addParamsRow}
              removeParamsRow={this.removeParamsRow}
              updateParams={this.updateParams}
            />
          </div>

          <div
            className="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <Headers
              headers={this.state.headers}
              addHeadersRow={this.addHeadersRow}
              removeHeadersRow={this.removeHeadersRow}
              updateHeaders={this.updateHeaders}
            />
          </div>

          <div
            className="tab-pane fade"
            id="json"
            role="tabpanel"
            aria-labelledby="json-tab"
          >
            <Json json={this.jsonFunction} />
          </div>
        </div>
        <br />
        <div className="col-md-9">
          <Response />
        </div>
      </div>
    );
  }
}

let Request = connect(stateMapper)(RequestComponent);

export default Request;