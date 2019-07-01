import React from 'react';

class HistoryComponents extends React.Component {
  render() {
    return (
 <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <div className="card text-center">
              <div className="card-header">
                <ul className="nav nav-pills card-header-pills">
                  <li className="nav-item">
                    <a className="nav-link " href="#">History</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Collection</a>
                  </li>
                </ul>
              </div>
              <div className="card-body">

                <button  type="button" className="btn btn-secondary">new collection</button>
                <button type="button" className="btn btn-secondary  offset-md-1">trash</button>
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
                <a href="#" className="btn btn-success">Go somewhere</a>
                <br />
                <br />
                <br />

              </div>

            </div>

          </div>

          </div>
          
          </div>
    );
  }
}


export default HistoryComponents;
