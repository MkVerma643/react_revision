import React, { Component} from 'react'
import ChildComponent from './ChildComponent';
import PureComponent1 from './PureComponent1';

export class ParentComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"Mukesh Verma"
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: "New Name"
            })
        },2000)
    }
    render() {
        return (
            console.log("Parent Component getting called"),
            <div>
              <h1>Parent Component Name: {this.state.name} </h1> 
              <ChildComponent name={this.state.name}/>
              <PureComponent1 name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComponent
