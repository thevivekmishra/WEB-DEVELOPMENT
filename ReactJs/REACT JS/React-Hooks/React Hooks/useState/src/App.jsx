import React, { useState } from 'react'
import './index.css'

 //Single state variable
const App = () => {
  const [color,setColor] = useState('Red')

  // let color = "Red";
  const changeColor=()=> {
   setColor('Blue')
  }

  return (
   <>
   <h1>My favourite color is {color}</h1>
   <button className='btn' onClick={changeColor}>Change color</button>
   </>
  )
}

export default App


// import React, { useState } from 'react'
// import './index.css'

// //multiple state variable
// const App = () => {

//   // const [brand,setBrand] = useState('brand');
//   // const [color,setColor] = useState('color');
//   // const [model,setModel] = useState('model');
//   // const [year,setYear] = useState('year');

//   const [car,setCar] = useState({
//     brand : "Mahindra",
//     color :"Black",
//     model:"Scorpio S11",
//     year : '2021'
//   });

//   const changeModel= () => {
//     setCar((prev)=>{
//       return {...prev,color:"White"}
//     })
//   }

//   return (
//     <>
//     <h1> {car.brand}</h1>
//     <h2> {car.model} {car.color} top selling car of the year {car.year}</h2>
//     <button className='btn' onClick={changeModel}>Change Model</button>
//     </>
//   )
// }

// export default App


// import React, { useState } from 'react'


// const App = () => {
//   const [count, setCount] = useState(0)

//   const increase = () => {
//     setCount((prev) => prev + 1);
//   }
//   const decrease = () => {
//     setCount((prev) => prev - 1)
//   }

//   return (
//     <>
//       <h1>Count : {count}</h1>
//       <button className='btn' onClick={increase}>Increace</button>
//       <button className='btn' onClick={decrease}>Decreace</button>

//     </>
//   )
// }

// export default App