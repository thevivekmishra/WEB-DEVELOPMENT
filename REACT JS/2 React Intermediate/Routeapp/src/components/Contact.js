import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate = useNavigate();
    function backHandler(){
        navigate(-1)
    }
  return (
    <div>
        Contact
 <br/>
 <button onClick={backHandler}>Go Back</button>
    </div>
    
  )
}

export default Contact