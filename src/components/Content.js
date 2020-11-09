import React, { Component } from 'react'

export default class Content extends Component {    
    render() {
        var onRender = this.props.onRender;
        var details = this.props.info4;
        var detail = details.map((detail,index) => {
            return (
                <div>
                    <div className = {onRender ? 'block main' : 'cancle main'}
                    key = {index}>
                        <span>Work - <span className = "file">{detail.txttitle}
                        </span> ,Author-  <span className = "file">{detail.Author}</span></span>
                        <p>Category: <span className = "file">{detail.category}</span> Date :  
                        <span className = "file">{detail.date}</span> </p>
                        <p>Content: </p><p className = "file">{detail.content}</p>
                    </div>
                </div>
            )
        })
        return (
            <div>
                {detail}
            </div>
        )
    }
}
