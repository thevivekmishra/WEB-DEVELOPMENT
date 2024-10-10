import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/Slices/CartSlice';

const Product = ({ post }) => {
  const { cart = [] } = useSelector((state) => state); // Ensure cart is at least an empty array
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success('Item added to cart');
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error('Item removed from cart');
  };

  const [isExpanded, setIsExpanded] = useState(false);
  const toggleDescription = () => {
    setIsExpanded(!isExpanded); // Toggles the expanded state
  };

  return (
    <div className="border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 m-4">
      <img src={post.image} alt={post.title} className="w-full h-48 object-contain p-4" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{post.title}</h2>
        <p className="text-gray-600 mt-2">
          {isExpanded ? post.description : post.description.substring(0, 100) + '...'}
          {/* Toggle button */}
          <button onClick={toggleDescription} className="text-blue-500 mt-2">
            {isExpanded ? 'Show Less' : 'Read More'}
          </button>
        </p>
        <h3 className="text-xl font-bold text-blue-600 mt-2">${post.price.toFixed(2)}</h3>
        <div className="mt-4">
          {cart.some((p) => p.id === post.id) ? (
            <button
              onClick={removeFromCart}
              className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
            >
              Remove Item
            </button>
          ) : (
            <button
              onClick={addToCart}
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
