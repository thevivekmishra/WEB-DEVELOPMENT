import { useState } from 'react'
import axios from 'axios'
import './App.css'
import { useEffect } from 'react'


function App() {

  const [jokes, setJokes] = useState([])
  
  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error) => {
        console.log({ error })
      })
  }, [])

  return (
    <>
      <h1>LEARNING BACKEND</h1>
      <h2>JOKES:{jokes.length}</h2>
      {
        jokes.map((jokes, index) => (
          <div>
            <h3>key={jokes.id}</h3>
            <h2>{jokes.title}</h2>
            <p>{jokes.content}</p>

          </div>
        ))
    }
    </>
  )
}

export default App


//to run npm run dev
