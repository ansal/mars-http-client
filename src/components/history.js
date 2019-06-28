import React from 'react';

class HistoryComponents extends React.Component {
  render() {
    return (



      <div className="container">


        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">SkyLark</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    New
        </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Request</a>
                    <a className="dropdown-item" href="#">Collection</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#"></a>
                  </div>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#">Import <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Open New</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">Settings</a>
                </li>
              </ul>

            </div>

          </nav>
        </div>




        <div className="row">
          <div className="col-4">

            <div className="card text-center">
              <div className="card-header">
                <ul className="nav nav-pills card-header-pills">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">History</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Collection</a>
                  </li>

                </ul>


              </div>
              <div className="card-body">

                <button style={{ marginRight: 16 }} type="button" className="btn btn-secondary">new collection</button>


                <button type="button" className="btn btn-secondary">trash</button>



              </div>
              <hr />
              <div>

                <ul>
                  <div className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">today</a>
                  </div>
                </ul>
                <ul>
                  <div>
                    <a href="http://postman/header">http1</a><br />
                    <a href="http://postman/header">http2</a><br />
                    <a href="http://postman/header">http3</a>
                  </div>
                </ul>

                <ul>
                  <div className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">yesterday</a>

                  </div>
                </ul>
                <br />
                <br />
                <a href="#" className="btn btn-primary">Go somewhere</a>
                <br />
                <br />
                <br />

              </div>

            </div>

          </div>


          <div className="col-7">













          </div>



        </div>

      </div>





    );
  }
}


export default HistoryComponents;