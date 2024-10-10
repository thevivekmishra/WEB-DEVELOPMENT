import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { LuEye, LuEyeOff } from 'react-icons/lu';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({ setIsLoggedIn }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [showPassword, setShowPassword] = useState(false);

    //after login navigate to dashboard
    const navigate = useNavigate(); 

    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value,
        }));
    }
    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged in successfully");
        navigate("/dashboard");
    }

    return (
        <form onSubmit={submitHandler} className="space-y-4 bg-white p-8 rounded-lg">
            {/* Email */}
            <label className="block">
                <p className="text-gray-700 font-semibold">Email<sup className="text-red-500">*</sup></p>
                <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={changeHandler}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
            </label>

            {/* Password */}
            <label className="relative block">
                <p className="text-gray-700 font-semibold">Password<sup className="text-red-500">*</sup></p>
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    required
                    name="password"
                    value={formData.password}
                    onChange={changeHandler}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
                <span onClick={() => setShowPassword((prev) => !prev)} className="absolute top-10 right-3 cursor-pointer text-gray-500">
                    {showPassword ? <LuEye /> : <LuEyeOff />}
                </span>
            </label>

            {/* Forgot Password */}
            <Link to="#" className="text-blue-500 text-sm hover:underline">
                Forgot Password?
            </Link>

            {/* Sign In Button */}
            <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-200">
                Sign In
            </button>
        </form>
    );
};

export default LoginForm;
