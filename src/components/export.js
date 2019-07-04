import React from 'react';
import Download from '@axetroy/react-download'

class ExportComponent extends React.Component{
    render(){
     
        let data = ('{ "name":"John", "age":30, "city":"New York"}')
        let stringData = JSON.stringify(data)
        let parseData = JSON.parse(stringData)

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
                             <option value="collections">{data}</option>
                          </select>
                      </div>
                       <Download className="col-sm-4" file="test.json" content = {parseData}>
                          <button type="button" className="btn btn-secondary">Export</button>
                      </Download>
                  </div>
             </div>
          </div>
        )
    }
}

export default ExportComponent; 
