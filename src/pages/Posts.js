import React from "react";

export default function Posts(props) {
    return (
<div style={{margin:20}}>
    {
        props.posts.map(post=>{
            return <div className="card mt-4" key={post.id}>
                <h5 className="card-title">post.title</h5>

            </div>
        })

    }
</div>
    )

}