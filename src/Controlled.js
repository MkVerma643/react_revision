import React, { Component } from 'react'

export class Controlled extends Component {
    constructor(){
        super();
        this.state={
            name:""
        }
    }
    InputChange=(event)=>{
         this.setState({
             name:event.target.value
         })
    }
    handleSubmit=()=>{
        console.log(this.name.value);
    }
    render() {
        return (
            <div>
            <input type="text" value={this.state.name}
            onChange={this.InputChange}></input>
                <button onClick={this.handleSubmit} 
                disabled={this.state.name.length ? false:true}>
                click here</button>
                <p>{this.state.name}</p>
            </div>
        )
    }
}

export default Controlled
