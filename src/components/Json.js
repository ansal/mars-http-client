import React from 'react';

import Request from './Request.js';
import Response from './Response.js';
import Menu from './Menu.js';
import SideNav from './SideNav.js';

class Json extends React.Component {
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
                            <div className="form-group col-md-9">
                                <label htmlFor="exampleFormControlTextarea1"><strong>JSON</strong></label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                
                <br />
                <div className="offset-md-3 col-md-9">
                    <Response />
                </div>
            </div>
        );
    }
}

export default Json;