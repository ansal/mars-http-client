import React from "react";
import { stateMapper } from "../store/store";
import { connect } from "react-redux";
import "../../node_modules/highlight.js/styles/solarized-light.css";
import Highlight from "react-highlight";

class ResponseComponent extends React.Component {
  render() {
    // function output(inp) {
    //   document.body.appendChild(document.createElement("pre")).innerHTML = inp;
    // }

    // function syntaxHighlight(json) {
    //   json = json
    //     .replace(/&/g, "&amp;")
    //     .replace(/</g, "&lt;")
    //     .replace(/>/g, "&gt;");
    //   return json.replace(
    //     /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
    //     function(match) {
    //       var cls = "number";
    //       if (/^"/.test(match)) {
    //         if (/:$/.test(match)) {
    //           cls = "key";
    //         } else {
    //           cls = "string";
    //         }
    //       } else if (/true|false/.test(match)) {
    //         cls = "boolean";
    //       } else if (/null/.test(match)) {
    //         cls = "null";
    //       }
    //       return '<span class="' + cls + '">' + match + "</span>";
    //     }
    //   );
    // }

    // if (this.props.response) {
    //   var data = syntaxHighlight(this.props.response);
    // } else {
    //   var data = "";
    // }

    if (this.props.response) {
      var jsonString = this.props.response;
      var jsonPretty = JSON.stringify(JSON.parse(jsonString), null, 2);
    } else {
      var jsonPretty = "skylark";
    }

    if (!jsonPretty) {
      return (
        <textarea cols="100" rows="10" className="text-muted mt-3" readOnly>
          Response
        </textarea>
      );
    } else {
      return (
        // <div>
        //   <Highlight language="JSON" innerHTML="true">
        //     {`
        //   <pre name="" id="" cols="30" rows="10">
        //     ${data}
        //   </pre>`}
        //   </Highlight>
        // </div>
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