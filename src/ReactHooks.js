import React, {useState, useEffect} from 'react'

function ReactHooks() {
    const[count, setCount]=useState(1);
    function decrementCount(){
        setCount(count-1);
    }
    function incrementCount(){
        setCount(count+1);
    }

    const [resourceType, setResourceType]=useState('posts');
    const[items, setItems]=useState([])

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then((response) => response.json())
        .then((json) => setItems(json));
    },[resourceType])

    const[windowWidth, setWindowWidth]=useState(window.innerWidth);
    
    const handleResize=()=>{
        setWindowWidth(window.innerWidth)
    }
    useEffect(()=>{
        window.addEventListener('resize', handleResize)
    },[])

    return (
        <div>
            <p>Window Width is: {windowWidth}</p>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
            <br></br>
            <br></br>

            <button onClick={()=>setResourceType('posts')}>Posts</button>
            <button onClick={()=>setResourceType('users')}>Users</button>
            <button onClick={()=>setResourceType('comments')}>Comments</button>
            <br></br>
            <h1>{resourceType}</h1>
            {items.map(item=>{
                return <pre>{JSON.stringify(item)}</pre>
            })}
        </div>
    )
}

export default ReactHooks
