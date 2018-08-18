import React, {Component} from 'react';

import './dataStyle.css';

class Data extends Component{
    constructor(props){
        super(props);

        this.state = {
            label: this.props.label,
            data: this.props.data,
        }
    }

    render(){
        return(
            <div className = "dataBody">
            <h1> {this.props.label} </h1>
            <h2> {this.props.data} </h2>
            </div>
        )
    }
}

export default Data;