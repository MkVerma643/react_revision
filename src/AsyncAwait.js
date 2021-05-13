import React from 'react'

function AsyncAwait() {
    const posts=[
        {title: "post one", body:"This is Post One"},
        {title: "post two", body:"This is Post Two"}
    ];

    function getPosts(){
        setTimeout(()=>{
            let output='';
            posts.forEach((post,index)=>{
                output+=`<li>${post.title}</li>`
            });
            document.body.innerHTML=output;
        }, 1000);
    }
    function createPost(post){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                posts.push(post);
                const error=false;
    
                if(!error){
                    resolve();
                }else{
                    reject("Error Something went Wrong with the Code.")
                }
            }, 2000)
        })  
    }
    
    //Async Await Example
    async function init(){
        await createPost({title: "third post", body:"This is the Third Post"});

        getPosts();
    }
    init();

    

    return (
        <div>
           {getPosts} 
        </div>
    )
}

export default AsyncAwait
