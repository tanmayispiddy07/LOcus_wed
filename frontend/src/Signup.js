// src/SignUp.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-950">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
          <button type="submit" className="bg-blue-950 text-white py-2 px-4 rounded w-full">
            Sign Up
          </button>
        </form>
        <div className="text-center mt-4">
          <NavLink to="/signin" className="text-blue-950">
            Already have an account? Sign In
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
