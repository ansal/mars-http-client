import React from 'react';

import Request from './Request.js';

class FileUpload extends React.Component {
    render() {
        return(
            <div>
                <div className="container-fluid offset-md-3">
                    <Request />
                    <br/>
                    <div className="row">
                        <div className="form-group offset-md-2">
                            <label htmlFor="exampleFormControlFile1">Upload file</label>
                            <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FileUpload;