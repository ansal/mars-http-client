import React from 'react';

class ExportComponent extends React.Component{
    render(){
      return(
          <div>
              <div className="container-fluid text-center">
                  <br/>
                 <h4>Export collection</h4>
              </div>
                <hr/>
              <div className="container">
                 <div className="row">
                      <div className="col-sm-8">
                          <select name="type" onChange={this.onChange} className="form-control col-md-5">
                             <option value="collections">Collection1</option>
                             <option value="collections">Collection1</option>
                             <option value="collections">Collection1</option>
                          </select>
                      </div>
                       <div className="col-sm-4">
                          <button type="button" className="btn btn-secondary">Export</button>
                      </div>
                  </div>
             </div>
          </div>
        )
    }
}

export default ExportComponent; 
