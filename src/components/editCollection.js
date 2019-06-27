import React from 'react';

class EditCollectionComponent extends React.Component {
  render() {
    return (


      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">SkyLark</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  New
        </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Request</a>
                  <a class="dropdown-item" href="#">Collection</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#"></a>
                </div>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#">Import <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Open New</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">Settings</a>
              </li>
            </ul>
            {/* <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
          </div>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <div className="offset-md-4 col-md-4">
              <h3> Edit Collection </h3>
              <hr />
              <form action="">
              Name of Collection
              <input type="text" size="32" placeholder="Name of Collection"/>
              <hr/>  
              Description:
              <textarea rows="4" cols="50" placeholder="Give description of request to make things easier">
              
            </textarea>
            <button  style={{marginRight: 16}} type="submit" className="btn btn-secondary"> Cancel </button>
            <button type="submit" className="btn btn-success"> Update </button>
              </form>
            </div>
          </div>
        </div>

      </div>

    )
  }
}

export default EditCollectionComponent;