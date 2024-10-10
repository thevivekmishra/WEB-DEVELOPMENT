import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='bg-red-500 '>
            <ul className='flex justify-center items-center gap-8 p-3'>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/support">Support</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Header