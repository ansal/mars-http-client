import React from 'react';
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { stateMapper } from '../store/store.js';

import Menu from './Menu.js';

class SaveToCollectionComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            data: {}
        }

        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.buttonClicked = this.buttonClicked.bind(this);

        // this.modal = React.createRef();
    }

    // buttonClicked() {
    //     let $ = window.$;
    //     let modal = this.modal.current;
    //     $(modal).modal();
    // }

    onChange(event) {
        //let name = event.target.name : can use both ways, variable or direct.

        this.setState({
            [event.target.name]: event.target.value,
            data: this.props.request
        })

    }

    handleSubmit(event) {
        console.log(this.props.request.url);
        event.preventDefault();

        // this.props.dispatch({
        //     type: "SAVE_TO_COLLECTION",
        //     formData: this.state
        // })

        var collection = JSON.parse(localStorage.collection);

        for(var i=0; i<collection.length; i++) {
            console.log(this.props);

            if(collection[i]["name"] === this.state.name) {
                this.props.dispatch({
                    type: "EDIT_COLLECTION",
                    name: collection[i]["name"], //name: this.state.name
                    id: collection[i]["id"],
                    description: collection[i]["description"],
                    url: this.state.data
                });
            }
        }

    }

    render() {


        return (

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 offset-md-4">

                        <div ref={this.props.modal} className="modal" tabIndex="-1" role="dialog">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 style={{ color: 'blue' }} className="modal-title">Save to Collection</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div>

                                
                                            <form onSubmit={this.handleSubmit}>
                                                <div className="form-group">
                                                    <label htmlFor="" >
                                                        Collection Name:
                                                        <input
                                                            name="name"
                                                            onChange={this.onChange}
                                                            className="form-control"
                                                            type="text"

                                                        />
                                                    </label>
                                                </div>

                                                <button style={{ marginRight: 16 }} type="reset" className="btn btn-secondary" data-dismiss="modal"> Cancel </button>
                                                <button onClick={this.props.saveChanges} type="submit" className="btn btn-success" > save </button>

                                            </form>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}

let SaveToCollection = connect(stateMapper)(SaveToCollectionComponent)

export default SaveToCollection;