import React from 'react';

import Request from './Request.js';
import Menu from './Menu.js';
import SideNav from './SideNav.js';

class FileUpload extends React.Component {
    render() {
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Menu />
                    </div>
                </div>

                <br />

                <div className="row">
                    <div className="col-md-3">
                        <SideNav />
                    </div>

                    <div className="col-md-9">
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
            </div>
        );
    }
}

export default FileUpload;