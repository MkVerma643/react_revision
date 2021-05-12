import React from 'react'

function User(props) {
    const data="Alert from Child Component user"

    return (
        <div>
            <h2>User Component Passing Data</h2>
            <span>{props.name}</span>
            <br></br>
            <button onClick={()=>props.alert(data)}>Click ME!</button>
        </div>
    )
}

export default User