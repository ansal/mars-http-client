import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

class CreateCollectionComponent extends React.Component {
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
    if(!this.validateform()) { return; }
}

render() {

    
    return (
        <div>
            <h2>Create Collection</h2>
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
                <button style={{marginRight: 16}}type="submit" className="btn btn-secondary"> Cancel </button>
                <button type="submit" className="btn btn-success"> Create </button>

            </form>
        </div>
    )
  }
}
export default CreateCollectionComponent;