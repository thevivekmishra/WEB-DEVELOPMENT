import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
  const cart = useSelector((state) => state.cart) || [];
  console.log(cart); // Debugging: Check the cart contents

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="min-h-screen bg-gray-100 p-4 pt-24">
      {cart.length > 0 ? (
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Cart Items Section (2/3 screen) */}
            <div className="lg:col-span-2 bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Your Cart Items</h2>
              <div className="space-y-4">
                {cart.map((item, index) => (
                  <CartItem key={item.id} item={item} itemIndex={index} />
                ))}
              </div>
            </div>

            {/* Cart Summary Section (1/3 screen) */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Summary</h2>
              <p className="text-lg font-medium">Total Items: {cart.length}</p>
              <p className="text-lg font-medium mb-4">Total Amount: ${totalAmount}</p>
              <Link to="/checkout">
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-200">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-4">No Items in Cart</h2>
          <Link to="/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-200">
              Go To Home
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
