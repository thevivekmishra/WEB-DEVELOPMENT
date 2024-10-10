import React from 'react'
import toast from 'react-hot-toast';
import { Link, NavLink } from 'react-router-dom'

const Navbar = (props) => {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn

    return (
        <div className='flex bg-gray-500 text-white justify-around p-3 border-b'>
            <div className='text-2xl justify-center items-center text-center flex'>
                <h1>StudyNotion</h1>
            </div>
            <div>
                <ul className='flex justify-center items-center text-center gap-8 text-lg'>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
            <div className='flex justify-center items-center text-center gap-6'>
                { !isLoggedIn &&
                    <Link to="/signup">
                    <button className='bg-blue-500 p-1 w-20 rounded-md hover:bg-blue-600'>
                        SignUp
                    </button>
                </Link>
                }
                { !isLoggedIn &&
                    <Link to="/login">
                    <button 
                    //  onClick={()=>{
                    //     setIsLoggedIn(true);
                    //     toast.success("Logged In")
                    // }}
                    className='bg-green-500 p-1 w-20 rounded-md hover:bg-green-600'>
                        Login
                    </button>
                </Link>
                }
                { isLoggedIn &&
                    <Link to="/">
                    <button
                    onClick={()=>{
                        setIsLoggedIn(false);
                        toast.success("Logged Out")
                    }}
                    className='bg-red-500 p-1 w-20 rounded-md hover:bg-red-600'>
                        Logout
                    </button>
                </Link>
                }
                { isLoggedIn &&
                    <Link to="/dashboard">
                    <button className='bg-gray-600 p-1 w-24 rounded-md hover:bg-gray-500'>
                        Dashboard
                    </button>
                </Link>
                }
            </div>
        </div>
    )
}

export default Navbar