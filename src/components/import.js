import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'; 

class ImportComponent extends React.Component{
    render(){
      return(
          <Router>
              <div className="container-fluid text-center">
                  <br/>
                 <h4>Import collection</h4>
              </div>
                <hr/>
              <div className="container text-center">
                  <div className="row">
                        <div className="col-3">
                            <Link type="div" to="/import/file" class="btn btn-secondary">Import File</Link>
                        </div>
                        <div className="col-3">
                            <Link type="button" to="/import/folder" class="btn btn-secondary">Import From Folder</Link>
                        </div>
                        <div className="col-3">
                            <Link type="button" to="/import/url" class="btn btn-secondary">Import From URL</Link>
                        </div>
                        <div className="col-3">
                            <Link type="button" to="/import/text" class="btn btn-secondary">Paste Raw Text</Link>
                        </div>
                    </div>
              </div>

              <Route path="/import/file" exact="true" component = {ImportFile}/>
              <Route path="/import/folder" exact="true" component = {ImportFolder}/>
              <Route path="/import/url"  component = {ImportFromUrl}/>
              <Route path="/import/text" component = {ImportRowText}/>
          </Router>
        )
    }
}

class ImportFile extends React.Component{
    render(){
        return(
          <div className="row justify-content-center">
              <div className="col-4">
                   <div className="form-group row">
                      <br/>
                      <form>
                      <br/>
                      <label className="btn btn-file ">
                      <input type="file" />
                      </label>
                      </form>
                 </div>
                 <button className = "btn btn-secondary"> IMPORT </button>
             </div>
          </div>
        )
    }
}

class ImportFolder extends React.Component{
    render(){
        return(
          <div className="row justify-content-center">
              <div className="col-4">
                   <div className="form-group row">
                      <br/>
                      <form>
                      <br/>
                      <label className="btn btn-file ">
                      <input type="file" multiple="true"/>
                      </label>
                      </form>
                 </div>
                 <button className = "btn btn-secondary"> IMPORT </button>
             </div>
          </div>
        )
    }
}

class ImportFromUrl extends React.Component{
    render(){
        return(
          <div className="row justify-content-center">
              <div className="col-4">
                  <br/>
                  <div className="input-group mb-3">
                      <span className="input-group-text">URL</span>
                      <input type="text" className="form-control"/>
                  </div>  
                    <button className = "btn btn-secondary"> IMPORT </button>
              </div>
         </div>
        )
    }
}
               

class ImportRowText extends React.Component{
    render(){
        return(
         <div className="row justify-content-center">
              <div className="col-4">
                  <br/>
                  <div class="form-group">
                      <textarea class="form-control" rows="10"></textarea>
                 </div>
                 <button className = "btn btn-secondary"> IMPORT </button>
             </div>
         </div>
        )
    }
}

export default ImportComponent; 
