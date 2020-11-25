import { TextField } from '@material-ui/core';
import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
        }
    }
    onSearchValue = (e) => {
        const searchVl = e.target.value;
        this.props.searchVal(searchVl)
    }
    submit = (e) => {
        e.preventDefault();
    }
    render() {
        // console.log(this.state.searchValue)
        return (
            <form onSubmit={this.submit} className="search">
                <TextField type="search" id="input"
                    className="form-control"
                    label="Search"
                    onChange={this.onSearchValue}
                />
            </form>
        )
    }
}
