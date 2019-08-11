import React from "react";

class Json extends React.Component {
  render() {
    return (
      <div>
        <br />
        <div className="row">
          <div className="form-group col-md-9">
            <label htmlFor="exampleFormControlTextarea1">
              <strong>JSON</strong>
            </label>
            <textarea
              onChange={this.props.json}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="10"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Json;