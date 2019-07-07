import React from 'react';

class HistoryComponents extends React.Component {
  render() {
    function Blog(props) {
      const sidebar = (
        <ul>
          {props.posts.map((post) =>
            <li key={post.id}>

            </li>
          )}
        </ul>
      );
      const content = props.posts.map((post) =>
        <div key={post.id}>

          <p>{post.content}</p>
        </div>
      );
      return (
        <div>
          {content}
        </div>
      );
    }

    const posts = [
      { id: 1, content: <a href="#">http://postman/history.js</a> },
      { id: 2, content: <a href="#">http://postman/history.js</a> },
      { id: 3, content: <a href="#">http://postman/history.js</a> },
      { id: 4, content: <a href="#">http://postman/history.js</a> }
    ];

    return (

      < div className="container-fluid">
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

                <button type="button" className="btn btn-secondary">new collection</button>
                <button type="button" className="btn btn-secondary  offset-md-1">trash</button>
              </div>
              <hr />

              <div>


                <div className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">today</a>
                </div>

                <table>
                  <tr>
                    <Blog posts={posts} />,
                </tr>
                </table>
                <div className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">yesterday</a>

                </div>
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
