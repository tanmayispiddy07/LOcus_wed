// src/Settings.js
import React from 'react';
import { useUser } from './UserContext';
import { NavLink } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Ensure you have installed bootstrap-icons

const Settings = () => {
  const { user } = useUser();

  if (false) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-950 to-white p-6">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <p className="mb-4 text-lg text-gray-700">You didn't log in</p>
          <NavLink
            to="/signin"
            className="text-blue-950 hover:underline hover:underline-offset-4 p-2"
          >
            Sign In
          </NavLink>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-white p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">Settings</h1>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="relative w-20 h-20 rounded-full bg-blue-300 flex items-center justify-center">
              <i className="bi bi-person-fill text-4xl text-blue-500"></i>
              <div className="absolute bottom-0 right-0 bg-blue-500 p-1 rounded-full">
                <i className="bi bi-pencil-fill text-white"></i>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-blue-950">Profile</h2>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <label className="block text-sm font-bold text-gray-700">Name</label>
          <div className="flex items-center space-x-2">
            <span className="text-xl text-blue-950">tanmayi</span>
            <i className="bi bi-pencil-fill text-blue-500"></i>
          </div>
        </div>
        <div className="mb-8">
          <label className="block text-sm font-bold text-gray-700">College ID</label>
          <div className="flex items-center space-x-2">
            <span className="text-xl text-blue-950">n210103</span>
            <i className="bi bi-pencil-fill text-blue-500"></i>
          </div>
        </div>
        <div className="mb-8">
          <label className="block text-sm font-bold text-gray-700">Visibility</label>
          <div className="flex items-center space-x-2">
            <span className="text-xl text-blue-950">Private</span>
            <label className="switch">
              <input type="checkbox"  />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700">Privacy</label>
          <div className="flex items-center space-x-2">
            <span className="text-blue-950">Public</span>
            <label className="switch">
              <input type="checkbox"  />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700">Chats Request</label>
          <div className="text-xl flex items-center space-x-2">
            <span className="text-blue-950">Private</span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <div className="flex items-center space-x-2">
            <span className="text-xl text-blue-950">Location</span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
        <div className="mb-8">
          <label className="text-xl block text-sm font-medium text-gray-700">Contact Info</label>
          <div className="flex items-center space-x-2">
            <span className="text-blue-950">Phone</span>
            <i className="bi bi-pencil-fill text-blue-500"></i>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <span className="text-blue-950">E-mail</span>
            <i className="bi bi-pencil-fill text-blue-500"></i>
          </div>
        </div>
        <button className="bg-blue-950 text-white p-3 rounded-lg flex items-center space-x-2 hover:bg-blue-800">
          <i className="bi bi-envelope-fill"></i>
          <span>Contact Us</span>
        </button>
      </div>
    </div>
  );
};

export default Settings;
