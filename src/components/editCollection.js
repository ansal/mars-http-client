import React from 'react';
import { connect } from "react-redux";
import { stateMapper } from "../store/store.js";

class EditCollectionComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            type: "",
            description: "",

            formState: {
                isFormValid: true,
                isNameValid: true,
                isDescriptionValid: true,
            }
        }
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.buttonClicked = this.buttonClicked.bind(this);

        this.modal = React.createRef();   
    }

    buttonClicked() {
        let $ = window.$;
        let modal = this.modal.current;
        $(modal).modal();
    }

    onChange(event) {
        //let name = event.target.name : can use both ways, variable or direct.

        this.setState({
            [event.target.name]: event.target.value,
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

        this.props.dispatch({
            type: "EDIT_COLLECTION",
            formData: this.state
        })
    }

    render() {


        return (

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 offset-md-4">

                        <div ref={this.modal} className="modal" tabIndex="-1" role="dialog">
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

                                            <h2>Edit Collection</h2>
                                            <hr />
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
                                                <button style={{ marginRight: 16 }} type="submit" className="btn btn-secondary"> Cancel </button>
                                                <button type="submit" className="btn btn-success"> Edit </button>

                                            </form>


                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-primary">Save changes</button>
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p ref={this.msg}> Edit Collection</p>
                        <button onClick={this.buttonClicked}> Edit Collection </button>

                    </div>
                </div>
            </div>


        )
    }
}

let EditCollection = connect(stateMapper)(EditCollectionComponent)
export default EditCollection;