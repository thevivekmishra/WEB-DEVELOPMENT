import React, { useEffect, useState } from 'react'

const App = () => {

  const [count ,setCount] = useState(0)

  //without dependecy and setTimeout
  // useEffect(()=>{
  //  setCount((prev)=>count+1)
  // })

  //using setTimeout -> component rerender after provided milliseconds
  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setCount((prev)=>count+1)
  //   },2000)
  // })

  //using dependecy array and settime out best way->comp render only one time 
  useEffect(()=>{
    setTimeout(()=>{
      setCount((prev)=>count+1)
    },2000)
  },[])

  return (
   <>
   <h1>Components render {count} times</h1>
   </>
  )
}

export default App