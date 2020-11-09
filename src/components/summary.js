import React, { Component } from 'react'

export default class Summary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info4: [],
            searchValue: this.props.searchValue,
            isEdit: true,
        }
    }
    onDelete(index){
        var info4 = this.state.info4;
        info4.splice(index,1);
        this.setState({
            info4:info4
        })
    }
    edit = () => {
        console.log('hi')
    }

    findAuthor = (info4,value) =>{
        var result = null;
            result = info4.map((infor,key) => {
                if (infor.txttitle === '') {
                    return null;
                } ;
                if (infor.txttitle.indexOf(value) !== -1 || value === '') {
                    return (
                        <li key = {key} 
                        className = "list"
                        id = "List"
                        >
                            <span onClick = {this.props.onRender}>
                            {infor.txttitle}
                            </span> 
                            <span>
                            <button id = "x" onClick = {() => this.onDelete(key)}
                            >X
                            </button>
                            <span onClick = { this.props.onEdit(this.state.isEdit)}>
                                <img src = "https://freeiconshop.com/wp-content/uploads/edd/edit-flat.png" 
                            alt = "anh" className = "img"/></span>
                            </span>
                        </li>
                    )
                }
                return null;
            })     
        return result;
        
    }
    componentDidMount(){
        this.setState({
            info4:this.props.info4
        })
    }
    render() { 
        return (
            <div className = "summary">
                <div className = "note">
                    List
                </div>
                <ol>
                    {this.findAuthor(this.state.info4,this.props.searchValue)} 

                </ol>
            </div>
        )
    }
}
