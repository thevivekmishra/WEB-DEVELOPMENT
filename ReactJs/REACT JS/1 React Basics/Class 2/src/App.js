import React from 'react'
import Products from './components/Products'
import NewProduct from './components/NewProduct'

const App = () => {
  const products = [
    {
      id:1,
      title:"Pen",
      amount:"10",
      date: new Date(2024,9,1),
    },
    {
      id:1,
      title:"Book",
      amount:"100",
      date: new Date(2024,9,1)
    },
    {
      id:1,
      title:"Copy",
      amount:"50",
      date: new Date(2024,9,1)
    },
    {
      id:1,
      title:"PenBox",
      amount:"150",
      date: new Date(2024,9,1)
    },
  ]
  return (
    <div>
      <NewProduct/>
      <Products item={products}/>
    </div>
  )
}

export default App