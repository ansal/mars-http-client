import React from 'react';
import { connect } from "react-redux";
import { stateMapper } from '../store/store.js';

import HistoryButtonDelete from './HistoryButtonDelete.js';

class HistoryCollectionComponents extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // type: "",
      name: "",
      description: "",
      id: "id"
    }
    // this.handleClick = this.handleClick.bind(this);
    // this.showCollection = this.showCollection.bind(this);

    // this.deleteModal = React.createRef();
    // this.showModal = React.createRef();
  }

  // showCollection(props) {
  //   console.log(props);
  //   let $ = window.$;
  //   let showModal = this.showModal.current;
  //   $(showModal).modal();

  //   this.props.dispatch({
  //     type: "FETCH_COLLECTION",
  //     name: "collection" 
  //   })
  // }

  // componentWillMount() {
  //   this.props.dispatch({
  //     type: "COLLECTION_FETCHED",
  //     name: "collection"
  //   })
  // }

  render() {
    let self = this;

    function HistoryCollectionList(props) {
      // console.log(props);
      const sidebar = (
        <ul>
          {props.posts.map((post) =>
            <li key={post.id}>
            </li>
          )}
        </ul>
      );
      const content = props.posts.map((post) =>
        <div key={props.id}>
          <br />
          <p><strong>{post.type}</strong></p>
          
          
              {post.url}
            
          <HistoryButtonDelete postData={post}/>

        </div>
      );
      return (
        <div>
          {content}
        </div>
      );
    }

    let posts;

    if(localStorage.fetchHistory) {
      posts = JSON.parse(localStorage.fetchHistory)
    } else {
      posts = [];
    }

    return (
      
          <div>
            <div className="card">
              {/* <h3> List Collections </h3>
              <hr /> */}
              <div ref={this.deleteModal} className="modal" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Delete</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <p>Are you sure, you want to delete this Collection!!</p>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-primary" onClick={this.buttonDelete}>Ok</button>
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>

              <div ref={this.showModal} className="modal" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Collection</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <p> Collection!!</p>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-primary">Ok</button>
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>

              <ul>
                <HistoryCollectionList posts={posts} />
             </ul>
            </div>
          </div>

    )
  }
}

let HistoryComponents = connect(stateMapper)(HistoryCollectionComponents);

export default HistoryComponents;