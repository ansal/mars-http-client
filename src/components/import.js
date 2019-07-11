import React from 'react'; 
import {connect} from 'react-redux';
//import { stateMapper } from '../store/store.js';

class ImportComponent extends React.Component{
    
    // constructor(props){
    //     super(props);

    //     this.state={
    //         files : null,
    //     }
    //     this.inputChanged=this.inputChanged.bind(this)
    //     this.importButton=this.importButton.bind(this)
    // }     

    inputChanged(event){
     //let files = this.setState.files
     let files = event.target.files;
     console.log(files)
     let fileName = files[0].name
     let validExt = /\.json/g;
     let file = validExt.exec(fileName);
     if(!file ){
        alert("upload json file")
        console.log("here")
        return
    }else{
        let reader = new FileReader();
        reader.onload = function(event){
            console.log(event.target.result);
        } 
        reader.readAsText(files[0]);
     }
    }

    // importButton(event){
    //     this.props.dispatch({
    //         type : "IMPORT_COLLECTION",
    //         files: this.state.files
    //     })
    // }
    
    render(){
        return(
          <div>  
              <div className="container-fluid text-center">
                  <br/>
                  <h4>Import collection</h4>
              </div>
              <hr/>
            <div className="row justify-content-center">
                <div className="col-4">
                    <div className="form-group row">
                        <br/>
                        <form>
                        <br/>
                        <label className="btn btn-file ">
                        <input name="files" onChange={this.inputChanged} type="file" />
                        </label>
                        </form>
                    </div>
                    <button onClick={this.importButton} className = "btn btn-secondary"> IMPORT </button>
                </div>
            </div>
         </div>
        )
    }
}

//let importFile = connect(stateMapper)(ImportComponent)

export default ImportComponent; 
