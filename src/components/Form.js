import React, { Component } from 'react';
import AddFile from './AddFile';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txttitle : '',
            Author : '',
            content : '',
            category :'',
            date : '',
            exam : [],
            showPopup: false,
        }
    }
    onHandleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name] : value,
            isOnEdit: this.props.onEdit
        })
        }
    onHandleSubmit = (event) => {
        event.preventDefault();
    }
    addFile = () => {
        this.setState({showPopup: true});      
    }
    cancle = () => {
        this.setState({
            showPopup: false
        })
    }
    // onEditF = this.props.onEdit();
    onEditF() {
        this.addFile()
    }
    render() {
        // console.log(JSON.stringify(localStorage.getItem("key")))
        return (
            <div>
                <AddFile addFile = {this.addFile}
                        />
                <div className={this.state.showPopup || this.state.isOnEdit ? 
                    'active container-addfile' : 'container-addfile'}>
                    <div id = "addF">
                        <div className = "tit">
                            <button id = "x" 
                            onClick = {this.cancle}>X
                            </button>
                            <h2>
                                Edit Form
                            </h2>
                        </div>
                        <div className="form-group sub">
                            <form onSubmit = {this.onHandleSubmit}>
                            <div id = "left">
                                <label>Title</label>
                                <input type="text" name = "txttitle"
                                className="form-control" placeholder="Title"
                                onChange = {this.onHandleChange} />
                                <label>Author</label>
                                <input type="text" onChange = {this.onHandleChange}
                                className="form-control" placeholder="Author"
                                name = "Author" />
                                <p>date</p>
                                <input name = "date" type = "date" onChange = {this.onHandleChange} />
                            </div>
                            <div id = "right">
                                <div className="form-group">
                                <select className="form-control" name = "category"
                                        onChange = {this.onHandleChange} required>
                                        <option value = "category" selected disabled style = {{color: "GrayText"}}>
                                        category</option>
                                        <option value = "action and adventure">action and adventure</option>
                                        <option value = "classic">classic</option>
                                        <option value = "comic book">comic book</option>
                                        <option value = "khac">khac</option>
                                    </select>
                                    <div id = "content">
                                        <small> descript</small><br />
                                        <textarea onChange = {this.onHandleChange}  
                                        name ="content" rows = "3" cols = "20"></textarea>
                                    </div> 
                                </div>
                            </div><div className = "save">
                                <button className = "btn" type = "submit" onClick = {() => this.props.givedFile(this.state)}>
                                    SAVE</button> &nbsp;
                                <button className = "btn" type = "reset" style = {{color: "GrayText"}}>RESET</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
