import react from 'react';

import React, { Component } from 'react';
class PostComponents extends react.Component {
    render() {
        return (
             
                <div className="d-flex flex-row bd-highlight mb-1">
                   
                <ul>
                    
                    {/* id ={this.props.id} */}

                    {this.props.body}

                    <button  className="oi oi-trash btn btn-danger" onClick={this.props.delete}></button>
              
              </ul>
              </div>
        );
    }
}
export default PostComponents;