import React, { useContext, useEffect } from 'react'
import Header from './components/Hearder'
import Blog from './components/Blog'
import Pagination from './components/Pagination'
import { AppContext } from './context/AppContext'

const App = () => {
  //calling api
  const {fetchBlogPost} = useContext(AppContext)
  useEffect(()=>{
    fetchBlogPost();
  },[])
  
  return (
    <div>
      <Header/>
      <Blog/>
      <Pagination/>
    </div>
  )
}

export default App