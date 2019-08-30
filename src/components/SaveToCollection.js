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
            data: [{
                method: "",
                url: ""
            }]
        }

        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange(event) {
        console.log(this.props);
        this.setState({
            [event.target.name]: event.target.value,
            data: {
                url: this.props.request.url,
                method: this.props.request.method
            }

        })

    }

    handleSubmit(event) {
        console.log(this.props.request.url);
        event.preventDefault();

        var collection = JSON.parse(localStorage.collection);

        for(var i=0; i<collection.length; i++) {
            console.log(this.props);

            if(collection[i]["name"] === this.state.name) {
                this.props.dispatch({
                    type: "SAVE_TO_COLLECTION",
                    name: collection[i]["name"],
                    id: collection[i]["id"],
                    description: collection[i]["description"],
                    url: this.state.data.url,
                    method: this.state.data.method
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