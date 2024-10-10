import React from 'react'
import signupimg from '../Assets/signup.png'
import Template from '../components/Template'

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
    title="Welcome Back"
    desc1="Build Skills for today,"
    desc2="Education for future proof your career"
    image={signupimg}
    formtype="signup"  // Updated to match prop name in Template
    setIsLoggedIn={setIsLoggedIn}
/>

  )
}

export default Signup