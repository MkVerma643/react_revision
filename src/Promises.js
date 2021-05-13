import React from 'react'

function Promises() {
    let p = new Promise((resolve,reject)=>{
        let a = 1 + 2;
        if(a===2){
            resolve('success')
        }else{
            reject('failed')
        }
    })
    p.then((message)=>{
        alert("This is the then: "+ message)
    }).catch((message)=>{
        alert("This is the catch: "+ message)
    })

    const promise1=Promise.resolve("Hello World");
    const promise2=Promise.resolve(10);
    const promise3=new Promise((resolve, reject)=>
    setTimeout(resolve,3000,"Goodbye"));
    const promise4=fetch
    ('https://jsonplaceholder.typicode.com/users/').then(res=>res.json())

    Promise.all([promise1,promise2,promise3,promise4]).then(values=>
        alert(values));

    return (
        <div>
            <h1>Example of Promise Check Alert</h1>
        </div>
    )
}

export default Promises