import React from 'react';
import ListCollectionsComponent from './listCollectionsComponent.js'
 import HistoryComponent from './history.js'
class App extends React.Component{
    render(){
        return(
           
             <div>
                  <h2>hello</h2>
                  <ListCollectionsComponent />
                  <HistoryComponent />
             </div>
            
        )
    }
}

export default App; 