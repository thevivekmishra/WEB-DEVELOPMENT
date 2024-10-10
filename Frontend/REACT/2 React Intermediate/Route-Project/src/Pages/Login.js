import React from 'react'
import loginimg from '../Assets/login.png'
import Template from '../components/Template'

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
        title="Welcome Back"
        desc1="Build Skills for today,"
        desc2="Education for future proof your career"
        image ={loginimg}
        formType="login"
        setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login