import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'
import Card from './Card'

const Blog = () => {
  //consume
  const {posts,loading} = useContext(AppContext)

  return (

    <div className='mt-24 mb-24'>
      {
        loading ? 
        (<Spinner/>) : 
        (posts.length === 0 ? 
          (<div>No posts found</div>) : 
          (posts.map((post)=>(<Card post={post}/>))))
      }
    </div>
  )
}

export default Blog