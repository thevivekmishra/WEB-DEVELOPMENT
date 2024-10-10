import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react'

const App = () => {
  const [number ,setNumber] = useState(0);
  const [count ,setCount ] = useState(0);

  function cubeNum(num) {
    console.log("calculation done");
    return Math.pow(num,3)
  }
  // const result = cubeNum(number);
  const result = useMemo(()=>cubeNum(number),[number])
  return (
    <>
    <input type='number' value={number} onChange={(e)=>setNumber(e.target.value)}/>
    <h2>Cube of number is {result}</h2>

    <h2>Count {count}</h2>
    <button className='btn' onClick={()=>{setCount(count+1)}}>Count++</button>
    </>
  )
}

export default App