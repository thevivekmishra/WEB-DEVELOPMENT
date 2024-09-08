import React, { useState } from 'react'

const App = () => {

  // let count = 0;
  const [count,setCount] = useState(0)

  
  function decreaseHandler(){
    setCount(count-1);
  }
  function increaseHandler(){
    setCount(count+1);
  }

  function resetHandler(){
    setCount(0);
  }
  return (
    <div>
      <div className='wrapper bg-gray-600 min-h-screen'>
        <div className='flex flex-col items-center justify-center h-screen'>

          <div className='bg-gray-200 p-2 rounded-md '>
            <h2>Counter Button</h2>
          </div>

          <div className='flex m-3 gap-10 text-4xl bg-gray-200 p-2 rounded-md justify-center items-center text-center'>
            <button onClick={decreaseHandler}>-</button>
            <h2>{count}</h2>
            <button onClick={increaseHandler}>+</button>
          </div>

          <div className='bg-gray-200 p-2 rounded-md w-32 justify-center items-center flex hover:bg-red-500 cursor-pointer'>
            <button onClick={resetHandler}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App