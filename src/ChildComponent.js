import React, { Component } from 'react'

export class ChildComponent extends Component {
    render() {
        console.log("Child Components getting called");
        return (
            <div>
                <h1>Child Component Name: {this.props.name}</h1>
            </div>
        )
    }
}

export default ChildComponent
