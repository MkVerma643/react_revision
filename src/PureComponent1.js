import React, { PureComponent } from 'react'

export class PureComponent1 extends PureComponent {
    render() {
        console.log("Pure Components getting called");
        return (
            <div>
                <h1>Pure Component Name: {this.props.name}</h1>
            </div>
        )
    }
}

export default PureComponent1
