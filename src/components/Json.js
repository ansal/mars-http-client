import React from 'react';

import Request from './Request.js';
import Response from './Response.js';
import Menu from './Menu.js';
import SideNav from './SideNav.js';

class Json extends React.Component {
    render() {
        return(
            <div>
                <br />
                <div className="row">
                    <div className="form-group col-md-9">
                        <label htmlFor="exampleFormControlTextarea1"><strong>JSON</strong></label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
                    </div>
                </div>
                    
            </div>
        );
    }
}

export default Json;