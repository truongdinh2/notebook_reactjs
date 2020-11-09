import React, { Component } from 'react';

class AddFile extends Component {
    addCon = () => {
        this.props.addFile()
    }
    render() { 
        return (
            <button type="button" id = "btnAdd"
                    className="btn btn-primary" 
                    onClick = {this.addCon}>Addfiles
            </button>
          );
    }
}
 
export default AddFile;