import React from 'react';

import Request from './Request.js';
import Menu from './Menu.js';
import SideNav from './SideNav.js';

class App extends React.Component{
    render(){
        return(

            <div>
                <div className="row">
                    <div>
                        <img src="logo5.png" height="50" width="50"></img>
                    </div>
                    <div className="col-md-10">
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
                    </div>
                </div>
            </div>
        )
    }
}

export default App; 