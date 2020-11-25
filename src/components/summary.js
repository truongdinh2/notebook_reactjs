import { IconButton, Tooltip } from '@material-ui/core';
import React, { Component } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';


export default class Summary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info4: [],
            // index:'',
            searchValue: this.props.searchValue,
            // isEdit: true,
        }
    }
    onDelete(index) {
        var info4 = this.state.info4;
        info4.splice(index, 1);
        this.setState({
            info4: info4
        })
    }
    onEdit(index) {

        this.props.handleEdit(index)

        // this.props.handleEdit(this.state.isEdit)
        // console.log(index,this.state.isEdit)
    }
    onShowInfo = (key) => {
        this.props.onShowInfo(key)
    }
    findAuthor = (info4, value) => {
        var result = null;
        result = info4.map((infor, key) => {
            if (infor.txttitle === '') {
                return null;
            };
            if (infor.txttitle.indexOf(value) !== -1 || value === '') {
                return (
                    <li key={key}
                        className="list"
                    >
                        <span onClick={() => this.onShowInfo(key)}>
                            {infor.txttitle}
                        </span>
                        <span>
                            <img src="https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/14974663671582988848-512.png" 
                                alt="delete" onClick={() => this.onDelete(key)} className="icon" />
                            <span >
                                <img src="https://freeiconshop.com/wp-content/uploads/edd/edit-flat.png"
                                    alt="edit" className="icon" onClick={() => this.onEdit(key)} />
                            </span>
                        </span>
                    </li>
                )
            }
            return null;
        })
        return result;
    }
    componentDidMount() {
        this.setState({
            info4: this.props.info4
        })
    }
    render() {

        return (
            <div className="summary">
                <div className="note">
                    <h2>List</h2>
                </div>
                {/* <DeleteIcon/>cd */}
                <ol>
                    {this.findAuthor(this.state.info4, this.props.searchValue)}

                </ol>
            </div>
        )
    }
}
