import React, { useState } from 'react'
import Tours from './components/Tours'
import data from './tourdata'

const App = () => {

  const [tours,setTours] = useState(data)

  function refreshHandler(){
     setTours(data);
  }
  
  function removeTour(id){
    const newTour = tours.filter(tour => tour.id !== id);
    setTours(newTour);
  }
  //pass the removeTour inside Tours as props then inside cards <---- <----

  if(tours.length === 0){
    return(
      <div className='h-screen flex flex-col justify-center items-center'>
        <h2 className='text-3xl font-thin'>No Tours Left</h2>
        <button onClick={refreshHandler} className='bg-green-500 text-white p-1 w-20 rounded-md mt-3 hover:bg-green-700'>Refresh</button>
      </div>
    )
  }
  return (
    <div >
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
}

export default App