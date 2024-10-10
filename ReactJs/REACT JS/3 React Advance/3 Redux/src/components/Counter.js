import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/slices/CounterSlice';

const Counter = () => {

    const count = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch()
    //we cannont directly call the useDispatch function inside a function thats why

  return (
    <div>

        <button
        onClick={()=>dispatch(increment())}
        >Increment</button>
        <br/>
        <br/>
       <div>{count}</div>   {/*//count came form CounterSlice */}
         {/* we have to fetch the value  from CounterSlice ueing useSlector */}

        <br/>
        <button
        onClick={()=>dispatch(decrement())}
        >Decrement</button>


    </div>
  )
}

export default Counter