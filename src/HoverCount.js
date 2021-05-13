import React, { Component } from 'react'
import WithCounterHOC from "./WithCounterHOC"


class HoverCount extends Component {
    render() {
        const {count, incrementCount}=this.props;
        return (
            <div>
                <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>
            </div>
        )
    }
}

export default WithCounterHOC(HoverCount)
