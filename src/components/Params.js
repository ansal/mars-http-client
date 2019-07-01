import React from 'react';

class Params extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <p><strong>Query Params</strong></p>
                    <table className="table col-md-6">
                        <thead>
                            <tr>
                            <th scope="col"></th>
                            <th scope="col">Key</th>
                            <th scope="col">Value</th>
                            <th scope="col">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td><input type="checkbox" /></td>
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                            </tr>

                            <tr>
                            <td><input type="checkbox" /></td>
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                            </tr>

                            <tr>
                            <td><input type="checkbox" /></td>
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Params;