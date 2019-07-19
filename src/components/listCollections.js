import React from 'react';
import { connect } from "react-redux";
import { stateMapper } from '../store/store.js';

class ListCollectionsComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "",
      id: "id"
    }
    this.handleClick = this.handleClick.bind(this);
    this.showCollection = this.showCollection.bind(this);

    this.deleteModal = React.createRef();
    this.showModal = React.createRef();
  }

  showCollection(props) {
    let $ = window.$;
    let showModal = this.showModal.current;
    $(showModal).modal();

    this.props.dispatch({
      type: "FETCH_COLLECTION",
      id: "id"
    })
  }

  handleClick(props) {

    let $ = window.$;
    let deleteModal = this.deleteModal.current;
    $(deleteModal).modal();

    this.props.dispatch({
      type: "DELETE_COLLECTION",
      id: "id"
    })
  }

  componentWillUnmount() {
    this.props.dispatch({
      type: "COLLECTION_DELETED"
    })
  }
  render() {
    let self = this;

    function CollectionList(props) {
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
          <p>{post.content}</p>
          <button style={{ marginRight: 16 }} type="button" class="btn btn-success" onClick={self.showCollection}>Show Collection</button>
          <button type="button" class="btn btn-danger" onClick={self.handleClick}>Delete</button>

        </div>
      );
      return (
        <div>
          {content}
        </div>
      );
    }

    const posts = [
      { id: 1, content: <a href="#">Collection-1</a> },
      { id: 2, content: <a href="#">Collection-2</a> },
      { id: 3, content: <a href="#">Collection-3</a> },
      { id: 4, content: <a href="#">Collection-4</a> }
    ];

    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="offset-md-4 col-md-4">
              <h3> List Collections </h3>
              <hr />
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
                      <button type="button" className="btn btn-primary">Ok</button>
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
                <CollectionList posts={posts} />
             </ul>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

let ListCollections = connect(stateMapper)(ListCollectionsComponent);

export default ListCollections;