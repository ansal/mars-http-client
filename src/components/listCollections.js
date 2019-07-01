import React from 'react';

class ListCollectionsComponent extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert("Are you sure, you want to delete this collection")
}

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="offset-md-4 col-md-4">
              <h3> List Collections </h3>
              <hr />
            
              <ul>
                  <li>
                      Collection1
                  </li>
                  <button onClick={this.handleClick} className="btn btn-danger"> Delete </button>

                  <li>
                      Collection2
                  </li>
                  <button onClick={this.handleClick} className="btn btn-danger"> Delete </button>
                  <li>
                      Collection3
                  </li>
                  <button onClick={this.handleClick} className="btn btn-danger"> Delete </button>

              </ul>
              
            
            
            </div>
          </div>
        </div>

      </div>

    )
  }
}

export default ListCollectionsComponent;