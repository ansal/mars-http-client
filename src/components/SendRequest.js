import React from 'react';

class Request extends React.Component {
    render() {
        return(
            <div>
                <form>
                    <div className="form-group row container-fluid col-md-10 offset-md-3">
                        <select name="select" className="form-control col-md-1 bg-dark text-white">
                            <option value="get">GET</option>
                            <option value="post">POST</option>
                            <option value="put">PUT</option>
                            <option value="delete">DELETE</option>
                        </select>

                        <input className="col-md-5" type="text" />
                        
                        <div class="btn-group offset-md-1" role="group" aria-label="Button group with nested dropdown">
                            <button type="button" class="btn btn-primary">Send</button>

                            <div class="btn-group" role="group">
                                <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                </button>
                                <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                    <a class="dropdown-item" href="#">Send and download</a>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </form>
            </div>
        );
    }
}

export default Request;