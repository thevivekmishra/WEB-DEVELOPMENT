import React from 'react'
import { useNavigate } from 'react-router-dom'

const Support = () => {
    const navigate = useNavigate()

    function clickHandler() {
        navigate("/")
    }
    return (
        <div>
            Support
            <br/>
            <button className='bg-green-400' onClick={clickHandler}>Go to Home</button>
            </div>
    )
}

export default Support