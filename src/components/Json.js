import React from 'react';

import Request from './Request.js';

class Json extends React.Component {
    render() {
        return(
            <div>
                <div className="container-fluid offset-md-3">
                    <Request />
                    <br/>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleFormControlTextarea1"><strong>JSON</strong></label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Json;