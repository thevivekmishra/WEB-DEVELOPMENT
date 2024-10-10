import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  // Access the cart from the Redux store
  const cart = useSelector((state) => state.cart) ;

  return (
    <div className='bg-blue-900 text-white p-4 shadow-md fixed top-0 w-full z-10'>
      <div className='max-w-[1000px] flex justify-between items-center mx-auto'>
        {/* Logo */}
        <p className='text-3xl font-bold'>Ecomzy</p>

        {/* Links */}
        <div className='flex space-x-6'>
          <Link to="/" className='hover:text-blue-300 transition duration-300'>Home</Link>

          {/* Cart Icon with Item Count */}
          <Link to="/cart" className='flex items-center hover:text-blue-300 transition duration-300'>
            <FiShoppingCart className='text-2xl' />
            <div className=' px-2 py-1'>
              {cart.length}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
