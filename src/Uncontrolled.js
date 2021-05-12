import React, { Component } from 'react'

export class Uncontrolled extends Component {
    handleSubmit=()=>{
        console.log(this._name.value);
    }
    render() {
        return (
            <div>
            <input type="text" ref={(input)=>this._name=input}></input>
                <button onClick={this.handleSubmit}>click here</button>
            </div>
        )
    }
}

export default Uncontrolled
