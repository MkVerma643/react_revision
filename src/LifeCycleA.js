import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

export class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Mukesh Verma"
        }
        console.log("LifecycleA: getDerivedStateFromProps");
    }
    
    static getDerivedStateFromProps(props,state){
        console.log("LifecycleA: getDerivedStateFromProps");
        return null
    }

    componentDidMount(){
        console.log("LifecycleA: componentDidMount ");
    }

    render() {
        console.log("Render method of lifecycleA")
        return (
            <div>
               Lifecycle A
               <LifeCycleB></LifeCycleB>
            </div>
        )
    }
}

export default LifeCycleA
