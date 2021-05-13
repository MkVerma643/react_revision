import React, { Component } from 'react'
import axios from 'axios';

export class AxiosList extends Component {
    state ={
        users:[]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users/')
        .then(res=>{
            this.setState({users: res.data});
            console.log(res);
        })
    }
    render() {
        return (
            <div>
            <h1>Example of Axios Get Data</h1>
                <ul>
                    {this.state.users.map(users=><li key={users.id}>{users.name}</li>)}
                </ul>
            </div>
        )
    }
}

export default AxiosList
