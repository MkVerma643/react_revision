import React, { Component } from 'react'
import HoverCount from './HoverCount';
import UpdatedComponent from "./WithCounterHOC"

class ClickCounter extends Component {
    
    render() {
        const {count, incrementCount} =this.props
        console.log("This is ClickCounter");
        return (
            <div>
                <h1>Example of Higher Order Component</h1>
                <button onClick={incrementCount}> Clicked {count} Times</button>
                <HoverCount></HoverCount>
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter)
