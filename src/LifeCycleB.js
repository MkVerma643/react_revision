import React, { Component } from 'react'

export class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Mukesh Verma"
        }
        console.log("LifeCycleB: getDerivedStateFromProps");
    }
    
    static getDerivedStateFromProps(props,state){
        console.log("LifeCycleB: getDerivedStateFromProps");
        return null
    }

    componentDidMount(){
        console.log("LifeCycleB: componentDidMount ");
    }

    render() {
        console.log("Render method of LifeCycleB")
        return (
            <div>
               Lifecycle B
            </div>
        )
    }
}

export default LifeCycleB
