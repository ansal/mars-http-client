import React from 'react';
import { connect } from "react-redux";
import { stateMapper } from '../store/store.js';

class ButtonDeleteComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleClick = this.handleClick.bind(this);
        this.deleteModal = React.createRef();
    }

    handleClick() {
        let $ = window.$;
        let deleteModal = this.deleteModal.current;
        $(deleteModal).modal();
    
        this.props.dispatch({
          type: "DELETE_COLLECTION",
        //   newCollection: this.props.postData,
          name:"collection",
          id: this.props.postData.id
        })
    }

    // componentWillMount() {
    //     this.props.dispatch({
    //       type: "COLLECTION_FETCHED",
    //       name: "collection"
    //     })
    //   }

    render() {
        return(
            <div>
                <button type="button" className="btn btn-danger" onClick={this.handleClick}><span class="oi oi-trash"></span></button>
            </div>
        );
    }
}

let ButtonDelete = connect(stateMapper)(ButtonDeleteComponent);

export default ButtonDelete;