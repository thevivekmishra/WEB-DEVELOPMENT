import React from 'react'

const Card = (props) => {
    const post = props.post;
    return (
        <div key={post.id} className=' flex flex-col justify-center items-center w-[650px] m-auto p-3 border-2 my-2 h-full'>
            <h1 className='font-bold'>{post.title}</h1>
            <p>
                By <span>{post.author}</span>on<span>{post.category}</span>
            </p>
            <p>Posted on {post.date}</p>
            <p>{post.content}</p>
            <div className='text-blue-700 cursor-pointer'>
                {post.tags.map((tag,index)=>{
                    return <span key={index}>{`#${tag}`}</span>
                })}
            </div>
        </div>
    )
}

export default Card