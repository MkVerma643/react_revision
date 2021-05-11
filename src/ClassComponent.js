import React, { Component } from 'react'

class ClassComponent extends Component {
    constructor(props){
        super(props);
        this.state={change:true}
    }
    render() {
        return (
            <div>
                <h4>This is Example of ClassComponent</h4>
                <button onClick={()=>{this.setState({
                change: !this.state.change})}}>click here to change 
                state</button>    

                {this.state.change ? 
                (<h4>Example from GeeksFromGeek</h4>) :
                (<h4>Changeable Content from this.state.change</h4>)}
            </div>
        )
    }
}

export default ClassComponent
