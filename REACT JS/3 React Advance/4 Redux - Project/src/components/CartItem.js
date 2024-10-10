import React from 'react';
import toast from 'react-hot-toast';
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice'; // Adjust the path to your CartSlice

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item removed from cart");
  };

  return (
    <div className='flex flex-col justify-center items-center text-center border-b border-gray-300 py-4 px-2 '>
      <img src={item.image} alt={item.title} className='w-24 h-24 object-contain rounded shadow-lg mr-4' />
      <div className='flex flex-col'>
        <h2 className='text-lg font-semibold'>{item.title}</h2>
        <p className='text-gray-700'>{item.description}</p>
      </div>
      <div className='flex flex-col items-end'>
        <h3 className='text-xl font-bold text-blue-600'>${item.price.toFixed(2)}</h3>
        <button 
          onClick={removeFromCart} 
          className='mt-2 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300 flex items-center'
        >
          <MdDelete className='mr-1' />
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
