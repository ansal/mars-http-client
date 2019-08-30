import React from "react";
import { stateMapper } from "../store/store";
import { connect } from "react-redux";
import "../../node_modules/highlight.js/styles/solarized-light.css";
import Highlight from "react-highlight";

class ResponseComponent extends React.Component {
  
  render() {
    if (this.props.response) {
      console.log(this.props.response.message);
      var jsonString = this.props.response;
      var jsonPretty = JSON.stringify(jsonString, null, 2);
    } else {
      var jsonPretty = "";
    }

    if (!jsonPretty) {
      return (
        <textarea cols="100" rows="10" className="text-muted mt-3" readOnly>
          Response
        </textarea>
      );
    } else {
      return (
        <div>
          <Highlight language="JSON" className="mt-3">
            {jsonPretty}
          </Highlight>
        </div>
      );
    }
  }
}

let Response = connect(stateMapper)(ResponseComponent);

export default Response;