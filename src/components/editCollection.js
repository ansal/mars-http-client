import React from 'react';
import { connect } from "react-redux";
import { stateMapper } from "../store/store.js";

class EditCollectionComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            description: "",
            data: {},

            formState: {
                isFormValid: true,
                isNameValid: true,
                isDescriptionValid: true,
            }
        }
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            data: this.props.request
        })

    }

    validateform() {
        let newFormState = {
            isFormValid: true,
            isNameValid: true,
            isDescriptionValid: true,
        }

        if (!this.state.name) {
            newFormState.isNameValid = false;
            newFormState.isFormValid = false;
        }

        if (!this.state.description) {
            newFormState.isDescriptionValid = false;
            newFormState.isFormValid = false;
        }
        this.setState({
            formState: newFormState
        });

        return newFormState.isFormValid;

    }

    handleSubmit(event) {
        event.preventDefault();
        if (!this.validateform()) { return; }

        console.log(this.props);

        var collection = JSON.parse(localStorage.collection);

        console.log(this.props.posts.id);

        this.props.dispatch({
            type: "EDIT_COLLECTION",
            name: this.state.name,
            id: this.props.posts.id,
            description: this.state.description,
            url: this.state.data
        });
             
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
                                        <h5 style={{ color: 'blue' }} className="modal-title">Edit Collection</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div>

                                            {
                                                !this.state.formState.isFormValid &&
                                                <div className="alert alert-danger">Please fill in all the fields and try again </div>
                                            }
                                            <form onSubmit={this.handleSubmit}>
                                                <div className="form-group">
                                                    <label htmlFor="" >
                                                        Collection Name:
                                                        <input
                                                            name="name"
                                                            onChange={this.onChange}
                                                            className={`form-control ${!this.state.formState.isFormValid &&
                                                                "is-invalid"}`}
                                                            type="text"

                                                        />
                                                    </label>
                                                </div>


                                                <div className="form-group">
                                                    <label htmlFor="" >
                                                        Description:
                                                        <textarea placeholder="Give description of request to make things easier"
                                                            name="description"
                                                            onChange={this.onChange}
                                                            cols="30"
                                                            rows="5"
                                                            className={`form-control ${!this.state.formState.isDescriptionValid &&
                                                                "is-invalid"}`}
                                                        >
                                                        </textarea>

                                                    </label>
                                                </div>
                                                <button style={{ marginRight: 16 }} type="reset" className="btn btn-secondary" data-dismiss="modal"> Cancel </button>
                                                <button type="submit" className="btn btn-success" onClick={this.props.saveChanges}> Edit </button>

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

let EditCollection = connect(stateMapper)(EditCollectionComponent)
export default EditCollection;