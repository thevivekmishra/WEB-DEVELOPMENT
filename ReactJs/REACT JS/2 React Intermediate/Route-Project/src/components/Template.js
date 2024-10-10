import React from 'react';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

const Template = ({ title, desc1, desc2, formtype, image, setIsLoggedIn }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mx-auto max-w-6xl py-10 px-5 md:px-0">
      {/* Left side */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg mb-6">
          <span>{desc1}</span><br />
          <span>{desc2}</span>
        </p>

        {/* Form rendering */}
        {formtype === 'signup' ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn}/>
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}

        <div className="flex items-center justify-center my-4">
          <div className="border-t border-gray-300 w-1/4"></div>
          <p className="text-gray-500 mx-4">OR</p>
          <div className="border-t border-gray-300 w-1/4"></div>
        </div>

        <div className="flex justify-center">
          <button className =" border-2 bg-gray-200 text-black py-2 px-4 rounded-md hover:bg-gray-600 transition duration-200">
            Continue with Google
          </button>
        </div>
      </div>

      {/* Right side */}
      <div className="md:w-1/2 flex justify-center">
        <img src={image} alt="Login/Signup" className="h-96 w-auto" loading="lazy" />
      </div>
    </div>
  );
};

export default Template;
