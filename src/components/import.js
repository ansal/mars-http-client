import React from 'react'; 

class ImportFile extends React.Component{
    
    // constructor(props){
    //     super(props);

    //     this.state={
    //         files : null,
    //     }
    //     this.inputChanged=this.inputChanged.bind(this)
        
    // }     

    inputChanged(event){
     let files = event.target.files;
     let fileName = files[0].name
     let validExt = /\.json/g;
     let file = validExt.exec(fileName);
     if(!file){
        alert("upload json file")
        return
    }else{
        let reader = new FileReader();
        reader.onload = function(event){
            console.log(event.target.result);
        } 
        reader.readAsText(files[0]);
     }
    }
    
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
                    <button className = "btn btn-secondary"> IMPORT </button>
                </div>
            </div>
         </div>
        )
    }
}

export default ImportFile; 
