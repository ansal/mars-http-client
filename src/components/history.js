import React from 'react';
import PostComponents from './post.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class HistoryComponents extends React.Component {
  state = {
    postArray: [
      { id: 1, body: <a href="#">http://postman/history.js</a> },
      { id: 2, body: <a href="#">http://postman/history.js</a> },
      { id: 3, body: <a href="#">http://postman/history.js</a> }
    ]
  }
  deleteEvent = (index) => {
    const copyPostArray = Object.assign([], this.state.postArray);
    copyPostArray.splice(index, 1);
    this.setState(
      {
        postArray: copyPostArray
      }
    )

  }

  render() {


    return (
      < div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
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
                <button type="button" className=" btn btn-secondary">new collection</button>
                <button type="button" className="btn btn-secondary  offset-md-1"  >trash</button>

              </div>
              <hr />
              <div>

                <div className="nav-item dropdown d-flex justify-content-start">
                  <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">today</a>
                </div>

                <div className="">
                  <ul >
                    {
                      this.state.postArray.map((post, index) => {

                        return (
                          <PostComponents
                            // id ={post.id}

                            body={post.body}
                            delete={this.deleteEvent.bind(this, index)}
                          />
                        );
                      })
                    }
                  </ul>


                  <div className="nav-item dropdown d-flex justify-content-start">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">yesterday</a>
                  </div>

                  <ul>
                    {
                      this.state.postArray.map((post, index) => {

                        return (
                          <PostComponents
                            // id ={post.id}

                            body={post.body}
                            delete={this.deleteEvent.bind(this, index)}
                          />
                        );
                      })
                    }
                  </ul>
                  <br />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HistoryComponents;