import React from 'react';
import { connect } from "react-redux";
import { stateMapper } from '../store/store.js';

class ButtonDeleteComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.dispatch({
          type: "DELETE_HISTORY",
          name:"fetchHistory",
          id: this.props.postData.id
        })
    }

    render() {
        return(
            <div>
                <button type="button" className="btn btn-danger" onClick={this.handleClick}>Delete</button>
            </div>
        );
    }
}

let ButtonDelete = connect(stateMapper)(ButtonDeleteComponent);

export default ButtonDelete;